window.onscroll = function () {
  scrollRotate(); // DOM에서 함수 onscroll(),를 호출할 함수 를 만듭니다 scrollRotate()
};

function scrollRotate() {
  // id를 통해 reload 요소를 찾으면 스크롤하여 회전하고 image변수에 저장합니다 .
  let smile = document.getElementById('reload');
  // 문서가 현재 세로축을 따라 스크롤되는 픽셀수를 반환하는 Window.pageYOffset 속성을 적용 합니다.
  smile.style.transform = 'rotate(' + window.pageYOffset / -15 + 'deg)';

  let rombo = document.getElementById('rel');
  // 문서가 현재 세로축을 따라 스크롤되는 픽셀수를 반환하는 Window.pageYOffset 속성을 적용 합니다.
  rombo.style.transform = 'rotate(' + window.pageYOffset / 15 + 'deg)';

  let purple = document.getElementById('pu-star');
  // 문서가 현재 세로축을 따라 스크롤되는 픽셀수를 반환하는 Window.pageYOffset 속성을 적용 합니다.
  purple.style.transform = 'rotate(' + window.pageYOffset / 15 + 'deg)';
}

//****************************************************************************** */

// header - sub-menu
let prevScroll = window.scrollY;
console.log(prevScroll);

$(window).on('scroll', () => {
  // 스크롤시 변수에 저장
  let currentScroll = window.scrollY;
  console.log('currentScroll', currentScroll);
  console.log('1prevScroll', prevScroll);

  // 이전 스크롤 값이 크면 true, 스크롤을 올리면 header 보임
  if (prevScroll > currentScroll) {
    // $('header').show();
    $('.header').css({ top: 0 });
  } else {
    // 이후 스크롤 값이 크면 false, 스크롤을 내리면 header 숨김
    // $('header').hide();
    $('.header').css({ top: -150 });
  }

  // prev에 현재 스크롤 값 대입
  prevScroll = currentScroll;
  console.log('2prevScroll', prevScroll);
});

//************************************************************ */

// menu 버튼
$(function () {
  $('.checkbox').on('click', () => {
    $('.hamburger_btn').toggleClass('active');
    $('.menu').slideToggle(); // == display: block
  });
});

$('#project').on('click', () => {
  $('.menu').slideToggle();
});

$('#about').on('click', () => {
  $('.menu').slideToggle();
});

$('#home').on('click', () => {
  $('.menu').slideToggle();
});

//***************************************************************** */

// .projects .project-menu 프로젝트 fade in부분
$(document).ready(function () {
  $(window).scroll(function () {
    $('.projects .project-menu .box').each(function (i) {
      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element) {
        $(this).animate({ opacity: '1', padding: '150px' }, 1000);
      }
    });
  });
});

//********************************************************************** */
// .projects .expl 목차부분 fade in부분

$(document).ready(function () {
  $(window).scroll(function () {
    $('.projects .expl').each(function (i) {
      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element) {
        $(this).animate({ opacity: '1', 'margin-left': '150px' }, 1000);
      }
    });
  });
});

//************************************************************************* */

//**************************************************************************** */

// 롤링
// jQuery(function ($) {
//   let ticker = function () {
//     timer = setTimeout(function () {
//       $('.rollingV .rolling_box .aniText:first').animate(
//         {
//           marginTop: '130px',
//         },
//         800,
//         function () {
//           $(this)
//             .detach()
//             .appendTo('.rollingV .rolling_box')
//             .removeAttr('style');
//         }
//       );
//       ticker();
//     }, 3000);
//   };

//   //4 마우스를 올렸을 때 기능 정지
//   let tickerover = function () {
//     $('.rollingV .rolling_box').mouseover(function () {
//       clearTimeout(timer);
//     });
//     $('.rollingV .rolling_box').mouseout(function () {
//       ticker();
//     });
//   };
//   tickerover();
//   // 4 끝
//   ticker();
// });
