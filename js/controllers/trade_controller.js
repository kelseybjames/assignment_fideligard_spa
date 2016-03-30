stockApp.controller('TradeCtrl', ['$scope', '$stateParams', 'tradeService', 'dateService', function($scope, $stateParams, tradeService, dateService) {

  $scope.tradeDate = dateService.getCurrentDate();
  $scope.tradeSymbol = $stateParams.symbol;
  $scope.tradeQuantity;
  $scope.totalCash = 1000000;
  $scope.orderStatus = 'Invalid';
  $scope.price = $stateParams.data[0];

  if ($scope.tradeQuantity === 'Buy') {
    if (($scope.price * $scope.tradeQuantity) < $scope.totalCash) {
      $scope.orderStatus = 'Valid';
    } else {
      $scope.orderStatus = 'Invalid';
    };
  };
}])