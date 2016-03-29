var app = angular.module("stockApp", ['ui.router', 'ui.bootstrap'] );

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/index');

  $stateProvider

    .state('index', {
      url: '/',
      views: {
        'navbar': {
          templateUrl: 'templates/navbar.html'
        },

        'stockpanel': {
          templateUrl: 'templates/stock_panel.html',
          controller: 'stockCtrl'
        },

        'datepicker': {
          templateUrl: 'templates/date_picker.html'
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
app.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});