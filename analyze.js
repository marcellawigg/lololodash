var _ = require("lodash");

var worker = function(item) {
    var mean,
        under,
        over;

        item = _.sortBy(item, "income");
        mean = _.reduce(item, function(sum, number) {
          return sum + number.income;
        },0);

    mean = mean / item.length;
    under = _.filter(item, function(number) {
      return number.income <= mean;
    });

    over = _.filter(item, function(number) {
      return number.income > mean;
    });

    return {
      average: mean,
      underperform: under,
      overperform: over
    };
  };
    module.exports = worker;
