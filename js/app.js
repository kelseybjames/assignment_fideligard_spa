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

    .state('index.trade', {
      url: 'trade',
      templateUrl: "templates/trade.html",
      controller: 'TradeCtrl', 
      params: { symbol: null, data: null }
    })

    .state('index.transactions', {
      url: 'transactions',
      templateUrl: "templates/transactions.html",
      controller: 'TransactionCtrl',
      params: { quantity: null, symbol: null, price: null, type: null, date: null }
    })

    .state('index.portfolio', {
      url: 'portfolio',
      templateUrl: "templates/portfolio.html",
      controller: 'portfolioCtrl'
    })

});


// enable error handling
stockApp.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});