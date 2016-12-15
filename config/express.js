var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var routes = require('../routes/index');
var morgan = require('morgan');

module.exports = function(app) {
    // Telling Express to use Port 3000 and localhost if there are 
    // no values configured in process.env
    app.set('port', process.env.PORT || 3000);
    app.set('ip', process.env.IP || '127.0.0.1');
    // Telling Express to use ejs as view engine
    app.set('view engine', 'ejs');
    // Used for debugging output on the console
    app.use(morgan('dev'));
    // Used to parse json requests. Not neccessary in this demo
    app.use(bodyParser.json());
    app.use(session({
        secret: 'bae437ab6ccc53f8b1b35d96c000a3dcd35c0bda',
        resave: false,
        saveUninitialized: false
    }));

    app.use('/', routes);
};