stockApp.filter( 'stockFilter', function() {

  return function( stocks, currentFilter ) {
    var stockSubset = {};
    var regExp = new RegExp(currentFilter.toUpperCase());
    Object.keys(stocks).forEach( function(symbol){
      var data = stocks[symbol];
      if (regExp.test(symbol)) {
        stockSubset[symbol] = data;
      };
    });
    return stockSubset;
  };
});