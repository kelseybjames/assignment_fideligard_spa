stockApp.controller('TradeCtrl', ['$scope', 'dateService', 'stockService', function($scope, dateService, stockService) {

  $scope.currentDate = dateService.getCurrentDate();
  $scope.stocks = stockService.getQuery();
  $scope.symbol;
  $scope.quantity;
}])