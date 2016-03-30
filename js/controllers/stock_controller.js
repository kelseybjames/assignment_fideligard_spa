stockApp.controller("StockCtrl",
  ['$scope', 'dateService', 'stockService', 'tradeService', function($scope, dateService, stockService, tradeService){

    $scope.currentFilter = '';
    $scope.currentOrder = '';
    $scope.currentDate = dateService.getCurrentDate();
    $scope.stocksTable = stockService.getStocksByDate();
    $scope.stocks = stockService.getQuery();
    
    $scope.getByDate = function() {        
      $scope.currentDate = Number(dateService.getCurrentDate());  
      console.log("In main get by");
      stockService.getByDate($scope.currentDate);
      $scope.stocksTable = stockService.getStocksByDate();
      //console.log($scope.stocksByDate);
    };

    $scope.trade = function(symbol) {
      tradeService.setSymbol(symbol);
      console.log('Trading ' + tradeService.getSymbol());
    };

    $scope.setOrder = function(header) {
      $scope.currentOrder = header;
    }
    
  }]
  
);