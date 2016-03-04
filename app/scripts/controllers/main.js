'use strict';

/**
 * @ngdoc function
 * @name waitstaffApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the waitstaffApp
 */
angular.module('waitstaffApp')
  .controller('OrderCtrl', ['$rootScope', '$scope', 'orders', function($rootScope, $scope, orders) {
        $rootScope.count = $rootScope.count || 0;
        $rootScope.tipTotal = $rootScope.tipTotal || 0;







        $scope.add = function () {
                          $scope.subTotal = ($scope.mealPrice * $scope.tax) + $scope.mealPrice;
                          $scope.mealTip = $scope.mealPrice * $scope.tip;
                          $scope.earn = $scope.earn + $scope.tipTotal;
                          $rootScope.count += 1;
                          $scope.avgTip = $scope.earn / $scope.count;
                          $rootScope.tipTotal += $scope.mealTip;
        };






        /*         self.addOrder = function(order){
              orders.add(order)
          
   
                $scope.subTotal = ($scope.mealPrice * $scope.tax) + $scope.mealPrice;
                $scope.tipTotal = $scope.mealPrice * $scope.tip;
                $scope.earn = $scope.earn + $scope.tipTotal;
                $scope.count = $scope.count + 1;
                $scope.avgTip = $scope.earn / $scope.count;
                };
*/

  }]);




