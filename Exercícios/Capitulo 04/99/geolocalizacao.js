function positionCallBack(position){
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var geolocation = new google.maps.LatLng(latitude, longitude);

    var mapOptions = {
        zoom: 18,
        center: geolocation,
        mapTypedId: google.maps.MapTypeId.ROADMAP
    };

    var div = document.getElementById("mapa");
    var mapa = new google.maps.Map(div, mapOptions);

    var maker = new google.maps.Marker({
        position: geolocation,
        map: map,
        title: "Você está aqui!"
    });
}

window.onload = function () {
    navigator.geolocation.getCurrentPosition(positionCallBack);
}
