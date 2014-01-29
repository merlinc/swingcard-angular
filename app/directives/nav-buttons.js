'use strict';

angular.module('swingcardApp')
  .directive('homeButton', function() {
    return {
      restrict: 'A',
      compile: function(element) {
        // id="homeButton" href="#/" class="btn btn-small"><i class="glyphicon glyphicon-home"></i>

        element.prop('href', '#/');
        element.addClass('btn');
        element.addClass('btn-small');
        element.append('<i class="glyphicon glyphicon-home"></i>');
      }
    };
  }).directive('menuButton', function() {
    return {
      restrict: 'A',
      compile: function(element) {

        element.prop('href', '#/move');
        element.addClass('btn');
        element.addClass('btn-small');
        element.append('<i class="glyphicon glyphicon-list"></i>');
      }
    };
  });