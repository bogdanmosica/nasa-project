const cors = require('cors');
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const path = require('path');

const api = require('./routes/api');

const app = express();

app.get('/secret', (req, res) => {
    return res.send('Personals secret value 41');
});

app.use(
    cors({
        origin: 'http://localhost:3000'
    })
);
app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/v1', api);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
});

module.exports = app;