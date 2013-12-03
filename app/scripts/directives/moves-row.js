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
      restrict: 'EA',
      scope: {
        steps: '=steps',
      },
      controller: function($scope) {
        $scope.beatCount = 12;
        $scope.tableCtrl = this;
      },
      templateUrl: 'views/x-steps-table.html',
    };
  })
  .directive('stepsRow', function() {
    return {
      require: '^stepsTable',
      restrict: 'EA',
      templateUrl: 'views/x-steps-row.html'
    };
  });