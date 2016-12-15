var path = require('path');
var express = require('express');
var app = express();
var cpu = require('./app/cpu-mod');

// Tell Express where the templates are located.
app.set('views', __dirname + '/views');
// Tell Express where the static files are located
// which should be delivered to the browser.
app.use(express.static(path.join(__dirname, 'public')));

// Use the config file for the rest of the configurations.
require('./config/express')(app);

var server = require('http').Server(app);
var io = require('socket.io')(server);

// Starting the Express webserver
server.listen(app.get('port'), app.get('ip'), function () {
    console.log('Express server listening on ' + app.get('ip') + ':' + app.get('port'));
});

io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('disconnect', function() {
        console.log('user disconnected');
    });
});

// Send every 50 ms a update with the value for the cpu utilization
// to the connected client.
setInterval(function () {
    // Emitting the value of the current cpu utilization over the channel 'cpuUtilization'
    io.emit('cpuUtilization', cpu.getUtilization());
}, 50);