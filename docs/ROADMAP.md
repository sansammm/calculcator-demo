# Project Roadmap
# Engineering Calculator Web App

**Last Updated**: 2025-12-23  
**Status**: Planning & Setup Complete

---

## Overview

This document outlines all remaining tasks to complete the Engineering Calculator web app, organized by phase and priority. Each task includes acceptance criteria and estimated effort.

---

## Phase 1: Project Setup & Foundation (Week 1)

### 1.1 Initialize React + Vite Project
**Priority**: P0 (Critical)  
**Estimated Effort**: 2 hours

**Tasks**:
- [ ] Run `pnpm create vite@latest . --template react-ts`
- [ ] Install core dependencies (React, TypeScript)
- [ ] Install dev dependencies (ESLint, Prettier, Vitest)
- [ ] Configure TypeScript (`tsconfig.json`)
- [ ] Configure ESLint (`.eslintrc.cjs`)
- [ ] Configure Prettier (`.prettierrc`)
- [ ] Test development server (`pnpm dev`)

**Acceptance Criteria**:
- ✅ Dev server runs without errors
- ✅ TypeScript strict mode enabled
- ✅ ESLint and Prettier configured
- ✅ Hot module replacement works

---

### 1.2 Install Project Dependencies
**Priority**: P0 (Critical)  
**Estimated Effort**: 1 hour

**Tasks**:
- [ ] Install TailwindCSS (`tailwindcss`, `postcss`, `autoprefixer`)
- [ ] Install mathjs (`mathjs`)
- [ ] Install testing libraries (`vitest`, `@testing-library/react`, `@testing-library/jest-dom`)
- [ ] Install Vite PWA plugin (`vite-plugin-pwa`)
- [ ] Install Playwright for E2E tests (`@playwright/test`)
- [ ] Configure Tailwind (`tailwind.config.js`, `postcss.config.js`)

**Acceptance Criteria**:
- ✅ All dependencies installed successfully
- ✅ TailwindCSS working in development
- ✅ No dependency conflicts

---

### 1.3 Setup Project Structure
**Priority**: P0 (Critical)  
**Estimated Effort**: 1 hour

**Tasks**:
- [ ] Create `src/components/` directory structure
- [ ] Create `src/hooks/` directory
- [ ] Create `src/utils/` directory
- [ ] Create `src/types/` directory
- [ ] Create `src/constants/` directory
- [ ] Create `src/styles/` directory
- [ ] Create `tests/unit/`, `tests/integration/`, `tests/e2e/` directories
- [ ] Setup global styles (`src/styles/index.css`)

**Acceptance Criteria**:
- ✅ Directory structure matches Tech Spec
- ✅ Global styles configured with Tailwind

---

## Phase 2: Core Logic Development (Week 1-2)

### 2.1 Type Definitions
**Priority**: P0 (Critical)  
**Estimated Effort**: 2 hours  
**Development Method**: TDD + SOLID

**Tasks**:
- [ ] Define `AngleMode` type
- [ ] Define `ButtonType` type
- [ ] Define `CalculatorState` interface
- [ ] Define `CalculationHistory` interface
- [ ] Define `Settings` interface
- [ ] Define `ButtonConfig` interface
- [ ] Define `CalculatorAction` type (for reducer)
- [ ] Export all types from `src/types/index.ts`

**Acceptance Criteria**:
- ✅ All types properly documented
- ✅ No TypeScript errors
- ✅ Types follow SOLID principles

---

### 2.2 Constants & Configuration
**Priority**: P0 (Critical)  
**Estimated Effort**: 1 hour

**Tasks**:
- [ ] Define mathematical constants (PI, E)
- [ ] Define button configurations (FUNCTION_BUTTONS, NUMBER_BUTTONS, OPERATOR_BUTTONS)
- [ ] Define error messages (ERROR_MESSAGES)
- [ ] Define default settings (DEFAULT_SETTINGS)
- [ ] Export all constants from `src/constants/index.ts`

**Acceptance Criteria**:
- ✅ All constants properly typed
- ✅ Constants are immutable (using `as const`)

---

### 2.3 Expression Evaluator (TDD)
**Priority**: P0 (Critical)  
**Estimated Effort**: 8 hours  
**Development Method**: TDD + SOLID (DIP, SRP)

