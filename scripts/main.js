$(document).ready(function() {

  $('#loader').delay(0).fadeOut(200)

  setTimeout(
  function()
  {
    $('#loader').remove()
  }, 2000);

  $('#hamburger').click(function (){
    $('#nav').toggleClass('navOpen')
  })


})
