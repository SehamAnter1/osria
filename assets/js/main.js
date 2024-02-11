$(document).ready(function () {
  var currentDir = $("a").css("direction");
  console.log(currentDir);

  if ($(".header_slider").length) {
    $(".header_slider").slick({
      arrows: true,
      rtl: currentDir == "rtl" ? true : false,
    });
  }

  if ($(".osri-prgrams-card").length) {
    $(".osri-prgrams-card").map((index, item) => {
      const leftvar = $(item).find(".progress-bar").attr("aria-valuenow");
      console.log(leftvar);
      $(item)
        .find(".progress-bar .prog_num")
        .css("right", `${leftvar - 10}%`);
    });
  }

  if ($(".custom-select").length) {
    $(".custom-select").niceSelect();
  }

  if ($(".osri-prgrams-section-slider").length) {
    $(".osri-prgrams-section-slider").slick({
      slidesToShow: 3.7,
      rtl: currentDir == "rtl" ? true : false,
      arrows: false,
      dots: false,
      slidesToScroll: 1,
      infinite: false,
      // autoplay: true,
      // autoplaySpeed: 1000,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2.7,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2.1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  if ($(".watch_video_scrollable".length)) {
    $(".watch_video_scrollable").mCustomScrollbar({
      theme: "dark",
      alwaysShowScrollbar: 1,
      scrollEasing: "easeOut",
      mouseWheel: { preventDefault: true },
    });
  }

  if ($(".services-slider").length) {
    $(".services-slider").slick({
      slidesToShow: 4.4,
      rtl: currentDir == "rtl" ? true : false,
      slidesToScroll: 1,
      infinite: false,
      responsive: [
        {
          breakpoint: 1375,
          settings: {
            slidesToShow: 3.7,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
          },
        },
        {
          breakpoint: 1110,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1.7,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  if ($(".partners_section_slider").length) {
    $(".partners_section_slider").slick({
      slidesToShow: 5,
      arrows: true,
      rtl: currentDir == "rtl" ? true : false,
      slidesToScroll: 1,
      infinite: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2.5,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.4,
          },
        },
      ],
    });
  }

  // if ($(".watch_video_scrollable".length)) {
  //   $(".watch_video_scrollable").mCustomScrollbar({
  //     theme: "dark",
  //     alwaysShowScrollbar: 1,
  //     scrollEasing: "easeOut",
  //     mouseWheel: { preventDefault: true },
  //   });
  // }

  // $(".custom_navbar #nav-icon1").click(function () {
  //   $(".side-nav").addClass("side-nav-open");
  //   $("html").addClass("side-active");
  // });

  // if ($(".side-nav").length) {
  //   $(".side-nav .close-nav").click(function () {
  //     $(".side-nav").removeClass("side-nav-open");
  //     $("html").removeClass("side-active");
  //   });
  // }

  // if ($(".bg-side-open").length) {
  //   $(".bg-side-open").on("click", function () {
  //     $(".side-nav").removeClass("side-nav-open");
  //     $("html").removeClass("side-active");
  //     $(".profile-sidebar").removeClass("profile-sidebar-active");
  //   });
  // }

  if ($(".animate__animated").length) {
    new WOW().init();
  }

  $("html").addClass("splash-active");

  if ($(".meeting-steps").length) {
    var type = 1, //circle type - 1 whole, 0.5 half, 0.25 quarter
      radius = "18em", //distance from center
      start = -90, //shift start from 0
      $elements = $(".meeting-steps li:not(:first-child)"),
      numberOfElements = type === 1 ? $elements.length : $elements.length - 1, //adj for even distro of elements when not full circle
      slice = (360 * type) / numberOfElements;

    $elements.each(function (i) {
      var $self = $(this),
        rotate = slice * i + start,
        rotateReverse = rotate * -1;

      $self.css({
        transform:
          "rotate(" +
          rotate +
          "deg) translate(" +
          radius +
          ") rotate(" +
          rotateReverse +
          "deg)",
      });
    });
  }
});

$(window).on("load", function () {
  // $("html").removeClass("splash-active");
  // $(".splashscreen").addClass("splashscreen_none");

  new Mmenu("#menu", {
    offCanvas: {
      slidingSubmenus: false,
      position: "right-front",
    },
    theme: "light",
    counters: {
      add: true,
    },
  });
  $(".mm-navbar__title").text("القائمة");
});

$(window).on("load", function () {
  $(".splashscreen").addClass("splashscreen_none");
});
