module.exports = (function () {

  var validator = require('validator');

  var sanitizer = {
    sanitizeResultSet: function(resultset){
      var sanitizedResultSet = [];
      _.each(resultset, function  (result) {
        var sanitizedResult = {};
        _.forOwnRight(result, function(value, key){
          if(_.isString(value)) {
            value = validator.stripLow(validator.escape(validator.trim(value))).replace(/[^\x00-\x7F]/gi, '');
          }
          sanitizedResult[key] = value;
        });
        sanitizedResultSet.push(sanitizedResult);
      });
      return sanitizedResultSet;
    }
  };

  return sanitizer;

})();