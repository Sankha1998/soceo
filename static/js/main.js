AOS.init({
    
    duration: 1200,}
);

$(function () {

    $(document).scroll(function () {

      var $nav = $(".navmain");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height()*8);
      $nav.toggleClass('scrolled-footer',$(window).scrollTop() + $(window).height() > $(document).height() - 100)

      if($(window).scrollTop() + $(window).height() > ($(document).height() - (2.5*100))) {
        $('#nav-logo').attr('src','static/img/logo/navlogo1.png')
        $('#nav-logo').attr('width','250')
        $('#nav-logo').attr('height','50')
        $('#home_manu').attr('class','nav-link nav-manu text-dark')
        $('#login_manu').attr('class','nav-link nav-manu text-dark')

        
      }else{
        $('#nav-logo').attr('src','static/img/logo/navlogo.png')
        $('#nav-logo').attr('width','250')
        $('#nav-logo').attr('height','50')
        $('#home_manu').attr('class','nav-link nav-manu text-light')
        $('#login_manu').attr('class','nav-link nav-manu text-light')
      }
    });

});

// $(document).ready(function () {
//   // Handler for .ready() called.
//   $('html, body').animate({
//       scrollTop: $('.banner-margin-bar').offset().top
//   }, 'slow');
// });
// $('.container').css({'height': (($(window).height()))+'px'});
 
// $(window).on('resize', function(){
//  $('.container').css({'height': (($(window).height()))+'px'});
// });