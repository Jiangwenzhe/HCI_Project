$(document).ready(function(){
  $('.card').mouseover(function() {
      $(this).addClass('animated pulse fast');
  }).mouseleave(function() {
    $(this).removeClass('animated pulse fast');
  })
});