'use strict';

angular.module('swingcardApp')
  .controller('MoveDetailCtrl', function ($scope, MoveData) { // $location, $store

    $scope.move = {};
    $scope.error = '';

    var randomMove = function() {
      MoveData.getRandomMove().then(
        function(move) {
          $scope.move = move;
// doing this in the wrong place causes infinite redirections          
//          $location.path('/move/' + move.slug);
          $scope.error = '';
        }, function(error) {
          $scope.error = error;
        });
    };
/*

    var moveSuccess = function() {
      // send moveId to cookie storage
    };

    var moveFailure = function() {
      // send moveId to cookie storage
    };

    */

    // init with a random move
    $scope.randomMove = randomMove;
    randomMove();

  });