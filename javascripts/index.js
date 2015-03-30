$(window).load(preparePage);

function preparePage() {
  $("#main").addClass("animated bounceInUp");
  $("a").hover(wiggle, stopWiggle);
}

function wiggle() {
  $(this).addClass("animated infinite pulse");
}

function stopWiggle() {
  $(this).removeClass("animated infinite pulse");
}