**Tasks**:
- [ ] **RED**: Write test for basic addition
- [ ] **GREEN**: Implement basic addition
- [ ] **REFACTOR**: Clean up implementation
- [ ] **RED**: Write test for subtraction, multiplication, division
- [ ] **GREEN**: Implement remaining operations
- [ ] **RED**: Write test for trigonometric functions (DEG mode)
- [ ] **GREEN**: Implement trig functions with mathjs
- [ ] **RED**: Write test for trigonometric functions (RAD mode)
- [ ] **GREEN**: Implement angle mode conversion
- [ ] **RED**: Write test for square root
- [ ] **GREEN**: Implement square root
- [ ] **RED**: Write test for π constant
- [ ] **GREEN**: Implement π constant
- [ ] **RED**: Write test for parentheses
- [ ] **GREEN**: Implement parentheses handling
- [ ] **RED**: Write test for error cases (division by zero, invalid expression)
- [ ] **GREEN**: Implement error handling
- [ ] **REFACTOR**: Extract mathjs configuration
- [ ] Create `IExpressionEvaluator` interface (SOLID: DIP)
- [ ] Implement `MathJsEvaluator` class

**Acceptance Criteria**:
- ✅ 100% test coverage for calculation engine
- ✅ All edge cases handled
- ✅ Follows SOLID principles (SRP, DIP)
- ✅ Tests written before implementation

**Test Cases**:
- Basic arithmetic: `2 + 3 = 5`, `10 - 5 = 5`, `3 * 4 = 12`, `8 / 2 = 4`
- Trigonometry (DEG): `sin(90) = 1`, `cos(0) = 1`, `tan(45) ≈ 1`
- Trigonometry (RAD): `sin(π/2) = 1`, `cos(π) = -1`
- Square root: `√9 = 3`, `√2 ≈ 1.414`
- Constants: `π ≈ 3.14159`
- Parentheses: `(2 + 3) * 4 = 20`
- Errors: `1/0 → Error`, `sin(abc) → Error`

---

### 2.4 Number Formatter (TDD)
**Priority**: P0 (Critical)  
**Estimated Effort**: 4 hours  
**Development Method**: TDD + SOLID (SRP, ISP)

**Tasks**:
- [ ] **RED**: Write test for thousand separators
- [ ] **GREEN**: Implement thousand separators
- [ ] **RED**: Write test for decimal precision
- [ ] **GREEN**: Implement decimal precision
- [ ] **RED**: Write test for scientific notation
- [ ] **GREEN**: Implement scientific notation
- [ ] **RED**: Write test for edge cases (Infinity, NaN, very large/small numbers)
- [ ] **GREEN**: Implement edge case handling
- [ ] **REFACTOR**: Clean up and optimize
- [ ] Create `INumberFormatter` interface (SOLID: ISP)
- [ ] Implement `NumberFormatter` class

**Acceptance Criteria**:
- ✅ 80%+ test coverage
- ✅ Follows SOLID principles (SRP, ISP)
- ✅ Tests written before implementation

**Test Cases**:
- `1234.56 → "1,234.56"`
- `1000000 → "1,000,000"`
- `1e10 → "1.0e+10"` (scientific notation)
- `Infinity → "Error"`

---

### 2.5 Input Validator (TDD)
**Priority**: P0 (Critical)  
**Estimated Effort**: 4 hours  
**Development Method**: TDD + SOLID (SRP)

**Tasks**:
- [ ] **RED**: Write test for preventing multiple decimal points
- [ ] **GREEN**: Implement decimal point validation
- [ ] **RED**: Write test for preventing consecutive operators
- [ ] **GREEN**: Implement operator validation
- [ ] **RED**: Write test for preventing invalid starting characters
- [ ] **GREEN**: Implement starting character validation
- [ ] **REFACTOR**: Clean up validation logic
- [ ] Create `IExpressionValidator` interface
- [ ] Implement `ExpressionValidator` class

**Acceptance Criteria**:
- ✅ 80%+ test coverage
- ✅ Follows SOLID principles (SRP)
- ✅ Tests written before implementation

---

### 2.6 Calculator State Management (TDD)
**Priority**: P0 (Critical)  
**Estimated Effort**: 6 hours  
**Development Method**: TDD + SOLID (SRP, OCP)

**Tasks**:
- [ ] **RED**: Write test for INPUT_NUMBER action
- [ ] **GREEN**: Implement INPUT_NUMBER reducer
- [ ] **RED**: Write test for INPUT_OPERATOR action
- [ ] **GREEN**: Implement INPUT_OPERATOR reducer
- [ ] **RED**: Write test for INPUT_FUNCTION action
- [ ] **GREEN**: Implement INPUT_FUNCTION reducer
- [ ] **RED**: Write test for CALCULATE action
- [ ] **GREEN**: Implement CALCULATE reducer
- [ ] **RED**: Write test for CLEAR action
- [ ] **GREEN**: Implement CLEAR reducer
- [ ] **RED**: Write test for BACKSPACE action
- [ ] **GREEN**: Implement BACKSPACE reducer
- [ ] **RED**: Write test for TOGGLE_MODE action
- [ ] **GREEN**: Implement TOGGLE_MODE reducer
- [ ] **REFACTOR**: Extract action handlers (SOLID: SRP)
- [ ] Create `useCalculator` custom hook
- [ ] Integrate evaluator, formatter, validator (SOLID: DIP)

