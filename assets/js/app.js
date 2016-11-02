
angular.module('app', [
    'ui.router',
    'ngAnimate',
    'restangular',
    'ui.bootstrap',
    'app.controllers',
    'app.directives',
    'chart.js',
    'ngMap',
    'angularUtils.directives.dirDisqus'
    ])

.config(['$stateProvider', '$urlRouterProvider', 'RestangularProvider', 'ChartJsProvider', '$locationProvider',
  function($stateProvider, $urlRouterProvider, RestangularProvider, ChartJsProvider, $locationProvider) {
      // $locationProvider.hashPrefix('!');
      ChartJsProvider.setOptions({ colors : [ '#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'] });
      RestangularProvider.setBaseUrl('https://budget-datakit-api.herokuapp.com/');

      RestangularProvider.addResponseInterceptor(function (data, operation, what, url, response, deferred) {
          if (data.response && data.response.data) {
              var returnedData = data.response.data;
              return returnedData;
          } else {
              return data;
          };
      });
      
      $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'modules/home.html',
        controller: 'appCtrl'
    })
      .state('map', {
          url: '/map?place',
          templateUrl: 'modules/map.html',
          controller: 'mapCtrl'
      })  

      $urlRouterProvider.otherwise('/home')  
  }])