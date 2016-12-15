'use strict';
// Adding the CpuCtrl controller to the cpu module and injecting the scope and websocket.
angular.module('cpu').controller('CpuCtrl', ['$scope', 'websocket', function ($scope, websocket) {

    // Setting the callback function which gets called when a message with
    // the cpuUtilization event is arriving over Socket.IO arrives.
    // With websocket.on a subscription for the event cpuUtilization is made.
    websocket.on('cpuUtilization', function (state) {
        // The magic of AngularJS are the Scope variables using the 2-way 
        // data-binding between view and model. Changes on the scope variables 
        // are immediately visible on the view.
        // And vice verca changes made in the view are also immediately visible
        // in the model.

        // Update the state variable which is used in the view to show the
        // current cpu utilization. Used by the cpu-info directive.
        $scope.state = parseInt(state);

        // Pushing the received data as an object into the graphs series array.
        // Used by the cpu-graph directive.
        $scope.graph.series.addData({cpu: parseInt(state)});
        // Cause the graph to render it's series array.
        $scope.graph.render();
    });

}]);