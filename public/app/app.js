'use strict';
// Creating the app module and injecting the dependencies.
// The ngRoute module from AngularJS is used for the routing 
// in our singe-page application.
// cpu is the module which I implemented for the CPU view
// which gets displayed when the URL 127.0.0.1:3000/#/cpu
// is called.
var app = angular.module('app', ['ngRoute', 'cpu']);

// Manually bootstrap the above created AngularJS application.
angular.element(document).ready(function () {
    angular.bootstrap(document, ['app']);
});