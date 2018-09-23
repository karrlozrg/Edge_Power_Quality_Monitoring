function myMap() {
    var Autfab = new google.maps.LatLng(49.8672694,8.6381765);
    var mapCanvas = document.getElementById("myMap");
    var mapOptions = {center: Autfab, zoom: 5};
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var markerAutfab = new google.maps.Marker({position:Autfab});
    markerAutfab.setMap(map);

    // Zoom to 9 when clicking on marker
    google.maps.event.addListener(markerAutfab,'dblclick',function() {
        map.setZoom(15);
        map.setCenter(markerAutfab.getPosition());
    });
    google.maps.event.addListener(markerAutfab,'click',function() {
        var infowindow = new google.maps.InfoWindow({
            content:'<p class="w3-text-black">Autfab at HDA</p>'
        });
        infowindow.open(map,markerAutfab);
    });

}