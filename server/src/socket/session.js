/*
 * Based on express-socket.io-session package by oskosk
 * https://github.com/oskosk/express-socket.io-session
 */

const crc = require("crc");

module.exports = function (cookieParserMiddleware, expressSessionMiddleware, passport) {
  return function(socket, next) {
    let req = socket.handshake;
    let res = { end: function() {} };

    let saveUninitializedSession = false;

    // originalHash, savedHash, originalId, cookieId
    // are variables present for replicating express-session autoSaving behavioiur
    let originalHash, savedHash;
    let originalId;
    let cookieId;
    let _onevent = socket.onevent;

    //  Override socket.on
    socket.onevent = function() {
      let _args = arguments;
      originalHash = savedHash = hash(req.session);
      cookieId = req.sessionID;
      originalId = req.sessionID;
      _onevent.apply(socket, _args);
      if (shouldSave(req)) req.session.save();
    };

    /*
     * The Express Middleware Stack
     * Calls cookieParser, express session, passport init, passport session
     */
    cookieParserMiddleware(req, res, function(err) {
      if (err) return next(err);
      expressSessionMiddleware(req, res, function(err) {
        if (err) return next(err);
        passport.initialize()(req, res, function(err) {
          if (err) return next(err);
          passport.session()(req, res, function(err) {
            if (err) return next(err);
            next();
          });
        });
      });
    });

    /*
     * These functions hash, isModified, isSaved, shouldSave
     * and shouldDestroy are canibalized from express-session
     * in order to this module being able to comply with the autoSave options.
     */

    function hash(sess) {
      return crc.crc32(
        JSON.stringify(sess, function(key, val) {
          if (key !== 'cookie') {
            return val;
          }
        })
      );
    }

    // check if session has been modified
    function isModified(sess) {
      return originalId !== sess.id || originalHash !== hash(sess);
    }

    // check if session has been saved
    function isSaved(sess) {
      return originalId === sess.id && savedHash === hash(sess);
    }

    // determine if session should be saved to store
    function shouldSave(req) {
      // cannot set cookie without a session ID
      if (typeof req.sessionID !== 'string') {
        return false;
      }

      return !saveUninitializedSession && cookieId !== req.sessionID
        ? isModified(req.session)
        : !isSaved(req.session);
    }
  };
};
