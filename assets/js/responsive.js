
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

// About Page Our Journey Functionality
document.querySelectorAll('.mobile-view .journey-btns button').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.mobile-view .journey-slide').forEach(slide => slide.classList.remove('active'));
        document.querySelectorAll('.mobile-view .journey-btns button').forEach(button => button.classList.remove('active'));
        document.querySelectorAll('.mobile-view .journey-slide')[index].classList.add('active');
        btn.classList.add('active');
    });
});


// --------------------------------------------------------------------------------------------------------------------- //

// Functionality For Product page Toggle
let typeBtns = document.querySelectorAll('.products-by-type-btn-row button');
let typeBoxes = document.querySelectorAll('.products-by-type-boxes .product-box');

// Add event listener to each button
typeBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        // Remove 'active' class from all buttons
        typeBtns.forEach(button => button.classList.remove('active'));
        // Add 'active' class to the clicked button
        btn.classList.add('active');

        // Hide all product boxes
        typeBoxes.forEach(box => box.classList.add('hide'));
        // Show the relevant product box
        typeBoxes[index].classList.remove('hide');
    });
});



let industryBtns = document.querySelectorAll('.products-by-industry-btn-row button');
let industryBoxes = document.querySelectorAll('.products-by-industry-boxes .product-box');

// Add event listener to each button
industryBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        // Remove 'active' class from all buttons
        industryBtns.forEach(button => button.classList.remove('active'));
        // Add 'active' class to the clicked button
        btn.classList.add('active');

        // Hide all product boxes
        industryBoxes.forEach(box => box.classList.add('hide'));
        // Show the relevant product box
        industryBoxes[index].classList.remove('hide');
    });
});
