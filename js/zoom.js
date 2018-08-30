//zoom
$(window).resize(function () {
    zoom_fun();
});
function zoom_fun(){
    var cw =$(window).width();
    // console.log(cw);
    var ch=$(".zoom-div").height();
    if(cw>1920)return;
    var znum;
    if(cw>750){
        znum=cw/1920;
    }else{
        znum=cw/750;
    }
    // console.log(znum,ch);
    $("html").css({"width":cw+"px"});
    $(".zoom-div").css("height",ch*znum+"px");

    $(".zoom-div").css({"transform":"scale(" + znum + ")","transform-origin":"0 0"});
    wow.zoom=znum;
}
// wow
var wow = new WOW({
    boxClass: 'wow',            // animated element css class (default is wow)
    animateClass: 'animated',   // animation css class (default is animated)
    offset: 0,                  // distance to the element when triggering the animation (default is 0)
    mobile: true,              // trigger animations on mobile devices (default is true)
    live: true,                 // act on asynchronously loaded content (default is true)
    callback: function (box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
    }
});

zoom_fun();
wow.init();
