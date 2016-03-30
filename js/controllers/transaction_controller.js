stockApp.controller('TransactionCtrl', ['$scope', '$stateParams', 'transactionService', function($scope, $stateParams, transactionService) {

  $scope.transactionSymbol = $stateParams.symbol;
  $scope.transactionQuantity = $stateParams.quantity;
  $scope.transactionPrice = $stateParams.price;
  $scope.transactionDate = $stateParams.date;
  $scope.transactionType = $stateParams.type;
  $scope.transactions = transactionService.transactions;

  $scope.clearData = function() {
    $scope.transactionPrice = undefined;
    $scope.transactionDate = undefined;
    $scope.transactionSymbol = undefined;
    $scope.transactionQuantity = undefined;
    $scope.transactionType = undefined;
  };

  if ($scope.transactionSymbol && $scope.transactionQuantity && $scope.transactionPrice && $scope.transactionDate) {
    var newTransaction = {};
    newTransaction.symbol = $scope.transactionSymbol;
    newTransaction.quantity = $scope.transactionQuantity;
    newTransaction.price = $scope.transactionPrice;
    newTransaction.date = $scope.transactionDate;
    newTransaction.type = $scope.transactionType;
    transactionService.addTransaction(newTransaction);
    $scope.transactions = transactionService.getTransactions();
    $scope.clearData();
  };
}])