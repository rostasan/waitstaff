'use strict';

angular
  .module('waitstaffApp', [
    'ngRoute',
    'ngMessages'
   ])
  .config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html'
        })
        .when('/newmeal', {
            templateUrl: 'views/newmeal.html',
            controller: 'OrderCtrl as order',
            controllerAs: ''
        })
        .when('/earn', {
            templateUrl: 'views/earn.html',
            controller: 'EarnCtrl',
            controllerAs: 'main'
        })
      .otherwise({
        redirectTo: '/'
      });
  });