**Acceptance Criteria**:
- ✅ 80%+ test coverage
- ✅ All actions properly tested
- ✅ Follows SOLID principles (SRP, OCP, DIP)

---

### 2.7 History Management (TDD)
**Priority**: P1 (Should Have)  
**Estimated Effort**: 3 hours  
**Development Method**: TDD + SOLID (SRP)

**Tasks**:
- [ ] **RED**: Write test for adding to history
- [ ] **GREEN**: Implement addToHistory
- [ ] **RED**: Write test for clearing history
- [ ] **GREEN**: Implement clearHistory
- [ ] **RED**: Write test for localStorage persistence
- [ ] **GREEN**: Implement localStorage integration
- [ ] **REFACTOR**: Clean up
- [ ] Create `useHistory` custom hook
- [ ] Create `useLocalStorage` custom hook

**Acceptance Criteria**:
- ✅ 80%+ test coverage
- ✅ History persists across sessions
- ✅ Maximum 50 items stored

---

## Phase 3: UI Components (Week 2-3)

### 3.1 Design System Setup
**Priority**: P0 (Critical)  
**Estimated Effort**: 3 hours

**Tasks**:
- [ ] Configure Tailwind custom colors (primary, background, surface, key colors)
- [ ] Configure custom fonts (Space Grotesk from Google Fonts)
- [ ] Configure custom border radius values
- [ ] Configure custom shadows
- [ ] Create CSS component classes (btn-base, btn-number, btn-operator, etc.)
- [ ] Test dark mode configuration

**Acceptance Criteria**:
- ✅ All design tokens match design reference
- ✅ Dark mode works correctly
- ✅ Fonts load properly

---

### 3.2 Button Component
**Priority**: P0 (Critical)  
**Estimated Effort**: 4 hours

**Tasks**:
- [ ] Create `Button.tsx` component
- [ ] Implement button variants (number, operator, function, action, equals)
- [ ] Implement hover/active states
- [ ] Implement animations (scale on press)
- [ ] Add accessibility (ARIA labels, keyboard support)
- [ ] Manual browser testing: Test all variants
- [ ] Manual browser testing: Verify interactions

**Acceptance Criteria**:
- ✅ All variants render correctly
- ✅ Animations smooth (60fps)
- ✅ Accessible (WCAG AA)
- ✅ Component tests pass

---

### 3.3 Display Component
**Priority**: P0 (Critical)  
**Estimated Effort**: 3 hours

**Tasks**:
- [ ] Create `Display.tsx` component
- [ ] Create `ExpressionDisplay.tsx` sub-component
- [ ] Create `ResultDisplay.tsx` sub-component
- [ ] Implement number formatting integration
- [ ] Implement responsive text sizing
- [ ] Add accessibility (ARIA live regions)
- [ ] Manual browser testing: Test display updates
- [ ] Manual browser testing: Verify formatting

**Acceptance Criteria**:
- ✅ Expression and result display correctly
- ✅ Text scales responsively
- ✅ Accessible
- ✅ Component tests pass

---

### 3.4 Keypad Component
**Priority**: P0 (Critical)  
**Estimated Effort**: 5 hours

**Tasks**:
- [ ] Create `Keypad.tsx` component
- [ ] Implement 4-column grid layout
- [ ] Render function buttons (sin, cos, tan, π)
- [ ] Render secondary buttons ((, ), √, AC)
- [ ] Render number buttons (0-9, .)
- [ ] Render operator buttons (+, -, ×, ÷)
- [ ] Render equals button (full width)
- [ ] Implement button press handlers
- [ ] Add keyboard shortcuts
- [ ] Manual browser testing: Test all buttons
- [ ] Manual browser testing: Test keyboard shortcuts

**Acceptance Criteria**:
- ✅ Grid layout matches design
- ✅ All buttons functional
- ✅ Keyboard shortcuts work
- ✅ Component tests pass

---

### 3.5 TopBar Component
**Priority**: P0 (Critical)  
**Estimated Effort**: 3 hours

