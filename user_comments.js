// include the Lo-Dash library
    var _ = require("lodash");

    var worker = function(array) {
      var totals = [];
      var groups = _.groupBy(array, 'username');

    _.forEach(groups, function(group, name) {
      totals.push({
        username: name,
        comment_count: _.size(group)
      });
    });

    return _.sortBy(totals, function(total) {
      return -total['comment_count'];
    });
  };
    // export the worker function as a nodejs module
    module.exports = worker;
