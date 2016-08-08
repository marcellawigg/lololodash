var _ = require("lodash");

var worker = function(array) {
  return _.forEach(array, function(item) {
    if (item.population >= 1)
      item['size'] = 'big'
    else if (item.population >= 0.5 && item.population < 1)
      item['size'] = 'med'
    else
    item['size'] = 'small'
  });
};

// export the worker function as a nodejs module
module.exports = worker;
