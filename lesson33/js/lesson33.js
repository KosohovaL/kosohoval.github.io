let mymap = L.map('mapid').setView([49.589564184158114, 34.55115898291649], 12);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibGVzamFrIiwiYSI6ImNrbWRyeDVyeTFoOXEydnFsaWxsemxnaTMifQ.3Rll_DdcaWtsmVi9X6oh1Q'
}).addTo(mymap);

L.marker([49.58958041338978, 34.551147222546206]).addTo(mymap)
    .bindPopup('<img class="img-map" src="/lesson33/img/foto1.jpg" alt="foto1"> <br> <p class = "popup-text"> Корпусний сад<br> <a href="https://uk.wikipedia.org/wiki/%D0%9A%D0%BE%D1%80%D0%BF%D1%83%D1%81%D0%BD%D0%B8%D0%B9_%D1%81%D0%B0%D0%B4_(%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D0%B0)" target = "_blank" >Wikipedia</a > </p>')

L.marker([49.58349088020767, 34.561355709729476]).addTo(mymap)
    .bindPopup('  <img class="img-map" src="/lesson33/img/foto2.jpg" alt="foto2"> <br> <p class = "popup-text">  Полтавський краєзнавчий музей<br> <a href="https://uk.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BA%D1%80%D0%B0%D1%94%D0%B7%D0%BD%D0%B0%D0%B2%D1%87%D0%B8%D0%B9_%D0%BC%D1%83%D0%B7%D0%B5%D0%B9" target = "_blank" >Wikipedia</a ></p> ')

L.marker([49.58156984754003, 34.569547176306514]).addTo(mymap)
    .bindPopup('  <img class="img-map" src="/lesson33/img/foto3.jpg" alt="foto3"> <br> <p class = "popup-text"> Біла альтанка<br> <a href="https://uk.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BA%D1%80%D0%B0%D1%94%D0%B7%D0%BD%D0%B0%D0%B2%D1%87%D0%B8%D0%B9_%D0%BC%D1%83%D0%B7%D0%B5%D0%B9" target = "_blank" >Wikipedia</a > </p>')


let control = L.Routing.control({
    waypoints: [
        L.latLng(49.590009993180466, 34.554812908172615),
        L.latLng(49.585452789832004, 34.562065601348884)
    ],
    router: new L.Routing.osrmv1({
        language: 'en',
        profile: 'car'
    }),
    geocoder: L.Control.Geocoder.nominatim({}),
    collapsible: true,
}).addTo(mymap);



mymap.on('click', function (e) {
    console.log(e.latlng);
});
