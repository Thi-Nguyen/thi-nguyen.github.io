$(function(){
  $('.icon').click(function(){
    //$(this).find('__').
    //TODO: Maybe add something here when a user clicks on the certain section
  });




  $('.icon').hover(
    function() {
      $(this).find('p').addClass('text-active');
    },
    function() {
      $(this).find('p').removeClass('text-active');
    }
  );
});
