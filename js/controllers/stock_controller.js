stockApp.controller("StockCtrl",
  ['$scope', 'dateService', 'stockService', 'tradeService', 'transactionService', function($scope, dateService, stockService, tradeService, transactionService){

    $scope.currentFilter = '';
    $scope.currentOrder = '';
    $scope.currentDate = dateService.getCurrentDate();
    $scope.stocksTable = stockService.getStocksByDate();
    $scope.stocks = stockService.getQuery();
    $scope.transactions = transactionService.transactions;
    
    $scope.getByDate = function() {        
      $scope.currentDate = Number(dateService.getCurrentDate());  
      stockService.getByDate($scope.currentDate);
      $scope.stocksTable = stockService.getStocksByDate();
    };

    $scope.trade = function(symbol) {
      tradeService.setSymbol(symbol);
      console.log('Trading ' + tradeService.getSymbol());
    };

    $scope.setOrder = function(header) {
      console.log(header);
      $scope.currentOrder = header;
    }
    
  }]
  
);