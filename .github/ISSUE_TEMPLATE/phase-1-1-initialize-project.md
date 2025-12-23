---
name: Phase 1.1 - Initialize React + Vite Project
about: Setup initial React + TypeScript project with Vite
title: "[Setup] Initialize React + Vite Project"
labels: setup, P0
assignees: ''
---

## 작업 배경 (Background)

프로젝트의 기초를 구축하기 위해 React + TypeScript + Vite 기반의 개발 환경을 초기화해야 합니다. Vite는 빠른 HMR과 최적화된 빌드를 제공하여 개발 생산성을 높입니다.

## 작업 내용 (Tasks)

- [ ] Run `pnpm create vite@latest . --template react-ts`
- [ ] Install core dependencies (React, TypeScript)
- [ ] Install dev dependencies (ESLint, Prettier, Vitest)
- [ ] Configure TypeScript (`tsconfig.json`)
- [ ] Configure ESLint (`.eslintrc.cjs`)
- [ ] Configure Prettier (`.prettierrc`)
- [ ] Test development server (`pnpm dev`)

## 인수 조건 (Acceptance Criteria)

- ✅ Dev server runs without errors at `http://localhost:5173`
- ✅ TypeScript strict mode enabled in `tsconfig.json`
- ✅ ESLint and Prettier configured and working
- ✅ Hot module replacement (HMR) works correctly
- ✅ No TypeScript or linting errors in initial setup

## 참고 자료 (References)

- [Vite Documentation](https://vitejs.dev/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- Tech Spec: `docs/TechSpec.md`

## 예상 시간 (Estimated Time)

2 hours
