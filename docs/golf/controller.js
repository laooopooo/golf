(function() {
  $.golf.defaultRoute = "/welcome/";

  var main;

  $.golf.controller = {

    ".*": function(b, match) {
      if (!main)
        b.empty().append(main = new Component.com.thinkminimo.golf.docs.Main());
      main.setPath(match[0]);
    }

  };
})()
