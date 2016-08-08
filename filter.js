// include the Lo-Dash library
    var _ = require("lodash");

    var worker = function(array) {
      return _.filter(array, { active: true })
    };

    // export the worker function as a nodejs module
    module.exports = worker;
