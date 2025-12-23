---
name: Phase 3.1 - Button Component
about: Create reusable Button component with variants
title: "[UI] Button Component"
labels: ui, component, P0
assignees: ''
---

## 작업 배경 (Background)

계산기의 모든 버튼에 사용될 재사용 가능한 Button 컴포넌트를 구현합니다. 5가지 variant(number, operator, function, action, equals)를 지원하며, 접근성(a11y)과 애니메이션을 포함합니다. **UI 컴포넌트는 자동화 테스트 대신 수동 브라우저 테스트를 수행합니다.**

## 작업 내용 (Tasks)

### Component Implementation
- [ ] Create `src/components/Button.tsx`
- [ ] Define TypeScript props interface (label, value, variant, onClick, etc.)
- [ ] Implement variant prop with 5 types:
  - `number`: White background, large text
  - `operator`: Primary blue background
  - `function`: Gray background, smaller text
  - `action`: Red background (for AC)
  - `equals`: Primary blue, full width
- [ ] Apply Tailwind classes based on variant
- [ ] Implement hover state (brightness-110)
- [ ] Implement active/press state (scale-95)
- [ ] Add smooth transitions (200ms)
- [ ] Add ARIA label prop for accessibility
- [ ] Add keyboard support (Enter/Space keys)

### Manual Testing
- [ ] **Manual Testing**: Test all 5 variants render correctly in browser
- [ ] **Manual Testing**: Verify hover state increases brightness
- [ ] **Manual Testing**: Verify active state scales down on click
- [ ] **Manual Testing**: Test keyboard interactions (Enter/Space)
- [ ] **Manual Testing**: Check accessibility with browser DevTools
- [ ] **Manual Testing**: Verify animations are smooth (60fps)

## 인수 조건 (Acceptance Criteria)

- ✅ All 5 variants render with correct styling
- ✅ Hover effect works (brightness increases to 110%)
- ✅ Active/press effect works (scales down to 95%)
- ✅ Animations are smooth at 60fps
- ✅ Keyboard navigation works (Enter/Space trigger onClick)
- ✅ ARIA labels present for screen readers
- ✅ Component is fully typed with TypeScript
- ✅ Accessible (WCAG AA compliant)
- ✅ Matches design reference (`docs/design/screen.png`)

## 참고 자료 (References)

- Design Reference: `docs/design/screen.png`, `docs/design/code.html`
- Tech Spec: `docs/TechSpec.md` - Section 5.2 (CSS Custom Properties)
- Tailwind Config: `tailwind.config.js`
- TDD Rules (UI Exception): `docs/rules/tdd.md` - Exceptions section

## 예상 시간 (Estimated Time)

4 hours

## 테스팅 방법 (Testing Method)

**Manual Browser Testing** (No automated tests for UI components)
