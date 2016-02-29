'use strict';

/**
 * @ngdoc function
 * @name waitstaffApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the waitstaffApp
 */
angular.module('waitstaffApp')
  .controller('MainCtrl', ['$scope', function($scope) {
            $scope.mealPrice = "";
            $scope.tax = "";
            $scope.tip = "";
            $scope.orderCount = 0;
            $scope.subTotal = "";
            $scope.count = 0;
            $scope.avgTip = 0;
            $scope.earn = 0;


            $scope.add = function () {
                $scope.subTotal = ($scope.mealPrice * $scope.tax) + $scope.mealPrice;
                $scope.tipTotal = $scope.mealPrice * $scope.tip;
                $scope.earn = $scope.earn + $scope.tipTotal;
                $scope.count = $scope.count + 1;
                $scope.avgTip = $scope.earn / $scope.count;
                };


  }]);




