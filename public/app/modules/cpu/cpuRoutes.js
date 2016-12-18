'use strict';
angular.module('cpu').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider
        .when('/cpu', {
            templateUrl: '/app/modules/cpu/cpu.html'
        })
        .when('/', {
            templateUrl: '/app/modules/cpu/home.html'
        });
}]);