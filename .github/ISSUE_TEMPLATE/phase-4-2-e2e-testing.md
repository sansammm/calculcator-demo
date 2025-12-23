---
name: Phase 4.2 - E2E Testing
about: Implement end-to-end tests with Playwright
title: "[Testing] E2E Tests with Playwright"
labels: testing, e2e, P0
assignees: ''
---

## 작업 배경 (Background)

전체 애플리케이션의 사용자 플로우를 검증하기 위해 Playwright를 사용한 E2E(End-to-End) 테스트를 구현합니다. 실제 사용자 시나리오를 시뮬레이션하여 모든 기능이 통합 환경에서 올바르게 작동하는지 확인합니다.

## 작업 내용 (Tasks)

### Setup
- [ ] Create `playwright.config.ts` configuration
- [ ] Configure test browsers (Chrome, Firefox, Safari)
- [ ] Setup test directory: `tests/e2e/`
- [ ] Configure base URL and viewport sizes

### Test Cases
- [ ] **Test 1**: Basic calculation flow
  - Input: `2 + 3`
  - Click equals
  - Verify result: `5`
  
- [ ] **Test 2**: Scientific functions
  - Switch to DEG mode
  - Input: `sin(90)`
  - Click equals
  - Verify result: `1`
  
- [ ] **Test 3**: Mode switching (DEG ↔ RAD)
  - Click RAD mode toggle
  - Verify mode indicator changes
  - Input: `sin(1.5708)` (π/2 in radians)
  - Verify result: `1`
  
- [ ] **Test 4**: History feature
  - Perform calculation: `5 + 5 = 10`
  - Click history button
  - Verify history panel opens
  - Verify calculation appears in history
  - Click history item
  - Verify expression loads back
  
- [ ] **Test 5**: Error handling
  - Input: `1 / 0`
  - Click equals
  - Verify error message displays
  
- [ ] **Test 6**: Keyboard shortcuts
  - Type `2` using keyboard
  - Type `+` using keyboard
  - Type `3` using keyboard
  - Press `Enter`
  - Verify result: `5`

### Cross-browser Testing
- [ ] Run all tests on Chrome
- [ ] Run all tests on Firefox
- [ ] Run all tests on Safari (if on macOS)
- [ ] Verify all tests pass on all browsers

## 인수 조건 (Acceptance Criteria)

- ✅ All 6 E2E test cases implemented and passing
- ✅ Tests run successfully on Chrome, Firefox, Safari
- ✅ Tests run on CI/CD (GitHub Actions)
- ✅ Test coverage includes:
  - Basic calculations
  - Scientific functions
  - Mode switching
  - History feature
  - Error handling
  - Keyboard shortcuts
- ✅ Tests are reliable (no flaky tests)
- ✅ Cross-browser compatibility verified
- ✅ Mobile viewport testing included

## 참고 자료 (References)

- [Playwright Documentation](https://playwright.dev/)
- Tech Spec: `docs/TechSpec.md` - Section 1.5 (Testing)
- CI Workflow: `.github/workflows/ci.yml`

## 예상 시간 (Estimated Time)

6 hours
