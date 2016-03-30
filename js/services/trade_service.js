stockApp.factory('tradeService', function() {
  var obj = {};
  var symbol = '';
  var transactions = [];

  obj.getSymbol = function() {
    return symbol;
  };

  obj.setSymbol = function(newSymbol) {
    symbol = newSymbol;
  };

  obj.processForm = function() {
    
  };

  obj.getTransactions = function() {
    return transactions;
  };

  obj.addTransaction = function(transaction) {
    transactions.push(transaction);
  };

  return obj;
})