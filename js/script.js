//scrollspy===========================

$(document).ready(function () {
  var dolly = $("a.nav-link");

  $(document).scroll(function () {
    dolly.each(function () {
      var container = $(this).attr("href");
      var containerOffset = $(container).offset().top;
      var containerHeight = $(container).outerHeight();
      var containerBottom = containerOffset + containerHeight;
      var scrollPosition = $(document).scrollTop();

      if (
        scrollPosition < containerBottom - 20 &&
        scrollPosition >= containerOffset - 20
      ) {
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });
  });
});

// navigation

function openNav() {
  document.getElementsByClassName("sidenav")[0].style.marginLeft = "0px";
}
function closeNav() {
  document.getElementsByClassName("sidenav")[0].style.marginLeft = "-310px";
}
