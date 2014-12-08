module.exports = (function () {

  var sanitizer = {
    sanitizeResultSet: function(resultset){
      console.log(resultset);
      _.each(resultset, function(result) {
        result = {};
      });
      return resultset;
    }
  };

  return sanitizer;

})();