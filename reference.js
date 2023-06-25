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
