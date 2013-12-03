'use strict';

angular.module('swingcardApp')
  .controller('MoveDetailCtrl', function ($scope, $route, $routeParams, $http) {

    var addMoveCounts = function addMoveCounts(data) {

      var moveIndex, stepIndex, beatIndex;
      var moveLength, stepLength, beatsLength;
      var currentMove, currentStep, currentBeat;
      var beatCount;

      moveLength = data.length;
      for(moveIndex=0; moveIndex < moveLength; moveIndex++) {
        currentMove = data[moveIndex];
        stepLength = currentMove.steps.length;
        console.log('Current Move', currentMove);
        beatCount = 0;

        for(stepIndex=0; stepIndex < stepLength; stepIndex++) {
          currentStep = currentMove.steps[stepIndex];

          console.log('Current Step', currentStep);
          beatsLength = currentStep.beats.length;
          currentStep.beatsCount = [];

          for(beatIndex=0; beatIndex < beatsLength; beatIndex++) {
            currentBeat = currentStep.beats[beatIndex];

            // 11 and 111 indicate 2 beats per couplet, 
            // 011 and 110 indicate swing beats
            // all the others indicate 1 beat

            if(-1 !== ['10','01'].indexOf(currentBeat)) {
              currentStep.beatsCount.push(++beatCount);
            } else if(-1 !== ['11'].indexOf(currentBeat)) {
              currentStep.beatsCount.push(++beatCount);
              currentStep.beatsCount.push(++beatCount);
            } else if(-1 !== ['100', '001'].indexOf(currentBeat)) {
              currentStep.beatsCount.push(++beatCount);
            } else if(-1 !== ['010'].indexOf(currentBeat)) {
              currentStep.beatsCount.push('and');
            } else if(-1 !== ['110'].indexOf(currentBeat)) {
              currentStep.beatsCount.push(++beatCount);
              currentStep.beatsCount.push('and');
            } else if(-1 !== ['011'].indexOf(currentBeat)) {
              currentStep.beatsCount.push('and');
              currentStep.beatsCount.push(++beatCount);
            } else if(-1 !== ['111'].indexOf(currentBeat)) {
              currentStep.beatsCount.push(++beatCount);
              currentStep.beatsCount.push('and');
              currentStep.beatsCount.push(++beatCount);
            }
          }
        }
      }
      return data;
    };
  
    
      // init values
    $scope.movesModel = {};
//    $scope.movesModel.moves = MoveData.fetchMoves();

    $scope.movesModel.hackedStep = {'sid': 0, 'beats':['11','111'], 'description': 'Free Tuck Turn'};

    $scope.movesModel.currentMoveIndex = parseInt($routeParams.moveId, 10);

    $http.get('data/new-moves.json').success(function(data) {

      $scope.movesModel.moves = addMoveCounts(data);
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