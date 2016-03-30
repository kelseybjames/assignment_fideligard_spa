stockApp.factory('tradeService', ['$http', function($http) {
  var obj = {};
  var symbol = '';

  obj.getSymbol = function() {
    return symbol;
  };

  obj.setSymbol = function(newSymbol) {
    symbol = newSymbol;
  };

  obj.processForm = function() {
    $http({
      method: 'POST',
      
    })
  };

  return obj;
}])