'use strict';
// Socket.IO exposes an io variable on the window, but it's better to encapsulate it
// in our project to use the dependency injection system of AngularJS.
angular.module('cpu').factory('websocket', ['$rootScope', function ($rootScope) {
	// Make a connection to the socket server.
	var socket = io.connect();

	// Socket.IO knows the following events:
	//   - connect    - is triggered when a client connects
	//   - message    - default event for sending a message
	//   - disconnect - is triggered when a client disconnects
	// Besides them you can customize your own events. In this demo I spezified
	// the event cpuUtilization.

	return {
		// Send a message to the server
		// Notice that in this demo application we don't send messages to the server
		// we only receiving messages from it.
		// Parameters:
		//   - event    - a unique event identity associated with a server-sent message
		//   - data     - the data we want to send to the server
		//   - callback - the event handler function which gets bind to the specified event
		emit: function (event, data, callback) {
			socket.emit(event, data, function () {
				var args = arguments;
				// Notice that every socket call is wraped in $scope.$apply to tell
				// AngularJS to check the state of the application and update
				// the templates if there was a change after running the callback
				// passed to it.
				$rootScope.$apply(function () {
					if (callback) {
						callback.apply(null, args);
					}
				});
			});
		},
		// Receiving a custom event from the server
		// Parameters:
		//   - event    - a unique event identity associated with a server-sent message
		//   - callback - the event handler function which gets bind to the specified event
		on: function (event, callback) {
			socket.on(event, function () {
				var args = arguments;
				$rootScope.$apply(function () {
					callback.apply(socket, args);
				});
			});
		}
	}
}]);