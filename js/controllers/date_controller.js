stockApp.controller("DateCtrl", ['$scope', 'dateService', function($scope, dateService) {

  $scope.currentDate = dateService.getCurrentDate();
  $scope.minDate = dateService.getMinDate();
  $scope.maxDate = dateService.getMaxDate();
  $scope.dayLength = dateService.getDayLength();
  
  $scope.$watch('currentDate', function(newValue) {
    dateService.setCurrentDate(newValue);
    $scope.currentDate = dateService.getCurrentDate();
  });

}])