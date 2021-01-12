$(document).ready(function() {
    alignEverything();
    hideSections();
    $(window).scroll(function() {
        hideSections();
    });
    $(window).resize(function() {
        alignEverything();
    });
});

function hideSections() {
    var winSTop = $(window).scrollTop();
    var winH = $(window).height() + $("#curved-border").height();
    var winH2 = winH * 3;
    $("#about-section").hide();
    $("#logo-hero").hide();
    $("#contact-section").hide();
    if(winSTop > winH2) {
        $("#contact-section").show();
    }
    else if(winSTop > winH) {
        $("#about-section").show();
    }
    else {
        $("#logo-hero").show();
        alignToWindowLandscape("#logo");;
    }
}


function alignEverything() {
    var winSTop = $(window).scrollTop();
    var winH = $(window).height() + $("#curved-border").height();
    if(winSTop <= winH) {
        alignToWindowLandscape("#logo");
    }
    $(".scroll-icon").css("padding-top", 0);
    $(".scrollable-image").css("margin-top", 0);
    $(".about-sec-item").css("margin-top", 0);
    if (window.matchMedia('(orientation: landscape)').matches || $(window).width() > $(window).height()) {
        alignToWindowLandscape(".scrollable-image");
        alignScrollIconLandscape("#vial-icon");
        alignScrollIconLandscape("#vial-icon2");
        alignScrollIconLandscape("#dropper-icon");
        alignScrollIconLandscape("#dropper-icon2");
        alignToWindowLandscape(".about-sec-item");
    }
    else if (window.matchMedia('(orientation: portrait)').matches || $(window).width() < $(window).height()) {
        alignScrollIconPortrait("#vial-icon");
        alignScrollIconPortrait("#vial-icon2");
    }
    alignToWindowLandscape("#logo");
}
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