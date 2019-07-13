$(document).ready(function(){

    $(window).scroll(function(){

        var wScroll = $(this).scrollTop();

        $(".scrollanimate .hide").each(function(i, item){
            //console.log($item);
            if(wScroll > $(item).offset().top - ($(window).height() / 1.3)){
                $(item).addClass('show');
            }
        });
    });

});