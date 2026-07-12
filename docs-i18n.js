// ── BlueDeck docs content (merged into I18N by i18n.js) ──
// Loaded BEFORE i18n.js. HTML attributes use single quotes so the JS
// strings can stay double-quoted (text apostrophes are fine).
window.I18N_EXTRA = {
  en: {
    "docs.meta.title": "BlueDeck Docs — One deck. Every agent.",
    "docs.meta.desc": "BlueDeck documentation: install, workspaces, the terminal grid, agents, Agent Hub (MCP), git worktree isolation, diff review, licensing and updates.",
    "docs.hero.eyebrow": "Documentation",
    "docs.hero.t": "BlueDeck Docs",
    "docs.hero.p": "Everything you need to run and command a swarm of coding agents from a single deck.",

    "docs.g.start": "Getting Started",
    "docs.g.concepts": "Core Concepts",
    "docs.g.guides": "Guides",
    "docs.g.reference": "Reference",

    "docs.intro.t": "Introduction",
    "docs.intro.b": "<p><b>BlueDeck</b> is a multi-terminal, agent-native development tool. It runs up to <b>16 real terminals (PTYs)</b> per workspace in a grid inside one window, and lets you launch and command coding agents — <b>Claude Code, Codex, Gemini CLI, Aider</b> — in each pane.</p><p>It's built on <b>Rust + Tauri 2</b>, so it uses the OS WebView for roughly <b>1/10 the memory</b> of an Electron app and ships as a few-MB native binary. Terminals use the same <code>xterm.js</code> WebGL renderer as VS Code, backed by real PTYs — exactly like your own shell.</p><p>Instead of juggling terminal windows and tabs, you get one <em>deck</em> where every agent runs side by side and you orchestrate them from a single place.</p>",

    "docs.install.t": "Installation",
    "docs.install.b": "<p>BlueDeck runs on <b>macOS (Apple Silicon)</b> and <b>Windows (x64)</b>. The current release is <b><span class='js-version'>v0.1.3</span></b>.</p><p><a class='btn btn-primary' href='download.html'>Go to downloads →</a></p><ul><li><b>macOS</b> — open the <code>.dmg</code> and drag BlueDeck to Applications.</li><li><b>Windows</b> — run the <code>.exe</code> installer (an <code>.msi</code> is also available).</li></ul><div class='callout'><span class='ci'>ⓘ</span><span>Every download includes a <b>14-day full trial</b> — no credit card. After the trial the core terminal stays free in <b>Lite mode</b>; the multi-agent deck needs a license. See <a href='#licensing'>Licensing</a>.</span></div>",

    "docs.quick.t": "Quick Start",
    "docs.quick.b": "<ol><li><b>Add a workspace.</b> Point BlueDeck at a repo or folder — it becomes a workspace in the left sidebar with its own default directory.</li><li><b>Split the grid.</b> Open panes until you have as many terminals as you need (up to 16). The grid lays them out automatically.</li><li><b>Launch agents.</b> In each pane's header, pick an agent (Claude Code, Codex, Gemini, Aider) from the dropdown to start it in that terminal.</li><li><b>Command them.</b> Type in the prompt bar to send a prompt to the focused pane, or use <b>Broadcast</b> to send one prompt to every pane at once.</li><li><b>Review &amp; merge.</b> Open the diff panel (±) to see each agent's changes and squash-merge them back with one click.</li></ol><div class='callout'><span class='ci'>⌘</span><span>Press <kbd>⌘B</kbd> (macOS) / <kbd>Ctrl+B</kbd> (Windows) to toggle the sidebar and give your terminals more room.</span></div>",

    "docs.ws.t": "Workspaces",
    "docs.ws.b": "<p>A <b>workspace</b> groups a set of terminals with a default working directory. Add and switch workspaces from the left sidebar.</p><ul><li>Switching away keeps the other workspaces' terminals and agents <b>running in the background</b>.</li><li><b>Double-click</b> a workspace to rename it.</li><li>Badges show each workspace's terminal count and how many agents are running, with red/amber cues when an agent needs attention.</li></ul>",

    "docs.grid.t": "The terminal grid",
    "docs.grid.b": "<p>Each workspace holds up to <b>16 PTY sessions</b> in an automatic grid layout, with per-pane focus and close. These are <b>real terminals</b>, not emulated: one PTY and reader thread per pane, streamed to the UI so it stays smooth under heavy output.</p><ul><li>Shells run as <b>interactive login shells</b> (<code>-il</code>) so your full <code>PATH</code> (nvm, Homebrew, agent CLIs) is loaded.</li><li>The <b>📁 button</b> switches just that pane to another directory.</li><li>Launching an agent writes a command into the PTY, so the shell session survives when the agent exits.</li></ul>",

    "docs.agents.t": "Agents",
    "docs.agents.b": "<p>BlueDeck <b>auto-detects</b> the coding-agent CLIs you have installed: <code>claude</code>, <code>codex</code>, <code>gemini</code> and <code>aider</code>. Any pane can launch any detected agent from its header dropdown.</p><p>Because each pane is a real shell, you can also run agents (or anything else) by hand — the dropdown is just a convenience.</p>",

    "docs.dispatch.t": "Agent dispatch & auto-approve",
    "docs.dispatch.b": "<p>Pick an agent from a pane's header dropdown to launch it in that terminal.</p><p>The <b>⚡ auto-approve</b> toggle launches that pane's agent with <code>--dangerously-skip-permissions</code> — no approval prompts. It's <b>per-pane</b> and persisted, so a trusted repo can run full-speed while another pane keeps manual approvals. It applies from the pane's next launch.</p><div class='callout warn'><span class='ci'>⚠</span><span>Auto-approve lets an agent act without asking. Use it only in <b>repos you trust</b>.</span></div>",

    "docs.prompt.t": "Prompt bar & broadcast",
    "docs.prompt.b": "<p>The <b>prompt bar</b> at the bottom sends a prompt to the <b>focused</b> pane's agent — type once, hit enter, no need to click into the terminal.</p><p><b>Broadcast mode</b> sends a single prompt to <b>every terminal</b> in the current workspace at once, so you can command an entire agent swarm in one keystroke.</p>",

    "docs.status.t": "Agent status awareness",
    "docs.status.b": "<p>BlueDeck watches each pane's PTY output and screen patterns to track it as one of:</p><ul><li><b style='color:var(--green)'>working</b> — the agent is actively doing something</li><li><b style='color:var(--amber)'>needs-input</b> — it's waiting on you</li><li><b style='color:var(--ink-3)'>idle</b> — nothing running</li></ul><p>Status shows as a colored dot + label per pane and as red/amber badges per workspace in the sidebar. When the app is in the background, <b>macOS notifications</b> ping you the moment an agent needs a hand.</p>",

    "docs.worktree.t": "Git worktree isolation",
    "docs.worktree.b": "<p>The <b>⎇ button</b> gives a terminal its own <b>git worktree</b> — <code>~/.bluedeck/worktrees/&lt;repo&gt;/agent-N</code> on branch <code>bluedeck/agent-N</code> — so parallel agents on the same repo never touch each other's files.</p><ul><li>Closing a pane with a <b>clean</b> worktree removes it automatically.</li><li>A worktree with <b>uncommitted changes</b> is kept (with a notification), and the branch always survives.</li></ul>",

    "docs.diff.t": "Diff review & merge",
    "docs.diff.b": "<p>The <b>± button</b> opens a review panel for a pane: a changed-file list with add/delete counts and a colored unified diff, measured against the worktree's base (agent commits included).</p><ul><li>One click <b>squash-merges</b> everything back into the repo — conflicts roll back safely.</li><li>Or <b>discard</b> it all after a confirmation.</li></ul>",

    "docs.hub.t": "Agent Hub (MCP)",
    "docs.hub.b": "<p>BlueDeck embeds an <b>MCP server</b> at <code>http://127.0.0.1:41720/mcp</code> and <b>registers it with Claude Code automatically on launch</b> (user scope, idempotent). The <b>🔗 popover</b> in the topbar has a copy-ready command for other MCP clients.</p><p>Agents in every pane can then collaborate autonomously:</p><ul><li><code>list_agents</code> — see every pane and its live status</li><li><code>send_to_agent</code> — inject a prompt into another pane, addressed by the name in its header (T1, T2, or a custom name). So &ldquo;when you're done, tell T2&rdquo; just works.</li><li><code>read_agent_output</code> — read another pane's recent output</li></ul>",

    "docs.session.t": "Session restore",
    "docs.session.b": "<p>Your workspace layout — names, directories, panes and running agents — is saved automatically to <code>session.json</code>. Reopening BlueDeck restores the full layout and <b>relaunches the agents</b>.</p><p>Claude Code panes resume their previous conversation via <code>claude --continue</code> (a fresh start if there's nothing to continue). Only the first restored pane per (agent, directory) resumes; parallel panes in the same directory start fresh so they don't all grab the same conversation.</p>",

    "docs.shortcuts.t": "Keyboard shortcuts",
    "docs.shortcuts.b": "<table><thead><tr><th>Action</th><th>macOS</th><th>Windows</th></tr></thead><tbody><tr><td>Toggle sidebar</td><td><kbd>⌘B</kbd></td><td><kbd>Ctrl+B</kbd></td></tr><tr><td>Rename a terminal / workspace</td><td colspan='2'>Double-click its name</td></tr></tbody></table>",

    "docs.license.t": "Licensing & Lite mode",
    "docs.license.b": "<p>Every install starts with a <b>14-day full trial</b> (all features, no credit card). When the trial ends, BlueDeck drops to <b>Lite mode</b>:</p><ul><li><b>Lite (free):</b> the core terminal — 1 workspace × 2 terminals, agent launch, IME, prompt bar and layout restore.</li><li><b>Pro (license):</b> the full multi-agent deck — status awareness, worktree isolation, diff review, Agent Hub, broadcast, auto-approve and conversation resume.</li></ul><p>Activate a device in <b>Settings → License</b> by entering your key. Activation is stored and the app then runs <b>offline indefinitely</b>; it revalidates online in the background and frees the seat when you &ldquo;Deactivate this device&rdquo;. Paid features are enforced in the Rust core, not just the UI.</p>",

    "docs.updates.t": "Updates",
    "docs.updates.b": "<p>BlueDeck checks for updates on launch. When a new version is available, an <b>&ldquo;⬆ Update&rdquo; pill</b> appears in the topbar; one click downloads and installs the <b>signed</b> update, then &ldquo;Restart to update&rdquo; relaunches the app.</p><p>Updates are verified against the app's embedded public key, so only releases signed with BlueDeck's private key are ever installed.</p>",

    "docs.faq.t": "FAQ",
    "docs.faq.b": "<h3>Which agents are supported?</h3><p>Claude Code, Codex, Gemini CLI and Aider are auto-detected. Any other CLI can be run by hand in a pane.</p><h3>Is my code sent anywhere?</h3><p>No. Terminals run locally on your machine, and the Agent Hub MCP server binds to <code>127.0.0.1</code> (localhost) only. Agents talk to their own providers exactly as they would in a normal terminal.</p><h3>Does it work offline?</h3><p>Yes. Once a license is activated it's stored locally and the app runs offline; it only revalidates online in the background when it can.</p><h3>Which platforms are supported?</h3><p>macOS on Apple Silicon and Windows on x64. Both auto-update.</p>",
  },
  ko: {
    "docs.meta.title": "BlueDeck 문서 — One deck. Every agent.",
    "docs.meta.desc": "BlueDeck 문서: 설치, 워크스페이스, 터미널 그리드, 에이전트, Agent Hub(MCP), git worktree 격리, diff 리뷰, 라이선스와 업데이트.",
    "docs.hero.eyebrow": "Documentation",
    "docs.hero.t": "BlueDeck 문서",
    "docs.hero.p": "하나의 덱에서 코딩 에이전트 스웜을 실행하고 지휘하는 데 필요한 모든 것.",

    "docs.g.start": "시작하기",
    "docs.g.concepts": "핵심 개념",
    "docs.g.guides": "가이드",
    "docs.g.reference": "레퍼런스",

    "docs.intro.t": "소개",
    "docs.intro.b": "<p><b>BlueDeck</b>는 멀티 터미널·에이전트 네이티브 개발 도구입니다. 하나의 창 안 그리드에 워크스페이스당 최대 <b>16개의 실제 터미널(PTY)</b>을 띄우고, 각 패널에서 코딩 에이전트 — <b>Claude Code, Codex, Gemini CLI, Aider</b> — 를 실행·지휘합니다.</p><p><b>Rust + Tauri 2</b> 기반이라 OS 웹뷰를 사용해 Electron 앱 대비 약 <b>1/10의 메모리</b>로 동작하며 수 MB의 네이티브 바이너리로 배포됩니다. 터미널은 VS Code와 동일한 <code>xterm.js</code> WebGL 렌더러 위에서 실제 PTY로 동작해, 여러분의 셸과 완전히 똑같습니다.</p><p>여러 터미널 창과 탭을 저글링하는 대신, 모든 에이전트가 나란히 실행되는 하나의 <em>덱</em>에서 한곳에서 지휘합니다.</p>",

    "docs.install.t": "설치",
    "docs.install.b": "<p>BlueDeck는 <b>macOS(Apple Silicon)</b>와 <b>Windows(x64)</b>에서 동작합니다. 현재 릴리스는 <b><span class='js-version'>v0.1.3</span></b>입니다.</p><p><a class='btn btn-primary' href='download.html'>다운로드 페이지로 →</a></p><ul><li><b>macOS</b> — <code>.dmg</code>를 열고 BlueDeck를 응용 프로그램 폴더로 끌어다 놓습니다.</li><li><b>Windows</b> — <code>.exe</code> 설치 파일을 실행합니다(<code>.msi</code>도 제공).</li></ul><div class='callout'><span class='ci'>ⓘ</span><span>모든 다운로드에는 <b>14일 풀 트라이얼</b>이 포함됩니다(신용카드 불필요). 트라이얼 후에는 코어 터미널이 <b>Lite 모드</b>로 계속 무료이며, 멀티 에이전트 덱은 라이선스가 필요합니다. <a href='#licensing'>라이선스</a>를 참고하세요.</span></div>",

    "docs.quick.t": "빠른 시작",
    "docs.quick.b": "<ol><li><b>워크스페이스 추가.</b> 저장소나 폴더를 지정하면 왼쪽 사이드바에 기본 디렉터리를 가진 워크스페이스로 추가됩니다.</li><li><b>그리드 분할.</b> 필요한 만큼 패널을 열어 터미널을 배치합니다(최대 16개). 그리드가 자동으로 정렬합니다.</li><li><b>에이전트 실행.</b> 각 패널 헤더의 드롭다운에서 에이전트(Claude Code, Codex, Gemini, Aider)를 골라 해당 터미널에서 실행합니다.</li><li><b>지휘.</b> 프롬프트 바에 입력해 포커스된 패널에 프롬프트를 보내거나, <b>브로드캐스트</b>로 모든 패널에 한 번에 보냅니다.</li><li><b>리뷰 &amp; 병합.</b> diff 패널(±)을 열어 각 에이전트의 변경을 확인하고 한 번의 클릭으로 스쿼시 병합합니다.</li></ol><div class='callout'><span class='ci'>⌘</span><span><kbd>⌘B</kbd>(macOS) / <kbd>Ctrl+B</kbd>(Windows)로 사이드바를 접어 터미널 공간을 넓힐 수 있습니다.</span></div>",

    "docs.ws.t": "워크스페이스",
    "docs.ws.b": "<p><b>워크스페이스</b>는 기본 작업 디렉터리와 함께 터미널 세트를 묶습니다. 왼쪽 사이드바에서 추가하고 전환합니다.</p><ul><li>다른 워크스페이스로 전환해도 기존 워크스페이스의 터미널과 에이전트는 <b>백그라운드에서 계속 실행</b>됩니다.</li><li>워크스페이스를 <b>더블클릭</b>하면 이름을 바꿀 수 있습니다.</li><li>배지로 각 워크스페이스의 터미널 수와 실행 중인 에이전트 수를 보여줍니다(손이 필요한 에이전트는 빨강/주황으로 표시).</li></ul>",

    "docs.grid.t": "터미널 그리드",
    "docs.grid.b": "<p>각 워크스페이스는 최대 <b>16개의 PTY 세션</b>을 자동 그리드 레이아웃으로 담고, 패널별 포커스·닫기를 지원합니다. 에뮬레이션이 아닌 <b>실제 터미널</b>로, 패널마다 하나의 PTY와 리더 스레드가 UI로 스트리밍되어 대량 출력에도 매끄럽습니다.</p><ul><li>셸은 <b>인터랙티브 로그인 셸</b>(<code>-il</code>)로 실행되어 전체 <code>PATH</code>(nvm, Homebrew, 에이전트 CLI)가 로드됩니다.</li><li><b>📁 버튼</b>으로 해당 패널만 다른 디렉터리로 전환합니다.</li><li>에이전트 실행 시 PTY에 명령을 기록하므로, 에이전트가 종료돼도 셸 세션은 유지됩니다.</li></ul>",

    "docs.agents.t": "에이전트",
    "docs.agents.b": "<p>BlueDeck는 설치된 코딩 에이전트 CLI를 <b>자동 감지</b>합니다: <code>claude</code>, <code>codex</code>, <code>gemini</code>, <code>aider</code>. 모든 패널에서 감지된 에이전트를 헤더 드롭다운으로 실행할 수 있습니다.</p><p>각 패널이 실제 셸이므로 에이전트(또는 무엇이든)를 직접 실행할 수도 있습니다 — 드롭다운은 편의 기능입니다.</p>",

    "docs.dispatch.t": "에이전트 디스패치 & 자동 승인",
    "docs.dispatch.b": "<p>패널 헤더 드롭다운에서 에이전트를 골라 그 터미널에서 실행합니다.</p><p><b>⚡ 자동 승인</b> 토글은 해당 패널의 에이전트를 <code>--dangerously-skip-permissions</code>로 실행합니다 — 승인 프롬프트 없음. <b>패널별</b>로 저장되므로, 신뢰하는 저장소는 멈춤 없이 돌리고 다른 패널은 수동 승인을 유지할 수 있습니다. 해당 패널의 다음 실행부터 적용됩니다.</p><div class='callout warn'><span class='ci'>⚠</span><span>자동 승인은 에이전트가 묻지 않고 동작하게 합니다. <b>신뢰하는 저장소</b>에서만 사용하세요.</span></div>",

    "docs.prompt.t": "프롬프트 바 & 브로드캐스트",
    "docs.prompt.b": "<p>하단의 <b>프롬프트 바</b>는 <b>포커스된</b> 패널의 에이전트에 프롬프트를 보냅니다 — 터미널을 클릭할 필요 없이 입력 후 엔터.</p><p><b>브로드캐스트 모드</b>는 현재 워크스페이스의 <b>모든 터미널</b>에 하나의 프롬프트를 동시에 보내, 에이전트 스웜 전체에 한 번에 명령할 수 있습니다.</p>",

    "docs.status.t": "에이전트 상태 인식",
    "docs.status.b": "<p>BlueDeck는 각 패널의 PTY 출력과 화면 패턴을 관찰해 다음 중 하나로 추적합니다:</p><ul><li><b style='color:var(--green)'>working</b> — 에이전트가 작업 중</li><li><b style='color:var(--amber)'>needs-input</b> — 여러분의 입력을 기다림</li><li><b style='color:var(--ink-3)'>idle</b> — 실행 중인 것 없음</li></ul><p>상태는 패널별 컬러 점+라벨과 사이드바의 워크스페이스별 빨강/주황 배지로 표시됩니다. 앱이 백그라운드에 있을 때는 <b>macOS 알림</b>으로 손이 필요한 순간을 알려줍니다.</p>",

    "docs.worktree.t": "Git worktree 격리",
    "docs.worktree.b": "<p><b>⎇ 버튼</b>은 터미널에 전용 <b>git worktree</b>를 부여합니다 — <code>~/.bluedeck/worktrees/&lt;repo&gt;/agent-N</code>, 브랜치 <code>bluedeck/agent-N</code> — 같은 저장소의 병렬 에이전트가 서로의 파일을 건드리지 않습니다.</p><ul><li><b>깨끗한</b> worktree가 있는 패널을 닫으면 자동으로 제거됩니다.</li><li><b>커밋되지 않은 변경</b>이 있는 worktree는 유지되며(알림 표시), 브랜치는 항상 살아남습니다.</li></ul>",

    "docs.diff.t": "Diff 리뷰 & 병합",
    "docs.diff.b": "<p><b>± 버튼</b>은 패널의 리뷰 패널을 엽니다: 추가/삭제 수가 있는 변경 파일 목록과 컬러 unified diff를 worktree 베이스 기준으로(에이전트 커밋 포함) 보여줍니다.</p><ul><li>한 번의 클릭으로 전체를 저장소에 <b>스쿼시 병합</b>합니다 — 충돌 시 안전하게 롤백됩니다.</li><li>또는 확인 후 전부 <b>폐기</b>합니다.</li></ul>",

    "docs.hub.t": "Agent Hub (MCP)",
    "docs.hub.b": "<p>BlueDeck는 <code>http://127.0.0.1:41720/mcp</code>에 <b>MCP 서버</b>를 내장하고 실행 시 <b>Claude Code에 자동 등록</b>합니다(user 스코프, 멱등). 상단바의 <b>🔗 팝오버</b>에는 다른 MCP 클라이언트용 복사 가능한 명령이 있습니다.</p><p>그러면 모든 패널의 에이전트가 자율적으로 협업할 수 있습니다:</p><ul><li><code>list_agents</code> — 모든 패널과 실시간 상태 확인</li><li><code>send_to_agent</code> — 헤더의 이름(T1, T2, 또는 커스텀 이름)으로 지정해 다른 패널에 프롬프트 주입. &ldquo;끝나면 T2에게 알려줘&rdquo;가 그대로 동작합니다.</li><li><code>read_agent_output</code> — 다른 패널의 최근 출력 읽기</li></ul>",

    "docs.session.t": "세션 복원",
    "docs.session.b": "<p>워크스페이스 레이아웃 — 이름, 디렉터리, 패널, 실행 중인 에이전트 — 이 <code>session.json</code>에 자동 저장됩니다. BlueDeck를 다시 열면 전체 레이아웃이 복원되고 <b>에이전트가 재실행</b>됩니다.</p><p>Claude Code 패널은 <code>claude --continue</code>로 이전 대화를 이어갑니다(이어갈 것이 없으면 새로 시작). (에이전트, 디렉터리) 조합당 첫 번째 복원 패널만 대화를 이어가며, 같은 디렉터리의 병렬 패널은 같은 대화를 중복으로 잡지 않도록 새로 시작합니다.</p>",

    "docs.shortcuts.t": "키보드 단축키",
    "docs.shortcuts.b": "<table><thead><tr><th>동작</th><th>macOS</th><th>Windows</th></tr></thead><tbody><tr><td>사이드바 토글</td><td><kbd>⌘B</kbd></td><td><kbd>Ctrl+B</kbd></td></tr><tr><td>터미널 / 워크스페이스 이름 변경</td><td colspan='2'>이름 더블클릭</td></tr></tbody></table>",

    "docs.license.t": "라이선스 & Lite 모드",
    "docs.license.b": "<p>모든 설치는 <b>14일 풀 트라이얼</b>로 시작합니다(모든 기능, 신용카드 불필요). 트라이얼이 끝나면 BlueDeck는 <b>Lite 모드</b>로 전환됩니다:</p><ul><li><b>Lite(무료):</b> 코어 터미널 — 워크스페이스 1개 × 터미널 2개, 에이전트 실행, IME, 프롬프트 바, 레이아웃 복원.</li><li><b>Pro(라이선스):</b> 전체 멀티 에이전트 덱 — 상태 인식, worktree 격리, diff 리뷰, Agent Hub, 브로드캐스트, 자동 승인, 대화 이어가기.</li></ul><p><b>Settings → License</b>에서 키를 입력해 기기를 활성화합니다. 활성화는 저장되어 앱이 <b>무기한 오프라인</b>으로 동작하며, 백그라운드에서 온라인 재검증을 하고 &ldquo;이 기기 비활성화&rdquo; 시 좌석을 반환합니다. 유료 기능은 UI뿐 아니라 Rust 코어에서 강제됩니다.</p>",

    "docs.updates.t": "업데이트",
    "docs.updates.b": "<p>BlueDeck는 실행 시 업데이트를 확인합니다. 새 버전이 있으면 상단바에 <b>&ldquo;⬆ Update&rdquo; 필</b>이 나타나고, 한 번의 클릭으로 <b>서명된</b> 업데이트를 내려받아 설치한 뒤 &ldquo;Restart to update&rdquo;로 앱을 다시 시작합니다.</p><p>업데이트는 앱에 내장된 공개키로 검증되므로, BlueDeck의 개인키로 서명된 릴리스만 설치됩니다.</p>",

    "docs.faq.t": "자주 묻는 질문",
    "docs.faq.b": "<h3>어떤 에이전트를 지원하나요?</h3><p>Claude Code, Codex, Gemini CLI, Aider를 자동 감지합니다. 다른 CLI도 패널에서 직접 실행할 수 있습니다.</p><h3>제 코드가 어딘가로 전송되나요?</h3><p>아니요. 터미널은 로컬에서 실행되고, Agent Hub MCP 서버는 <code>127.0.0.1</code>(로컬호스트)에만 바인딩됩니다. 에이전트는 일반 터미널에서와 동일하게 각자의 제공자와 통신합니다.</p><h3>오프라인에서 동작하나요?</h3><p>네. 라이선스가 활성화되면 로컬에 저장되어 오프라인으로 동작하며, 가능할 때 백그라운드에서만 온라인 재검증을 합니다.</p><h3>어떤 플랫폼을 지원하나요?</h3><p>Apple Silicon macOS와 x64 Windows이며, 둘 다 자동 업데이트됩니다.</p>",
  },
};
