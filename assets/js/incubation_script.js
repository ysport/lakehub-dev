$(document).on("ready", function() {
  $(".incubation-menu").on("click", function(e) {
    const nav = $(".incubation-nav-sm");
    nav.removeClass("d-none");
    nav.addClass("d-flex ham");
  });

  $(".close").on("click", function(e) {
    const nav = $(".incubation-nav-sm");
    nav.removeClass("d-flex ham");
    nav.addClass("d-none");
  });

  $(".close2").on("click", function(e) {
    const nav = $(".incubation-nav-sm");
    nav.removeClass("d-flex");
    nav.addClass("d-none");
  });
});
