window.onload = () => {
  const iconos = document.querySelector(".number");
  const boton = document.querySelector(".boton");

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
  const colores = ["spades", "clubs", "hearts", "diamonds"];
  const generarCarta = () => {
    const randomNumber = () => {
      let randomV = Math.floor(Math.random() * valores.length);

      return valores[randomV];
    };

    const randomSuit = () => {
      let randomC = Math.floor(Math.random() * colores.length);

      return colores[randomC];
    };

    let color = randomSuit();

    if (color == "hearts" || color == "diamonds") {
      iconos.style.color = "red";
      iconos.style.border = "3px groove red";
    } else {
      iconos.style.border = "3px groove black";
      iconos.style.color = "black";
    }

    iconos.classList.add(color);
    iconos.innerHTML = randomNumber();
  };

  generarCarta();

  boton.addEventListener("click", generarCarta);
};
