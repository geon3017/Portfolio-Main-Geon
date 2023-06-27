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
    setInterval(function(){
        $('#slide2>ul').delay(3000);
        $('#slide2>ul').animate({marginTop: "-200px"})
        $('#slide2>ul').delay(3000);
        $('#slide2>ul').animate({marginTop: "-400px"})
        $('#slide2>ul').delay(3000);
        $('#slide2>ul').animate({marginTop: "0px"})
    });


