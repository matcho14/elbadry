(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "-100px");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
  });
})(jQuery);

// img faade

function fadeIn(elements) {
  var windowHeight = window.innerHeight;
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  elements.forEach(function (element) {
    var elementPosition = element.offsetTop;
    var elementHeight = element.offsetHeight;
    var elementBottom = elementPosition + elementHeight;

    if (
      scrollPosition + windowHeight >= elementPosition &&
      scrollPosition < elementBottom
    ) {
      element.classList.add("fadein");
    }
  });
}

var images = document.querySelectorAll(".left img");
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      fadeIn([entry.target]);
    }
  });
});

images.forEach(function (image) {
  observer.observe(image);
});

window.addEventListener("scroll", function () {
  fadeIn(images);
});
