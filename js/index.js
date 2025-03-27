// 開啟畫面動態效果
new WOW({
  boxClass: 'wow', // default
  animateClass: 'animated', // default
  offset: 50, // default
  mobile: true, // default
  live: true, // default
}).init();

// let swiperNews = new Swiper('.newsBox .swiper1 .swiper', {
//   slidesPerView: 1,
//   pagination: {
//     el: '.newsBox .swiper1 .swiper-pagination',
//     clickable: true,
//   },
// });
// let swiperNews2 = new Swiper('.newsBox .swiper2 .swiper', {
//   slidesPerView: 1,
//   pagination: {
//     el: '.newsBox .swiper2 .swiper-pagination',
//     clickable: true,
//   },
// });

let swiperNews = new Swiper('.newsBox .mobileUse .swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.newsBox .mobileUse .swiper-button-next',
    prevEl: '.newsBox .mobileUse .swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
  },
});

let swiperHot = new Swiper('.hotBox .swiper', {
  slidesPerView: 1,
  spaceBetween: 5,
  navigation: {
    nextEl: '.hotBox .swiper-button-next',
    prevEl: '.hotBox .swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 3,
    },
  },
});
let swiperLink = new Swiper('section.linkBox .swiper', {
  slidesPerView: 3,
  spaceBetween: 5,
  centerInsufficientSlides: true,
  navigation: {
    nextEl: 'section.linkBox .swiper-button-next',
    prevEl: 'section.linkBox .swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});
// let swiperSustainability = new Swiper('.sustainabilityBox .swiper', {
//   slidesPerView: 1,
//   pagination: {
//     el: '.sustainabilityBox .swiper-pagination',
//     clickable: true,
//   },
// });

let swiperSustainability = new Swiper('.sustainabilityBox .mobileUse .swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.sustainabilityBox .mobileUse .swiper-button-next',
    prevEl: '.sustainabilityBox .mobileUse .swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
  },
});

let swiperCarbon = new Swiper('.carbonBox .swiper', {
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: '.carbonBox .swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1.3,
    },
    550: {
      slidesPerView: 2.3,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
let swiperCaptured = new Swiper('.capturedBox .swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.capturedBox .swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
    },
  },
});

