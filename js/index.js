const imagen = document.getElementById("slider");

let numImagen = 0;

const imagenes = [];
imagenes[0] = "img1slide.png";
imagenes[1] = "img2slide.png";
imagenes[2] = "img3slide.png";
imagenes[3] = "img4slide.png";

setInterval(function() {
    imagen.src = imagenes[numImagen];
    if (numImagen < imagenes.length - 1) {
        numImagen++;
    } else {
        numImagen = 0;
    }
}, 2000);