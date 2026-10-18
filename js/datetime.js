/* Task 5 — Display current date and time (Date object), updated every second */
(function () {
  "use strict";
  var el = document.getElementById("datetime");
  if (!el) return;

  var MONTHS = ["January", "February", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December"];
  function pad(n) { return n < 10 ? "0" + n : String(n); }

  function format(d) {
    var h = d.getHours();
    var suffix = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;
    // e.g. "October 18, 2026, 5:45:07 PM"
    return MONTHS[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear() + ", " +
           h + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds()) + " " + suffix;
  }
  function tick() { el.textContent = format(new Date()); }
  tick();
  setInterval(tick, 1000);
})();
