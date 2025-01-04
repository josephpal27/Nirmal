
// Navbar toggle functionality
document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".mobile-view .navbar-toggler");
    const collapsedMenubar = document.querySelector(".mobile-view .collapsed-menubar");
    const navbar = document.querySelector(".mobile-view .navbar");

    navbarToggler.addEventListener("click", function () {
        collapsedMenubar.classList.toggle("active");
        navbar.classList.toggle("navbar-active");
    });
});

// --------------------------------------------------------------------------------------------------------------------- //

// Functionality to close the menu when clicking outside of it
document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', function (event) {
        var isClickInside = document.querySelector('.mobile-view .navbar').contains(event.target);

        if (!isClickInside) {
            // Hide the menu
            var menu = document.querySelector('.mobile-view .collapsed-menubar');
            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
            }
        }
    });
});

// --------------------------------------------------------------------------------------------------------------------- //

