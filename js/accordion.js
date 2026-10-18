/* Task 2 — Accordion (FAQ). Answers are hidden by default; click toggles them. */
(function () {
  "use strict";
  var items = document.querySelectorAll(".faq-item");
  if (!items.length) return;

  function setOpen(item, open) {
    var btn = item.querySelector(".faq-question");
    var panel = item.querySelector(".faq-answer");
    item.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    panel.style.maxHeight = open ? panel.scrollHeight + "px" : "0px";
  }

  Array.prototype.forEach.call(items, function (item) {
    setOpen(item, false);                       // hidden by default
    item.querySelector(".faq-question").addEventListener("click", function () {
      setOpen(item, !item.classList.contains("open"));   // second click hides again
    });
  });

  window.addEventListener("resize", function () {
    Array.prototype.forEach.call(items, function (item) {
      if (item.classList.contains("open")) {
        var p = item.querySelector(".faq-answer");
        p.style.maxHeight = p.scrollHeight + "px";
      }
    });
  });
})();
