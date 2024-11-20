// 亂數數字
function randomFloor(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// 亂數英文字
function randomLetter(max) {
  let text = '';
  let letter = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < max; i++) text += letter.charAt(Math.floor(Math.random() * letter.length));
  return text;
}
//
$(function () {
  /*-----------------------------------*/
  //////////// notice訊息區塊 ////////////
  /*-----------------------------------*/
  $('[class*="notice"] a.close').on('click', function (e) {
    $(this).parent('[class*="notice"]').hide();
    e.preventDefault();
  });
  /*-----------------------------------*/
  //////////// Accordion設定 ////////////
  /*-----------------------------------*/
  $('.accordion').each(function () {
    $(this).find('.accordion-content').hide();
    var _accordionItem = $(this).children('ul').children('li').children('a');
    _accordionItem.each(function () {
      function accordion(e) {
        $(this).parent('li').siblings().children('a').removeClass('active');
        $(this).toggleClass('active');
        $(this).parent('li').siblings().children('.accordion-content').slideUp();
        $(this).next('.accordion-content').slideToggle();
        e.preventDefault();
      }
      $(this).click(accordion);
      $(this).keyup(accordion);
    });
  });
  /*-----------------------------------*/
  /////////////fatfooter開關/////////////
  /*-----------------------------------*/
  $('.btn-fatfooter').on('click', function (e) {
    $(this)
      .parent('.container')
      .find('nav>ul>li>ul')
      .stop(true, true)
      .slideToggle(function () {
        if ($(this).is(':visible')) {
          $('.btn-fatfooter').html('收合/CLOSE');
          $('.btn-fatfooter').attr('name', '收合選單/CLOSE');
        } else {
          $('.btn-fatfooter').html('展開/OPEN');
          $('.btn-fatfooter').attr('name', '展開選單/OPEN');
        }
      });
    $(this).stop(true, true).toggleClass('close');
  });
  /*-----------------------------------*/
  //////////// nojs 先移除////////////////
  /*-----------------------------------*/
  $('html').removeClass('no-js');
  /*-----------------------------------*/
  ////////////////多組Tab////////////////
  /*-----------------------------------*/
  // var tab_headerHeight = Math.floor($('.header').outerHeight(true));
  // var resizeTimer1;
  // _window.resize(function () {
  //   clearTimeout(resizeTimer1);
  //   resizeTimer1 = setTimeout(function () {
  //     ww = _window.outerWidth();
  //     tabSet();
  //   }, 50);
  // });

  // function tabSet() {
  //   $('.tabs').each(function () {
  //     var _tab = $(this),
  //       _tabItem = _tab.find('.tabItem'),
  //       _tabContent = _tab.find('.tabContent'),
  //       tabwidth = _tab.width(),
  //       tabItemHeight = _tabItem.outerHeight(),
  //       tabContentHeight = _tab.find('.active').next().innerHeight(),
  //       tabGutter = parseInt('4px'), // 可設定 Gutter 寬度
  //       tabItemLength = _tabItem.length,
  //       tabItemWidth,
  //       marginLeft;
  //     _tab.find('.active').next('.tabContent').show();
  //     if (ww >= wwSmall) {
  //       _tabContent.css('top', tabItemHeight);
  //       _tab.height(tabContentHeight + tabItemHeight);

  //       tabItemWidth = tabwidth / tabItemLength - tabGutter;
  //       marginLeft = (tabwidth - tabItemWidth * tabItemLength) / (tabItemLength - 1);

  //       _tabItem.outerWidth(tabItemWidth).css('margin-left', marginLeft);
  //       _tabItem.first().css('margin-left', 0);
  //       _tabItem.last().css({ position: 'absolute', top: 0, right: 0 }).outerWidth(tabItemWidth);
  //     } else {
  //       _tab.css('height', 'auto');
  //       _tabItem.width(tabwidth);
  //       _tabItem.css('margin-left', 0).last().css('position', 'relative');
  //     }
  //     _tabItem.focus(tabs); //改button後，前面改_tabItem
  //     _tabItem.click(tabs); //改button後，前面改_tabItem
  //     function tabs(e) {
  //       var _tabItemNow = $(this), //改button後，原來$(this).parent(),改$(this)
  //         tvp = _tab.offset().top,
  //         tabIndex = _tabItemNow.index() / 2,
  //         scollDistance = tvp + tabItemHeight * tabIndex - tab_headerHeight;
  //       _tabItem.removeClass('active');
  //       _tabItemNow.addClass('active');
  //       if (ww <= wwSmall) {
  //         _tabItem.not('.active').next().slideUp();
  //         _tabItemNow.next().slideDown();
  //         $('html,body').stop(true, false).animate({ scrollTop: scollDistance });
  //       } else {
  //         _tabItem.not('.active').next().hide();
  //         _tabItemNow.next().show();
  //         tabContentHeight = _tabItemNow.next().innerHeight();
  //         _tab.height(tabContentHeight + tabItemHeight);
  //       }
  //       e.preventDefault();
  //     }
  //   });
  // }
  // $('.tabs>.tabItem:first-child>a').trigger('click');
  // tabSet();

  /*-----------------------------------*/
  ///////////////置頂go to top////////////
  /*-----------------------------------*/
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 200) {
      $('.scrollToTop').fadeIn(200);
    } else {
      $('.scrollToTop').fadeOut(200);
    }
  });
  /*-----------------------------------*/
  /////click event to scroll to top//////
  /*-----------------------------------*/
  $('.scrollToTop')
    .off()
    .on('click', function (e) {
      $('html, body').stop().animate({ scrollTop: 0 }, 400, 'linear');
      // $('a.goCenter').focus(); //加入這行
      e.preventDefault();
    });
  $('.scrollToTop').keydown(function (e) {
    $('html, body').stop().animate({ scrollTop: 0 }, 400, 'linear');
    _body.find('a.goCenter').focus();
    e.preventDefault();
  });
  /*--------------------------------------------------------*/
  /////設定img 在IE9+ SAFARI FIREFOX CHROME 可以object-fit/////
  /*--------------------------------------------------------*/
  var userAgent, ieReg, ie;
  userAgent = window.navigator.userAgent;
  ieReg = /msie|Trident.*rv[ :]*11\./gi;
  ie = ieReg.test(userAgent);
  if (ie) {
    $('.img-container').each(function () {
      var imgUrl = $(this).find('img').attr('data-src');
      var $container = $(this);
      $container.has('.none').addClass('ie-object-none');
      $container.has('.none').css('backgroundImage', 'url(' + imgUrl + ')');
      $container.has('.cover').addClass('ie-object-cover');
      $container.has('.cover').css('backgroundImage', 'url(' + imgUrl + ')');
      $container.has('.fill').addClass('ie-object-fill');
      $container.has('.fill').css('backgroundImage', 'url(' + imgUrl + ')');
      $container.has('.contain').addClass('ie-object-contain');
      $container.has('.contain').css('backgroundImage', 'url(' + imgUrl + ')');
    });
  }
  /*-----------------------------*/
  /////form表單 placeholder隱藏/////
  /*-----------------------------*/
  // $('input,textarea').focus(function() {
  //     $(this).removeAttr('placeholder');
  // });
  $('input[type="checkbox"]')
    .off()
    .on('click', function (e) {
      $(this).blur();
    });
  /*------------------------------------*/
  /////form表單 單個檔案上傳+多個檔案上傳/////
  /*------------------------------------*/
  $(document).on('change', '.check_file', function () {
    var names = [];
    var length = $(this).get(0).files.length;
    for (var i = 0; i < $(this).get(0).files.length; ++i) {
      names.push($(this).get(0).files[i].name);
    }
    // $('input[name=file]').val(names);
    if (length > 2) {
      var fileName = names.join(', ');
      $(this)
        .closest('.upload_grp')
        .find('.upload_file')
        .attr('value', length + ' files selected');
    } else {
      $(this).closest('.upload_grp').find('.upload_file').attr('value', names);
    }
  });
  /*------------------------------------*/
  //////////分享按鈕 share dropdwon////////
  /*------------------------------------*/
  $('.function_panel .share').children('ul').hide();
  $('.function_panel .share').prepend('<a href="#" class="shareButton">share分享按鈕</a>');
  var _shareButton = $('.shareButton');
  _shareButton.off().on('click', function (e) {
    $(this).siblings('ul').stop(true, true).slideToggle();
    e.preventDefault();
  });
  _shareButton.keyup(function (event) {
    $(this).siblings('ul').stop(true, true).slideDown();
  });
  $('.function_panel .share')
    .find('li:last>a')
    .focusout(function (event) {
      $(this).parent().parent('ul').hide();
    });
  // 點外面關閉share
  $(document).on('touchend click', function (e) {
    var container = $('.function_panel .share');
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $('.function_panel .share ul').hide();
    }
  });
  /*------------------------------------*/
  /////////////字型大小 font-size//////////
  /*------------------------------------*/
  $('.font_size')
    .find('.small')
    .on('click', function (e) {
      $(this).parent('li').siblings('li').find('a').removeClass('active');
      $('.innerpage').removeClass('large_size').addClass('small_size');
      $(this).blur().addClass('active');
      e.preventDefault();
      createCookie('FontSize', 'small', 356);
    });
  $('.font_size')
    .find('.medium')
    .on('click', function (e) {
      $(this).parent('li').siblings('li').find('a').removeClass('active');
      $('.innerpage').removeClass('large_size small_size');
      $(this).blur().addClass('active');
      e.preventDefault();
      createCookie('FontSize', 'medium', 356);
    });
  $('.font_size')
    .find('.large')
    .on('click', function (e) {
      $(this).parent('li').siblings('li').find('a').removeClass('active');
      $('.innerpage').removeClass('small_size').addClass('large_size');
      $(this).blur().addClass('active');
      e.preventDefault();
      createCookie('FontSize', 'large', 356);
    });

  function createCookie(name, value, days) {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      var expires = '; expires=' + date.toGMTString();
    } else expires = '';
    document.cookie = name + '=' + value + expires + '; path=/';
  }

  function readCookie(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  $(window).on('load', function (e) {
    var cookie = readCookie('FontSize');
    //alert('cookie='+cookie);
    if (cookie == 'small') {
      //$('.font_size').find('.small').click();
      $('.font_size').find('.small').parent('li').siblings('li').find('a').removeClass('active');
      $('.innerpage').removeClass('large_size medium_size').addClass('small_size');
      $('.font_size').find('.small').addClass('active');
      e.preventDefault();
    } else {
      if (cookie == 'large') {
        //$('.font_size').find('.large').click();
        $('.font_size').find('.large').parent('li').siblings('li').find('a').removeClass('active');
        $('.innerpage').removeClass('small_size medium_size').addClass('large_size');
        $('.font_size').find('.large').addClass('active');
        e.preventDefault();
      } else {
        //這裡是預設宣告
        //$('.font_size').find('.medium').click();
        $('.font_size').find('.medium').parent('li').siblings('li').find('a').removeClass('active');
        $('.innerpage').removeClass('large_size small_size');
        $('.font_size').find('.medium').addClass('active');
        e.preventDefault();
      }
    }
  });
  /*-----------------------------------*/
  /////////// category active  //////////
  /*-----------------------------------*/
  $('.category')
    .find('a')
    .off()
    .on('click', function (event) {
      $(this).parent('li').siblings().find('a').removeClass('active');
      $(this).addClass('active').blur();
    });
  /*-----------------------------------*/
  /////////// 無障礙快捷鍵盤組合  //////////
  /*-----------------------------------*/
  $(document).on('keydown', function (e) {
    // alt+S 查詢
    if (e.altKey && e.keyCode == 83) {
      $('html, body').animate({ scrollTop: 0 }, 200, 'easeOutExpo');
      $('.search').find('input[type="text"]').focus();
    }
    // alt+U header
    if (e.altKey && e.keyCode == 85) {
      $('html, body').animate({ scrollTop: 0 }, 200, 'easeOutExpo');
      $('header').find('.accesskey').focus();
    }
    // alt+C 主要內容區
    if (e.altKey && e.keyCode == 67) {
      $('html, body')
        .stop(true, true)
        .animate({ scrollTop: $('.main').find('.accesskey').offset().top - 70 }, 800, 'easeOutExpo');
      $('.main').find('.accesskey').focus();
    }
    // alt+Z footer
    if (e.altKey && e.keyCode == 90) {
      $('html, body')
        .stop(true, true)
        .animate({ scrollTop: $('footer').find('.accesskey').offset().top }, 800, 'easeOutExpo');
      $('footer').find('.accesskey').focus();
    }

    if (e.key == 'Escape') {
      $('.language ul').slideUp();
      $('.language > a').blur();
      $('.menu ul li ul').hide();
      $('.menuArrowDown, .menuArrowUp').remove();
    }
  });

  //無障礙切換slick箭頭語系
  if ($('html')[0].hasAttribute('lang')) {
    var weblang = $('html').attr('lang');
    if (weblang.substring(0, 2) == 'zh') {
      $('.slick-prev').attr('title', '上一筆');
      $('.slick-next').attr('title', '下一筆');
    } else if (weblang.substring(0, 2) !== 'zh') {
      $('.slick-prev').attr('title', 'previous');
      $('.slick-next').attr('title', 'next');
    }
  }
  // 無障礙錨點切換語系，更改accesskey的title名稱
  var weblang = $('html').attr('lang');
  if (weblang.substring(0, 2) == 'zh') {
    $('header').find('.accesskey').attr('title', '上方功能區塊');
    $('.main').find('.accesskey').attr('title', '中央內容區塊');
    $('footer').find('.accesskey').attr('title', '下方功能區塊');
    $('.search').find('.accesskey').attr('title', '關鍵字搜尋：文章關鍵字搜尋');
  } else if (weblang.substring(0, 2) !== 'zh') {
    $('header').find('.accesskey').attr('title', 'header');
    $('.main').find('.accesskey').attr('title', 'content');
    $('footer').find('.accesskey').attr('title', 'footer');
    $('.search').find('.accesskey').attr('title', 'search');
  }
  /*------------------------------------*/
  /////gotoCenter on focus跳到 content/////
  /*------------------------------------*/
  $('a.goCenter').keydown(function (e) {
    if (e.which == 13) {
      $('#aC').focus();
      $('html, body')
        .stop(true, true)
        .animate({ scrollTop: $('.main').find('.accesskey').offset().top }, 800, 'easeOutExpo');
    }
  });
  /*-----------------------------------*/
  //////// 語言模組 無障礙遊走設定  ////////
  /*-----------------------------------*/
  $('.language').find('ul').hide();
  var openLang = $('.language').children('a');
  openLang.off().on('click', function (e) {
    $(this).next('ul').stop(true, true).slideToggle();
    e.preventDefault();
  });
  openLang.keyup(function () {
    $(this).next('ul').stop(true, true).slideDown();
  });
  $('.language')
    .find('ul li:last>a')
    .focusout(function () {
      $('.language').find('ul').hide();
    });
  $(document).on('touchend click', function (e) {
    var target = e.target;
    if (!$(target).is('.language a')) {
      $('.language').find('ul').hide();
    }
  });
  // /*------------------------------------*/
  // ///////table 加上響應式 scroltable-wrapper/////
  // /*------------------------------------*/
  $('table').each(function (index, el) {
    //判斷沒有table_list
    if ($(this).parents('.table_list').length == 0 && $(this).parents('.fix_th_table').length == 0 && $(this).parent('form').length == 0) {
      $(this).scroltable();
    }
  });
  // tablearrow arrow，為了設定箭頭
  $('.scroltable-nav-left').append('<div class="tablearrow_left" style="display:none;"></div>');
  $('.scroltable-nav-right').append('<div class="tablearrow_right"  style="display:none;"></div>');
  // 固定版頭
  function table_Arrow() {
    if ($('table').parents('.table_list').length == 0 && $('table').parents('.fix_th_table').length == 0 && $(this).parent('form').length == 0) {
      if ($('.scroltable-wrapper').length > 0) {
        var stickyArrowTop = Math.floor($('.scroltable-wrapper').offset().top),
          thisScroll = Math.floor($(this).scrollTop());
        if (thisScroll > stickyArrowTop - 230) {
          $('.scroltable-wrapper .tablearrow_left').css('display', 'block');
          $('.scroltable-wrapper .tablearrow_left').css({ top: thisScroll - stickyArrowTop + 220 }, 100, 'easeOutQuint');
          $('.scroltable-wrapper .tablearrow_right').css('display', 'block');
          $('.scroltable-wrapper .tablearrow_right').css({ top: thisScroll - stickyArrowTop + 220 }, 100, 'easeOutQuint');
        } else {
          $('.scroltable-wrapper .tablearrow_left').css({
            top: '10px',
            display: 'none',
          });
          $('.scroltable-wrapper .tablearrow_right').css({
            top: '10px',
            display: 'none',
          });
        }
      }
    }
  }
  $(window).scroll(function (event) {
    table_Arrow();
  });
  var scrollTimer;
  $(window).scroll(function () {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(function () {
      table_Arrow();
    }, 50);
  });
  // /*------------------------------------*/
  // //////////table 加上 data-title//////////
  // /*------------------------------------*/
  function rwdTable() {
    $('.table_list')
      .find('table')
      .each(function () {
        var $row = $(this).find('tr');
        rowCount = $row.length;
        for (var n = 1; n <= rowCount; n++) {
          $(this)
            .find('th')
            .each(function (index) {
              var thText = $(this).text();
              $row.eq(n).find('td').eq(index).attr('data-title', thText);
            });
        }
      });
  }
  rwdTable();
  /*-----------------------------------*/
  ////////////// lazy load //////////////
  /*-----------------------------------*/
  var lazyLoadInstance = new LazyLoad({
    elements_selector: 'img.lazy',
    placeholder: '/images/basic/placeholder.gif',
    effect: 'fadeIn',
    fadeTime: 600,
    threshold: 0,
  });
});

