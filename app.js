$(document).ready(function(){
    $(window).scroll(function(){
        // scroll to rop
        let scrollToTop = $('.scrollToTop');
        if($(window).scrollTop() >= 900){
            if(scrollToTop.is(':hidden')){scrollToTop.fadeIn(400);}
        }else{
            scrollToTop.fadeOut(400);
        }
    });
    // click to top
    $('.scrollToTop').click(function (e) { 
        e.preventDefault();

        $('html , body').animate({
            scrollTop: 0
        },2000)
        
        })
})