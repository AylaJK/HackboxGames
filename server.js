const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser('secret'));

app.use('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));

process.on('unhandledRejection', (r, p) => console.log("Possibly Unhandled Rejection at: Promise ", p, " reason: ", r));

app.listen(port, () => console.log('Server listening at port %d', port));