**Tasks**:
- [ ] Create `TopBar.tsx` component
- [ ] Create `ModeToggle.tsx` sub-component (DEG/RAD)
- [ ] Create history button
- [ ] Create settings button
- [ ] Implement mode toggle functionality
- [ ] Add accessibility
- [ ] Manual browser testing: Test mode toggle
- [ ] Manual browser testing: Verify button clicks

**Acceptance Criteria**:
- ✅ Mode toggle works
- ✅ Buttons functional
- ✅ Accessible
- ✅ Component tests pass

---

### 3.6 Calculator Container
**Priority**: P0 (Critical)  
**Estimated Effort**: 4 hours

**Tasks**:
- [ ] Create `Calculator.tsx` container component
- [ ] Integrate `useCalculator` hook
- [ ] Integrate TopBar, Display, Keypad components
- [ ] Implement state flow (button press → state update → display update)
- [ ] Add error handling UI
- [ ] Manual browser testing: Test full calculation flows
- [ ] Manual browser testing: Verify state updates

**Acceptance Criteria**:
- ✅ All components integrated
- ✅ State flows correctly
- ✅ Errors display properly
- ✅ Integration tests pass

---

### 3.7 History Panel (Optional)
**Priority**: P1 (Should Have)  
**Estimated Effort**: 4 hours

**Tasks**:
- [ ] Create `HistoryPanel.tsx` component
- [ ] Create `HistoryItem.tsx` sub-component
- [ ] Implement slide-in animation
- [ ] Implement history item click (load calculation)
- [ ] Implement clear history button
- [ ] Add accessibility
- [ ] Write component tests

**Acceptance Criteria**:
- ✅ Panel slides in smoothly
- ✅ History items clickable
- ✅ Clear history works
- ✅ Component tests pass

---

### 3.8 Settings Panel (Optional)
**Priority**: P2 (Nice to Have)  
**Estimated Effort**: 3 hours

**Tasks**:
- [ ] Create `SettingsPanel.tsx` component
- [ ] Implement theme toggle (light/dark)
- [ ] Implement decimal precision setting
- [ ] Implement settings persistence (localStorage)
- [ ] Add accessibility
- [ ] Manual browser testing: Test panel animations
- [ ] Manual browser testing: Test history interactions

**Acceptance Criteria**:
- ✅ Settings save and load
- ✅ Theme toggle works
- ✅ Accessible
- ✅ Component tests pass

---

## Phase 4: Integration & Testing (Week 3)

### 4.1 App Integration
**Priority**: P0 (Critical)  
**Estimated Effort**: 2 hours

**Tasks**:
- [ ] Update `App.tsx` with Calculator component
- [ ] Add global error boundary
- [ ] Add loading states
- [ ] Test full app flow

**Acceptance Criteria**:
- ✅ App renders without errors
- ✅ Error boundary catches errors
- ✅ Loading states work

---

### 4.2 E2E Testing
**Priority**: P0 (Critical)  
**Estimated Effort**: 6 hours

**Tasks**:
- [ ] Setup Playwright configuration
- [ ] Write E2E test: Basic calculation flow
- [ ] Write E2E test: Scientific functions
- [ ] Write E2E test: Mode switching (DEG/RAD)
- [ ] Write E2E test: History feature
- [ ] Write E2E test: Error handling
- [ ] Write E2E test: Keyboard shortcuts
- [ ] Run tests on multiple browsers (Chrome, Firefox, Safari)

**Acceptance Criteria**:
- ✅ All E2E tests pass
- ✅ Tests run on CI/CD
- ✅ Cross-browser compatibility verified

---

### 4.3 Accessibility Audit
**Priority**: P0 (Critical)  
**Estimated Effort**: 3 hours

**Tasks**:
- [ ] Run Lighthouse accessibility audit
- [ ] Fix any WCAG AA violations
- [ ] Test with screen reader (NVDA/JAWS)
- [ ] Test keyboard navigation
- [ ] Verify color contrast ratios
- [ ] Add missing ARIA labels

**Acceptance Criteria**:
- ✅ Lighthouse accessibility score > 90
- ✅ WCAG AA compliant
- ✅ Screen reader compatible
- ✅ Full keyboard navigation

---

### 4.4 Performance Optimization
**Priority**: P1 (Should Have)  
**Estimated Effort**: 4 hours

**Tasks**:
- [ ] Run Lighthouse performance audit
- [ ] Optimize bundle size (code splitting, tree shaking)
- [ ] Implement lazy loading for History/Settings panels
- [ ] Add memoization where needed
- [ ] Optimize images (if any)
- [ ] Test on low-end devices

**Acceptance Criteria**:
- ✅ Lighthouse performance score > 90
- ✅ Bundle size < 500KB
- ✅ Time to Interactive < 3s on 3G
- ✅ 60fps animations

