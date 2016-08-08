var _ = require("lodash");

var worker = function(array) {
  return _.sortBy(array, function(item) {
    return -item.quantity
  });
};

// export the worker function as a nodejs module
module.exports = worker;
