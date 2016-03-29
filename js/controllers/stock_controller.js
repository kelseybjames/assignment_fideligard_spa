stockApp.controller("StockCtrl",
  ['$scope', 'dateService', 'stockService', function($scope, dateService, stockService){

    //console.log( $stateParams );

    $scope.stocks = {};
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
    
  }]
  
);