$(document).ready(function() {
    alignEverything();
    $("#about-section").hide();
    $("#contact-section").hide();
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
            alignToWindowLandscape("#logo");;
        }
    });
    $(window).resize(function() {
        var winSTop = $(window).scrollTop();
        var winH = $(window).height() + $("#curved-border").height();
        if(winSTop <= winH) {
            alignToWindowLandscape("#logo");
        }
        alignEverything();
    });
});


function alignToWindowLandscape(e){
    var that = $(e);
    var height = that.height();
    var parentHeight = $(window).height();
    var padAmount = (parentHeight / 2) - (height/2);
    that.css("margin-top", padAmount);
}

function alignScrollIconLandscape(e) {
    var that = $(e);
    var height = that.height();
    var iconHeight = $(window).width() * 0.2;
    var padAmount = (height/ 2) - (iconHeight/2);
    that.css("padding-top", padAmount);
}

function alignScrollIconPortrait(e) {
    var height = e.height();
    var parentHeight = $(window).height();
    var padAmount = (parentHeight / 2) - (height/2);
    e.css("padding-top" , padAmount);
}

function alignEverything() {
    alignToWindowLandscape("#logo");
    if ($(window).width() >= $(window).height()) {
        alignToWindowLandscape(".scrollable-image");
        alignToWindowLandscape(".about-sec-item");
        alignScrollIconLandscape("#vial-icon");
        alignScrollIconLandscape("#vial-icon2");
        alignScrollIconLandscape("#dropper-icon");
        alignScrollIconLandscape("#dropper-icon2");
    }
    else {
        alignScrollIconPortrait("#vial-icon");
        alignScrollIconPortrait("#vial-icon2");
    }
}