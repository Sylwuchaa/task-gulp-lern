$(document).ready(function () {

  // hover effect for card number two
  $(".wrapper__card:nth-child(2),.wrapper__card:nth-child(2)>*, .module").hover(
    function () {
      $(this).addClass("active-bg-change");
    },
    function () {
      $(this).removeClass("active-bg-change");
    }
  );
    //  effect for change color of image for white, replaces src path image
  $(".wrapper__card:nth-child(2)>img").mouseover(function () {
    $(this).attr('src', './img/img_3.png');
  });
  $(".wrapper__card:nth-child(2)>img").mouseout(function () {
    $(this).attr('src', './img/img_2.png');
  });

});

