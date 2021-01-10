function alignToWindow(e){
    var that = $(e);
    var height = that.height();
    var parentHeight = $(window).height();
    var padAmount = (parentHeight / 2) - (height/2) - 35;
    that.css("margin-top", padAmount);
}

function alignScrollIcon(e) {
    var that = $(e);
    var height = that.height();
    var iconHeight = $(window).width() * 0.15;
    var padAmount = (height/ 2) - (iconHeight/2);
    that.css("padding-top", padAmount);
}

function alignEverything() {
    alignToWindow("#logo");
    if ($(window).width() > $(window).height()) {
        alignToWindow(".scrollable-image");
        alignScrollIcon("#vial-icon");
        alignScrollIcon("#vial-icon2");
        alignScrollIcon("#dropper-icon");
        alignScrollIcon("#dropper-icon2");
    }

}


$(document).ready(function() {
    $("#about-section").hide();
    $("#contact-section").hide();
    alignEverything();
    $(window).scroll(function() {
        var winSTop = $(window).scrollTop();
        var winH = $(window).height() + $("#curved-border").height();
        var winH2 = ($(window).height() + $("#curved-border").height()) * 3;
        if(winSTop > winH2) {
            $("#about-section").hide();
            $("#contact-section").show();
        }
        else if(winSTop > winH) {
            $("#contact-section").hide();
            $("#logo-hero").hide();
            $("#about-section").show();
        }
        else {
            $("#about-section").hide();
            $("#logo-hero").show();
            alignToWindow("#logo");
        }
    });
    $(window).resize(function() {
        var winSTop = $(window).scrollTop();
        var winH = $(window).height() + $("#curved-border").height();
        if(winSTop <= winH) {
            alignToWindow("#logo");
        }
        alignEverything();
    });
});