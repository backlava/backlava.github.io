(function ($) {
  var bodyheight = $(document).height();
  var bodywidth = $(document).width();

  // init
  if(bodywidth <= 800) {
    $("[uxhead]").height(bodywidth / 2);
  } else {
    $("[uxhead]").height(bodyheight / 2);
  }

  // on resize
  $(window).resize(function () {
    var bodyheight = $(window).height();
    var bodywidth = $(document).width();

    if(bodywidth <= 800) {
      $("[uxhead]").height(bodywidth / 2);
    } else {
      $("[uxhead]").height(bodyheight / 2);
    }
  });

  function sendMail() {
    var link = "mailto:me@example.com"
             + "?cc=myCCaddress@example.com"
             + "&subject=" + escape("Client Quote")
             + "&body=" + escape(document.getElementById('myText').value);

    window.location.href = link;
  }
})(jQuery);
