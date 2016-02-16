var map,
    infoWindow;
function initMap() {
    var localizacao = { lat: -30.060436, lng: -51.170863 };
    map = new google.maps.Map(document.getElementById('mapGeo'), {
        center: localizacao,
        zoom: 16
    });
    infoWindow = new google.maps.InfoWindow();

    var service = new google.maps.places.PlacesService(map);

    service.nearbySearch({
        location: localizacao,
        radius: 500,
        types: ['Restaurante', 'lanchonete', 'bar']
    }, callback);
}
function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            console.log(results[i].name);
        }
    }
}