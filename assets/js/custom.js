$(document).ready(function(){
  $(".hamburger").click(function () {
    $(this).toggleClass("open");
    $(".navbar").slideToggle();
  });

  if ($(".slideshow-wrap").length) {
  $(".slideshow-wrap").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    infinite: true,
    arrows: true,
    dots: true,
  });
}

  if ($(".carousel-wrap").length) {
    $(".carousel-wrap").slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      arrows: true,
      dots: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 1,
          },
        }
      ],
    });
  }


  if ($(".img-wrapper").length) {
    $(".img-wrapper").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      infinite: true,
      arrows:false,
      dots: true,
    });
  }

  $('.topbar .search-btn').on("click", function () {
    $('.search-btn').toggleClass('search-btn-active');
    $('.search-box').toggleClass('active-search');
    $('.search-box input').focus();
  });
  $('.search-box input').blur(function(){
      $('.search-btn').toggleClass('search-btn-active');
      $('.search-box').toggleClass('active-search')
    
});

  $('.navbar li .arrow-up').on("click", function () {
    if ($(window).width() < 992){
      $('.navbar li > ul').toggle();
      $('.arrow-up').toggleClass('open-submenu');
    }
   
  });
   // Function to check window width on resize
   function resizeWindow() {
    if ($(window).width() < 1200) {
        $('.active-search').removeClass('active-search');
        $('.search-btn-active').removeClass('search-btn-active');
        $('.open-submenu').removeClass('open-submenu');
        $('.hamburger').removeClass('open');
        $('.navbar li ul').attr('style','none');
        $('.navbar').attr('style','none')
    }
    }
  $(window).resize(function () {
    resizeWindow();
    });


    let $blog_filter = $('.news-list');
    if ($blog_filter.length) {
      $blog_filter.imagesLoaded(function () {
        $blog_filter.removeClass('grid-loading');
        $blog_filter.isotope({
          layoutMode: 'masonry',
          itemSelector: '.news-block',
          percentPosition: true,
          masonry: {
            columnWidth: '.grid-sizer'
          }
        });
      });
    }
    
});


