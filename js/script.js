$(document).ready(function() {
  var navbar = $('.navbar');
  var navbarOffset = navbar.offset().top;

  $(window).scroll(function() {
    if ($(window).scrollTop() > navbarOffset) {
      navbar.addClass('fixed-top');
    } else {
      navbar.removeClass('fixed-top');
    }
  });
});


  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

/*// Get the navbar
const navbar = document.getElementById("navbar");*/

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// When the user scrolls the page, execute the stickNavbar function
window.onscroll = function() { stickNavbar() };


// Wait for the DOM to be fully loaded
$(document).ready(function() {

    // Activate the Bootstrap carousel
    $('.carousel').carousel();
  
    // Automatically slide the carousel every 5 seconds
    setInterval(function() {
      $('.carousel').carousel('next');
    }, 5000);
  
    // When the user scrolls down 20px from the top of the document, show the scroll-to-top button
    $(window).scroll(function() {
      if ($(this).scrollTop() > 20) {
        $('#scroll-to-top-button').fadeIn();
      } else {
        $('#scroll-to-top-button').fadeOut();
      }
    });
  
    // When the user clicks on the scroll-to-top button, scroll to the top of the document
    $('#scroll-to-top-button').click(function() {
      $('html, body').animate({
        scrollTop: 0
      }, 500);
    });
  
    // When the user reaches the end of the carousel, show the back-to-top arrow
    $('.carousel').on('slid.bs.carousel', function() {
      var currentIndex = $('.carousel-inner .carousel-item.active').index();
      if (currentIndex === $('.carousel-inner .carousel-item').length - 1) {
        $('#back-to-top-arrow').fadeIn();
      } else {
        $('#back-to-top-arrow').fadeOut();
      }
    });
  
    // When the user clicks on the back-to-top arrow, scroll to the top of the carousel
    $('#back-to-top-arrow').click(function() {
      $('.carousel').carousel(0);
    });
  
  });