// 亂數數字
function randomFloor(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// 亂數英文字
function randomLetter(max) {
  let text = '';
  let letter = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < max; i++) text += letter.charAt(Math.floor(Math.random() * letter.length));
  return text;
}
function tabFunction(obj) {
  'use strict';
  // const tabSet = document.querySelector(obj.target) || null;
  const tabSet = document.querySelectorAll(obj.target) || null;
  const autoClose = obj.autoClose;
  const openSwitch = obj.openSwitch;
  const openFirst = obj.openFirst;
  const modeSwitch = obj.modeSwitch;
  const widthCheck = obj.width;

  if (tabSet) {
    tabSet.forEach((tab) => {
      let id = [];
      let mode = '';
      let modeBBtn;
      const modeABtn = tab.querySelectorAll('.tabItems button');
      const modeAContent = tab.querySelectorAll('.tabContent');
      const modeBContent = tab.querySelectorAll('.content');
      const count = modeABtn.length;
      let nowIndex = obj.index === null ? null : obj.index <= count ? obj.index : count;
      const lastTab = modeABtn[modeABtn.length - 1];

      for (let i = 0; i < modeABtn.length; i++) {
        id.push(`tab_${randomLetter(3)}${randomFloor(0, 999)}`);
      }

      // 內容增加標題給模式B使用
      modeABtn.forEach((item, index) => {
        const btn = document.createElement('button');
        btn.classList.add('modeBBtn');
        btn.innerText = item.innerText;
        modeAContent.forEach((content, i) => (i === index ? content.prepend(btn) : null));
      });

      modeBBtn = tab.querySelectorAll('.modeBBtn');

      // 判斷寬度
      const init = () => {
        if (window.innerWidth <= widthCheck && modeSwitch) {
          // 模式B
          mode = 'B';
          if (modeSwitch) {
            modeABtn.forEach((content) => content.classList.remove('active'));
            modeAContent.forEach((content) => content.classList.remove('active'));
            // 移除模式A無障礙設置
            modeABtn.forEach((item, index) => {
              item.removeAttribute('aria-controls');
              item.removeAttribute('role');
              modeAContent[index].removeAttribute('aria-labelledby');
              modeAContent[index].removeAttribute('role');
              modeAContent[index].removeAttribute('aria-label');
            });
            // 增加模式B無障礙設置
            modeBBtn.forEach((item, index) => {
              item.setAttribute('aria-controls', id[index]);
              modeBContent[index].setAttribute('aria-labelledby', id[index]);
              modeBContent[index].setAttribute('id', id[index]);
              // item.setAttribute('role', 'tab');
              // modeBContent[index].setAttribute('role', 'tabpanel');
              modeBContent[index].setAttribute('aria-label', item.innerText);
            });

            tab.classList.add('modeB');

            if (nowIndex !== null) {
              modeBBtn[nowIndex].classList.add('active');
              modeBBtn[nowIndex].setAttribute('aria-selected', 'true');
              modeBContent[nowIndex].classList.add('active');
            }
          }
          // 模式B
        } else if (window.innerWidth > widthCheck || !modeSwitch) {
          // 模式A
          mode = 'A';

          if (modeSwitch) {
            modeBContent.forEach((item) => item.style.removeProperty('display'));
            modeBBtn.forEach((content) => content.classList.remove('active'));
            modeBContent.forEach((content) => content.classList.remove('active'));

            // 移除模式B無障礙設置
            modeBBtn.forEach((item, index) => {
              item.removeAttribute('aria-controls');
              item.removeAttribute('role');
              modeBContent[index].removeAttribute('aria-labelledby');
              modeBContent[index].removeAttribute('role');
              modeBContent[index].removeAttribute('aria-label');
              modeBContent[index].removeAttribute('id');
            });
          }
          // 增加模式A無障礙設置
          modeABtn.forEach((item, index) => {
            item.setAttribute('aria-controls', id[index]);
            item.setAttribute('role', 'tab');
            item.setAttribute('aria-selected', 'false');
            modeAContent[index].setAttribute('aria-labelledby', id[index]);
            modeAContent[index].setAttribute('role', 'tabpanel');
            modeAContent[index].setAttribute('aria-label', item.innerText);
          });

          tab.classList.remove('modeB');

          nowIndex === null ? (nowIndex = 0) : nowIndex;
          modeABtn[nowIndex].classList.add('active');
          modeAContent[nowIndex].classList.add('active');
          modeABtn[nowIndex].setAttribute('aria-selected', 'true');
          // 模式A
        }
      };
      init();

      // 預先展開模式
      function openCheck() {
        // 預先展開模式
        if (!openFirst && mode === 'B' && nowIndex !== null) {
          const siblings = Array.prototype.filter.call(modeBContent[nowIndex].parentElement.parentElement.children, (child) => {
            return child !== modeBContent[nowIndex].parentElement;
          });
          siblings.forEach((item) => $(item).find('.content').slideUp('fast'));
        } else if (mode === 'B' && nowIndex === null) {
          modeBContent.forEach((item) => $(item).slideUp('fast'));
        } else {
          modeBContent.forEach((item) => $(item).slideDown('fast'));
        }
      }
      openCheck();

      // 模式A共用
      function modeAFn(item, index) {
        modeABtn.forEach((content) => content.classList.remove('active'));
        modeAContent.forEach((content) => content.classList.remove('active'));
        modeAContent[index].classList.add('active');
        item.classList.add('active');
        modeABtn.forEach((content) => content.setAttribute('aria-selected', 'false'));
        item.setAttribute('aria-selected', 'true');
        nowIndex = index;
      }

      modeAContent.forEach((item, index) => {
        const itemAllTarget = modeAContent[index].querySelectorAll('a,button,input,textarea,select');
        const firstItem = itemAllTarget[1];
        const lastItem = itemAllTarget[itemAllTarget.length - 1];
        const prevItemAllTarget = modeAContent[index - 1]?.querySelectorAll('a,button,input,textarea,select');
        const siblings = Array.prototype.filter.call(modeBBtn[index].parentElement.parentElement.children, (child) => {
          return child !== modeBBtn[index].parentElement;
        });

        // 模式A
        if (modeSwitch || mode === 'A') {
          // 模式A點擊
          if (openSwitch) {
            modeABtn[index].addEventListener('click', (e) => {
              e.preventDefault();
              modeAFn(e.target, index);
            });

            // 模式A鍵盤
            modeABtn[index].addEventListener('keydown', (e) => {
              if (e.which === 9 && !e.shiftKey) {
                modeAFn(e.target, index);
                if (itemAllTarget.length > 1 && e.target !== lastTab) {
                  e.preventDefault();
                  firstItem.focus();
                } else if (itemAllTarget.length === 1 && e.target !== lastTab) {
                  e.preventDefault();
                  modeABtn[index + 1]?.focus();
                } else if (itemAllTarget.length > 1 && e.target === lastTab) {
                  modeABtn[index + 1]?.focus();
                } else if (itemAllTarget.length === 1 && e.target === lastTab) {
                  setTimeout(() => {
                    lastTab.focus();
                    lastTab.blur();
                  }, 10);
                }
              } else if (e.which === 9 && e.shiftKey) {
                e.preventDefault();
                modeAFn(modeABtn[index], index);
                lastItem?.focus();
                if (itemAllTarget.length === 1) {
                  modeABtn[index - 1]?.focus();
                }
              }
            });
          }
        }

        // 模式B
        if (modeSwitch || mode === 'B') {
          // 模式B點擊
          if (openSwitch) {
            modeBBtn[index].addEventListener('click', (e) => {
              e.preventDefault();
              siblings.forEach((content) => content.querySelector('.modeBBtn').classList.remove('active'));
              e.target.classList.toggle('active');
              $(modeBContent[index]).slideToggle('fast');
              nowIndex = index;

              if (autoClose) {
                siblings.forEach((con) => {
                  $(con.querySelector('.content')).slideUp('fast');
                  con.classList.remove('active');
                  con.querySelector('.modeBBtn').setAttribute('aria-selected', 'false');
                });
              }
            });

            // 模式B鍵盤
            modeBBtn[index].addEventListener('keydown', (e) => {
              e.target.classList.add('active');
              let firstTabStyle = window.getComputedStyle(modeBContent[index]);
              nowIndex = index;

              if (autoClose & !openFirst) {
                siblings.forEach((content) => {
                  $(content.querySelector('.content')).slideUp('fast');
                  content.querySelector('.modeBBtn').classList.remove('active');
                  content.querySelector('.modeBBtn').setAttribute('aria-expanded', 'false');
                });
              }

              if (e.which === 9 && !e.shiftKey) {
                $(modeBContent[index]).slideDown('fast');
                if (index === 0) {
                  e.target.classList.add('active');
                }

                if (itemAllTarget.length > 1) {
                  e.preventDefault();
                  firstItem?.focus();
                } else if (itemAllTarget.length === 1) {
                  modeBBtn[index]?.focus();
                }
              } else if (e.which === 9 && e.shiftKey) {
                e.preventDefault();
                $(modeBContent[index]).slideDown('fast');
                if (itemAllTarget.length > 1) {
                  lastItem?.focus();
                } else if (itemAllTarget.length === 1) {
                  modeBBtn[index - 1]?.focus();
                }
              }
            });
          }
        }

        // 內容鍵盤遊走
        itemAllTarget.forEach((n, i) => {
          if (i > 0) {
            n.addEventListener('keydown', (e) => {
              if (mode === 'A') {
                if ((e.which === 9 && !e.shiftKey && e.target === lastItem && modeABtn[index] !== lastTab) || (e.which === 9 && e.shiftKey && e.target === firstItem)) {
                  modeABtn[index]?.focus();
                }
              } else if (mode === 'B') {
                if (e.which === 9 && e.shiftKey) {
                  if (e.target === firstItem) {
                    modeBBtn[index]?.focus();
                  } else if (itemAllTarget.length === 1) {
                    modeBBtn[index - 1]?.focus();
                  }
                }
              }
            });
          }
        });
      });

      window.addEventListener('resize', init);
    });
  }
}

