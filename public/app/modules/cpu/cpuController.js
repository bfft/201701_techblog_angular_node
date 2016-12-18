'use strict';
angular.module('cpu').controller('CpuCtrl', ['$scope', 'websocket', function ($scope, websocket) {
    websocket.on('cpuUtilization', function (state) {
        $scope.state = parseInt(state);
        $scope.graph.series.addData({ cpu: parseInt(state) });
        $scope.graph.render();
    });
}]);