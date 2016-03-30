stockApp.controller('TradeCtrl', ['$scope', '$stateParams', 'tradeService', 'dateService', 'transactionService', function($scope, $stateParams, tradeService, dateService, transactionService) {

  $scope.tradeDate = dateService.getCurrentDate();
  $scope.tradeSymbol = $stateParams.symbol;
  $scope.tradeQuantity;
  $scope.totalCash = transactionService.getTotalCash();
  $scope.orderStatus = 'Invalid';
  $scope.price = $stateParams.data[0];

  // if ($scope.tradeForm.$valid) {
  //   $scope.orderStatus = 'Valid';
  // } else {
  //   $scope.orderStatus = 'Invalid';
  // };

  if ($scope.tradeQuantity === 'Buy') {
    if (($scope.price * $scope.tradeQuantity) < $scope.totalCash) {
      $scope.orderStatus = 'Valid';
    } else {
      $scope.orderStatus = 'Invalid';
    };
  };
}])