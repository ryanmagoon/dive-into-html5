function show_map (position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
}

function get_location () {
    navigator.geolocation.getCurrentPosition(show_map);
}

window.onload = function () {
    get_location();
};