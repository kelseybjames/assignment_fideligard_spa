stockApp.controller("StockCtrl",
  ['$scope', '$stateParams', '$http', function($scope, $stateParams, $http){

    //console.log( $stateParams );

    $scope.stocks = {};
    $scope.stockOwned = ["AAPL", "GOOG"];
    $scope.currentDate = '2014-12-31';
    $scope.stocksByDate = {};


    $scope.getQuery = function() {
      console.log("In here 1");
      prefix = 'http://query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.historicaldata where symbol = "'
      suffix='" and startDate = "2014-01-01" and endDate = "2014-12-31" &format=json &diagnostics=true &env=store://datatables.org/alltableswithkeys&callback='
      for (var i = 0; i < $scope.stockOwned.length; i++) {
        $scope.queryTxt = prefix+$scope.stockOwned[i]+suffix;
        console.log("In here 2");
        console.log($scope.queryTxt);
        $http.
          get( $scope.queryTxt ).
          then( function( response ){
            console.log(response);
            var data = response.data.query.results.quote;
            console.log(data);
            var key = data[0].Symbol;
            console.log("Key is " + key);
            $scope.stocks[key] = data;
            console.log($scope.stocks);
          }, function( data ){
            $scope.stocks = undefined;
            console.log('error');
          }
        );
      };
      $scope.getByDate();
    };

    $scope.getByDate = function() {
      $scope.stocksByDate = {};
      var oneDayAgo = $scope.daysAgo(1);
      var sevenDaysAgo = $scope.daysAgo(7);
      var thirtyDaysAgo = $scope.daysAgo(30);

      console.log('One day ago: ' + oneDayAgo);
      console.log('Seven days ago: ' + sevenDaysAgo);
      console.log('Thirty days ago: ' + thirtyDaysAgo);


      console.log('got to getByDate');
      var stockArray = Object.keys($scope.stocks);
      stockArray.forEach(function(stock) {
        var newStockData = {};
        var results = $scope.stocks[stock];
        results.forEach(function(result) {
          if(Date($scope.currentDate) == Date(result.Date)) {
            newStockData['0'] = result.Close;
          } else if (oneDayAgo == Date(result.Date)) {
            newStockData['1'] = result.Close;
          } else if (sevenDaysAgo == Date(result.Date)) {
            newStockData['7'] = result.Close;
          } else if (thirtyDaysAgo == Date(result.Date)) {
            newStockData['30'] = result.Close;
          }
        })
        $scope.stocksByDate[stock] = newStockData;
        console.log($scope.stocksByDate);
      })
    };

    $scope.daysAgo = function(num) {
      var d = new Date($scope.currentDate);
      var ts = d.getTime();
      var seven = ts - (num * 24 * 60 * 60 * 1000);
      var newDate = new Date(seven);
      return newDate;
    };

    $scope.getQuery();
    
  }]
  
);


// var values = {name: 'misko', gender: 'male'};
// var log = [];
// angular.forEach(values, function(value, key) {
//  this.push(key + ': ' + value);
// }, log);
// expect(log).toEqual(['name: misko', 'gender: male']);