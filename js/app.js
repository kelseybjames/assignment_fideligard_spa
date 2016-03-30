var stockApp = angular.module("stockApp", ['ui.router', 'ui.bootstrap'] );

stockApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('index', {
      url: '/',
      views: {
        'navbar': {
          templateUrl: 'templates/navbar.html'
        },

        'stockpanel': {
          // resolve: {
          //   someProperty:  function( $http ){
          //     return $http( { method: 'GET', url: '/someUrl' } )
          //     .then (function (data) {
          //       return doSomeStuffFirst( data );
          //     });
          //  }, 
          // },
          
          templateUrl: 'templates/stock_panel.html',
          controller: 'StockCtrl'
        },

        'datepicker': {
          templateUrl: 'templates/datepicker.html',
          controller: 'DateCtrl'
        },

        'main': {
          templateUrl: 'templates/main.html'
        },
      },
    })

    .state('main.trade', {
      url: '/trade',
      templateUrl: "templates/trade.html",
      controller: 'tradeCtrl', 
      params: { symbolParam: null }
    })

    .state('main.transaction', {
      url: '/transaction',
      templateUrl: "templates/transaction.html",
      controller: 'transactionCtrl'
    })

    .state('main.portfolio', {
      url: '/portfolio',
      templateUrl: "templates/portfolio.html",
      controller: 'portfolioCtrl'
    })

});


// enable error handling
stockApp.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});