// tabFunction({
//   target: '.tabSet',
//   openFirst: false, // 預設先展開所有內容，鍵盤的自動開合功能無效
//   openSwitch: true, // 是否可開合/切換
//   autoClose: true, // 自動關閉其他開啟內容
//   modeSwitch: true, // 預設模式自動切換，尺寸以上tab功能，尺寸以下手風琴功能
//   width: 767, // 尺寸以上tab功能，尺寸以下手風琴功能
//   index: 0, // 預設開啟第幾個
// });

// -----   fancyBox新增需要綁定才有效果
if ($('[data-fancybox]').length > 0) {
  Fancybox.bind('[data-fancybox]');
}

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

    gsap.to(ac_move, 1, {
      y: (height - (windowScrollTop - offset.top)) / 8,
    });
  });
  acBoxUpElem?.forEach((item) => {
    let height = item.clientHeight;
    let ac_move = item;
    let rect = item.getBoundingClientRect();
    let offset = {
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
    };
    gsap.to(ac_move, 1, {
      y: -(height - (windowScrollTop - offset.top)) / 8,
    });
  });
};

window.addEventListener('scroll', acMove);
window.addEventListener('load', acMove);
window.addEventListener('resize', acMove);

(function () {
  let headButton = document.querySelector('.headButton');
  let memberClose = document.querySelector('.member .close');
  let memberBox = document.querySelector('.member');
  headButton?.addEventListener('click', () => {
    memberBox.classList.toggle('active');
  });
  memberClose?.addEventListener('click', () => {
    memberBox.classList.toggle('active');
  });

  const header = document.querySelector('header');
  function scrollCheck() {
    let windowScrollTop = window.scrollY;
    if (windowScrollTop > 5) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  scrollCheck();
  window.addEventListener('scroll', scrollCheck);
})();

(function () {
  const header = document.querySelector('header');

  // const goTop = document.querySelector('.goTop');
  // goTop.addEventListener('click', () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // });

  const mobileBtn = document.querySelector('.mobileBtn');
  const menuBox = document.querySelector('.menuBox');
  const topNavBox = document.querySelector('.topNavBox');
  const mobileNav = topNavBox.cloneNode(true);
  const lastLi = mobileNav.querySelector('li:last-child');
  if (lastLi) lastLi.remove();

  menuBox.append(mobileNav);

  mobileBtn.addEventListener('click', () => {
    header.classList.toggle('menuOpen');

    if (window.getComputedStyle(menuBox).display === 'none') {
      menuBox.style.display = 'block';
      setTimeout(() => {
        menuBox.style.transitionDuration = `300ms`;
        menuBox.style.transitionProperty = 'all';
        menuBox.style.transform = 'translate(0%, 0%)';
      });
      setTimeout(() => {
        menuBox.style.removeProperty('transition-duration');
        menuBox.style.removeProperty('transition-property');
      }, 300);
    } else {
      setTimeout(() => {
        menuBox.style.transitionDuration = `300ms`;
        menuBox.style.transitionProperty = 'all';
        menuBox.style.transform = 'translate(-100%, 0%)';
      });
      setTimeout(() => {
        menuBox.removeAttribute('style');
      }, 300);
    }
  });
})();

(function () {
  const mainMenu = document.querySelector('.menuBox');
  const hasChildUl = mainMenu.querySelectorAll('li ul');
  const firstHasChildUl = document.querySelectorAll('.menuBox > ul > li > ul');
  hasChildUl.forEach((i) => i.parentNode.classList.add('hasChild'));
  firstHasChildUl.forEach((i) => {
    let bg = document.createElement('div');
    bg.classList.add('bg');
    i.parentNode.append(bg);
  });

  const hasChildA = mainMenu.querySelectorAll('.hasChild');
  hasChildA.forEach((i) => {
    let bg = i.querySelector('.bg');
    i.addEventListener('mouseenter', (e) => {
      if (window.outerWidth > 1000) {
        e.preventDefault();
        i.classList.add('active');
        let bgHeight = i.querySelector('ul').offsetHeight + document.querySelector('header').offsetHeight;
        bg.style.height = `${bgHeight + 30}px`;
      }
    });
    i.addEventListener('mouseleave', (e) => {
      if (window.outerWidth > 1000) {
        e.preventDefault();
        i.classList.remove('active');
        // if (window.getComputedStyle(bg).display === 'block') {
        //   setTimeout(() => {
        //     bg.style.transitionDuration = `300ms`;
        //     bg.style.transitionProperty = 'all';
        //     bg.style.opacity = 0;
        //   });
        //   setTimeout(() => {
        //     bg.removeAttribute('style');
        //   }, 300);
        // }
      }
    });
    i.querySelector('a').addEventListener('click', (e) => {
      if (window.outerWidth <= 1000) {
        e.preventDefault();
        e.target.parentNode.classList.toggle('active');
      }
    });
  });
  window.addEventListener('resize', () => {
    hasChildA.forEach((i) => i.classList.remove('active'));
    if (window.outerWidth <= 1000) {
      mainMenu.removeAttribute('style');
    }
  });
})();
