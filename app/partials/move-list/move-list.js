'use strict';

angular.module('swingcardApp')
  .controller('MoveListCtrl', function ($scope, $http, $route, $routeParams) {
    
      // init values
    $scope.movesModel = {};
    $scope.movesModel.movesCount = 0;
    $scope.movesModel.currentMoveIndex = parseInt($routeParams.moveId, 10);

    $http.get('data/new-moves.json').success(function(data) {
      $scope.movesModel.moves = data;
      $scope.movesModel.movesCount = data.length;

      // correctly bound the currentMoveIndex
      if(isNaN($scope.movesModel.currentMoveIndex)) {
        $scope.movesModel.currentMoveIndex = 0;
      } else if($scope.movesModel.currentMoveIndex >= data.length) {
        $scope.movesModel.currentMoveIndex = 0;
      } else if($scope.movesModel.currentMoveIndex < 0) {
        $scope.movesModel.currentMoveIndex = 0;
      }

      $scope.movesModel.currentMove = $scope.movesModel.moves[$scope.movesModel.currentMoveIndex];

      // then bound the previous/next indicies
      $scope.movesModel.previousMoveIndex = ($scope.movesModel.currentMoveIndex === 0) ? $scope.movesModel.movesCount-1 : $scope.movesModel.currentMoveIndex-1;
      $scope.movesModel.nextMoveIndex = ($scope.movesModel.currentMoveIndex === $scope.movesModel.movesCount-1) ? 0 : $scope.movesModel.currentMoveIndex+1.0;
    });
  });