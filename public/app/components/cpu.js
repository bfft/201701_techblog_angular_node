'use strict';
// Creating a component which can be reused from other modules.
angular.module('cpuComponent', [])
    // Directives and the two-way data binding are one of the two prime features of AngularJS.
    // Besides the predefined directives like ngClick, ngRepeat, ngDisabled, ngSelected, ngChange
    // we are also able to create our own customized directives.

    // Creating a very simple custom directive which can be called for example like
    // <cpu-info></cpu-info>
    // Note that the directive name is created with camelcase naming but not called with
    // the camelcase name.
    .directive('cpuInfo', function () {
        return {
            // The restrict option can be set to one or a combination of the following values:
            // 'A' - ony matches attribute name - e.g.: <div cpu-info></div>
            // 'E' - only matches element name - e.g.: <cpu-info></cpu-info>
            // 'C' - only matches class name
            // 'M' - only matches comment
            restrict: 'E',
            // For more complex templates you can use templateUrl instead and link to a file
            // which contains the HTML template code.
            template: '<b>Cpu Utilization:</b> {{state}}%'
        }
    })
    // Creating a more complex directive which can be called for example like
    // <cpu-graph renderer='line color ='#ff0000'></cpu-graph>
    .directive('cpuGraph', function () {
        return {
            // When should I use an attribute versus an element? Use the element when you are creating
            // a component that is in control of the template. If you are decorating an existing
            // element with new functionality then use an attribute.
            restrict: 'E',
            template: '<div id="chart"></div>',
            // Injecting the scope variable from the controller
            // and the attrs which are the attributes defined in the view when the directive is called.
            link: function (scope, el, attrs) {
                // We have access to the scope variable from the controller
                scope.graph = new Rickshaw.Graph({
                    // The graph gets rendered in the div with the id chart.
                    element: document.querySelector('#chart'),
                    width: null,
                    height: 300,
                    // Setting the graph renderer which we are retrieving from the attribute
                    // with whiche the directive was called.
                    // By using the attrs we can ensure a better reusability. 
                    renderer: attrs.renderer,
                    min: 0,
                    max: 100,
                    // Creating a new fixed series with maximal 500 data entries.
                    // We we only need to add the incomming values and the library takes
                    // care of the management of the fixed array.
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