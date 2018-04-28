import io from "socket.io-client";
const socket = io();

function subscribeToTimer(cb) {
    socket.on('timer', timestamp => cb(null, timestamp));
    socket.emit('subscribeToTimer', 1000);
}

export { subscribeToTimer };
