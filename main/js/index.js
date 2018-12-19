$(document).ready(function(){
  $('.card').mouseover(function() {
      $(this).addClass('animated pulse faster');
  }).mouseleave(function() {
    $(this).removeClass('animated pulse faster');
  })
});

$('.jump-button').click(function() {
  var value = $(this).attr('id')
  window.location.href = `details.html?value=${value}`
})