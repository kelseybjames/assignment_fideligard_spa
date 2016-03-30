stockApp.controller('portfolioCtrl', ['$scope', 'transactionService', function($scope, transactionService) {

  $scope.userStocks = transactionService.getUserStocks();
  $scope.totalCash = transactionService.getTotalCash();
}])