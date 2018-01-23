const express = require('express');
const bodyParser = require('body-parser');
const knex = require('./api/database/db.js');
const server = express();

server.use(bodyParser.json());

// endpoints here
server.get('/', function(req, res) {
    res.status(200).json({ success: true });
});
server.post('/api/users', function(req,res) {
    const user = req.body;

    knex
    .insert(user)
    .into('users')
    .then(function(ids) {
       res.status(201).json({ ids }); 
    }).catch(function() {
        res.status(500).json({ error: "failed to insert user"});
    });
});
server.get('/api/zoos/:id', function(req,res) {
    knex('zoos')
        .where('id', id)
        .then(function(records) {
            res.status(201).json({ ids });
        }).catch(function() {
            res.status(500).json({ errorMessage: 'Could not get the Zoo' });
        }); 
    });
const port = 3000;
server.listen(port, function() {
    console.log(`Server Listening on ${port}`);
});
