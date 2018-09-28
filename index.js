const express = require('express');
const morgan = require('morgan');

const app = express();
const Database = require('./database');
const db = new Database();

app.use(morgan('tiny'));

app.get('/health', (req, res) => {
    res.status(200).send('alive and well');
});

app.get('/greet/:name', (req, res) => {
    const user = {
        firstName: req.params.name,
    };
    db.insertUser(user);
    res.status(200).send(`Hello, ${req.params.name}!`);
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});