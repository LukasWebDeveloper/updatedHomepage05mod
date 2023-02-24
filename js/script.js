const menuElement = document.querySelector(".header__menu");
const menuNavigationElement = document.querySelector(".header__navigation");

const showMenu = document.querySelector(".header__menu");
showMenu.addEventListener("click", () => {
    menuNavigationElement.style.display = "block";
    
});

const hideMenu = document.querySelector(".header__navigation");
hideMenu.addEventListener("mouseleave", () => {
    menuNavigationElement.style.display = "none";
});

