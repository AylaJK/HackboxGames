import express = require("express");
const app = express();

import bodyParser = require("body-parser");
import cookieParser = require("cookie-parser");
import path = require ("path");

import http = require("http");
const server = http.createServer(app);

const io = require("socket.io")(server);

const port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, "../../client/build")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser("secret"));

app.get("/", (req: any, res: any) => res.sendFile(path.join(__dirname, "../../client/build/index.html")));

app.get("/hello", (req: any, res: any) => res.send({ express: "Hello From the Server REST API" }));

io.on("connection", function(socket: any) {
  socket.on("hello", () => socket.emit("hello", { socketIo: "Hello From the Server Websocket API" }));
});

process.on("unhandledRejection", (r, p) => console.log("Possibly Unhandled Rejection at: Promise ", p, " reason: ", r));

server.listen(port, () => console.log("Server listening at port %d", port));
