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

    .state('index.transaction', {
      url: 'transaction',
      templateUrl: "templates/transaction.html",
      controller: 'transactionCtrl'
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