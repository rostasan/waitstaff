'use strict';

/**
 * @ngdoc function
 * @name waitstaffApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the waitstaffApp
 */
angular.module('waitstaffApp')
  .controller('orderCtrl', ['$scope', 'orders', function($scope, orders) {
          var self = this;
          
          self.addOrder = function(order){
              orders.add(order)
          
   
                $scope.subTotal = ($scope.mealPrice * $scope.tax) + $scope.mealPrice;
                $scope.tipTotal = $scope.mealPrice * $scope.tip;
                $scope.earn = $scope.earn + $scope.tipTotal;
                $scope.count = $scope.count + 1;
                $scope.avgTip = $scope.earn / $scope.count;
                };
/**/

  }]);




