/**
 * Created by 0 on 3/3/2016.
 */
angular.module('waitstaffApp')

    .controller('EarnCtrl', ['$rootScope','$scope', function($rootScope, $scope){

            $scope.avgTip = $rootScope.tipTotal / $rootScope.count;
    }

    ]);