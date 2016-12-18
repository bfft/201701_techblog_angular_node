var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var routes = require('../routes/index');
var morgan = require('morgan');

module.exports = function (app) {
    app.set('port', process.env.PORT || 3000);
    app.set('ip', process.env.IP || '127.0.0.1');
    app.set('view engine', 'ejs');
    app.use(morgan('dev'));
    app.use(bodyParser.json());
    app.use(session({
        secret: 'bae437ab6ccc53f8b1b35d96c000a3dcd35c0bda',
        resave: false,
        saveUninitialized: false
    }));

    app.use('/', routes);
};