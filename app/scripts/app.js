'use strict';

angular
  .module('waitstaffApp', [
    'ngRoute'
   ])
  .config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'homeCtrl',
            controllerAs: 'main'
        })
        .when('/newmeal', {
            templateUrl: 'views/newmeal.html',
            controller: 'orderCtrl as order',
            controllerAs: 'main'
        })
        .when('/earn', {
            templateUrl: 'views/earn.html',
            controller: 'orderCtrl',
            controllerAs: 'main'
        })
      .otherwise({
        redirectTo: '/'
      });
  });



