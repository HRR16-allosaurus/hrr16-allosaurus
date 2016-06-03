angular.module('hikeplanner.new-trip-where', [])
.controller('mapController', function($scope, $rootScope, $http, Location) {

  // create google maps instance with autocomplete search
  var map;
  $scope.initMap = function() {
    // #map is div on .where view
    map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: Location.coor.lat, 
        lng: Location.coor.long
      },
      zoom: 10
    });
    
    // #map-input is input tag on .where view
    var input = document.getElementById('map-input');
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);
    
    var marker = new google.maps.Marker({
      map: map,
      anchorPoint: new google.maps.Point(0, -29)
    });
    
    autocomplete.addListener('place_changed', function() {
      marker.setVisible(false);
      var place = autocomplete.getPlace();
      
      if (!place.geometry) {
        console.log('place contains no geometry');
        return;
      }
      // If the place has a geometry, then present it on a map.
      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(13);
      }
      marker.setIcon({
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(35, 35)
      });
      marker.setPosition(place.geometry.location);
      marker.setVisible(true);
    });
  };
  
  $scope.initMap();
  Location.currentLocation(function() {
    map.setCenter({
        lat: Location.coor.lat, 
        lng: Location.coor.long
      });
  });

});