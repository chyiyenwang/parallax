$(document).ready(function() {
  // parallax.js
  $('#scene').parallax({
    limitX: 60,
    limitY: 10,
  });

  $('#scene1').parallax({
    limitX: 60,
    limitY: 10,
  });

  // Fullpage.js
  $('#fullpage').fullpage({
    scrollBar: true,
    css3: true
  });

  $('#hobbes-pool').qtip({
    content: "hello",
    show: 'mouseover',
    hide: 'mouseout'
  });
})
