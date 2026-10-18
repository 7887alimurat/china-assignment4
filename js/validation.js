/* Task 1 — Form validation (register form + contact form)
   Uses Bootstrap classes is-valid / is-invalid; every field has an
   <div class="invalid-feedback" id="<fieldId>-error"> for its message. */
(function () {
  "use strict";

  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  /* ---------- reusable rules ---------- */
  function nameRule(v) {
    v = v.trim();
    if (!v) return "Name is required.";
    if (v.length < 2) return "Name must contain at least 2 characters.";
    if (!/^[A-Za-zА-Яа-яЁё\s'-]+$/.test(v)) return "Name may contain only letters, spaces and hyphens.";
    return "";
  }
  function emailRule(v) {
    v = v.trim();
    if (!v) return "Email is required.";
    if (!EMAIL_RE.test(v)) return "Enter a valid email, e.g. name@example.com.";
    return "";
  }

  /* ---------- generic form initialiser ---------- */
  function initForm(form, rules, onSuccess) {
    function field(id) { return form.querySelector("#" + id); }

    function show(input, message) {
      var box = document.getElementById(input.id + "-error");
      if (box) box.textContent = message;
      input.classList.toggle("is-invalid", !!message);
      input.classList.toggle("is-valid", !message);
      input.setAttribute("aria-invalid", message ? "true" : "false");
    }

    function check(id) {
      var input = field(id);
      var message = rules[id](input.type === "checkbox" ? input.checked : input.value, form);
      show(input, message);
      return !message;
    }

    Object.keys(rules).forEach(function (id) {
      var input = field(id);
      var evt = (input.type === "checkbox" || input.tagName === "SELECT") ? "change" : "input";
      input.addEventListener("blur", function () { check(id); });
      input.addEventListener(evt, function () {
        if (input.classList.contains("is-invalid") || input.classList.contains("is-valid") || evt === "change") check(id);
        // keep "confirm password" in sync while the password is edited
        if (id === "password" && field("confirmPassword") && field("confirmPassword").value) check("confirmPassword");
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var firstInvalid = null;
      Object.keys(rules).forEach(function (id) {
        if (!check(id) && !firstInvalid) firstInvalid = field(id);
      });
      if (firstInvalid) { firstInvalid.focus(); return; }
      onSuccess(form);
      form.reset();
      Array.prototype.forEach.call(form.querySelectorAll(".is-valid, .is-invalid"), function (el) {
        el.classList.remove("is-valid", "is-invalid");
      });
    });
  }

  function showAlert(id, text) {
    var box = document.getElementById(id);
    if (!box) return;
    box.textContent = text;
    box.classList.remove("d-none");
    box.focus();
  }

  /* ---------- register.html ---------- */
  var reg = document.getElementById("registerForm");
  if (reg) {
    initForm(reg, {
      fullName: function (v) { return nameRule(v); },
      email: function (v) { return emailRule(v); },
      country: function (v) { return v ? "" : "Please choose a country."; },
      password: function (v) {
        if (!v) return "Password is required.";
        if (v.length < 8) return "Password must be at least 8 characters long.";
        if (!/[A-Za-z]/.test(v) || !/\d/.test(v)) return "Password must contain both letters and digits.";
        return "";
      },
      confirmPassword: function (v, form) {
        if (!v) return "Please confirm your password.";
        if (v !== form.querySelector("#password").value) return "Passwords do not match.";
        return "";
      },
      terms: function (checked) { return checked ? "" : "You must accept the terms to continue."; }
    }, function (form) {
      showAlert("registerSuccess", "Thank you, " + form.querySelector("#fullName").value.trim() + "! Your registration was successful.");
    });
  }

  /* ---------- index.html contact form ---------- */
  var contact = document.getElementById("contact-form");
  if (contact) {
    contact.setAttribute("novalidate", "");
    initForm(contact, {
      name: function (v) { return nameRule(v); },
      email: function (v) { return emailRule(v); },
      message: function (v) {
        v = v.trim();
        if (!v) return "Please write a message.";
        if (v.length < 10) return "Message must contain at least 10 characters.";
        return "";
      }
    }, function () {
      showAlert("contactSuccess", "Thank you! Your message has been sent. We will answer soon.");
    });
  }
})();
