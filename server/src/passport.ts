import passport from "passport";
import passportLocal from "passport-local";
import passportDiscord from "passport-discord";
import passportFacebook from "passport-facebook";
/*import passportRememberMe from "passport-remember-me-extended";*/

/*let logger = require('winston').loggers.get('auth');*/
import { Auth, User, IUser } from "./db";

const serializeUser = function(user: IUser, done: (err: any, id?: string) => void) {
  done(null, user._id);
};

const deserializeUser = function(id: string, done: (err: any, user?: IUser) => void) {
  User.findById(id).exec()
    .then(user => done(null, user))
    .catch(err => done(err));
};

const local = new passportLocal.Strategy(function(username, password, done) {
  process.nextTick(async function() {
    try {
      const auth = await Auth.findOne({ "local.username": username.toLowerCase() }).exec();
      if (!auth) {
        /*logger.warn('Login ' + username + ' Failed: User not found');*/
        return done(null, false, { message: "Incorrect username or password." });
      }
      const isMatch = await auth.local.validatePassword(password);
      if (!isMatch) {
        /*logger.warn('Login ' + username + ' Failed: Incorrect Password');*/
        return done(null, false, { message: "Incorrect username or password." });
      }
      return deserializeUser(auth.user_id, done);
    } catch (err) {
      done(err);
    }
  });
});

const localsignup = new passportLocal.Strategy({ passReqToCallback: true }, function(req, username, password, done) {
  process.nextTick(async function() {
    /*logger.verbose('Signup User ' + username);*/
    /*logger.silly('user: ' + username + ' pwd: ' + password);*/
    try {
      const existing = await Auth.findOne({ "local.username": username.toLowerCase() }).exec();
      if (existing) {
        /*logger.warn('Signup ' + username + ' Failed: Username already exists');*/
        return done(null, false, { message: "Username already exists." });
      }

      /*logger.debug('Signup ' + username + ': Creating New User');*/

      const user = await (new User({ "name": username })).save();
      const auth = new Auth({ "user_id": user._id, "local.username": username.toLowerCase(), "local.email": req.body.email});
      await auth.local.updatePassword(password);
      await auth.save();
      done(null, user);
    } catch (err) {
      done(err);
    }
  });
});

/*let rememberme = new passportRememberMe.Strategy(
  function(token: string, done: (err: any, user?: any) => void) {
    Auth.consumeRememberMeToken(token, function(err: any, user: any) {
      if (err) return done(err);
      if (!user) return done(null, false);
      return done(null, user);
    });
  },
  function(user: any, done: (err: any, token?: string) => void) {
    User.createRememberMeToken(user, function(err: any, token: string) {
      if (err) return done(err);
      return done(null, token);
    });
  }
);*/

const discord = new passportDiscord.Strategy(
  {
    clientID: process.env.DISCORD_CLIENTID,
    clientSecret: process.env.DISCORD_CLIENTSECRET,
    callbackURL: "/auth/discord/callback",
  },
  function(accessToken, refreshToken, profile, done) {
    process.nextTick(async function() {
      try {
        /*logger.verbose('Discord Auth ' + profile.displayName);*/
        const existing = await Auth.findOne({ "discord.id": profile.id }).exec();
        if (existing) {
          /*logger.debug('Discord Auth ' + profile.displayName + ': User Found');*/
          return deserializeUser(existing.user_id, done);
        }
        /*logger.debug('Discord Auth ' + profile.displayName + ': Creating New User');*/

        const user = await (new User({ "name": profile.displayName })).save();
        const auth = new Auth({ "user_id": user._id, "discord.id": profile.id, "discord.name": profile.displayName});
        await auth.discord.storeToken(accessToken);
        await auth.save();
        done(null, user);
      } catch (err) {
        done(err);
      }
    });
  }
);

const facebook = new passportFacebook.Strategy(
  {
    clientID: process.env.FACEBOOK_CLIENTID,
    clientSecret: process.env.FACEBOOK_CLIENTSECRET,
    callbackURL: "/auth/facebook/callback",
  },
  function(accessToken, refreshToken, profile, done) {
    process.nextTick(async function() {
      try {
      /*logger.verbose('Facebook Auth ' + profile.displayName);*/
        const existing = await Auth.findOne({ "facebook.id": profile.id }).exec();
        if (existing) {
          /*logger.debug('Facebook Auth ' + profile.displayName + ': User Found');*/
          return deserializeUser(existing.user_id, done);
        }
        /*logger.debug('Facebook Auth ' + profile.displayName + ': Creating New User');*/

        const user = await (new User({ "name": profile.displayName })).save();
        const auth = new Auth({ "user_id": user._id, "facebook.id": profile.id, "facebook.name": profile.displayName});
        await auth.facebook.storeToken(accessToken);
        await auth.save();
        done(null, user);
      } catch (err) {
        done(err);
      }
    });
  }
);


const init = function(): passport.PassportStatic {
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);

  passport.use(local);
  passport.use("local-signup", localsignup);

  /*passport.use(rememberme);*/

  passport.use(discord);

  passport.use(facebook);

  return passport;
};

export default init();
