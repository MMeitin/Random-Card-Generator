window.onload = () => {
  const numero = document.querySelector(".number");
  const topS = document.querySelector("#botS");
  const botS = document.querySelector("#topS");
  const botonCartaNueva = document.querySelector("#botonGenerar");
  const botonTimer = document.querySelector("#botonTiempo");
  const inputAlto = document.querySelector("#dimensionesH");
  const inputAncho = document.querySelector("#dimensionesW");
  const carta = document.querySelector(".card");

  const valores = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const colores = ["♦", "♥", "♠", "♣"];

  const generarCarta = () => {
    //Genera una carta aleatoria nueva
    const randomCard = ([arr]) => {
      //Devuelve un valor aleatorio de un array
      let numA = Math.floor(Math.random() * arr.length);

      return arr[numA];
    };

    // const actualizarAlto = e => {
    //   // Aplica el alto que le pasa el usuario a la carta
    //   if (e.target.value >= 300 && e.target.value <= 1000) {
    //     carta.style.height = e.target.value + "px";
    //   } else {
    //     carta.style.height = "30rem";
    //   }
    // };

    // const actualizarAncho = e => {
    //   //Aplica el ancho que le pasa el usuario a la carta
    //   if (e.target.value >= 300 && e.target.value <= 1000) {
    //     carta.style.width = e.target.value + "px";
    //   } else {
    //     carta.style.width = "20rem";
    //   }
    // };

    const actualizarTamano = e => {
      // Aplica la actualización en una sola función
      if (e.target.value >= 300 && e.target.value <= 1000) {
        carta.style[e.target.name] = e.target.value + "px";
      } else {
        carta.style.height = "30rem";
        carta.style.width = "20rem";
      }
    };

    let cartaC = randomCard([colores]); //Asignamos un color aleatorio
    let cartaV = randomCard([valores]); //Asignamos un valor aleatorio

    numero.innerHTML = cartaV;
    topS.innerHTML = cartaC;
    botS.innerHTML = cartaC;

    if (cartaC === "♦" || cartaC === "♥") {
      // Corazones y diamantes: Rojos --- Diamantes y picas: Negras
      topS.style.color = "red";
      botS.style.color = "red";
      numero.style.color = "red";
    } else {
      topS.style.color = "black";
      botS.style.color = "black";
      numero.style.color = "black";
    }

    inputAlto.addEventListener("input", actualizarTamano);
    inputAncho.addEventListener("input", actualizarTamano);
  };

  generarCarta();

  botonCartaNueva.addEventListener("click", generarCarta);

  let intID = false;
  botonTimer.innerHTML = "Activar generar carta aleatoria cada 5 segundos";
  const temporizador = () => {
    // Activar o desactivar la creación de una carta cada 5 segundos
    if (!intID) {
      botonTimer.innerHTML =
        "Desactivar generar carta aleatoria cada 5 segundos";
      intID = setInterval(generarCarta, 5000);
    } else {
      botonTimer.innerHTML = "Activar generar carta aleatoria cada 5 segundos";
      clearInterval(intID);
      intID = false;
    }
  };

  botonTimer.addEventListener("click", temporizador);
};
