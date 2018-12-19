$(document).ready(function() {
    $('.card').mouseover(function() {
        $(this).addClass('animated pulse faster');
    }).mouseleave(function() {
      $(this).removeClass('animated pulse faster');
    });
    $('#back').mouseover(function() {
        $(this).addClass('animated swing faster');
    }).mouseleave(function() {
      $(this).removeClass('animated swing faster');
    });
    $('#back').click(function() {
        window.location.href = 'index.html'
    })
    $('.download').click(function() {
        console.log($(this).attr('id'))
        window.location.href = $(this).attr('id')
    })

})