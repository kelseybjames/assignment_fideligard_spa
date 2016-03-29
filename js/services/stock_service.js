app.factory('stockService', function() {

  var STOCKS = {};

  var obj = {};

  obj.queryYahoo = function() {
    queryTxt = "http://query.yahooapis.com/v1/public/yql?q=
                select * from   yahoo.finance.historicaldata
                         where  symbol    = "AAPL"
                         and    startDate = "2011-09-11"
                         and    endDate   = "2014-02-11"
                &format=json
                &diagnostics=true
                &env=store://datatables.org/alltableswithkeys
                &callback=" 
  }

   
  obj.getProducts = function() {
    return PRODUCTS;
  }

  obj.getCategories = function() {
    return CATEGORIES;
  }

  var names = [];
  for (var i=0; i < 10; i++) {
   var category = {};
   category.id = i;
   category.name = faker.commerce.department();

   if (names.indexOf(category.name) == -1) {
     names.push(category.name);
     CATEGORIES.push(category);
   } else {
     i --;
   }
  }

  for (var i=0; i < 30; i++) {
   var product = {};
   product.id = i;
   product.name = faker.commerce.productName();
   product.description = faker.lorem.paragraph();
   product.price = faker.commerce.price();
   var index = Math.floor(Math.random() * 10);

   product.category = CATEGORIES[index].id;
   PRODUCTS.push(product);
  }

  return obj;
})
