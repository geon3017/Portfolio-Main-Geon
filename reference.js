window.onscroll = function () {
    scrollRotate(); // DOM에서 함수 onscroll(),를 호출할 함수 를 만듭니다 scrollRotate()
    };
  
    function scrollRotate() { 
    // id를 통해 reload 요소를 찾으면 스크롤하여 회전하고 image변수에 저장합니다 .
    let smile = document.getElementById("reload");
    // 문서가 현재 세로축을 따라 스크롤되는 픽셀수를 반환하는 Window.pageYOffset 속성을 적용 합니다.
    smile.style.transform = "rotate(" + window.pageYOffset/-15 + "deg)";

    let rombo = document.getElementById("rel");
    // 문서가 현재 세로축을 따라 스크롤되는 픽셀수를 반환하는 Window.pageYOffset 속성을 적용 합니다.
    rombo.style.transform = "rotate(" + window.pageYOffset/15 + "deg)";

    let purple = document.getElementById("pu-star");
    // 문서가 현재 세로축을 따라 스크롤되는 픽셀수를 반환하는 Window.pageYOffset 속성을 적용 합니다.
    purple.style.transform = "rotate(" + window.pageYOffset/15 + "deg)";
    
    }
    // .projects .project-menu 프로젝트 부분
    $(document).ready(function() {
        $(window).scroll( function(){
            $('.projects .project-menu .box').each( function(i){
                
                var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                
                if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1', 'padding':'150px'},1000);
                }
        
            }); 
        });
    });

    // $(document).ready(function() {
    //     $(window).scroll( function(){
    //         $('.projects .project-menu .row-reverse').each( function(i){
                
    //             var bottom_of_element = $(this).offset().top + $(this).outerHeight();
    //             var bottom_of_window = $(window).scrollTop() + $(window).height();
                
    //             if( bottom_of_window > bottom_of_element ){
    //                 $(this).animate({'opacity':'1','margin-right':'0px'},1000);
    //             }
                
    //         }); 
    //     });
    // });


    // .projects .expl 목차부분
    $(document).ready(function() {
        $(window).scroll( function(){
            $('.projects .expl').each( function(i){
                
                var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                
                if( bottom_of_window > bottom_of_element ){
                    $(this).animate({'opacity':'1','margin-left':'150px'},1000);
                }
                
            }); 
        });
    });


    // 롤링
    $(document).ready(function(){
                       
        jQuery(function ($) {
             var ticker = function () {
                 timer = setTimeout(function () {
                     $('header .main-menu .main-text li:first').animate({
                         marginTop: '-60px'
                     }, 600, function () {
                         $(this).detach().appendTo('header .main-menu .main-text').removeAttr('style');
                     });
                     ticker();
                 }, 3000);
             };


             //4 마우스를 올렸을 때 기능 정지
             var tickerover = function () {
                 $('header .main-menu .main-text').mouseover(function () {
                     clearTimeout(timer);
                 });
                 $('header .main-menu .main-text').mouseout(function () {
                     ticker();
                 });
             };
             tickerover();
             // 4 끝
             ticker();
         });
     });

    // document.addEventListener('DOMContentLoaded', ()=>{
    //     var interval = window.setInterval(rollingCallback, 3000);
    // })
    // function rollingCallback(){
    //     //.prev 클래스 삭제
    //     document.querySelector('header .main-menu .main-text .prev').classList.remove('prev');
    
    //     //.current -> .prev
    //     let current = document.querySelector('header .main-menu .main-text .current');
    //     current.classList.remove('current');
    //     current.classList.add('prev');
    
    //     //.next -> .current
    //     let next = document.querySelector('header .main-menu .main-text .next');
    //     //다음 목록 요소가 널인지 체크
    //     if(next.nextElementSibling == null){
    //         document.querySelector('header .main-menu .main-text ul li:first-child').classList.add('next');
    //     }else{
    //         //목록 처음 요소를 다음 요소로 선택
    //         next.nextElementSibling.classList.add('next');
    //     }
    //     next.classList.remove('next');
    //     next.classList.add('current');
    // }



