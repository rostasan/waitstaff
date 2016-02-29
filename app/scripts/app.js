'use strict';

/**
 * @ngdoc overview
 * @name waitstaffApp
 * @description
 * # waitstaffApp
 *
 * Main module of the application.
 */
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
            controller: 'MainCtrl',
            controllerAs: 'main'
        })
        .when('/earn', {
            templateUrl: 'views/earn.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
        })
      .otherwise({
        redirectTo: '/'
      });
  });



