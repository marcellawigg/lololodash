var _ = require("lodash");

var worker = function(cities) {
  var sorted =  {
    hot: [],
    warm: []
  };

  function verifyTemp(temp) {
    return temp > 19;
  }

  _.forEach(cities, function(temps, name) {
    if(_.every(temps, verifyTemp)) {
      sorted.hot.push(name);
    } else if(_.some(temps, verifyTemp)) {
      sorted.warm.push(name);
    }
  });
  return sorted;
};

// export the worker function as a nodejs module
module.exports = worker;
