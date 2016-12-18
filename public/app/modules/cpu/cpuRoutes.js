'use strict';
// Configuration of the cpu module. Injecting the routeProvider and locationProvider
angular.module('cpu').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    // Setting the prefix to ''
    // the prefix comes after the hashtag in the URL.
    // e.g.: http://127.0.0.1/#
    $locationProvider.hashPrefix('');

    $routeProvider
        // Setting the route to
        // http://127.0.0.1/#/cpu
        .when('/cpu', {
            // This template gets rendered in the <ng-view></ng-view> directive of the index page
            // when the specified route gets requested.
            templateUrl: '/app/modules/cpu/cpu.html'
        })
        // For simplicity I defined the home route in this controller. Normally every page in
        // our application should have it's own module, controller and route configuration.
        .when('/', {
            templateUrl: '/app/modules/cpu/home.html'
        });
}]);