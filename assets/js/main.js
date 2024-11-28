const $slider = $(".slider");
$slider
  .slick({
    infinite: false,
    speed: 2000,
    lazyLoad: "progressive",
    arrows: false,
    vertical: true,
    dots: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  })
  .slickAnimation();

// Change dot color on specific slides
// $slider.on('afterChange', function(event, slick, currentSlide) {
//     const $dots = $('.slick-dots li');

//     // Remove any existing custom classes
//     $dots.removeClass('black-dot');

//     // Add black-dot class to the 4th and 5th slide
//     if (currentSlide === 3 || currentSlide === 4) {
//         $dots.eq(currentSlide).addClass('black-dot');
//     }
// });

// Mousewheel functionality
$slider.mousewheel(function (e) {
  e.preventDefault();
  if (e.deltaY < 0) {
    if (
      $(this).slick("slickCurrentSlide") ===
      $(this).find(".slick-slide").length - 1
    ) {
      return;
    }
    $(this).slick("slickNext");
  } else {
    if ($(this).slick("slickCurrentSlide") === 0) {
      return;
    }
    $(this).slick("slickPrev");
  }
});

// Keyboard arrow key functionality
document.addEventListener("keydown", function (e) {
  // Check if the user pressed the up or down arrow key
  if (e.key === "ArrowDown") {
    // Move to the next slide
    if (
      $slider.slick("slickCurrentSlide") !==
      $slider.find(".slick-slide").length - 1
    ) {
      $slider.slick("slickNext");
    }
  } else if (e.key === "ArrowUp") {
    // Move to the previous slide
    if ($slider.slick("slickCurrentSlide") !== 0) {
      $slider.slick("slickPrev");
    }
  }
});

// Initialize WOW.js animations
new WOW().init();

// Navbar toggle functionality
document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.getElementById("navbar-toggler");
  const collapsedMenubar = document.querySelector(".collapsed-menubar");
  const navbar = document.querySelector(".navbar");

  navbarToggler.addEventListener("click", function () {
    collapsedMenubar.classList.toggle("active");
    navbar.classList.toggle("navbar-active");
  });
});

// Counter animation on scroll
function animateCounter() {
  document
    .querySelectorAll(".counter-box span[data-target]")
    .forEach((counter) => {
      const target = +counter.getAttribute("data-target");
      let count = 0;
      const increment = target / 100; // Adjust for speed

      const updateCount = () => {
        count += increment;
        if (count < target) {
          counter.innerText = Math.ceil(count);
          requestAnimationFrame(updateCount); // Use requestAnimationFrame for smoother animation
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
}

function handleScroll() {
  const counterSection = document.querySelector(".counter");
  const rect = counterSection.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    animateCounter();
    window.removeEventListener("scroll", handleScroll);
  }
}

window.addEventListener("scroll", handleScroll);
handleScroll();

// Media slider initialization
$(".media-slider").slick({
  centerPadding: "60px",
  slidesToShow: 5,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});
