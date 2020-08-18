$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 60) {
            $("nav").addClass("small");
            $("aside").addClass("fixed");
        }
        else {
            $("nav").removeClass("small");
            $("aside").removeClass("fixed");
        }
    });
});
