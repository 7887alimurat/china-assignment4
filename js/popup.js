/* Task 3 — Popup subscription form */
(function () {
  "use strict";
  var overlay = document.getElementById("popupOverlay");
  if (!overlay) return;

  var openButtons = document.querySelectorAll("[data-open-popup]");
  var closeBtn = document.getElementById("popupClose");
  var form = document.getElementById("subscribeForm");
  var nameInput = document.getElementById("subName");
  var emailInput = document.getElementById("subEmail");
  var okMsg = document.getElementById("subSuccess");
  var lastFocus = null;

  function setError(input, message) {
    document.getElementById(input.id + "-error").textContent = message;
    input.classList.toggle("is-invalid", !!message);
  }

  function openPopup() {
    lastFocus = document.activeElement;
    overlay.classList.add("show");
    requestAnimationFrame(function () { overlay.classList.add("visible"); });
    document.body.style.overflow = "hidden";
    nameInput.focus();
  }

  function closePopup() {
    overlay.classList.remove("visible");
    setTimeout(function () { overlay.classList.remove("show"); }, 250);
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }

  Array.prototype.forEach.call(openButtons, function (b) { b.addEventListener("click", openPopup); });
  closeBtn.addEventListener("click", closePopup);

  // click outside the popup window closes it
  overlay.addEventListener("click", function (e) { if (e.target === overlay) closePopup(); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && overlay.classList.contains("show")) closePopup();
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    okMsg.classList.add("d-none");
    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var nameMsg = name.length < 2 ? "Please enter your name (min. 2 characters)." : "";
    var emailMsg = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) ? "" : "Please enter a valid email address.";
    setError(nameInput, nameMsg);
    setError(emailInput, emailMsg);
    if (nameMsg || emailMsg) return;

    okMsg.textContent = "Thanks, " + name + "! You are subscribed to our China travel news.";
    okMsg.classList.remove("d-none");
    form.reset();
    setTimeout(function () { closePopup(); okMsg.classList.add("d-none"); }, 1800);
  });
})();
