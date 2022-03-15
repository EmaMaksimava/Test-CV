window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector(".menu-list"),
          menuItem = document.querySelectorAll(".menu-item"),
          hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle("hamburger-active");
        menu.classList.toggle("menu-list-active");
    });

    menuItem.forEach( item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle("hamburger-active");
            menu.classList.remove("menu-list-active");
        });
    });
});
