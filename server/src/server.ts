import express from "express";
const app = express();

import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "./passport";

import path from "path";
import fs from "fs";
const serverDirectory = fs.realpathSync(process.cwd());
const clientDirectory = path.resolve(serverDirectory, "../client/");

import http from "http";
const server = http.createServer(app);

import router from "./router";

import socketio from "socket.io";
const io = socketio(server);

import ioevents from "./socket";

app.set("port",  process.env.PORT || 8000);

app.use(express.static(path.resolve(clientDirectory, "build")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
secret: process.env.SESSION_SECRET,
  resave: false, // don't automatically write to session store
  saveUninitialized: false, // don't save new sessions
  cookie: {
    path: "/", // base URL path that will trigger client to send cookie
    httpOnly: true, // hide cookie from client-side JavaScript
    secure: false, // send cookie on non-secure connections
    maxAge: undefined, // non-persistent (persistent login handeled by passport)
  },
}));

app.use(passport.initialize());
app.use(passport.session());
/*app.use(passport.authenticate('remember-me'));*/

app.get("/", (req: express.Request, res: express.Response) => res.sendFile(path.resolve(clientDirectory, "build/index.html")));
app.use("/", router);

ioevents(io);

process.on("unhandledRejection", (r, p) => console.log("Possibly Unhandled Rejection at: Promise ", p, " reason: ", r));

server.listen(app.get("port"), () => console.log("Server is listening at port %d in %s mode", app.get("port"), app.get("env")));
