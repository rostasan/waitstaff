angular.module('waitstaffApp')
        .factory('orders', function(){
            var orders = {
                mealPrice: "",
                tax: "",
                tip: "",
                orderCount: 0,
                subTotal: "",
                count: 0,
                avgTip: 0,
                earn: 0,
                tipTotal: 0
            };
            orders.list = ['mealPrice','tax','tip','orderCount','subTotal','count','avgTip','earn','tipTotal'];
            
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
        var calc = function(order){
             subTotal = (mealPrice * tax) + mealPrice;
             tipTotal = mealPrice * tip;
             earn = earn + tipTotal;
             count = count + 1;
             avgTip = earn / count;
           };
  return {
      orders: orders,
      calc: calc
  };

});
