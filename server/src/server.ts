import express from "express";
const app = express();

import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser("secret"));

app.get("/", (req: express.Request, res: express.Response) => res.sendFile(path.resolve(clientDirectory, "build/index.html")));
app.use("/", router);

ioevents(io);

process.on("unhandledRejection", (r, p) => console.log("Possibly Unhandled Rejection at: Promise ", p, " reason: ", r));

server.listen(app.get("port"), () => console.log("Server is listening at port %d in %s mode", app.get("port"), app.get("env")));
