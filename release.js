// ── BlueDeck release info ────────────────────────────────────────
// Reflects the latest release of cslim0527/blue-deck-releases:
//   • fills every .js-version element with the tag (e.g. "v0.1.4")
//   • points every [data-dl="mac|win|msi"] link at the matching asset
// The GitHub API auto-tracks whatever is latest; if it fails (offline,
// rate limit), the hardcoded fallback below is used.
// Exposes window.__applyRelease() so i18n re-renders can re-fill the
// version/links that live inside translated (innerHTML) blocks.
//
// The fallback download links use VERSION-LESS asset names
// (BlueDeck_aarch64.dmg, …). The release workflow publishes byte-identical
// copies of every installer under these stable names, so
// releases/latest/download/<name> always resolves to the newest release —
// no per-release edit needed here. `version` is a cosmetic label only
// (shown when the API fetch fails); it does not affect the download links.
(function () {
  const REPO = "cslim0527/blue-deck-releases";
  const BASE = "https://github.com/" + REPO + "/releases/latest/download/";
  const FALLBACK = {
    version: "latest",
    mac: BASE + "BlueDeck_aarch64.dmg",
    win: BASE + "BlueDeck_x64-setup.exe",
    msi: BASE + "BlueDeck_x64_en-US.msi",
  };

  // latest known release info (starts as fallback, upgraded after fetch)
  let current = Object.assign({}, FALLBACK);

  function apply() {
    document.querySelectorAll(".js-version").forEach((el) => {
      el.textContent = current.version;
    });
    [["mac", current.mac], ["win", current.win], ["msi", current.msi]].forEach(
      ([kind, url]) => {
        if (!url) return;
        document.querySelectorAll('[data-dl="' + kind + '"]').forEach((a) => {
          a.setAttribute("href", url);
        });
      }
    );
  }
  window.__applyRelease = apply;

  // apply fallback immediately so the page always has a working version + links
  apply();

  // then reflect the actual latest release
  fetch("https://api.github.com/repos/" + REPO + "/releases/latest", {
    headers: { Accept: "application/vnd.github+json" },
  })
    .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
    .then((rel) => {
      const assets = rel.assets || [];
      const find = (re) => {
        const a = assets.find((x) => re.test(x.name));
        return a && a.browser_download_url;
      };
      current = {
        version: rel.tag_name || FALLBACK.version,
        mac: find(/aarch64\.dmg$/i) || FALLBACK.mac,
        win: find(/-setup\.exe$/i) || FALLBACK.win,
        msi: find(/\.msi$/i) || FALLBACK.msi,
      };
      apply();
    })
    .catch(() => {
      /* keep the fallback values */
    });
})();
