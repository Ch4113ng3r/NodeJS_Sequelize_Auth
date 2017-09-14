var http = require('http');
var url = require('url');
var fs = require('fs');
var dt = require('./date.js');
var app = require('express')();

var login = require('./login');


app.get('/login', login.login);

app.get('/Authenticate', login.authenticate);

app.get('/*', function(req, res) {
    res.redirect('/login')
});


app.listen('80', function () {
    console.log('Server Started and listening at 80');
});


module.exports = app;