'use strict';

angular.module('swingcardApp')
  .factory('MoveData', function ($http) { //, $route, $routeParams) {

    return {
      fetchMoves: function() {
        console.log($http.get('/lorem'));
        return $http.get('data/new-moves.json');
        /*.
          success(function(data) {
            console.log('Service:', data);
            return data;
          }).
          error(function(data, status) {
            console.log('Error:', status);
            return '';
          });*/
      }
    };
  });