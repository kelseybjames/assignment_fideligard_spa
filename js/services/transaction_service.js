stockApp.factory('transactionService', function() {
  var obj = {};
  var userStocks = {};
  var transactions = transactions || [];

  obj.getUserStocks = function() {
    return userStocks;
  };

  obj.changeUserStocks = function(stock, quantity) {
    if (userStocks[stock]) {
      var prevCount = Number(userStocks[stock]);
      userStocks[stock] = prevCount + quantity;
    } else {
      userStocks[stock] = quantity;
    }
  };

  obj.getTransactions = function() {
    return transactions;
  };

  obj.addTransaction = function(transaction) {
    transactions.push(transaction);
    var stockQuantity;
    if (transaction.type === 'Buy') {
      stockQuantity = transaction.quantity;
    } else {
      stockQuantity = transaction.quantity * -1;
    }
    obj.changeUserStocks(transaction.symbol, stockQuantity);
    console.log(userStocks);
  };

  return obj;

})