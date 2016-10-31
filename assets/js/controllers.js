angular.module('app.controllers', [])

.factory('API', ['Restangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
         RestangularConfigurer.setBaseUrl('');
    });
 }])
  
.controller('appCtrl', function($scope, Restangular, $state, $stateParams) {
   $scope.areas = [
		{pos:[6.519342, 3.372343], name:'yaba', address: 'Yaba college of technology'},
	];

	$scope.goToMap = function(area) {
	}
})
.controller('mapCtrl', function($scope, Restangular, $state, $stateParams, NgMap) {
	$scope.areas = [
		{pos:[6.519342, 3.372343], name:'yaba', address: 'Yaba college of technology', bestRoute: 'Herbert Macaulay', pm25: '169', pm10: '169', no2: '169', aqi: '50'},
		{pos:[6.518043, 3.377641], name:'parkln', bestRoute: 'Herbert Macaulay Way', pm25: '300', pm10: '300', no2: '300', aqi: '50'}
	];
	
    $scope.seeDetails = function(area) {
        $scope.details = true;
    }

    $scope.closeOverlay = function() {
        $scope.details = false;
    }

	$scope.zoomedIn = false;
    $scope.dynMarkers = [];
    var map;

    NgMap.getMap().then(function(map) {
    	
    });

    function setMarkers(locations) {
    	console.log(beach);	
            for (var i = 0; i < locations.length; i++) {
                var beach = locations[i];
                var myLatLng = new google.maps.LatLng(beach[1], beach[2]);
                var marker = new google.maps.Marker({
                    position: myLatLng,
                    map: map,
                    animation: google.maps.Animation.DROP,
                    title: beach[0],
                    zIndex: beach[3]
                });
                // Push marker to markers array
                markers.push(marker);
            }
        }

    $scope.zoomToMarker = function(marker) {
        if (!$scope.zoomedIn) {
            $scope.defaultParams = {
                zoom: $scope.zoom,
                center: $scope.center
            }
                $scope.zoomedIn = true;
        }
        var center = new google.maps.LatLng(marker.location[1], marker.location[0]);
        map.setCenter(center);
        map.setZoom(20);
    };
    var mapOptions = {
        center: new google.maps.LatLng(2.519342, 3.372343),
        zoom: 9
    };
})

