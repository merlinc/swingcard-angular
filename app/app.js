'use strict';

angular.module('swingcardApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home/home.html',
        controller: 'HomeCtrl'
      })
      .when('/move/', {
        templateUrl: 'partials/move-list/move-list.html',
        controller: 'MoveListCtrl'
      })
      .when('/move/:moveId', {
        templateUrl: 'partials/move-detail/move-detail.html',
        controller: 'MoveDetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
// ,  'angularLocalStorage'