navigator.geolocation.getCurrentPosition(function (position) {
    let url = "http://nominatim.openstreetmap.org/reverse?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&format=json&json_callback=fillData";

    let script = document.createElement('script');
    script.src = url;
    document.body.appendChild(script);
});

function fillData(data) {
    let location = document.querySelector(".location.animate-up")
    let city = document.createElement('strong');
    let state = document.createElement('p');
    
    city.textContent = data.address.city;
    location.appendChild(city);

    state.textContent = data.address.state;
    location.appendChild(state);

    localStorage.setItem('lat', data.lat);
    localStorage.setItem('lng', data.lon);
};