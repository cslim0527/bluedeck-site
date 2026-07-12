// ── BlueDeck release info ────────────────────────────────────────
// Reflects the latest release of cslim0527/blue-deck-releases:
//   • fills every .js-version element with the tag (e.g. "v0.1.3")
//   • points every [data-dl="mac|win|msi"] link at the matching asset
// The GitHub API auto-tracks whatever is latest; if it fails (offline,
// rate limit), the hardcoded fallback below (current release) is used.
(function () {
  const REPO = "cslim0527/blue-deck-releases";
  const BASE = "https://github.com/" + REPO + "/releases/latest/download/";
  const FALLBACK = {
    version: "v0.1.3",
    mac: BASE + "BlueDeck_0.1.3_aarch64.dmg",
    win: BASE + "BlueDeck_0.1.3_x64-setup.exe",
    msi: BASE + "BlueDeck_0.1.3_x64_en-US.msi",
  };

  function setVersion(v) {
    document.querySelectorAll(".js-version").forEach((el) => {
      el.textContent = v;
    });
  }
  function setLink(kind, url) {
    if (!url) return;
    document.querySelectorAll('[data-dl="' + kind + '"]').forEach((a) => {
      a.setAttribute("href", url);
    });
  }

  // apply fallback immediately so the page always has a working version + links
  setVersion(FALLBACK.version);
  setLink("mac", FALLBACK.mac);
  setLink("win", FALLBACK.win);
  setLink("msi", FALLBACK.msi);

  // then reflect the actual latest release
  fetch("https://api.github.com/repos/" + REPO + "/releases/latest", {
    headers: { Accept: "application/vnd.github+json" },
  })
    .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
    .then((rel) => {
      if (rel.tag_name) setVersion(rel.tag_name);
      const assets = rel.assets || [];
      const find = (re) => {
        const a = assets.find((x) => re.test(x.name));
        return a && a.browser_download_url;
      };
      setLink("mac", find(/aarch64\.dmg$/i) || FALLBACK.mac);
      setLink("win", find(/-setup\.exe$/i) || FALLBACK.win);
      setLink("msi", find(/\.msi$/i) || FALLBACK.msi);
    })
    .catch(() => {
      /* keep the fallback values */
    });
})();
