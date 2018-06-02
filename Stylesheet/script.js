$(function(){
  setNavigation();

 $('.aboutText').click(function(){
    window.location="../thi-nguyen.github.io/content.html#about";
  });

  $('.experienceText').click(function(){
    window.location="../thi-nguyen.github.io/content.html#experience";
  });

  $('.contactText').click(function(){
    window.location="../thi-nguyen.github.io/content.html#contact";
  });

  $('.icon').hover(
    function() {
      $(this).find('p').addClass('text-active');
    },
    function() {
      $(this).find('p').removeClass('text-active');
    }
  );

  $('nav a').on("click", function(){
    $('nav').find('.activeNav').removeClass('active');
    $(this).addClass("active");
  });
});

function setNavigation() {
    var path = window.location.hash.substring(1);

    switch(path) {
      case "about":
        $('.aboutNav').addClass("active");
        break;
      case "experience":
        $('.expNav').addClass("active");
        break;
      case "contact":
        $('.contactNav').addClass("active");
        break;
      default:

    }
}
