const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');

const port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser('secret'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'client/build/index.html')));

app.get('/hello', (req, res) => res.send({ express: 'Hello From the Express Server' }));

process.on('unhandledRejection', (r, p) => console.log("Possibly Unhandled Rejection at: Promise ", p, " reason: ", r));

app.listen(port, () => console.log('Server listening at port %d', port));