---

## Phase 5: PWA & Deployment (Week 4)

### 5.1 PWA Configuration
**Priority**: P1 (Should Have)  
**Estimated Effort**: 3 hours

**Tasks**:
- [ ] Create PWA icons (192x192, 512x512)
- [ ] Configure web app manifest (already in vite.config.ts)
- [ ] Test service worker registration
- [ ] Test offline functionality
- [ ] Test "Add to Home Screen" on mobile
- [ ] Add install prompt UI (optional)

**Acceptance Criteria**:
- ✅ PWA installable on mobile
- ✅ Works offline after first visit
- ✅ Icons display correctly
- ✅ Service worker registers successfully

---

### 5.2 Production Build
**Priority**: P0 (Critical)  
**Estimated Effort**: 2 hours

**Tasks**:
- [ ] Run production build (`pnpm build`)
- [ ] Test production build locally (`pnpm preview`)
- [ ] Verify all assets load correctly
- [ ] Verify base path is correct
- [ ] Check bundle size
- [ ] Run Lighthouse on production build

**Acceptance Criteria**:
- ✅ Build completes without errors
- ✅ All assets load correctly
- ✅ Bundle size within budget
- ✅ Lighthouse scores > 90

---

### 5.3 GitHub Pages Deployment
**Priority**: P0 (Critical)  
**Estimated Effort**: 2 hours

**Tasks**:
- [ ] Push code to GitHub repository
- [ ] Enable GitHub Pages in repository settings
- [ ] Verify CI workflow runs successfully
- [ ] Verify deployment workflow runs successfully
- [ ] Test deployed app
- [ ] Verify PWA works on deployed site
- [ ] Test on multiple devices (mobile, tablet, desktop)

**Acceptance Criteria**:
- ✅ App deployed successfully
- ✅ All features work on deployed site
- ✅ PWA installable from deployed site
- ✅ No console errors

---

## Phase 6: Documentation & Polish (Week 4)

### 6.1 Code Documentation
**Priority**: P1 (Should Have)  
**Estimated Effort**: 3 hours

**Tasks**:
- [ ] Add JSDoc comments to complex functions
- [ ] Document component props with TypeScript
- [ ] Update README with final deployment URL
- [ ] Add code examples to README
- [ ] Document keyboard shortcuts

**Acceptance Criteria**:
- ✅ All public APIs documented
- ✅ README complete and accurate
- ✅ Examples provided

---

### 6.2 User Guide (Optional)
**Priority**: P2 (Nice to Have)  
**Estimated Effort**: 2 hours

**Tasks**:
- [ ] Create user guide document
- [ ] Document all features
- [ ] Add screenshots
- [ ] Document keyboard shortcuts
- [ ] Add FAQ section

**Acceptance Criteria**:
- ✅ User guide complete
- ✅ Screenshots included
- ✅ FAQ answers common questions

---

### 6.3 Final Testing & Bug Fixes
**Priority**: P0 (Critical)  
**Estimated Effort**: 4 hours

**Tasks**:
- [ ] Manual testing on all features
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on different devices (mobile, tablet, desktop)
- [ ] Fix any bugs found
- [ ] Verify all acceptance criteria met
- [ ] Final code review

**Acceptance Criteria**:
- ✅ No critical bugs
- ✅ All features work as expected
- ✅ Cross-browser compatible
- ✅ Cross-device compatible

---

## Summary

### Total Estimated Effort
- **Phase 1**: ~4 hours
- **Phase 2**: ~28 hours
- **Phase 3**: ~26 hours
- **Phase 4**: ~15 hours
- **Phase 5**: ~7 hours
- **Phase 6**: ~9 hours

**Total**: ~89 hours (~2-3 weeks for full-time development)

### Priority Breakdown
- **P0 (Must Have)**: ~70 hours
- **P1 (Should Have)**: ~14 hours
- **P2 (Nice to Have)**: ~5 hours

### Development Principles
- ✅ **TDD**: All core logic developed with tests first (UI components tested manually)
- ✅ **SOLID**: All code follows SOLID principles
- ✅ **Accessibility**: WCAG AA compliance
- ✅ **Performance**: Lighthouse scores > 90
- ✅ **Documentation**: Comprehensive docs and comments

---

## Next Steps

1. **Immediate**: Initialize React + Vite project (Phase 1.1)
2. **Next**: Install dependencies (Phase 1.2)
3. **Then**: Setup project structure (Phase 1.3)
4. **After**: Begin core logic development with TDD (Phase 2)

**Ready to start? Begin with Phase 1.1!** 🚀
