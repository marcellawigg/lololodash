// include the Lo-Dash library
    var _ = require("lodash");

    var worker = function(array) {
      var chained = _.chain(array).sortBy().map(function(element) {
        return element.toUpperCase() + "CHAINED"
      })
      return chained;
    };

    // export the worker function as a nodejs module
    module.exports = worker;
