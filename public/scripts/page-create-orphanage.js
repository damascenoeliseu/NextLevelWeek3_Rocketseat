const lat = localStorage.getItem('lat');
const lng = localStorage.getItem('lng');

// create map
const map = L.map('mapid').setView([lat, lng], 15);


// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
});


//create and add marker
let marker;

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector("[name=lat]").value = lat;
    document.querySelector("[name=lng]").value = lng;

    //remove icon
    marker && map.removeLayer(marker);

    //add icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map);
});


//add image field
function addPhotoField() {
    //catch the image container #images
    const container = document.querySelector("#images");

    //catch the container to duplicate .new-upload
    const fieldsContainer = document.querySelectorAll(".new-upload");

    //clone the last added image
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    const input = newFieldContainer.children[0];
    if (input.value == "") return;

    //clear the field before adding images into the container
    input.value = "";

    //add the clone to the image container #images
    container.appendChild(newFieldContainer)
}


function deleteField(event) {
    const span = event.currentTarget;
    const fieldsContainer = document.querySelectorAll(".new-upload");

    if (fieldsContainer.length <= 1) {
        span.parentNode.children[0].value = "";
        return;
    }
    span.parentNode.remove();
}


function toggleSelect(event) {
    document.querySelectorAll(".button-select button").forEach((button) => {
        button.classList.remove('active');
    });

    const button = event.currentTarget;
    button.classList.add('active');

    const input = document.querySelector("[name='open_on_weekends']");

    input.value = button.dataset.value;
}


function validate(event) {
    const lat = document.querySelector("[name=lat]").value;
    const lng = document.querySelector("[name=lng]").value;

    if (lat == "" || lng == "") {
        event.preventDefault();
        alert("Adicione uma localização no mapa.");
    }
}