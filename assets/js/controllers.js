angular.module('app.controllers', [])

.factory('API', ['Restangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
         RestangularConfigurer.setBaseUrl('');
    });
 }])
  
.controller('appCtrl', function($scope, Restangular, $state, $stateParams) {
    Restangular.all('project').getList().then(function(response){
        $scope.projects = response;
    })
})