let swiperJourney = new Swiper('.journeyBox .swiper', {
  slidesPerView: 3,
  spaceBetween: 50,
  pagination: {
    el: '.journeyBox .swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
    550: {
      slidesPerView: 2.3,
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

window.onload = async function () {
  const body = document.querySelector('body');
  body.classList.add('loading');
  let bannerHeight = document.querySelector('.cBanner').offsetHeight;

  function loading() {
    const welcome = document.querySelector('.welcome');
    const canvas = document.querySelector('#myCanvas');
    const ctx = canvas.getContext('2d');
    const video = document.querySelector('.cBanner video');

    window.addEventListener('resize', function () {
      bannerHeight = document.querySelector('.cBanner').offsetHeight;
      welcome.style.height = `${bannerHeight}px`;
    });
    // 設置 canvas 的寬高為視口的寬高
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawSquares();
      inFn();
    };

    // 繪製方塊
    let triangles = [];
    const drawSquares = () => {
      const squareSize = 80;
      const cols = Math.ceil(canvas.width / squareSize);
      const rows = Math.ceil(canvas.height / squareSize);
      triangles = []; // 清空之前的三角形
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * squareSize;
          const y = row * squareSize;
          const topLeft = { x, y };
          const topRight = { x: x + squareSize, y };
          const bottomLeft = { x, y: y + squareSize };
          const bottomRight = { x: x + squareSize, y: y + squareSize };
          triangles.push(
            // { points: [topLeft, topRight, bottomLeft], color: 'blue' },
            // { points: [topRight, bottomRight, bottomLeft], color: 'green' },
            { points: [topLeft, topRight, bottomRight], color: '#fff' },
            { points: [topLeft, bottomLeft, bottomRight], color: '#fff' }
          );
        }
      }
      drawTriangles();
    };

    const drawTriangles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      triangles.forEach((triangle) => {
        ctx.beginPath();
        ctx.moveTo(triangle.points[0].x, triangle.points[0].y);
        ctx.lineTo(triangle.points[1].x, triangle.points[1].y);
        ctx.lineTo(triangle.points[2].x, triangle.points[2].y);
        ctx.closePath();
        ctx.fillStyle = triangle.color;
        ctx.fill();
      });
    };

    const removeRandomTriangle = () => {
      if (triangles.length > 0) {
        const index = Math.floor(Math.random() * triangles.length);
        triangles.splice(index, 1);
        drawTriangles();
      }
    };

    const inFn = () => {
      let interval = setInterval(() => {
        removeRandomTriangle();
        if (triangles.length === 0) {
          clearInterval(interval);
        }
      }, 1); // 每50毫秒移除一個隨機三角形
    };

    // welcome.style.height = `${bannerHeight}px`;
    welcome.classList.add('active');
    resizeCanvas();
    inFn();
    window.addEventListener('resize', resizeCanvas);
    setTimeout(() => {
      // video.play();
      body.classList.remove('loading');

      let swiperBanner = new Swiper('.cBanner', {
        slidesPerView: 1,
        effect: 'fade',
        autoplay: {
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        pagination: {
          el: '.cBanner .swiper-pagination',
          bulletElement: 'button',
          clickable: true,
        },
      });
    });
  }

  // Wrap every letter in a span
  function fontFn(target) {
    let textWrapper = document.querySelector(`${target} .letters`);
    textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

    anime
      .timeline({ loop: false })
      .add({
        targets: `${target} .line`,
        opacity: [0.5, 1],
        easing: 'easeOutExpo',
        duration: 100,
      })
      .add({
        targets: `${target} .line`,
        translateX: [0, document.querySelector(`${target} .letters`).getBoundingClientRect().width + 10],
        easing: 'easeOutExpo',
        duration: 700,
        delay: 100,
      })
      .add({
        targets: `${target} .letter`,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 600,
        offset: '-=775',
        delay: (el, i) => 30 * (i + 1),
      })
      .add({
        targets: `${target} .line`,
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
      });
  }

  const bgT = document.querySelectorAll('.bgT svg');
  const topT = document.querySelector('.topT');

  // 定義一個函數來執行動畫，並在需要時插入其他函數
  async function processFontBox(box, delay, afterFn) {
    // 延遲執行
    await new Promise((resolve) => setTimeout(resolve, delay));

    // 設置目標元素的透明度
    let allBox = document.querySelectorAll(box);
    allBox.forEach((item) => (item.style.opacity = 1));
    // $(box).css('opacity', '1');
    // 執行動畫並等待完成
    fontFn(box);
    // 執行後置函數（如果有）
    if (afterFn) afterFn();
  }

  // 依次處理每個字體框
  await processFontBox('.fontBox1', 500, () => bgT[0].classList.add('active'));
  await processFontBox('.fontBox2', 500, null);
  await processFontBox('.fontBox3', 500, () => bgT[1].classList.add('active'));
  await processFontBox('.fontBox4', 500, () => setTimeout(() => topT.classList.add('active'), 1000));

  // 所有動畫完成後執行另一個函數
  setTimeout(() => {
    loading();
  }, 1500);

  const informationBoxPic = document.querySelector('.informationBox .picBox img');
  const informationBoxTitle = document.querySelector('.informationBox .picBox .title');
  const informationBoxBtn = document.querySelectorAll('.informationBox .listBox button');
  informationBoxBtn[0]?.parentNode.classList.add('active');
  informationBoxBtn?.forEach((item) => {
    item.addEventListener('click', () => {
      informationBoxBtn.forEach((i) => i.parentNode.classList.remove('active'));
      item.parentNode.classList.add('active');
      informationBoxPic.src = item.dataset.src;
      informationBoxTitle.textContent = item.textContent;
    });
  });

  const count1 = document.querySelector('.countBox .count1 span');
  const count2 = document.querySelector('.countBox .count2 span');
  const count3 = document.querySelector('.countBox .count3 span');
  const count4 = document.querySelector('.countBox .count4 span');
  const countAll = document.querySelectorAll('.countBox span');
  const check = document.querySelector('.countBox .listBox');
  const checkInWindow = check.getBoundingClientRect().top;

  function scrollCheck() {
    if (window.scrollY > checkInWindow - 100) {
      check.classList.add('active');
    } else {
      check.classList.remove('active');
    }
  }

  const options = {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.2,
  };
  const callback = (entries, observer) => {
    // if (entries[0].isIntersecting && !check.classList.contains('active')) {
    if (entries[0].isIntersecting) {
      check.classList.add('active');
      setTimeout(() => {
        animateNumber(count1, 0, 25000, 2000);
        animateNumber(count2, 0, 150000, 2000);
        animateNumber(count3, 0, 2185, 2000);
        animateNumber(count4, 0, 4250, 2000);
      }, 500);
    } else {
      countAll.forEach((item) => (item.textContent = '0'));
    }
  };

  const observer = new IntersectionObserver(callback, options);
  observer.observe(check);

  const serviceBox = document.querySelector('.serviceBox');
};

function animateNumber(element, start, stop, duration, ease) {
  let startTime = null;
  const isCountdown = start > stop;

  function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function animationStep(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }
    const elapsedTime = timestamp - startTime;
    const progress = elapsedTime / duration;
    let currentValue;
    if (isCountdown) {
      currentValue = Math.floor(start - (start - stop) * progress);
    } else {
      currentValue = Math.floor(start + (stop - start) * progress);
    }
    element.textContent = numberWithCommas(currentValue);
    if (progress < 1) {
      requestAnimationFrame(animationStep);
    } else {
      element.textContent = numberWithCommas(stop);
    }
  }
  requestAnimationFrame(animationStep);
}

function animateChart(element, start, stop, ease) {
  let startTime = null;
  const isCountdown = start > stop;
  let p = (stop * 100) / 1097;

  function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function animationStep(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }
    const elapsedTime = timestamp - startTime;
    const progress = elapsedTime / (p * 50);
    let currentValue;
    let currentValueP;
    if (isCountdown) {
      currentValue = Math.floor(start - (start - stop) * progress);
    } else {
      currentValue = Math.floor(start + (stop - start) * progress);
    }

    if (isCountdown) {
      currentValueP = Math.floor(start - (start - p) * progress);
    } else {
      currentValueP = Math.floor(start + (p - start) * progress);
    }

    element.style.height = `calc(${currentValueP}%)`;
    element.nextElementSibling.textContent = numberWithCommas(currentValue);
    if (progress < 1) {
      requestAnimationFrame(animationStep);
    } else {
      element.nextElementSibling.textContent = numberWithCommas(stop);
    }
  }
  requestAnimationFrame(animationStep);
}
