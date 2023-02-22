const menuElement = document.querySelector(".header__menu");
const menuNavigationElement = document.querySelector(".header__navigation");

const showMenu = document.querySelector(".header__menu");
showMenu.addEventListener("click", () => {
    menuNavigationElement.style.display = "block";
    
});

const hideMenu = () => { //zdarzenie "onmouseleave" też nie działało
    menuNavigationElement.style.display = "none";
};

menuElement.onmouseout = hideMenu;
