$(document).ready(function() {

    $(window).scroll(function() {

        var wScroll = $(this).scrollTop();

        $(".scrollanimate .hide").each(function(i, item) {
            //console.log($item);
            if (wScroll > $(item).offset().top - ($(window).height() / 1.3)) {
                $(item).addClass('show');
            }
        });

        var $blur = $(".scrollanimate.blur");
        var bluerTrue = false;

        if (wScroll > $blur.offset().top + ($blur.height() / 2) && wScroll < $blur.offset().top + $blur.height()) {
            $blur.css("filter", `blur(${(wScroll / $blur.height()) * 4}px)`);

            //$blur.css("filter", "blur()")
        } else if (wScroll < $blur.offset().top + ($blur.height() / 2) && $blur.css('filter') != "blur(0px)") {
            $blur.css("filter", "blur(0px)");

        }
    });

});