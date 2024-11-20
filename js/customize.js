// 自行加入的JS請寫在這裡
$(function () {
  // 首頁輪播
  $('.mpSlider').slick({
    mobileFirst: true,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    fade: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    pauseOnHover: false,
    pauseOnFocus: false,
    customPaging: function (slider, i) {
      var title = $(slider.$slides[i]).find('img').attr('alt').trim();
      return $('<button type="button" aria-label="' + title + '"/>').text(title);
    },
  });

  // 廣告輪播
  $('.adSlider').slick({
    mobileFirst: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrow: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  });
  //燈箱slick+lightBox組合
  $('.cp_slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    pauseOnFocus: true,
    focusOnSelect: true,
    accessibility: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 545,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
  //
  $('.cppic_slider').slick({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    // pauseOnHover: true,
    // pauseOnFocus: true,
    // focusOnSelect: true,
    // accessibility: true,
    // lazyLoad: 'ondemand',
    // ease: 'ease',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 545,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
  // cp_photo
  $('.Slider-for').on('init reInit afterChange', function (event, slick, currentSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.controls').html(i + '/' + slick.slideCount);
  });
  $('.Slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    swipe: false,
    swipeToSlide: false,
    lazyLoad: 'ondemand',
    asNavFor: '.Slider-nav',
    infinite: true,
  });
  $('.Slider-nav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.Slider-for',
    dots: true,
    arrows: true,
    lazyLoad: 'ondemand',
    focusOnSelect: true,
    infinite: true,
  });

  // password_toggle
  var passShow = false;
  $('.password_toggle').each(function (index, el) {
    $(this)
      .find('.btn-icon')
      .off()
      .click(function (e) {
        if (!passShow) {
          $(this).children('i').removeClass().addClass('i_show');
          $(this).parents('.password_toggle').find('input[type="password"]').attr('type', 'text');
          passShow = true;
          // console.log(passShow);
        } else {
          $(this).children('i').removeClass().addClass('i_hide');
          $(this).parents('.password_toggle').find('input[type="text"]').attr('type', 'password');
          passShow = false;
          // console.log(passShow);
        }
        e.preventDefault();
      });
  });
  // 空間照片
  $('.space_photos_slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    // fade: true,
    cssEase: 'linear',
  });

  // 格局人數
  $('.pattern_numpeople_slider').slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  // 展覽館
  $('.exhibition_hall_slider').slick({
    mobileFirst: true,
    // dots: true,
    arrow: true,
    infinite: true,
    speed: 500,
    fade: true,
    // autoplay: false,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
  });
  // 視差
  const acMove = () => {
    const acBoxDownElem = document.querySelectorAll('.acBoxDown');
    const acBoxUpElem = document.querySelectorAll('.acBoxUp');
    const windowScrollTop = document.documentElement.scrollTop;
    const windowWidth = window.outerWidth;

    acBoxDownElem?.forEach((item) => {
      let height = item.clientHeight;
      let ac_move = item;
      let rect = item.getBoundingClientRect();
      let offset = {
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
      };

      if (windowWidth > 767) {
        gsap.to(ac_move, 1, {
          y: (height - (windowScrollTop - offset.top)) / 20,
        });
      }
    });
    acBoxUpElem?.forEach((item) => {
      let height = item.clientHeight;
      let ac_move = item;
      let rect = item.getBoundingClientRect();
      let offset = {
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
      };
      if (windowWidth > 767) {
        gsap.to(ac_move, 1, {
          y: -(height - (windowScrollTop - offset.top)) / 30,
        });
      }
    });
  };
  window.addEventListener('scroll', acMove);
  window.addEventListener('load', acMove);
  window.addEventListener('resize', acMove);

  // 場地介紹
  // Fancybox.bind('[data-fancybox="gallery-a"]', {
  //   // Custom options for the first gallery
  // });
  Fancybox.bind('[data-fancybox="gallery-a"]', {
    Toolbar: {
      display: {
        // left: ['infobar'],
        // middle: [],
        right: ['close'],
      },
    },
  });
  Fancybox.bind('[data-fancybox="gallery-b"]', {
    Toolbar: {
      display: {
        // left: ['infobar'],
        // middle: [],
        right: ['close'],
      },
    },
  });
});

// tab功能
tabFunction({
  target: '.tabSet',
  openFirst: false, // 預設先展開所有內容，鍵盤的自動開合功能無效
  openSwitch: true, // 是否可開合/切換
  autoClose: true, // 自動關閉其他開啟內容
  modeSwitch: true, // 預設模式自動切換，尺寸以上tab功能，尺寸以下手風琴功能
  width: 767, // 尺寸以上tab功能，尺寸以下手風琴功能
  index: 0, // 預設開啟第幾個
});
