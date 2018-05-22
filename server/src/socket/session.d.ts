/*
 * Based on express-socket.io-session package by oskosk
 * https://github.com/oskosk/express-socket.io-session
 */

import express from "express";
import socketio from "socket.io";
import passport from "passport";
import sharedsession from "./session";

declare function sharedsession(
  cookieParserMiddleware: express.RequestHandler,
  expressSessionMiddleware: express.RequestHandler,
  passport: passport.PassportStatic) => (socket: socketio.Socket, next: (err?: any) => void) => void;

export = sharedsession;
