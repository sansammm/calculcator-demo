---
name: Phase 1.2 - Install Project Dependencies
about: Install all required dependencies for the calculator app
title: "[Setup] Install Project Dependencies"
labels: setup, P0
assignees: ''
---

## 작업 배경 (Background)

계산기 앱 개발에 필요한 모든 의존성 패키지를 설치합니다. TailwindCSS (스타일링), mathjs (계산 엔진), Vitest (테스팅), Playwright (E2E 테스트), Vite PWA 플러그인 등이 포함됩니다.

## 작업 내용 (Tasks)

- [ ] Install TailwindCSS: `pnpm add -D tailwindcss postcss autoprefixer`
- [ ] Run `npx tailwindcss init -p` to create config files
- [ ] Install mathjs: `pnpm add mathjs`
- [ ] Install Vitest: `pnpm add -D vitest @vitest/ui`
- [ ] Install Playwright: `pnpm add -D @playwright/test`
- [ ] Run `npx playwright install` to install browsers
- [ ] Install Vite PWA plugin: `pnpm add -D vite-plugin-pwa`
- [ ] Verify no dependency conflicts

## 인수 조건 (Acceptance Criteria)

- ✅ All dependencies installed successfully without errors
- ✅ `tailwind.config.js` and `postcss.config.js` created
- ✅ TailwindCSS classes work in development mode
- ✅ No peer dependency warnings or conflicts
- ✅ `package.json` contains all required dependencies

## 참고 자료 (References)

- [TailwindCSS Installation](https://tailwindcss.com/docs/installation)
- [mathjs Documentation](https://mathjs.org/)
- [Vitest Guide](https://vitest.dev/guide/)
- Tech Spec: `docs/TechSpec.md` - Section 1 (Technology Stack)

## 예상 시간 (Estimated Time)

1 hour
