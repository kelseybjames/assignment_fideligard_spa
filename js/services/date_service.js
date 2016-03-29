stockApp.factory('dateService', function() {

  var obj = {};
  var currentDate = (new Date('2014-12-31')).getTime();
  var minDate = (new Date('2014-01-01')).getTime();
  var maxDate = (new Date('2014-12-31')).getTime();
  var dayLength = 86400000;

  obj.getCurrentDate = function() {
    return currentDate;
  };

  obj.setCurrentDate = function(date) {
    currentDate = date;
  }

  obj.getMinDate = function() {
    return minDate;
  };

  obj.getMaxDate = function() {
    return maxDate;
  };

  obj.getDayLength = function() {
    return dayLength;
  };

  return obj;
})