"use strict"; // ES5

(function() { //область видимости

  function nojsreplace() {
    if (document.body.className == "no-js") {
      document.body.classList.remove("no-js");
    }
  }
  document.addEventListener("DOMContentLoaded", nojsreplace);

})();
