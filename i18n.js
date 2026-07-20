// ── BlueDeck site i18n (shared by index.html and download.html) ──
const I18N = {
  en: {
    "_meta.lang": "en",
    "_meta.label": "English",
    "_meta.title": "BlueDeck — One deck. Every agent.",
    "_meta.desc": "A multi-terminal, agent-native development tool. Run up to 16 real terminals in a grid and command Claude Code, Codex, Gemini CLI and Aider from one window. Built on Rust + Tauri — light and fast.",
    "nav.features": "Features",
    "nav.how": "How it works",
    "nav.pricing": "Pricing",
    "nav.docs": "Docs",
    "nav.download": "Download",
    "hero.lede": "A multi-terminal, agent-native dev tool that puts <b>up to 16 real terminals</b> in a single grid and lets you run and command <b>Claude Code · Codex · Gemini CLI · Aider</b> in every pane.",
    "hero.cta.download": "Download free",
    "hero.cta.explore": "Explore features →",
    "hero.note": "<b>14-day full trial</b> · no credit card · the core terminal stays free afterwards",
    "deck.sidebar": "⌘B Sidebar",
    "agents.k": "Auto-detects your installed agents",
    "feat.eyebrow": "Features",
    "feat.h2": "One console for<br/>your agent swarm",
    "feat.p": "Stop juggling terminal windows. BlueDeck runs, watches and coordinates parallel agents from a single app.",
    "feat.grid.t": "Multi-terminal grid",
    "feat.grid.d": "Up to <b>16 real PTY sessions</b> per workspace in an automatic grid layout. The same xterm.js WebGL renderer as VS Code — fast and accurate, just like your real shell.",
    "feat.dispatch.t": "Agent dispatch",
    "feat.dispatch.d": "Pick an agent from the pane-header dropdown to launch it in that terminal. <code>claude</code> · <code>codex</code> · <code>gemini</code> · <code>aider</code> are auto-detected.",
    "feat.hub.t": "Agent Hub (MCP)",
    "feat.hub.d": "An embedded MCP server registers with Claude Code on launch. Agents read each other's output and pass prompts back and forth for <b>autonomous collaboration</b>.",
    "feat.broadcast.t": "Broadcast mode",
    "feat.broadcast.d": "Send one prompt to every terminal in the current workspace at once — command the whole agent swarm in a single keystroke.",
    "feat.worktree.t": "Git worktree isolation",
    "feat.worktree.d": "The ⎇ button gives each terminal its own git worktree and branch, so parallel agents on the same repo never touch each other's files.",
    "feat.status.t": "Agent status awareness",
    "feat.status.d": "Every pane is tracked as <b style=\"color:var(--green)\">working</b> / <b style=\"color:var(--amber)\">needs-input</b> / <b style=\"color:var(--ink-3)\">idle</b>. When the app is in the background, macOS notifications ping you the moment an agent needs a hand. Press <kbd>⌘J</kbd> to jump straight to the terminal that needs you. Clicking the notification jumps there too.",
    "feat.diff.t": "Diff review &amp; squash-merge",
    "feat.diff.d": "The ± button opens a changed-file list with a colored unified diff. One click squash-merges it back into the repo or discards it all — conflicts roll back safely. After the merge, one confirmation cleans up the worktree and branch.",
    "feat.session.t": "Workspaces &amp; session restore",
    "feat.session.d": "Each workspace keeps its own terminal set and default directory. Reopen the app and the layout is restored — Claude Code panes resume the conversation with <code>--continue</code>.",
    "how.eyebrow": "How it works",
    "how.h2": "Parallel development in three steps",
    "how.s1.t": "Open a workspace, split panes",
    "how.s1.d": "Add the repo you're working on as a workspace and the grid fills with terminals. Add as many panes as you need — up to 16.",
    "how.s2.t": "Launch an agent in each pane",
    "how.s2.d": "Pick Claude Code, Codex, Gemini or Aider from the dropdown. For trusted repos, ⚡ auto-approve runs them without a single prompt.",
    "how.s3.t": "Command, review, merge",
    "how.s3.d": "Send prompts from the prompt bar, watch progress on the status dots, review the results in the diff panel, then merge in one click.",
    "stat.terminals": "terminals per workspace",
    "stat.agents": "supported agent CLIs",
    "stat.memory": "the memory of Electron",
    "stat.pty": "real PTY-based",
    "why.eyebrow": "Built on Rust",
    "why.h2": "Light, fast and safe",
    "why.p": "A Tauri 2 + Rust core. It uses the OS WebView for roughly 1/10 the memory and a few-MB binary vs Electron. Data races and buffer overflows are blocked at compile time, with no GC.",
    "why.perf.t": "Native performance",
    "why.perf.d": "One PTY and reader thread per pane. Output streams over events so the UI never stutters, even under heavy logs.",
    "why.update.t": "Signed auto-update",
    "why.update.d": "The app checks for updates on launch and installs signed packages in a single click.",
    "why.i18n.t": "Korean IME &amp; i18n",
    "why.i18n.d": "Smooth Hangul composition inside the terminal, with the system locale detected to auto-apply Korean or English.",
    "price.eyebrow": "Pricing",
    "price.h2": "Try everything first",
    "price.p": "All features, no limits, for 14 days. When the trial ends, the core terminal stays free.",
    "price.beta": "BlueDeck is in public beta — every feature is free through Aug 31, 2026. When the beta ends, a fresh 14-day trial starts for everyone.",
    "price.lite.price": "Free",
    "price.lite.sub": "A solid terminal for personal and light use.",
    "price.lite.f1": "1 workspace × 2 terminals",
    "price.lite.f2": "Agent launch &amp; prompt bar",
    "price.lite.f3": "Korean IME &amp; layout restore",
    "price.lite.cta": "Download",
    "price.pro.tag": "Pro · Multi-agent deck",
    "price.pro.price": "License",
    "price.pro.per": " / device",
    "price.pro.sub": "Everything you need to command parallel agents.",
    "price.pro.f1": "Everything in Lite +",
    "price.pro.f2": "Unlimited workspaces · up to 16 terminals",
    "price.pro.f3": "Status awareness · worktree isolation · diff review",
    "price.pro.f4": "Agent Hub · broadcast · auto-approve",
    "price.pro.f5": "Conversation resume · offline use",
    "price.pro.cta": "Buy a license",
    "price.note": "Every download includes the 14-day full trial. Activate this device by entering a key in Settings → License.",
    "dl.h2": "Spread your deck now",
    "dl.p": "Download, launch your agents, and experience everything for 14 days.",
    "dl.cta": "Download BlueDeck",
    "dl.sub": "Signed installers · macOS &amp; Windows · cross-platform (Tauri)",
    "dlpage.title": "Download BlueDeck — Choose your platform",
    "dlpage.desc": "Download BlueDeck for macOS (Apple Silicon) or Windows (x64). Every download includes the 14-day full trial.",
    "dlpage.back": "← Back to home",
    "dlpage.badge": "14-day full trial · no credit card",
    "dlpage.h1": "Download BlueDeck",
    "dlpage.sub": "Choose your platform. Every download includes the full 14-day trial.",
    "dlpage.mac.name": "macOS",
    "dlpage.mac.sub": "Apple Silicon · .dmg",
    "dlpage.mac.cta": "Download for macOS",
    "dlpage.mac.meta": "Requires an Apple Silicon Mac",
    "dlpage.win.name": "Windows",
    "dlpage.win.sub": "x64 · .exe installer",
    "dlpage.win.cta": "Download for Windows",
    "dlpage.win.meta": "Requires 64-bit Windows 10/11",
    "dlpage.win.msi": "or get the .msi installer",
    "dlpage.ver": "Latest version",
    "dlpage.note": "Signed installers, cross-platform (Tauri). After the trial the core terminal stays free — the multi-agent deck needs a license."
  },
  ko: {
    "_meta.lang": "ko",
    "_meta.label": "한국어",
    "_meta.title": "BlueDeck — One deck. Every agent.",
    "_meta.desc": "멀티 터미널·에이전트 네이티브 개발 도구. 워크스페이스당 최대 16개의 실제 터미널을 그리드로 띄우고 Claude Code · Codex · Gemini CLI · Aider를 한 화면에서 지휘하세요. Rust + Tauri 기반의 가볍고 빠른 데스크톱 앱.",
    "nav.features": "기능",
    "nav.how": "작동 방식",
    "nav.pricing": "가격",
    "nav.docs": "문서",
    "nav.download": "다운로드",
    "hero.lede": "한 창 안의 그리드에 <b>최대 16개의 실제 터미널</b>을 띄우고, <b>Claude Code · Codex · Gemini CLI · Aider</b>를 각 패널에서 실행·지휘하는 멀티 터미널 에이전트 개발 도구.",
    "hero.cta.download": "무료로 다운로드",
    "hero.cta.explore": "기능 둘러보기 →",
    "hero.note": "<b>14일 풀 트라이얼</b> · 신용카드 불필요 · 이후에도 코어 터미널은 계속 무료",
    "deck.sidebar": "⌘B 사이드바",
    "agents.k": "설치된 에이전트를 자동 감지합니다",
    "feat.eyebrow": "Features",
    "feat.h2": "에이전트 스웜을 위한<br/>단 하나의 콘솔",
    "feat.p": "여러 개의 터미널 창을 저글링하지 마세요. BlueDeck 하나로 병렬 에이전트를 실행하고, 감시하고, 조율합니다.",
    "feat.grid.t": "멀티 터미널 그리드",
    "feat.grid.d": "워크스페이스당 최대 <b>16개의 진짜 PTY 세션</b>을 자동 그리드 레이아웃으로 배치합니다. VS Code와 동일한 xterm.js WebGL 렌더러를 사용해 실제 셸처럼 빠르고 정확합니다.",
    "feat.dispatch.t": "에이전트 디스패치",
    "feat.dispatch.d": "패널 헤더 드롭다운에서 에이전트를 골라 그 터미널에서 실행합니다. <code>claude</code> · <code>codex</code> · <code>gemini</code> · <code>aider</code>를 자동 감지합니다.",
    "feat.hub.t": "Agent Hub (MCP)",
    "feat.hub.d": "내장 MCP 서버가 실행 시 Claude Code에 자동 등록됩니다. 에이전트끼리 서로의 출력을 읽고, 프롬프트를 주고받으며 <b>자율 협업</b>합니다.",
    "feat.broadcast.t": "브로드캐스트 모드",
    "feat.broadcast.d": "하나의 프롬프트를 현재 워크스페이스의 모든 터미널에 동시 전송 — 에이전트 스웜 전체에 한 번에 명령을 내립니다.",
    "feat.worktree.t": "Git Worktree 격리",
    "feat.worktree.d": "⎇ 버튼으로 터미널마다 전용 git worktree와 브랜치를 부여합니다. 같은 저장소의 병렬 에이전트가 서로의 파일을 건드리지 않습니다.",
    "feat.status.t": "에이전트 상태 인식",
    "feat.status.d": "각 패널을 <b style=\"color:var(--green)\">working</b> / <b style=\"color:var(--amber)\">needs-input</b> / <b style=\"color:var(--ink-3)\">idle</b>로 추적합니다. 백그라운드 상태에서는 macOS 알림으로 손이 필요한 순간을 알려줍니다. <kbd>⌘J</kbd> 한 번으로 입력이 필요한 터미널로 바로 이동합니다. 알림을 클릭해도 바로 이동합니다.",
    "feat.diff.t": "Diff 리뷰 &amp; 스쿼시 병합",
    "feat.diff.d": "± 버튼으로 변경 파일 목록과 컬러 unified diff를 확인하고, 한 번의 클릭으로 저장소에 스쿼시 병합하거나 전부 폐기합니다. 충돌 시 안전하게 롤백됩니다. 병합 후에는 확인 한 번으로 worktree와 브랜치까지 정리됩니다.",
    "feat.session.t": "워크스페이스 &amp; 세션 복원",
    "feat.session.d": "워크스페이스별로 터미널 세트와 기본 디렉터리를 유지합니다. 앱을 다시 열면 레이아웃이 복원되고, Claude Code 패널은 <code>--continue</code>로 대화를 이어갑니다.",
    "how.eyebrow": "How it works",
    "how.h2": "세 단계로 시작하는 병렬 개발",
    "how.s1.t": "워크스페이스를 열고 패널을 나눕니다",
    "how.s1.d": "작업할 저장소를 워크스페이스로 추가하면 그리드에 터미널이 채워집니다. 필요한 만큼 패널을 늘려 최대 16개까지 배치하세요.",
    "how.s2.t": "각 패널에서 에이전트를 실행합니다",
    "how.s2.d": "드롭다운에서 Claude Code, Codex, Gemini, Aider를 골라 실행합니다. 신뢰하는 저장소는 ⚡ 자동 승인으로 멈춤 없이 돌립니다.",
    "how.s3.t": "지휘하고, 리뷰하고, 병합합니다",
    "how.s3.d": "프롬프트 바로 명령을 보내고, 상태 점으로 진행을 살피고, diff 패널에서 결과를 검토한 뒤 한 번에 병합합니다.",
    "stat.terminals": "워크스페이스당 터미널",
    "stat.agents": "지원 에이전트 CLI",
    "stat.memory": "Electron 대비 메모리",
    "stat.pty": "진짜 PTY 기반",
    "why.eyebrow": "Built on Rust",
    "why.h2": "가볍고, 빠르고, 안전하게",
    "why.p": "Tauri 2 + Rust 코어. OS 웹뷰를 사용해 Electron 대비 약 1/10의 메모리와 수 MB의 바이너리로 동작합니다. 데이터 레이스와 버퍼 오버플로는 컴파일 단계에서 차단되고, GC가 없습니다.",
    "why.perf.t": "네이티브 성능",
    "why.perf.d": "패널마다 하나의 PTY와 리더 스레드. 출력은 이벤트로 스트리밍되어 대량 로그에도 UI가 끊기지 않습니다.",
    "why.update.t": "서명된 자동 업데이트",
    "why.update.d": "실행 시 업데이트를 확인하고, 서명된 패키지를 한 번의 클릭으로 내려받아 설치합니다.",
    "why.i18n.t": "한글 IME &amp; 다국어",
    "why.i18n.d": "터미널 내 한글 조합을 매끄럽게 처리하고, 시스템 로케일을 감지해 한국어/영어를 자동 적용합니다.",
    "price.eyebrow": "Pricing",
    "price.h2": "먼저 전부 써보세요",
    "price.p": "14일 동안 모든 기능을 제한 없이. 트라이얼이 끝나도 코어 터미널은 계속 무료입니다.",
    "price.beta": "BlueDeck는 공개 베타 중입니다 — 2026년 8월 31일까지 모든 기능이 무료입니다. 베타가 끝나면 모두에게 새 14일 트라이얼이 시작됩니다.",
    "price.lite.price": "무료",
    "price.lite.sub": "개인 작업과 가벼운 사용을 위한 기본 터미널 환경.",
    "price.lite.f1": "워크스페이스 1개 × 터미널 2개",
    "price.lite.f2": "에이전트 실행 &amp; 프롬프트 바",
    "price.lite.f3": "한글 IME &amp; 레이아웃 복원",
    "price.lite.cta": "다운로드",
    "price.pro.tag": "Pro · 멀티 에이전트 덱",
    "price.pro.price": "라이선스",
    "price.pro.per": " / 디바이스",
    "price.pro.sub": "병렬 에이전트를 지휘하는 데 필요한 모든 것.",
    "price.pro.f1": "Lite의 모든 기능 +",
    "price.pro.f2": "무제한 워크스페이스 · 최대 16 터미널",
    "price.pro.f3": "상태 인식 · Worktree 격리 · Diff 리뷰",
    "price.pro.f4": "Agent Hub · 브로드캐스트 · 자동 승인",
    "price.pro.f5": "대화 이어가기 · 오프라인 사용",
    "price.pro.cta": "라이선스 구매",
    "price.note": "모든 다운로드에는 14일 풀 트라이얼이 포함됩니다. 라이선스는 Settings → License에서 키를 입력해 이 기기를 활성화합니다.",
    "dl.h2": "지금 바로 덱을 펼치세요",
    "dl.p": "다운로드하고, 에이전트를 실행하고, 14일 동안 전부 경험해 보세요.",
    "dl.cta": "BlueDeck 다운로드",
    "dl.sub": "서명된 설치 파일 · macOS &amp; Windows · 크로스 플랫폼 (Tauri)",
    "dlpage.title": "BlueDeck 다운로드 — 플랫폼 선택",
    "dlpage.desc": "macOS(Apple Silicon) 또는 Windows(x64)용 BlueDeck를 다운로드하세요. 모든 다운로드에는 14일 풀 트라이얼이 포함됩니다.",
    "dlpage.back": "← 홈으로",
    "dlpage.badge": "14일 풀 트라이얼 · 신용카드 불필요",
    "dlpage.h1": "BlueDeck 다운로드",
    "dlpage.sub": "플랫폼을 선택하세요. 모든 다운로드에는 14일 풀 트라이얼이 포함됩니다.",
    "dlpage.mac.name": "macOS",
    "dlpage.mac.sub": "Apple Silicon · .dmg",
    "dlpage.mac.cta": "macOS용 다운로드",
    "dlpage.mac.meta": "Apple Silicon Mac 필요",
    "dlpage.win.name": "Windows",
    "dlpage.win.sub": "x64 · .exe 설치 파일",
    "dlpage.win.cta": "Windows용 다운로드",
    "dlpage.win.meta": "64비트 Windows 10/11 필요",
    "dlpage.win.msi": "또는 .msi 설치 파일 받기",
    "dlpage.ver": "최신 버전",
    "dlpage.note": "서명된 설치 파일, 크로스 플랫폼 (Tauri). 트라이얼 후에도 코어 터미널은 계속 무료이며, 멀티 에이전트 덱은 라이선스가 필요합니다."
  }
};

