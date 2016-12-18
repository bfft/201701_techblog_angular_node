var path = require('path');
var express = require('express');
var app = express();
var cpu = require('./app/cpu-mod');

app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

require('./config/express')(app);

var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(app.get('port'), app.get('ip'), function () {
    console.log('Express server listening on ' + app.get('ip') + ':' + app.get('port'));
});

io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});

setInterval(function () {
    io.emit('cpuUtilization', cpu.getUtilization());
}, 50);