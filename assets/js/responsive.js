
// Navbar toggle functionality
let navMenuBtn = document.querySelector('.mobile-view .nav-right img');
let navList = document.querySelector('.mobile-view .nav-menu-options');

navMenuBtn.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent click from propagating to document
    navList.classList.toggle('hide');
});

// Close menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (!navList.classList.contains('hide') && !navList.contains(event.target) && event.target !== navMenuBtn) {
        navList.classList.add('hide');
    }
});


// --------------------------------------------------------------------------------------------------------------------- //

