$(document).ready(function(){
  $('.card').mouseover(function() {
      $(this).addClass('animated pulse fast');
  }).mouseleave(function() {
    $(this).removeClass('animated pulse fast');
  })

  $('#title').mouseover(function() {
    $(this).addClass('animated jello ');
}).mouseleave(function() {
  $(this).removeClass('animated jello ');
})
});

$('.jump-button').click(function() {
  var modelID = $(this).attr('id');
 $('#submitModel').click(function() {
  var zoomSize = $('#zoomSize').val();
  window.location.href = `details.html?${modelID}&${zoomSize}`
  console.log(`details.html?value=${modelID}&size=${zoomSize}`)
 })
})

