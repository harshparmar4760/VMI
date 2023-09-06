const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// Function to check if the form should be displayed
// function shouldDisplayPopupForm() {
//   const hasVisitedBefore = localStorage.getItem("hasVisitedBefore");

//   // Display the form only if it hasn't been shown before
//   return !hasVisitedBefore;
// }

// Function to display the pop-up after 5 minutes
function displayPopupForm() {
  const popupForm = document.getElementById("divOne");
  popupForm.style.display = "block";
}

// Function to close the popup form
function closePopupForm() {
  const popupForm = document.getElementById("divOne");
  popupForm.style.display = "none";

  // Set a flag in local storage to indicate that the form has been shown
  // localStorage.setItem("hasVisitedBefore", "true");
}

// Set a timer to display the popup form after 5 seconds
// if (shouldDisplayPopupForm()) {
  // Set a timer to display the popup form after 5 seconds
  setTimeout(displayPopupForm, 2000); // 5 seconds in milliseconds
// }

// transition js

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 80;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  
// slider js

  var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

  var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
      600: {
          slidesPerView: 2,
      }
  }
});