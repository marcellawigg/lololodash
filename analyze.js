var _ = require("lodash");

var worker = function(item) {
    var average,
        underperform,
        overperform;

        item = _.sortBy(item, "income");
        average = _.reduce(item, function(sum, number) {
          return sum + number.income;
        },0);

    average = average / item.length;
    underperform = _.filter(item, function(number) {
      return number.income <= average;
    });

    overperform = _.filter(item, function(number) {
      return number.income > average;
    });

    return {
      average: average,
      underperform: underperform,
      overperform: overperform
    };
  };
    module.exports = worker;
