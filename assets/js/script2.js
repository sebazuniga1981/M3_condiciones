const boton =  document.getElementById("verificar");

boton.addEventListener("click", function(){

const opt1 = parseInt(document.getElementById("opt1").value);
const opt2 = parseInt(document.getElementById("opt2").value);
const opt3 = parseInt(document.getElementById("opt3").value);
const resultadoSpan = document.getElementById("resultadoSpan");

if (isNaN(opt1) || isNaN(opt2) || isNaN(opt3) ){
    resultadoSpan.textContent = " Por favor ingresa  valores correctamente";
    return;
  }
if ( opt1 > 10 || opt2 > 10 || opt3 > 10 ){
    resultadoSpan.textContent = " Por favor ingresa  un numero menor  o igual a 10";
    return;
  }



 const total = opt1 + opt2 + opt3;


if(total > 11){
    resultadoSpan.textContent = "te has pasado de stickers"
}
else{
    resultadoSpan.textContent= `¡ Estas Llevando  ${total}  stickers!`;
}
});