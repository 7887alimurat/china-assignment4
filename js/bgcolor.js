/* Task 4 — Change background color with JavaScript */
(function () {
  "use strict";
  var btn = document.getElementById("colorBtn");
  var colors = ["#f6f0e5", "#ffe9e0", "#fdf3c8", "#e6f4ea", "#e3f0fb", "#f3e8fb"];
  var index = 0;

  // restore the color chosen on another page
  try {
    var saved = parseInt(localStorage.getItem("bgIndex"), 10);
    if (!isNaN(saved) && saved > 0 && saved < colors.length) {
      index = saved;
      document.body.style.backgroundColor = colors[index];
    }
  } catch (err) { /* storage not available — ignore */ }

  if (!btn) return;
  btn.addEventListener("click", function () {
    index = (index + 1) % colors.length;                 // cycle through predefined colors
    document.body.style.backgroundColor = colors[index];
    try { localStorage.setItem("bgIndex", index); } catch (err) {}
  });
})();
