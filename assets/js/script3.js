
 
  function llenarSelect(id) {
    const select = document.getElementById(id);
    for (let i = 1; i <= 9; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = i;
      select.appendChild(option);
    }
  }


  llenarSelect("digito1");
  llenarSelect("digito2");
  llenarSelect("digito3");


  const boton = document.getElementById("ingresar");
  const mensaje = document.getElementById("mensaje");

  boton.addEventListener("click", function () {
    const d1 = document.getElementById("digito1").value;
    const d2 = document.getElementById("digito2").value;
    const d3 = document.getElementById("digito3").value;

    const password = d1 + d2 + d3;

    if (password === "911") {
      mensaje.textContent = "password 1 correcto";
    } else if (password === "714") {
      mensaje.textContent = "password 2 correcto";
    } else {
      mensaje.textContent = "password incorrecto";
    }
  });
