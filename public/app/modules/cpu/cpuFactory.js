'use strict';
angular.module('cpu').factory('websocket', ['$rootScope', function ($rootScope) {
	var socket = io.connect();

	return {
		emit: function (event, data, callback) {
			socket.emit(event, data, function () {
				var args = arguments;
				$rootScope.$apply(function () {
					if (callback) {
						callback.apply(null, args);
					}
				});
			});
		},
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