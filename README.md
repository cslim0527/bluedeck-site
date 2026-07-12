# BlueDeck — 공식 웹사이트

BlueDeck 랜딩 페이지. 의존성 없는 정적 사이트(단일 `index.html` + `favicon.svg`)라 어디서든 그대로 호스팅됩니다.

## 로컬 미리보기

```bash
cd website
python3 -m http.server 8080
# → http://localhost:8080
```

또는 `index.html`을 브라우저로 바로 열어도 됩니다.

## 배포

정적 파일만 있으므로 별도 빌드가 필요 없습니다.

- **GitHub Pages**: 저장소 Settings → Pages에서 소스를 `main` 브랜치 `/website`로 지정
- **Netlify / Vercel / Cloudflare Pages**: publish 디렉터리를 `website`로 설정 (빌드 명령 없음)

## 다운로드 호스팅 (중요)

앱 소스 저장소 `cslim0527/blue-deck`는 **private**이라 릴리스 파일을 익명 사용자가 받을 수
없습니다. 그래서 설치 파일은 **공개 저장소 `cslim0527/bluedeck-site`의 릴리스**에 올리고,
버튼은 버전 없는 안정적 URL로 직접 링크합니다:

- macOS: `https://github.com/cslim0527/bluedeck-site/releases/latest/download/BlueDeck-macOS-arm64.dmg`
- Windows: `https://github.com/cslim0527/bluedeck-site/releases/latest/download/BlueDeck-Windows-x64-setup.exe`

`releases/latest/download/<고정이름>` 형식이라 버전이 올라가도 URL이 그대로 유지됩니다.
GitHub 에셋은 `Content-Disposition: attachment`로 응답하므로 랜딩 페이지 없이 바로 다운로드됩니다.
일반 "다운로드" CTA(`.js-dl`)는 방문자 OS를 감지해 맞는 파일로 연결됩니다(JS 미동작 시 `#download`
섹션으로 이동).

### 새 버전 배포 시

1. `blue-deck` CI가 만든 릴리스에서 `*_aarch64.dmg`, `*_x64-setup.exe`를 내려받습니다.
2. **버전 없는 고정 이름**으로 바꿔 `bluedeck-site` 릴리스에 업로드(교체)합니다:

   ```bash
   gh release download <tag> --repo cslim0527/blue-deck --dir ./dl \
     --pattern "*_aarch64.dmg" --pattern "*_x64-setup.exe"
   cp ./dl/BlueDeck_*_aarch64.dmg   ./dl/BlueDeck-macOS-arm64.dmg
   cp ./dl/BlueDeck_*_x64-setup.exe ./dl/BlueDeck-Windows-x64-setup.exe
   gh release create <tag> --repo cslim0527/bluedeck-site \
     ./dl/BlueDeck-macOS-arm64.dmg ./dl/BlueDeck-Windows-x64-setup.exe
   # 이미 릴리스가 있으면: gh release upload <tag> --clobber ...
   ```

## 배포 (웹사이트)

정적 파일만 있으므로 별도 빌드가 필요 없습니다. `cslim0527/bluedeck-site`의 `main`에 푸시하면
GitHub Pages가 자동 반영합니다.

## 유지보수 시 확인할 값

| 위치 | 값 |
|---|---|
| 라이선스 구매 (Lemon Squeezy) | `CHECKOUT_URL` in `src-tauri/src/license.rs` |

카피(기능·가격)는 루트 `README.md`의 Features / Trial & Lite 섹션을 기준으로 합니다.
