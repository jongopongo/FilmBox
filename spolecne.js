//Ukol c.3
console.log("funguju!") //toto si zobrazuji do konzole pro jistotu,aby bylo zřejmé, že mi kód funguje

// Definice promennych
const menuButton = document.getElementById("menu-tlacitko");
const menuPolozky = document.getElementById("menu-polozky");
const menuTlacitko = document.querySelector(".fas");

// Hamburger menu
menuButton.addEventListener("click", function () {
  document.getElementById("menu-polozky").classList.toggle("show");
// Bonus
  if (menuPolozky.classList.contains("show")) {
    menuTlacitko.classList.add("fa-xmark");
    menuTlacitko.classList.remove("fa-bars");
  } else {
    menuTlacitko.classList.add("fa-bars");
    menuTlacitko.classList.remove("fa-xmark");
  }
});

