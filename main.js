$(document).ready(function() {
    $("#navDropdown").hide();
    if (window.matchMedia('(orientation: landscape)').matches) {
        alignEverything();
    }
    hideSections();
    $(window).resize(function() {
        alignEverything();
        hideSections();
    });
    $(window).on('resize orientationchange', function(){
        alignEverything();
        hideSections();
    });
    $(window).scroll(function() {
        hideSections();
    });
    $("#navbtn").click(function() {
        $("#navDropdown").toggle();
    });
});

function alignEverything() {
    var winSTop = $(window).scrollTop();
    var winH = $(window).height() + $("#curved-border").height();
    if(winSTop <= winH) {
        alignToWindowLandscape("#logo");
    }
    $(".scroll-icon").css("padding-top", 0);
    $(".scrollable-image").css("margin-top", 0);
    if(window.matchMedia('(orientation: landscape)').matches || $(window).width() > $(window).height()) {
        alignToWindowLandscape(".scrollable-image");
        alignScrollIconLandscape("#vial-icon");
        alignScrollIconLandscape("#vial-icon2");
        alignScrollIconLandscape("#dropper-icon");
        alignScrollIconLandscape("#dropper-icon2");
    } else if(window.matchMedia('(orientation: portrait)').matches || $(window).width() < $(window).height()) {
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

function hideSections() {
    var winSTop = $(window).scrollTop();
    var curvedHeight = $("#curved-border").height();
    var winH = $(window).height() + curvedHeight;
    var winH2 = winH * 3;
    $("#about-section").hide();
    $("#logo-hero").hide();
    $("#contact-section").hide();
    if(winSTop > winH2) {
        $("#contact-section").show();
    } else if(winSTop > winH) {
        $("#about-section").show();
        if (window.matchMedia('(orientation: landscape)').matches) {
            alignToWindowLandscape(".about-sec-item");
        }
        else {
            $(".about-sec-item").css("margin-top", 0);
        }
    } else {
        $("#logo-hero").show();
        alignToWindowLandscape("#logo");
    }
}