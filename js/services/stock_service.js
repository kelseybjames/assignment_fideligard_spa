app.factory('stockService', function() {
  
  var obj = {}
  var stocks = {};
  var stockOwned = ["AAPL", "GOOG", "YHOO", "CSCO", "AMZN", "FB", "FFIV", "TSLA", "WDAY"];
  var stocksByDate = {};

  obj.getStocksOwned = function() {
    return stockOwned;
  }

  obj.getStocksByDate = function() {
    return stocksByDate;
  }

  obj.getStocks = function() {
    return stocks;
  }

  obj.getQuery = function() {
    
    prefix = 'http://query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.historicaldata where symbol = "'
    suffix='" and startDate = "2014-01-01" and endDate = "2014-12-31" &format=json &diagnostics=true &env=store://datatables.org/alltableswithkeys&callback='

    for (var i = 0; i < stockOwned.length; i++) {
      queryTxt = prefix+stockOwned[i]+suffix;
      $http.
        get( queryTxt ).
        then( function( response ){
          var data = response.data.query.results.quote;
          var key = data[0].Symbol;
          stocks[key] = data;
        }, function( data ){
          stocks = undefined;
        }
      );
    };
    //$scope.getByDate();
  };

  obj.getByDate = function(currentDate) {
    stocksByDate = {};
    
    var oneDayAgo = daysAgo(1,currentDate);
    var sevenDaysAgo = daysAgo(7,currentDate);
    var thirtyDaysAgo = daysAgo(30,currentDate);

    var d = new Date(currentDate);
    d = d.toISOString().substring(0, 10);

    var stockArray = Object.keys(stocks);
    stockArray.forEach(function(stock) {
      var newStockData = {};
      var results = stocks[stock];
 
      results.forEach(function(result,index) {
        
        if(d === result.Date) {

          newStockData['0'] = result.Close;
          var next = index + 1;

          newStockData['1'] = results[next].Close;

          next = index + 7
          newStockData['7'] = results[next].Close;

          next = index + 30
          newStockData['30'] = results[next].Close;

        }
      })

      stocksByDate[stock] = newStockData;
    })
  };

  obj.daysAgo = function(num.currentDate) {
    var d = new Date(currentDate);
    var ts = d.getTime();
    var seven = ts - (num * 24 * 60 * 60 * 1000);
    var newDate = new Date(seven);
    return newDate;
  };

  return obj;
})
