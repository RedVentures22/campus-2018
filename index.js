const Database = require('./database');
const express = require('express');
const morgan = require('morgan');
const { checkAuth } = require('./auth');

const app = express();
const db = new Database();

app.use(morgan('tiny'));
app.use(express.json());

app.get('/health', (req, res) => {
    res.status(200).send('alive and well');
});

app.post('/v1/users', checkAuth, (req, res) => {
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    };
    db.insertUser(user);
    res.status(201).json(user);
});

app.get('/v1/users', checkAuth, (req, res) => {
    const users = db.getUsers();
    res.status(200).json(users);
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});