# BlueDeck — 공식 웹사이트

BlueDeck 랜딩 페이지. 빌드 과정이 없는 정적 사이트라 어디서든 그대로 호스팅됩니다.

## 파일 구성

- `index.html` — 홈(랜딩) 페이지
- `download.html` — OS(macOS / Windows) 선택 다운로드 페이지. "다운로드" CTA는 모두 이 페이지로 이동합니다(OS 자동 감지 다운로드 없음)
- `styles.css` — 두 페이지가 공유하는 스타일
- `i18n.js` — 두 페이지가 공유하는 다국어 사전 + 로직(영어 기본, 한국어, 브라우저 언어 자동 감지). 페이지별 `<title>`/description은 `<html data-title-key data-desc-key>`로 지정
- `favicon.svg`

## 로컬 미리보기

```bash
cd website
python3 -m http.server 8080
# → http://localhost:8080
```

또는 `index.html`을 브라우저로 바로 열어도 됩니다.

## 다운로드 호스팅 & 버전 표시 (중요)

설치 파일은 **공개 저장소 [`cslim0527/blue-deck-releases`](https://github.com/cslim0527/blue-deck-releases/releases/latest)**
의 릴리스에서 배포합니다. 파일명에 버전이 포함되므로(`BlueDeck_0.1.3_aarch64.dmg`) 고정 URL이
불가능해, `release.js`가 **GitHub API로 최신 릴리스를 읽어** 버전 라벨과 다운로드 링크를 자동
반영합니다:

- 최신 릴리스 조회: `https://api.github.com/repos/cslim0527/blue-deck-releases/releases/latest`
  (익명 접근 + CORS `*` 허용 확인됨)
- `.js-version` 요소 → 릴리스 `tag_name`(예: `v0.1.3`)으로 채움
- `[data-dl="mac"|"win"|"msi"]` 링크 → 에셋 이름 패턴(`aarch64.dmg` / `-setup.exe` / `.msi`)에
  매칭되는 `browser_download_url`로 설정

API 호출이 실패하면(오프라인/레이트리밋) `release.js`의 `FALLBACK`(현재 릴리스 하드코딩 URL)로
폴백합니다. GitHub 에셋은 `Content-Disposition: attachment`로 응답하므로 랜딩 없이 바로 다운로드됩니다.

### 새 버전 배포 시

`blue-deck-releases`에 새 릴리스를 올리면 웹사이트는 **코드 수정 없이 자동 반영**됩니다(API가
`latest`를 읽음). 유일한 수동 작업은 안전망인 `release.js`의 `FALLBACK` 버전/파일명을 새 버전으로
맞춰 두는 것입니다.

## 배포 (웹사이트)

정적 파일만 있으므로 별도 빌드가 필요 없습니다. `cslim0527/bluedeck-site`의 `main`에 푸시하면
GitHub Pages가 자동 반영합니다.

## 유지보수 시 확인할 값

| 위치 | 값 |
|---|---|
| 라이선스 구매 (Lemon Squeezy) | `CHECKOUT_URL` in `src-tauri/src/license.rs` |

카피(기능·가격)는 루트 `README.md`의 Features / Trial & Lite 섹션을 기준으로 합니다.
