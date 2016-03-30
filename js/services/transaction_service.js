stockApp.factory('transactionService', function() {
  var obj = {};
  var userStocks = {};
  var transactions = transactions || [];

  obj.getUserStocks = function() {
    return userStocks;
  };

  obj.changeUserStocks = function(stock, quantity) {
    userStocks[stock] += quantity;
  };

  obj.getTransactions = function() {
    return transactions;
  };

  obj.addTransaction = function(transaction) {
    transactions.push(transaction);
  };

  return obj;

})