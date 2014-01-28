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
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
      })
      .when('/move/', {
        templateUrl: 'views/move-list.html',
        controller: 'MoveListCtrl'
      })
      .when('/move/:moveId', {
        templateUrl: 'views/move-detail.html',
        controller: 'MoveDetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
// ,  'angularLocalStorage'