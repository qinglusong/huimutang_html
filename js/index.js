
// // swiper
var tit_wow=0;
var titlebanner=new Swiper('.home-bg-00', {
    initialSlide :1,
    speed:1000,
    // autoplay: {
    //     delay: 5000,
    //     stopOnLastSlide: false,
    //     disableOnInteraction: true,
    // },
    navigation: {
        nextEl: '.home-bg-00 .swiper-button-next',
        prevEl: '.home-bg-00 .swiper-button-prev',
    },
    on: {
        slideChangeTransitionEnd: function(){
            if(tit_wow<3 && this.activeIndex !=1){
                if(this.activeIndex==2){
                    $('.home-bg-00 .title-r-div .w-p').removeClass("hidden");
                    $('.home-bg-00 .title-r-div .w-p').children("p").eq(0).addClass("animated bounceInRight");
                    $('.home-bg-00 .title-r-div .w-p').children("p").eq(1).addClass("animated bounceInRight delay-2s");
                    $('.home-bg-00 .title-r-div .w-p').children("p").eq(2).addClass("animated fadeInDown delay-2s");
                    $('.home-bg-00 .title-r-div .w-p').children("p").eq(3).addClass("animated fadeInDown delay-2s");
                    $('.home-bg-00 .title-r-div .w-p').children("p").eq(4).addClass("animated fadeInDown delay-2s");
                    $('.home-bg-00 .title-r-div .w-p').children("p").eq(5).addClass("animated fadeInDown delay-2s");
                }else if(this.activeIndex==0){
                    $('.home-bg-00 .title-l-div .w-p').removeClass("hidden");
                    $('.home-bg-00 .title-l-div .w-p').children("p").eq(0).addClass("animated bounceInLeft");
                    $('.home-bg-00 .title-l-div .w-p').children("p").eq(1).addClass("animated bounceInLeft delay-2s");
                    $('.home-bg-00 .title-l-div .w-p').children("p").eq(2).addClass("animated fadeInDown delay-2s");
                    $('.home-bg-00 .title-l-div .w-p').children("p").eq(3).addClass("animated fadeInDown delay-2s");
                    $('.home-bg-00 .title-l-div .w-p').children("p").eq(4).addClass("animated fadeInDown delay-2s");
                    $('.home-bg-00 .title-l-div .w-p').children("p").eq(5).addClass("animated fadeInDown delay-2s");

                }
                tit_wow++;
            }
        },
    },
});
titlebanner.el.onmouseover=function(){
    titlebanner.navigation.$nextEl.removeClass('hide');
    titlebanner.navigation.$prevEl.removeClass('hide');
}
titlebanner.el.onmouseout=function(){
    titlebanner.navigation.$nextEl.addClass('hide');
    titlebanner.navigation.$prevEl.addClass('hide');
}

var homeCase = new Swiper('.home-case .swiper-container', {
    navigation: {
        nextEl: '.home-case .swiper-button-next',
        prevEl: '.home-case .swiper-button-prev',
    },
    //     pagination: '.home-case .swiper-pagination',
    //     paginationClickable: true,
    //     nextButton: '.home-case .swiper-button-next',
    //     prevButton: '.home-case .swiper-button-prev',
    //     loop: true
});


$('.case-list .swiper-button-next, .case-gallery .swiper-button-next').on('click', function (e) {
    e.preventDefault();
    caseList.slideNext();
    caseGallery.slideNext();
});

$('.case-list .swiper-button-prev, .case-gallery .swiper-button-prev').on('click', function (e) {
    e.preventDefault();
    caseList.slidePrev();
    caseGallery.slidePrev();
});



function updateNavPosition(index) {
    $('.gallery-thumbs .swiper-slide').eq(index).addClass('gallery-thumbs-nav').siblings().removeClass('gallery-thumbs-nav');

    var activeNav = $('.gallery-thumbs .gallery-thumbs-nav');

    if (!activeNav.hasClass('swiper-slide-visible')) {
        if (activeNav.index() > galleryThumbs.activeIndex) {
            var thumbsPerNav = Math.floor(galleryThumbs.width / activeNav.width()) - 1;
            galleryThumbs.slideTo(activeNav.index() - thumbsPerNav);
        } else {
            galleryThumbs.slideTo(activeNav.index());
        }
    }
}