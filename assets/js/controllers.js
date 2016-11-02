angular.module('app.controllers', [])

.factory('API', ['Restangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
         RestangularConfigurer.setBaseUrl('');
    });
 }])
  
.controller('appCtrl', function($scope, Restangular, $state, $stateParams) {
   $scope.areas = [
		{id: 01, pos:[6.519342, 3.372343], name:'yaba', address: 'Yaba college of technology'},
	];

	$scope.goToMap = function(selectedPlace) {
        $state.go('map', {place: selectedPlace.name});
	}
})

.controller('mapCtrl', function($scope, Restangular, $state, $stateParams, NgMap) {
    $scope.search = $stateParams.place;
	$scope.areas = [
		{pos:[6.519342, 3.372343], name:'yaba', address: 'Yaba college of technology', bestRoute: 'Herbert Macaulay', pm25: '169', pm10: '169', no2: '169', aqi: '50', tips:['Yaba is a safe place to stay', 'Good road network', 'Promixity to the 3MB']},
	];
	
    $scope.seeDetails = function(evt, obj, type) {
        $scope.details = true;
        $scope.selectedPoint = obj;
    }

    $scope.closeOverlay = function() {
        $scope.details = false;
    }

    NgMap.getMap().then(function(map) {
    	
    });
})

