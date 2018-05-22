import socketio from "socket.io";

const events = function (io: socketio.Server): void {
  io.on("connection", function(socket) {
    socket.on("hello", () => socket.emit("hello", { socketIo: "Hello From the Server Websocket API" }));
  });
};

export default events;
