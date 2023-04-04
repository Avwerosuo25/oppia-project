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

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  const navbar = document.getElementById("navbar");
  const sticky = navbar.offsetTop;

  function stickNavbar() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }

  window.onscroll = function() { stickNavbar() };

  $('.carousel').carousel({
    interval: 2000
  });

  $('.carousel-control-prev').click(function() {
    $('.carousel').carousel('prev');
  });

  $('.carousel-control-next').click(function() {
    $('.carousel').carousel('next');
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
      $('#scroll-to-top-button').fadeIn();
    } else {
      $('#scroll-to-top-button').fadeOut();
    }
  });

  $('#scroll-to-top-button').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  });

  $('.carousel').on('slid.bs.carousel', function() {
    var currentIndex = $('.carousel-inner .carousel-item.active').index();
    if (currentIndex === $('.carousel-inner .carousel-item').length - 1) {
      $('#back-to-top-arrow').fadeIn();
    } else {
      $('#back-to-top-arrow').fadeOut();
    }
  });

  $('#back-to-top-arrow').click(function() {
    $('.carousel').carousel(0);
  });

});
