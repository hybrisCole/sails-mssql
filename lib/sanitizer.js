module.exports = (function () {

  var validator = require('validator');

  var sanitizer = {
    sanitizeResultSet: function(resultset){
      var sanitizedResultSet = [];
      _.each(resultset, function(result) {
        var sanitizedResult = {};
        _.forOwnRight(result, function(value, key){
          sanitizedResult[key] = value;
        });
        sanitizedResultSet.push(sanitizedResult);
      });
      //console.log(sanitizedResultSet);
      return sanitizedResultSet;
    }
  };

  return sanitizer;

})();