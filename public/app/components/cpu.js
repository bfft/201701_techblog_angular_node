'use strict';
angular.module('cpuComponent', [])
    .directive('cpuInfo', function () {
        return {
            restrict: 'E',
            template: '<b>Cpu Utilization:</b> {{state}}%'
        }
    })
    .directive('cpuGraph', function () {
        return {
            restrict: 'E',
            template: '<div id="chart"></div>',
            link: function (scope, el, attrs) {
                scope.graph = new Rickshaw.Graph({
                    element: document.querySelector('#chart'),
                    width: null,
                    height: 300,
                    renderer: attrs.renderer,
                    min: 0,
                    max: 100,
                    series: new Rickshaw.Series.FixedDuration([{ name: 'CPU', color: attrs.color }], undefined, {
                        timeInterval: 250,
                        maxDataPoints: 500,
                        timeBase: new Date().getTime() / 1000
                    })
                });

                scope.graph.render();
            }
        }
    });