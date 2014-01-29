'use strict';

angular.module('swingcardApp')
  .directive('movesRow', function() {
    return {
      restrict: 'EA',
      scope: {
        step: '=step'
      },
      template: '<td>{{step.count}}</td><td>{{step.description}}</td>'
    };
  })
  .directive('coupletMoves', function() {
    return {
      restrict: 'EA',
      scope: {
        step: '=step',
        beatCount: '='
      },
      templateUrl: 'views/step-row.html'
    };
  })
  .directive('stepsTable', function() {
    return {
      scope: {
        steps: '=steps'
      },
      restrict: 'EA',
      transclude: true,
      templateUrl: 'views/directives/x-steps-table.html'
    };
  })
  .directive('stepsRow', function() {
    return {
      scope: {
        steps: '=steps'
      },
      restrict: 'EA',
      templateUrl: 'views/directives/x-steps-row.html'
    };
  });