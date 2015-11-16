$(document).ready(function() {
  // parallax.js
  $('#scene').parallax({
    limitX: 60,
    limitY: 10,
  });

  $('#scene1').parallax({
    limitX: 30,
    limitY: 5,
  });

  // Fullpage.js
  $('#fullpage').fullpage({
    scrollBar: true,
    css3: true
  });


})
