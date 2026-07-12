// ── docs sidebar scroll-spy ──
(function () {
  const links = Array.prototype.slice.call(
    document.querySelectorAll('.docs-side a[href^="#"]')
  );
  if (!links.length) return;
  const byId = {};
  links.forEach((a) => {
    byId[a.getAttribute("href").slice(1)] = a;
  });
  const secs = Array.prototype.slice.call(
    document.querySelectorAll(".doc-sec[id]")
  );
  let activeId = null;
  function setActive(id) {
    if (id === activeId || !byId[id]) return;
    activeId = id;
    links.forEach((a) => a.classList.remove("active"));
    byId[id].classList.add("active");
  }
  const io = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible.length) setActive(visible[0].target.id);
    },
    { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
  );
  secs.forEach((s) => io.observe(s));
  setActive(location.hash ? location.hash.slice(1) : secs[0] && secs[0].id);
})();
