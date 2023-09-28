(function ($) {
  "use strict";

  // Pre loader
  $(window).on("load", function () {
    $(".preloader").fadeOut(2000),
      $("body").css({ "overflow-y": "inherit" });
    $(".mean-container .mean-bar").css({ "display": "inherit" })
  });

  jQuery('#mobile-menu').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: "992"
  });

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document. documentElement.clientWidth)
    );
  }

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var normalLogo = "images/logo/site-logo/logo.png";
    var lightLogo = "images/logo/site-logo/logo_white.png";

    if (scroll >= 300) {
      $(".menu-header").addClass("menu-header-dark");
      $("img.logo").attr("src", lightLogo);
    } else {
      $(".menu-header").removeClass("menu-header-dark");
      $("img.logo").attr("src", normalLogo);
      $(".home-02-menu-header img.logo").attr("src", lightLogo);
    }
  });

  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  $('.review-slider').slick({
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    nextArrow: "<button class=\"slide-next\"><i class=\"fas fa-long-arrow-alt-right\"></i></button>",
    prevArrow: "<button class=\"slide-prev\"><i class=\"fas fa-long-arrow-alt-left\"></i></button>",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.companies-logo').slick({
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  $('.home-slider').slick({
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    arrows: true,
    speed: 1000,
    prevArrow: "<button class=\"slick-prev slick-arrow\"><i class=\"fas fa-long-arrow-alt-left\"></i></button>",
    nextArrow: "<button class=\"slick-next slick-arrow\"><i class=\"fas fa-long-arrow-alt-right\"></i></button>"
  });
  if ($('.banner .slick-slide').hasClass('slick-active')) {
    $('.banner-floating-text h1').removeClass('wow animate__animated animate__fadeOutUp');
    $('.banner-floating-text h1').addClass('wow animate__animated animate__fadeInDown animate__delay-1s');
    $('.banner-text').addClass('wow animate__animated animate__fadeInDown animate__delay-1s');
    $('.banner-text a').addClass('wow animate__animated animate__flipInX animate__delay-1s');
    $('.banner-image').addClass('wow animate__animated animate__fadeInRight animate__delay-1s');
    $('.banner-image .shape-0 img').addClass('wow animate__animated animate__fadeInUp animate__delay-2s');
  }
  else {
    $('.banner-floating-text h1').removeClass('wow animate__animated animate__fadeInDown animate__delay-1s');
    $('.banner-floating-text h1').addClass('wow animate__animated animate__fadeOutUp');
    $('.banner-text').removeClass('wow animate__animated animate__fadeInDown animate__delay-1s');
    $('.banner-text a').removeClass('wow animate__animated animate__flipInX animate__delay-1s');
    $('.banner-image').removeClass('wow animate__animated animate__fadeInRight animate__delay-1s');
    $('.banner-image .shape-0 img').removeClass('wow animate__animated animate__fadeInUp animate__delay-2s');
  }
  $('.banner').on('beforeChange', function () {
    $('.banner-floating-text h1').removeClass('wow animate__animated animate__fadeInDown animate__delay-1s').hide();
    $('.banner-text').removeClass('wow animate__animated animate__fadeInDown animate__delay-1s').hide();
    $('.banner-text a').removeClass('wow animate__animated animate__flipInX animate__delay-1s').hide();
    $('.banner-image').removeClass('wow animate__animated animate__fadeInRight animate__delay-1s').hide();
    $('.banner-image .shape-0 img').removeClass('wow animate__animated animate__fadeInUp animate__delay-2s').hide();
    setTimeout(() => {
      $('.banner-floating-text h1').addClass('wow animate__animated animate__fadeInDown animate__delay-1s').show();
      $('.banner-text').addClass('wow animate__animated animate__fadeInDown animate__delay-1s').show();
      $('.banner-text a').addClass('wow animate__animated animate__flipInX animate__delay-1s').show();
      $('.banner-image').addClass('wow animate__animated animate__fadeInRight animate__delay-1s').show();
      $('.banner-image .shape-0 img').addClass('wow animate__animated animate__fadeInUp animate__delay-2s').show();
    });
  })


  $('.home-slider-2').slick({
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    arrows: true,
    speed: 1000,
    prevArrow: "<button class=\"slick-prev slick-arrow\"><i class=\"fas fa-long-arrow-alt-left\"></i></button>",
    nextArrow: "<button class=\"slick-next slick-arrow\"><i class=\"fas fa-long-arrow-alt-right\"></i></button>"
  });

  var grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: '.grid-item'
    }
  })

  $('.project-menu').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    grid.isotope({ filter: filterValue });
  });

  // for project-menu active class
  $('.project-menu button').on('click', function (event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
  })

  $('.card-header a[aria-expanded="false"]').click(function () {
    $(this).parent().parent().toggleClass('card-header-expanded')
  });

  $('.card-header a[aria-expanded="true"]').click(function () {
    $(this).parent().parent().toggleClass('card-header-expanded')
  });

  // team-member.html 
  $(document).on('scroll', function () {
    if ($(this).scrollTop() > $('.experiences .shape').position().top) {
      $('.experience-box .shape .before').css({ animationName: 'member-skills', animationDuration: '2s' });
      $('.experience-box .shape .after').css({ animationName: 'member-skills', animationDuration: '2s' });
    }
  })
  $(document).on('scroll', function () {
    if ($(this).scrollTop() > $('.skillbar').position().top) {
      $('.skillbar').css({ animationName: 'skillbar', animationDuration: '2s' })
    }
  })

})(jQuery);


