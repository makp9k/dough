(function () {
  var STORAGE_KEY = "leos-dough-lang";
  var DEFAULT_LANG = "ru";

  function applyLang(lang) {
    document.documentElement.setAttribute("lang", lang);
    var buttons = document.querySelectorAll("[data-lang-switch]");
    buttons.forEach(function (btn) {
      if (btn.getAttribute("data-lang-switch") === lang) {
        btn.classList.add("is-active");
      } else {
        btn.classList.remove("is-active");
      }
    });
  }

  function getStoredLang() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function storeLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* noop */
    }
  }

  var initial = getStoredLang() || DEFAULT_LANG;
  applyLang(initial);

  document.addEventListener("click", function (e) {
    var target = e.target.closest("[data-lang-switch]");
    if (!target) return;
    var lang = target.getAttribute("data-lang-switch");
    if (lang !== "ru" && lang !== "en") return;
    storeLang(lang);
    applyLang(lang);
  });
})();
