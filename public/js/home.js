var coordinates = document.getElementById('coordinates');

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else {
        coordinates.innerHTML = "geolocation is not supported in your broswer";
    }
}

function showPosition(position) {
    coordinates.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}

const imageUpload = document.getElementById("imageUpload");
const imagePreview = document.querySelector(".image-preview");

imageUpload.addEventListener("change", () => {
    const file = imageUpload.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = () => {
            imagePreview.style.backgroundImage = `url('${reader.result}')`;
            imagePreview.classList.add("active");
        };

        reader.readAsDataURL(file);
    } else {
        imagePreview.style.backgroundImage = "";
        imagePreview.classList.remove("active");
    }
});