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

  var observer = new IntersectionObserver(
    function (entries) {
      var visible = entries
        .filter(function (entry) {
          return entry.isIntersecting;
        })
        .sort(function (a, b) {
          return b.intersectionRatio - a.intersectionRatio;
        });
      if (visible.length > 0) {
        setActive(visible[0].target.id);
      }
    },
    {
      rootMargin: "-40% 0px -50% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    }
  );

  sections.forEach(function (section) {
    observer.observe(section);
  });

  document.addEventListener("click", function (e) {
    var chip = e.target.closest("[data-category-chip]");
    if (!chip) return;
    setActive(chip.getAttribute("data-category-chip"));
  });

  if (sections[0]) setActive(sections[0].id);
})();
