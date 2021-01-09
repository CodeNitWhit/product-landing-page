function alignVertical(){
    var that = $("#logo");
    var height = that.height();
    var parentHeight = $(window).height();
    var padAmount = (parentHeight / 2) - (height/2);
    that.css("margin-top", padAmount);
}

$(document).ready(function() {
    $("#about-section").hide();
    $("#contact-section").hide();
    alignVertical();
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
            alignVertical();
        }
    });
    $(window).resize(function() {
        var winSTop = $(window).scrollTop();
        var winH = $(window).height() + $("#curved-border").height();
        if(winSTop <= winH) {
            alignVertical();
        }
    });
});