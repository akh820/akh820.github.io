# Simple Resume

간단한 이력서 웹사이트 템플릿입니다. Next.js, Shadcn UI를 사용하여 구현되었습니다.

## 기능

- 반응형 디자인 (모바일, 태블릿, 데스크톱)
- 다크모드 / 라이트모드 지원
- 한국어 / 일본어 언어 전환 기능
- 인쇄 및 PDF 저장 기능

## 기술 스택

- Next.js 14
- TypeScript
- Tailwind CSS
- Shadcn UI
- next-intl (다국어 지원)
- next-themes (테마 지원)

## 시작하기

### 설치

```bash
# 저장소 클론
git clone https://github.com/akh820/simple-resume.git
cd simple-resume

# 의존성 설치
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속하여 결과를 확인할 수 있습니다.

### 빌드

```bash
npm run build
```

### 배포

이 프로젝트는 GitHub Pages를 통해 자동으로 배포됩니다. `main` 브랜치에 변경사항을 푸시하면 GitHub Actions가 자동으로 빌드하고 배포합니다.

배포된 사이트는 [https://akh820.github.io/simple-resume](https://akh820.github.io/simple-resume)에서 확인할 수 있습니다.

## 커스터마이징

- `src/messages/ko.json` 및 `src/messages/ja.json` 파일을 수정하여 이력서 내용을 변경할 수 있습니다.
- 컴포넌트는 `src/components/resume` 디렉토리에 있습니다.
- 테마 및 스타일 관련 설정은 `src/app/globals.css`에서 수정할 수 있습니다.

## 라이선스

MIT
