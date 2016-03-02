angular.module('waitstaffApp')
        .factory('orders', function(){
            var orders = {};
            orders.list = [];
            
            orders.add = function(order){
                orders.list.push({
                    mealPrice: "",
                    tax: "",
                    tip: "",
                    orderCount: 0,
                    subTotal: "",
                    count: 0,
                    avgTip: 0,
                    earn: 0,
                    tipTotal: 0  
                });
           };s
  return orders;
});
