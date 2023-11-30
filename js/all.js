$(document).ready(function () {
    $(window).scroll( e => {
        let scrollY = window.scrollY;
        let windowHeight = $(window).height();

        // scrollToTop 按鈕出現
        if (scrollY > 300) {
            $('.scrollToTop').fadeIn();
        } else{
            $('.scrollToTop').fadeOut();
        }

        //animated 滾動套用CSS效果
        $('.animated').each(function(){
            let thisPos = $(this).offset().top;
            if((windowHeight + scrollY) >= thisPos){
                $(this).addClass('fadeIn');
            }
        });
    });

    // scrollToTop 按鈕按下後置頂事件
    $('.scrollToTop').click( e => { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop:0 }, 10);
    });
})