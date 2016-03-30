stockApp.controller('TradeCtrl', ['$scope', '$stateParams', 'tradeService', function($scope, $stateParams, tradeService) {

  $scope.tradeDate = $stateParams.date;
  $scope.tradeSymbol = $stateParams.symbol;
  $scope.tradeForm = {};
  $scope.totalCash = 1000000;
  $scope.orderStatus = 'Invalid';

  $scope.placeOrder = function() {
    console.log($stateParams);
  };
}])