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
          templateUrl: 'templates/datepicker.html'
        },

        'main': {
          templateUrl: 'templates/main.html'
        },
      },
    })

    .state('main.trades', {
      url: '/trades',
      templateUrl: "templates/trades.html",
      controller: 'tradesCtrl'
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