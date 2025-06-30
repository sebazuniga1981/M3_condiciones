
/*   Script para primer ejercicio sobre los border de color rojo 2px*/

const imagen = document.getElementById("miImagen");

imagen.addEventListener("click", function () {


 if (imagen.style.border === "2px solid red") {
    imagen.style.border ="none";
 }
 else{
    imagen.style.border = "2px solid red";
 }
});


