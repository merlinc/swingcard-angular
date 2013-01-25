/* Controllers */

function MoveController($scope, $http, $route, $routeParams) {
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
 }

  
MoveController.$inject = ['$scope', '$http', '$route', '$routeParams'];

function TipController($scope, $http, $route, $routeParams) {
  // init values
  $scope.tipsModel = {};
  $scope.tipsModel.tipsCount = 0;
  $scope.tipsModel.currentTipIndex = parseInt($routeParams.tipId, 10);

  $http.get('data/new-tips.json').success(function(data) {
    $scope.tipsModel.tips = data;
    $scope.tipsModel.tipsCount = data.length;

    // correctly bound the currentTipIndex
    if(isNaN($scope.tipsModel.currentTipIndex)) {
      $scope.tipsModel.currentTipIndex = 0;
    } else if($scope.tipsModel.currentTipIndex >= data.length) {
      $scope.tipsModel.currentTipIndex = 0;
    } else if($scope.tipsModel.currentTipIndex < 0) {
      $scope.tipsModel.currentTipIndex = 0;
    }

    $scope.tipsModel.currentTip = $scope.tipsModel.tips[$scope.tipsModel.currentTipIndex];

    // then bound the previous/next indicies
    $scope.tipsModel.previousTipIndex = ($scope.tipsModel.currentTipIndex === 0) ? $scope.tipsModel.tipsCount-1 : $scope.tipsModel.currentTipIndex-1;
    $scope.tipsModel.nextTipIndex = ($scope.tipsModel.currentTipIndex === $scope.tipsModel.tipsCount-1) ? 0 : $scope.tipsModel.currentTipIndex+1.0;

    console.log($scope.tipsModel);

  });
 }

  
TipController.$inject = ['$scope', '$http', '$route', '$routeParams'];