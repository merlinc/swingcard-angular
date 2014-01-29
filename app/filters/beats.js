'use strict';

angular.module('swingcardApp')
  .filter('beats', function () {
    return function(input) {
      return input.join(' ');
    };
  });