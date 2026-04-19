(function () {
  var sections = Array.prototype.slice.call(
    document.querySelectorAll(".category-section")
  );
  if (!sections.length) return;

  var chips = {};
  document.querySelectorAll("[data-category-chip]").forEach(function (chip) {
    chips[chip.getAttribute("data-category-chip")] = chip;
  });

  function setActive(id) {
    Object.keys(chips).forEach(function (key) {
      if (key === id) {
        chips[key].classList.add("is-active");
      } else {
        chips[key].classList.remove("is-active");
      }
    });
  }

  function update() {
    var y = window.scrollY + 96;
    var current = sections[0];
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].offsetTop <= y) current = sections[i];
      else break;
    }
    setActive(current.id);
  }

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);

  document.addEventListener("click", function (e) {
    var chip = e.target.closest("[data-category-chip]");
    if (!chip) return;
    setActive(chip.getAttribute("data-category-chip"));
  });

  update();
})();
