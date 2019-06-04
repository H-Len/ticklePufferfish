$(document).ready(function() {
  $(".imgToggle").click(function() {
    $(".excitedFish").toggle();
    $(".chillFish").toggle();
  });


  $("button#goldenrod").click(function() {
    $("body").removeClass();
    $("body").addClass("goldenrod-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });

  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#lavender").click(function() {
    $("body").removeClass();
    $("body").addClass("lavender-background");
  });
});
