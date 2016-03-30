stockApp.factory('stockService', ['$http', '$q', function($http, $q) {
  
  var obj = {}
  var stocks = {};
  var stockOwned = ["AAPL", "GOOG", "YHOO", "CSCO", "AMZN", "FB", "FFIV", "TSLA", "WDAY"];
  var stocksByDate = {};

  obj.getStocksOwned = function() {
    return stockOwned;
  };

  obj.getStocksByDate = function() {
    return stocksByDate;
  };

  obj.getStocks = function() {
    return stocks;
  };

  obj.getByDate = function(currentDate) {
    console.log("In getbydate");

    console.log("Current Date In SS: " + currentDate);    

    var oneDayAgo = obj.daysAgo(1,currentDate);
    var sevenDaysAgo = obj.daysAgo(7,currentDate);
    var thirtyDaysAgo = obj.daysAgo(30,currentDate);

    console.log('One day ago: ' + oneDayAgo);

    console.log('One day ago: ' + oneDayAgo.getTime());
    console.log('Seven days ago: ' + sevenDaysAgo.getTime());
    console.log('Thirty days ago: ' + thirtyDaysAgo.getTime());

    console.log('got to getByDate');

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
          if (next < results.length) {
            newStockData['1'] = results[next].Close;
          };

          next = index + 7;
          if (next < results.length) {
            newStockData['7'] = results[next].Close;
          };

          next = index + 30;
          if (next < results.length) {
            newStockData['30'] = results[next].Close;
          };

        }
      })

      stocksByDate[stock] = newStockData;
    })
    //return stocksByDate;
  };

  obj.getQuery = function() {
    var requests = [];
    
    prefix = 'http://query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.historicaldata where symbol = "'
    suffix='" and startDate = "2014-01-01" and endDate = "2014-12-31" &format=json &diagnostics=true &env=store://datatables.org/alltableswithkeys&callback='
    for (var i = 0; i < stockOwned.length; i++) {
      queryTxt = prefix+stockOwned[i]+suffix;
      requests.push($http.get( queryTxt ));
    };
    return $q.all(requests).
      then( function( response ){
      for (var i = 0; i < response.length; i++) {
        var quoteArray = response[i].data.query.results.quote;
        var symbol = quoteArray[0].Symbol;
        stocks[symbol] = quoteArray;
      }
    });
  };


  obj.daysAgo = function(num, currentDate) {
    var d = new Date(currentDate);
    var ts = d.getTime();
    var seven = ts - (num * 24 * 60 * 60 * 1000);
    var newDate = new Date(seven);
    return newDate;
  };

  return obj;
}])
