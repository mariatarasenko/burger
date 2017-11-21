function initMap() {
    var mapEl = document.getElementById('map');
    var image = '../burger/images/find/map-marker.png';
    var uluru = {
        lat: 59.939095,
        
        lng: 30.315868
    };
    var map = new google.maps.Map( mapEl, {
      zoom: 12,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map,
      icon: image
    });
}