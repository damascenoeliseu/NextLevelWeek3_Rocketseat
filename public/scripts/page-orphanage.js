const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// create map
const map = L.map('mapid', options).setView([-27.222633, -49.6455874], 15);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


// create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})


//create and add marker
L.marker([-27.222633, -49.6455874], { icon }).addTo(map)

// image gallery
function selectImage(event) {
    const button = event.currentTarget;

    //remove all .active classes
    const buttons = document.querySelectorAll(".images button");
    buttons.forEach((button) => {
        button.classList.remove("active");
    });

    //select the clicked image
    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details>img");

    //update the image container
    imageContainer.src = image.src;

    //add the .active class for this button
    button.classList.add("active");

}