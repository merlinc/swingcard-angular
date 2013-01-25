// Declare app level module which depends on filters, and services
angular.module('swingcardApp', ['swingcardApp.filters', 'swingcardApp.services', 'swingcardApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: MoveController});
    $routeProvider.when('/move', {templateUrl: 'partials/move-list.html', controller: MoveController});
    $routeProvider.when('/move/:moveId', {templateUrl: 'partials/move-detail.html', controller: MoveController});
    $routeProvider.when('/tip', {templateUrl: 'partials/tip-list.html', controller: TipController});
    $routeProvider.when('/tip/:tipId', {templateUrl: 'partials/tip-detail.html', controller: TipController});
    $routeProvider.when('/variation', {templateUrl: 'partials/variation.html', controller: MoveController});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);
