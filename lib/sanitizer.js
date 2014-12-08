module.exports = (function () {

  var sanitizer = {
    sanitizeResultSet: function(resultset){
      var sanitizedResultSet = [];
      _.each(resultset, function(result) {
        result.trololo = 'trololo';
        sanitizedResultSet.push(result);
      });
      console.log(sanitizedResultSet);
      return sanitizedResultSet;
    }
  };

  return sanitizer;

})();