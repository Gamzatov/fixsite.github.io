
jQuery(document).ready(function() {

  jQuery('.homeSliderList').slick({
    infinite: true,
    slidesToShow:6 ,
    autoplay: true,
      autoplaySpeed: 3000,
      nextArrow: '<span class="homeSliderNext"></span>',
  prevArrow: '<span class="homeSliderPrev"></span>',
    slidesToScroll: 1
  });



  jQuery('.nav-button').click(function(){
    if(jQuery('.main-menu__holder').hasClass('active')){
      jQuery('.main-menu__holder').removeClass('active');
      jQuery(this).removeClass('active');
    }
 else {
  jQuery('.main-menu__holder').addClass('active');
  // jQuery(this).addClass('active');
 }





});
});



if (jQuery(window).width() > 767) {
  if (jQuery(window).scrollTop() > jQuery('header').height()) {
    jQuery('.menu,header').addClass('scrolled');
  } else {
    jQuery('.menu,header').removeClass('scrolled');
  };
};


jQuery(window).on('scroll', function(){
  if (jQuery(window).width() > 767) {
    if (jQuery(window).scrollTop() > jQuery('header').height()) {
      jQuery('.menu,header').addClass('scrolled');
    } else {
      jQuery('.menu,header').removeClass('scrolled');
    };
  };

  if ((jQuery(window).width() > 767) && (jQuery('.video-inner').length > 0) && jQuery('body').hasClass('home')) {
    jQuery('.video-wrapper').css('height', Math.floor(jQuery('.video-inner').outerHeight()));
    jQuery('.video-inner').css('height', Math.floor(jQuery('.video-inner').outerHeight()));



    constH = jQuery('.video-inner').outerHeight();
    difY = jQuery('.screen-second').outerHeight();
    difH =  jQuery('.video-inner').outerHeight() - jQuery(window).height() * 0.75;
    topH = jQuery('.video-inner').offset().top;
    s1H = jQuery('.screen-first').outerHeight() - topH;
    partY = (difY +difH) / s1H;
    s1H = jQuery('.screen-first').outerHeight() - topH;
    scaleY = difH / s1H;

    difX = jQuery('.video-wrapper').outerWidth() - jQuery('.video-wrapper').outerHeight();
    s1H = jQuery('.screen-first').outerHeight();
    partX =  difX / s1H;

  };

  if (jQuery(window).width() > 1023 && jQuery('body').hasClass('home')) {
    var st = jQuery(window).scrollTop(),
    elIn = jQuery('.video-inner'),

    leftX = partX * st * 3 / 4,
    leftXr = partX * st / 4;



  if (st < s1H) {
    elIn.css('right', leftXr + 'px');
    elIn.css('left', leftX  + 'px');


    if (st >= (topH)) {

      var topY = partY * (st - topH),
          heightY = constH - scaleY * (st - topH);

      elIn.css('top', topY + 'px');

      elIn.css('height', heightY  + 'px');

    }

    if (st == 0) {
      elIn.css('right', '0px');
      elIn.css('left', '0px');
      elIn.css('top', '0px')
    }

  }
}









});
  if (jQuery(window).width() < 768) {
    jQuery('.menu').addClass('scrolled');
  }
