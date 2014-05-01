$(document).ready(function () {
  $('[data-toggle=offcanvas]').click(function () {
    $('.row-offcanvas').toggleClass('active');
  });
  
  //added by luke to collapse the mobile nav when an anchor is clicked
  $("header nav ul li a").click(function(){
    $('.row-offcanvas').toggleClass('active');
  });
});