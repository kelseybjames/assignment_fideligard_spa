stockApp.factory('tradeService', function() {
  var obj = {};
  var symbol = '';

  obj.getSymbol = function() {
    return symbol;
  };

  obj.setSymbol = function(newSymbol) {
    symbol = newSymbol;
  };

  return obj;
})