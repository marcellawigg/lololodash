var _ = require("lodash");

var worker = function(orders) {
  var overallarray = [];
  total = 0;

  orders = _.groupBy(orders, 'article');
  _.forEach(orders, function(item, key) {
    key = parseInt(key);
    total = 0;

    if(item.length === 1) {
      total = item[0].quantity;
    } else {
      total = _.reduce(item, function(sum,item) {
        return sum + item.quantity;
      }, 0);
    }

    overallarray.push({
      article: key,
      total_orders: total
    });
  });

  overallarray = _.sortBy(overallarray, "total_orders").reverse();
    return overallarray;
};
module.exports = worker;
