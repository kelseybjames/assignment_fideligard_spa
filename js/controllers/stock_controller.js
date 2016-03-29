app.controller("StockCtrl",
  ['$scope', '$stateParams', '$http', function($scope, $stateParams, $http){

    //console.log( $stateParams );

    $scope.stock = {};
    $scope.stockOwned = ["APPL", "GOOG"]


    var getQuery = function() {
      console.log("In here 1");
      prefix = '"http://query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.historicaldata where symbol ="'
      suffix='"and startDate = "2014-01-01" and endDate = "2014-12-31" &format=json &diagnostics=true &env=store:"'
      for (var i = 0; i < $scope.stockOwned.length; i++) {
        queryTxt = prefix+$scope.stockOwned[i]+suffix

      } 


      http://query.yahooapis.com/v1/public/yql?q=
select * from   yahoo.finance.historicaldata
         where  symbol    = "AAPL"
         and    startDate = "2011-09-11"
         and    endDate   = "2014-02-11"
&format=json
&diagnostics=true
&env=store://datatables.org/alltableswithkeys
&callback=
      console.log("In here 2");
      $http.
        get( $scope.queryTxt ).
        then( function( response ){
            console.log(response);
            var data = response.data.query.results;
            var key = Object.keys(data)[0];
            console.log("Key is " + key);
            $scope.stock[key] = data;
            console.log($scope.stock);
          }, function( data ){
            $scope.stock = undefined;
          }
        ); 
    }

    getQuery();
    // // Retrieve a sample Kitten from reqres.in
    // // Immediately start running this when the
    // //   controller is instantiated
    // $http.
    //   get( "http://reqres.in/api/kittens" ).
    //   then( function( response ){
    //       $scope.kittens = []

    //       // Cycle through the returned kittens
    //       //   and set their properties
    //       response.data.data.forEach( function( el ){
    //         var kitten = { name: el.name, id: el.id }
    //         $scope.kittens.push( kitten )
    //       })
    //     }, function( data ){
    //       console.log( "ERROR!" );
    //     }
    //   ); 
  }]
);