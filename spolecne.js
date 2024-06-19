console.log ('Funguju!');

// Získání tlačítka menu
const menuButton = document.querySelector("#menu-tlacitko");

// Získání elementu s položkami menu
const menuItems = document.querySelector("#menu-polozky");


// Přidání posluchače události kliknutí na tlačítko
menuButton.addEventListener("click", () => {
    // Přepnutí třídy "show" u položek menu
    menuItems.classList.toggle("show");

//změna ikony tlačítka na křížek
if (menuItems.classList.contains("show")) {
    menuButton.innerHTML = '<i class="fas fa-xmark"></i>'; // Křížek
} else {
    menuButton.innerHTML = '<i class="fas fa-bars"></i>'; // Hamburger
}
})
