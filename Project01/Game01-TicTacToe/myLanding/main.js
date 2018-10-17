$(document).ready(function() {
  // $(window).scroll(function() {
  //   animate("p", "pulse");
  // });

  // // Animate
  // function animate(element, animation) {
  //   $(element).addClass("animated " + animation);
  //   var wait = setTimeout(function() {
  //     $(element).removeClass("animated " + animation);
  //   }, 5000);
  // }

  $("#Instructions").on("click", function() {
    swal({
      title: "Here's a a little starter!",
      text:
        "You can play this game indvidually or with a friend , all you need to do is click on tiles and try to cross them in any combination !"
    });
  });

  // $("#play").on("click", function() {
  //   window.location.assign("http://www.w3.org");
  // });

  var object1 = $("#obj1");
  var object2 = $("#obj2");
  var object3 = $("#obj3");
  var object4 = $("#obj4");
  var object5 = $("#obj5");
  var object6 = $("#obj6");

  var layer = $("#layer");

  layer.mousemove(function(e) {
    var valueX = (e.pageX * -1) / 12;
    var valueY = (e.pageY * -1) / 12;

    object1.css({
      transform:
        "translate3d(" + valueX + "px," + valueY + "px,0) rotate(20deg)"
    });
  });

  layer.mousemove(function(e) {
    var valueX = (e.pageX * -1) / 15;
    var valueY = (e.pageY * -1) / 20;

    object2.css({
      transform: "translate3d(" + valueX + "px," + valueY + "px,0)"
    });
  });

  layer.mousemove(function(e) {
    var valueX = (e.pageX * -1) / 15;
    var valueY = (e.pageY * -1) / 15;

    object3.css({
      transform:
        "translate3d(" + valueX + "px," + valueY + "px,0) rotate(-20deg)"
    });
  });

  layer.mousemove(function(e) {
    var valueX = (e.pageX * -1) / 15;
    var valueY = (e.pageY * -1) / 30;

    object4.css({
      transform:
        "translate3d(" + valueX + "px," + valueY + "px,0) rotate(-20deg)"
    });
  });

  layer.mousemove(function(e) {
    var valueX = (e.pageX * -1) / 15;
    var valueY = (e.pageY * -1) / 15;

    object5.css({
      transform:
        "translate3d(" + valueX + "px," + valueY + "px,0) rotate(-20deg)"
    });
  });

  layer.mousemove(function(e) {
    var valueX = (e.pageX * -1) / 12;
    var valueY = (e.pageY * -1) / 12;

    object6.css({
      transform:
        "translate3d(" + valueX + "px," + valueY + "px,0) rotate(20deg)"
    });
  });
});

// });
