stockApp.controller("StockCtrl",
  ['$scope', '$stateParams', '$http', 'dateService', 'stockService', function($scope, $stateParams, $http, dateService, stockService){

    //console.log( $stateParams );

    $scope.stocks = {};
    $scope.currentDate = dateService.getCurrentDate();
    $scope.stocksByDate = {};
    $scope.stocks = stockService.getQuery();

    $scope.getByDate = function() {
      $scope.currentDate = Number(dateService.getCurrentDate());
      $scope.stocksByDate = stockService.getByDate($scope.currentDate);
    };
    
  }]
  
);