// Pages can extend the dictionary with their own keys via window.I18N_EXTRA
// (defined in a script loaded BEFORE this one, e.g. docs-i18n.js).
if (window.I18N_EXTRA) {
  for (const lang of Object.keys(window.I18N_EXTRA)) {
    I18N[lang] = Object.assign(I18N[lang] || {}, window.I18N_EXTRA[lang]);
  }
}

const SUPPORTED = ["en", "ko"];
const DEFAULT_LANG = "en";

function pickLang() {
  const saved = localStorage.getItem("bd_lang");
  if (saved && SUPPORTED.includes(saved)) return saved;
  const nav = navigator.languages || [navigator.language || ""];
  for (const l of nav) {
    const code = (l || "").toLowerCase().split("-")[0];
    if (SUPPORTED.includes(code)) return code;
  }
  return DEFAULT_LANG;
}

function applyLang(lang) {
  const dict = I18N[lang] || I18N[DEFAULT_LANG];
  const root = document.documentElement;
  root.lang = dict["_meta.lang"];
  // page-specific title/description keys, falling back to the site defaults
  const titleKey = root.getAttribute("data-title-key") || "_meta.title";
  const descKey = root.getAttribute("data-desc-key") || "_meta.desc";
  document.title = dict[titleKey] || dict["_meta.title"];
  const md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute("content", dict[descKey] || dict["_meta.desc"]);
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) el.innerHTML = dict[key];
  });
  const label = document.getElementById("langLabel");
  if (label) label.textContent = dict["_meta.label"];
  document.querySelectorAll("#langMenu button").forEach((b) => {
    b.setAttribute("aria-current", b.dataset.lang === lang ? "true" : "false");
  });
  localStorage.setItem("bd_lang", lang);
  // re-apply version labels / download links that live inside i18n innerHTML
  if (typeof window.__applyRelease === "function") window.__applyRelease();
}

// init
applyLang(pickLang());

// language menu interactions
const langEl = document.getElementById("lang");
const langBtn = document.getElementById("langBtn");
if (langEl && langBtn) {
  langBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const open = langEl.classList.toggle("open");
    langBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });
  document.querySelectorAll("#langMenu button").forEach((b) => {
    b.addEventListener("click", () => {
      applyLang(b.dataset.lang);
      langEl.classList.remove("open");
      langBtn.setAttribute("aria-expanded", "false");
    });
  });
  document.addEventListener("click", () => {
    langEl.classList.remove("open");
    langBtn.setAttribute("aria-expanded", "false");
  });
}

// nav border on scroll
const hdr = document.getElementById("hdr");
if (hdr) {
  const onScroll = () => hdr.classList.toggle("scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}
