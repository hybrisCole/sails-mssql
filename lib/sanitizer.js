module.exports = (function () {

  var sanitizer = {
    sanitizeResultSet: function(resultset){
      var sanitizedResultSet = [];
      _.each(resultset, function(result) {
        _.forOwnRight(result, function(value, key){
          console.log(value);
          console.log(key);
        });
        sanitizedResultSet.push(result);
      });
      //console.log(sanitizedResultSet);
      return sanitizedResultSet;
    }
  };

  return sanitizer;

})();