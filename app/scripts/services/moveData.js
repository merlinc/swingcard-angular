'use strict';

angular.module('swingcardApp')
  .factory('MoveData', function ($http, $q, $timeout) { //, DataTransformer) { //, $route, $routeParams) {

    var moves = [];

    var fetchMoves = function() {

      var deferred = $q.defer();

      $http.get('data/new-moves.json').success(function(data) {
        angular.copy(data, moves);
        deferred.resolve();
      });

      return deferred.promise;
    };

    var findRandomMove = function() {
      return moves[Math.floor(Math.random()*moves.length)];
    };

    var getRandomMove = function() {

      var deferred = $q.defer();

      if(moves.length) {
        $timeout(function() {
          deferred.resolve(findRandomMove());
        }, 100);
      } else {
        fetchMoves().then(function() {
          var result = findRandomMove();
          deferred.resolve(result);
        });
      }

      return deferred.promise;
    };

    return {
      getRandomMove: getRandomMove
    };
  });