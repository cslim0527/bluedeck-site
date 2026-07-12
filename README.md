# BlueDeck — 공식 웹사이트

[BlueDeck](https://github.com/cslim0527/blue-deck)의 랜딩 페이지. 의존성 없는 정적 사이트
(`index.html` + `favicon.svg`)라 별도 빌드 없이 GitHub Pages에서 그대로 서빙됩니다.

**라이브**: https://cslim0527.github.io/bluedeck-site/

## 로컬 미리보기

```bash
python3 -m http.server 8080   # → http://localhost:8080
```

또는 `index.html`을 브라우저로 바로 열어도 됩니다.

## 배포

`main` 브랜치에 푸시하면 GitHub Pages(branch: `main`, folder: `/`)가 자동으로 반영합니다.
`.nojekyll` 파일로 Jekyll 처리를 건너뜁니다.

## 유지보수 시 확인할 값

앱 소스(`cslim0527/blue-deck`)와 동기화되어야 하는 링크:

| 위치 | 값 |
|---|---|
| 다운로드 | `https://github.com/cslim0527/blue-deck/releases/latest` |
| 라이선스 구매 (Lemon Squeezy) | `CHECKOUT_URL` in `src-tauri/src/license.rs` |
