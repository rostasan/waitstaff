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
           };
 /*          orders.calc = function(order){
               subTotal = (mealPrice * tax) + mealPrice;
                tipTotal = mealPrice * tip;
                earn = earn + tipTotal;
                count = count + 1;
                avgTip = earn / count;
           };*/
  return orders;
});
