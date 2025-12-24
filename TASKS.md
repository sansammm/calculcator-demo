# Project Tasks
# Engineering Calculator Web App

**Last Updated**: 2025-12-23  
**Status**: Setup Complete, Ready for Development

> **Note**: This is a working task list. Check off items as you complete them. For detailed specifications, see [ROADMAP.md](docs/ROADMAP.md).

---

## 🎯 Current Sprint: Phase 1 - Project Setup

### Phase 1.1: Initialize React + Vite Project
- [ ] Run `pnpm create vite@latest . --template react-ts`
- [ ] Verify dev server starts (`pnpm dev`)
- [ ] Test hot module replacement
- [ ] Commit: "chore: initialize React + Vite project"

### Phase 1.2: Install Core Dependencies
- [x] Install TailwindCSS: `pnpm add -D tailwindcss postcss autoprefixer`
- [x] Run `npx tailwindcss init -p`
- [x] Install mathjs: `pnpm add mathjs`
- [x] Install Vite PWA: `pnpm add -D vite-plugin-pwa`
- [x] Verify no dependency conflicts
- [x] Commit: "chore: install core dependencies"

### Phase 1.3: Install Testing Dependencies
- [x] Install Vitest: `pnpm add -D vitest @vitest/ui`
- [x] Install Playwright: `pnpm add -D @playwright/test`
- [x] Run `npx playwright install`
- [x] Configure Vitest (`vitest.config.ts`)
- [x] Configure Playwright (`playwright.config.ts`)
- [x] Commit: "chore: setup testing infrastructure"

### Phase 1.4: Configure Code Quality Tools
- [x] Install ESLint: `pnpm add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin`
- [x] Install ESLint plugins: `pnpm add -D eslint-plugin-react-hooks eslint-plugin-jsx-a11y`
- [x] Create `.eslintrc.cjs` configuration
- [x] Install Prettier: `pnpm add -D prettier`
- [x] Create `.prettierrc` configuration
- [x] Add scripts to `package.json`: `lint`, `lint:fix`, `format`, `type-check`
- [x] Run `pnpm lint` to verify
- [x] Commit: "chore: configure ESLint and Prettier"

### Phase 1.5: Setup Project Structure
- [x] Create `src/components/` directory
- [x] Create `src/hooks/` directory
- [x] Create `src/utils/` directory
- [x] Create `src/types/` directory
- [x] Create `src/constants/` directory
- [x] Create `src/styles/` directory
- [x] Create `tests/unit/` directory
- [x] Create `tests/integration/` directory
- [x] Create `tests/e2e/` directory
- [x] Setup `src/styles/index.css` with Tailwind imports
- [x] Update `src/main.tsx` to import styles
- [x] Commit: "chore: setup project structure"

### Phase 1.6: Configure Tailwind Design System
- [x] Update `tailwind.config.js` with custom colors
- [x] Add custom font family (Space Grotesk)
- [x] Add custom border radius values
- [x] Add custom shadows
- [x] Add Google Fonts link to `index.html`
- [x] Test Tailwind classes work in dev server
- [x] Commit: "feat: configure Tailwind design system"

---

## 📝 Phase 2: Core Logic Development (TDD)

### Phase 2.1: Type Definitions
- [x] Create `src/types/index.ts`
- [x] Define `AngleMode` type
- [x] Define `ButtonType` type
- [x] Define `CalculatorState` interface
- [x] Define `CalculationHistory` interface
- [x] Define `Settings` interface
- [x] Define `ButtonConfig` interface
- [x] Define `CalculatorAction` type
- [x] Add JSDoc comments to all types
- [x] Commit: "feat: define TypeScript types"

### Phase 2.2: Constants & Configuration
- [x] Create `src/constants/index.ts`
- [x] Define `CONSTANTS` (PI, E)
- [x] Define `FUNCTION_BUTTONS` array
- [x] Define `NUMBER_BUTTONS` array
- [x] Define `OPERATOR_BUTTONS` array
- [x] Define `ERROR_MESSAGES` object
- [x] Define `DEFAULT_SETTINGS` object
- [x] Use `as const` for immutability
- [x] Commit: "feat: define constants and button configurations"

### Phase 2.3: Expression Evaluator (TDD) ⭐ CRITICAL
**Test File**: `src/utils/calculator.test.ts`  
**Implementation**: `src/utils/calculator.ts`

#### Basic Arithmetic
- [x] 🔴 RED: Test `2 + 3 = 5`
- [x] 🟢 GREEN: Implement addition
- [x] 🔵 REFACTOR: Clean up
- [x] 🔴 RED: Test `10 - 5 = 5`
- [x] 🟢 GREEN: Implement subtraction
- [x] 🔴 RED: Test `3 * 4 = 12`
- [x] 🟢 GREEN: Implement multiplication
- [x] 🔴 RED: Test `8 / 2 = 4`
- [x] 🟢 GREEN: Implement division
- [x] Commit: "feat: implement basic arithmetic (TDD)"

#### Trigonometric Functions (DEG)
- [x] 🔴 RED: Test `sin(90) = 1` in DEG mode
- [x] 🟢 GREEN: Implement sin with mathjs
- [x] 🔴 RED: Test `cos(0) = 1` in DEG mode
- [x] 🟢 GREEN: Implement cos
- [x] 🔴 RED: Test `tan(45) ≈ 1` in DEG mode
- [x] 🟢 GREEN: Implement tan
- [x] 🔵 REFACTOR: Extract angle conversion logic
- [x] Commit: "feat: implement trigonometric functions DEG mode (TDD)"

#### Trigonometric Functions (RAD)
- [x] 🔴 RED: Test `sin(π/2) = 1` in RAD mode
- [x] 🟢 GREEN: Implement RAD mode handling
- [x] 🔴 RED: Test `cos(π) = -1` in RAD mode
- [x] 🟢 GREEN: Verify RAD mode works
- [x] Commit: "feat: implement RAD mode support (TDD)"

#### Additional Functions
- [x] 🔴 RED: Test `√9 = 3`
- [x] 🟢 GREEN: Implement square root
- [x] 🔴 RED: Test `π ≈ 3.14159`
- [x] 🟢 GREEN: Implement π constant
- [x] 🔴 RED: Test `(2 + 3) * 4 = 20`
- [x] 🟢 GREEN: Implement parentheses handling
- [x] Commit: "feat: implement sqrt, pi, and parentheses (TDD)"

#### Error Handling
- [x] 🔴 RED: Test `1/0` throws error
- [x] 🟢 GREEN: Implement division by zero check
- [x] 🔴 RED: Test `sin(abc)` throws error
- [x] 🟢 GREEN: Implement invalid expression handling
- [x] 🔴 RED: Test very large numbers
- [x] 🟢 GREEN: Implement overflow handling
- [x] Commit: "feat: implement error handling (TDD)"

#### SOLID Refactoring
- [x] Create `IExpressionEvaluator` interface (DIP)
- [x] Create `MathJsEvaluator` class implementing interface
- [x] Extract mathjs configuration to separate function (SRP)
- [x] Verify 100% test coverage
- [x] Commit: "refactor: apply SOLID principles to evaluator"

### Phase 2.4: Number Formatter (TDD)
**Test File**: `src/utils/formatter.test.ts`  
**Implementation**: `src/utils/formatter.ts`

- [x] 🔴 RED: Test `1234.56 → "1,234.56"`
- [x] 🟢 GREEN: Implement thousand separators
- [x] 🔴 RED: Test `1000000 → "1,000,000"`
- [x] 🟢 GREEN: Verify separators work
- [x] 🔴 RED: Test decimal precision (6 places)
- [x] 🟢 GREEN: Implement precision rounding
- [x] 🔴 RED: Test `1e10` uses scientific notation
- [x] 🟢 GREEN: Implement scientific notation
- [x] 🔴 RED: Test `Infinity → "Error"`
- [x] 🟢 GREEN: Implement edge case handling
- [x] 🔵 REFACTOR: Clean up and optimize
- [x] Create `INumberFormatter` interface (ISP)
- [x] Create `NumberFormatter` class
- [x] Verify 80%+ test coverage
- [x] Commit: "feat: implement number formatter (TDD)"

### Phase 2.5: Input Validator (TDD)
**Test File**: `src/utils/validator.test.ts`  
**Implementation**: `src/utils/validator.ts`

- [x] 🔴 RED: Test preventing multiple decimal points
- [x] 🟢 GREEN: Implement decimal point validation
- [x] 🔴 RED: Test preventing consecutive operators
- [x] 🟢 GREEN: Implement operator validation
- [x] 🔴 RED: Test preventing invalid starting characters
- [x] 🟢 GREEN: Implement starting character validation
- [x] 🔴 RED: Test allowing minus for negative numbers
- [x] 🟢 GREEN: Implement negative number handling
- [x] 🔵 REFACTOR: Extract validation rules
- [x] Create `IExpressionValidator` interface
- [x] Create `ExpressionValidator` class
- [x] Verify 80%+ test coverage
- [x] Commit: "feat: implement input validator (TDD)"

### Phase 2.6: Calculator State Management (TDD)
**Test File**: `src/hooks/useCalculator.test.ts`  
**Implementation**: `src/hooks/useCalculator.ts`

- [x] 🔴 RED: Test `INPUT_NUMBER` action
- [x] 🟢 GREEN: Implement INPUT_NUMBER reducer
- [x] 🔴 RED: Test `CALCULATE` action
- [x] 🟢 GREEN: Implement CALCULATE reducer
- [x] 🔴 RED: Test `CLEAR` action
- [x] 🟢 GREEN: Implement CLEAR reducer
- [x] 🔵 REFACTOR: Optimize state updates
- [x] Verify tests pass
- [x] Commit: "feat: implement calculator state management (TDD)"

### Phase 2.7: History Management (TDD)
**Test File**: `src/hooks/useHistory.test.ts`  
**Implementation**: `src/hooks/useHistory.ts`

- [ ] 🔴 RED: Test adding item to history
- [ ] 🟢 GREEN: Implement addToHistory
- [ ] 🔴 RED: Test clearing history
- [ ] 🟢 GREEN: Implement clearHistory
- [ ] 🔴 RED: Test localStorage persistence
- [ ] 🟢 GREEN: Implement localStorage integration
- [ ] 🔴 RED: Test max 50 items limit
- [ ] 🟢 GREEN: Implement item limit
- [ ] Create `useLocalStorage` helper hook
- [ ] Verify 80%+ test coverage
- [ ] Commit: "feat: implement history management (TDD)"

---

## 🎨 Phase 3: UI Components

### Phase 3.1: Button Component
**File**: `src/components/Button.tsx`

- [ ] Create Button component with TypeScript props
- [ ] Implement variant prop (number, operator, function, action, equals)
- [ ] Apply Tailwind classes based on variant
- [ ] Implement hover state (brightness-110)
- [ ] Implement active state (scale-95)
- [ ] Add smooth transitions (200ms)
- [ ] Add ARIA label prop
- [ ] Add keyboard support (Enter/Space)
- [ ] **Manual Testing**: Test all variants in browser
- [ ] **Manual Testing**: Verify hover/active states work
- [ ] **Manual Testing**: Test keyboard interactions
- [ ] **Manual Testing**: Check accessibility with browser DevTools
- [ ] Commit: "feat: create Button component"

### Phase 3.2: Display Component
**File**: `src/components/Display.tsx`

- [ ] Create Display container component
- [ ] Create ExpressionDisplay sub-component
- [ ] Create ResultDisplay sub-component
- [ ] Integrate number formatter
- [ ] Implement responsive text sizing
- [ ] Add ARIA live region for screen readers
- [ ] Handle long expressions (overflow)
- [ ] **Manual Testing**: Test with various expression lengths
- [ ] **Manual Testing**: Verify number formatting displays correctly
- [ ] **Manual Testing**: Test responsive text sizing at different screen sizes
- [ ] Commit: "feat: create Display component"

### Phase 3.3: Keypad Component
**File**: `src/components/Keypad.tsx`

- [ ] Create Keypad container component
- [ ] Implement 4-column CSS grid layout
- [ ] Map FUNCTION_BUTTONS to Button components
- [ ] Map NUMBER_BUTTONS to Button components
- [ ] Map OPERATOR_BUTTONS to Button components
- [ ] Add special buttons (AC, backspace, equals)
- [ ] Implement button click handlers
- [ ] Add keyboard event listeners
- [ ] Map keyboard shortcuts (0-9, +, -, *, /, Enter, Escape, Backspace)
- [ ] **Manual Testing**: Test all button clicks work
- [ ] **Manual Testing**: Test all keyboard shortcuts
- [ ] **Manual Testing**: Verify grid layout matches design
- [ ] Commit: "feat: create Keypad component"

### Phase 3.4: TopBar Component
**File**: `src/components/TopBar.tsx`

- [ ] Create TopBar container component
- [ ] Create ModeToggle sub-component (DEG/RAD)
- [ ] Implement mode toggle with radio buttons
- [ ] Add history button with icon
- [ ] Add settings button with icon
- [ ] Style with Tailwind (match design)
- [ ] Add ARIA labels
- [ ] **Manual Testing**: Test mode toggle switches correctly
- [ ] **Manual Testing**: Verify button clicks work
- [ ] **Manual Testing**: Check visual styling matches design
- [ ] Commit: "feat: create TopBar component"

### Phase 3.5: Calculator Container
**File**: `src/components/Calculator.tsx`

- [ ] Create Calculator container component
- [ ] Integrate useCalculator hook
- [ ] Integrate TopBar component
- [ ] Integrate Display component
- [ ] Integrate Keypad component
- [ ] Wire up state flow (button press → action → state → display)
- [ ] Implement error display
- [ ] Add loading states (if needed)
- [ ] **Manual Testing**: Test complete calculation flows
- [ ] **Manual Testing**: Verify state updates display correctly
- [ ] **Manual Testing**: Test error states display properly
- [ ] Commit: "feat: create Calculator container"

### Phase 3.6: History Panel (Optional)
**File**: `src/components/HistoryPanel.tsx`

- [ ] Create HistoryPanel component
- [ ] Create HistoryItem sub-component
- [ ] Integrate useHistory hook
- [ ] Implement slide-in animation (Framer Motion or CSS)
- [ ] Implement history item click handler
- [ ] Add clear history button
- [ ] Add close button
- [ ] Style with Tailwind
- [ ] Add ARIA labels
- [ ] **Manual Testing**: Test panel slide-in animation
- [ ] **Manual Testing**: Test history item clicks
- [ ] **Manual Testing**: Verify clear history works
- [ ] Commit: "feat: create History panel"

### Phase 3.7: Settings Panel (Optional)
**File**: `src/components/SettingsPanel.tsx`

- [ ] Create SettingsPanel component
- [ ] Add theme toggle (light/dark)
- [ ] Add decimal precision slider
- [ ] Integrate localStorage for settings
- [ ] Implement slide-in animation
- [ ] Add close button
- [ ] Style with Tailwind
- [ ] **Manual Testing**: Test theme toggle
- [ ] **Manual Testing**: Test settings persistence
- [ ] **Manual Testing**: Verify panel animations
- [ ] Commit: "feat: create Settings panel"

### Phase 3.8: App Integration
**File**: `src/App.tsx`

- [ ] Update App.tsx to render Calculator
- [ ] Add global error boundary
- [ ] Add dark mode class to html element
- [ ] Test full app in browser
- [ ] Verify all features work
- [ ] Commit: "feat: integrate Calculator into App"

---

## 🧪 Phase 4: Testing & Quality

### Phase 4.1: E2E Tests
**Directory**: `tests/e2e/`

- [ ] Create `calculator.spec.ts`
- [ ] Test: Basic calculation (2 + 3 = 5)
- [ ] Test: Scientific function (sin(90) = 1)
- [ ] Test: Mode switching (DEG ↔ RAD)
- [ ] Test: History feature (add, view, reuse)
- [ ] Test: Error handling (1/0)
- [ ] Test: Keyboard shortcuts
- [ ] Test: Mobile viewport
- [ ] Run tests on Chrome, Firefox, Safari
- [ ] Verify all tests pass
- [ ] Commit: "test: add E2E tests with Playwright"

### Phase 4.2: Accessibility Audit
- [ ] Run Lighthouse accessibility audit
- [ ] Fix any WCAG AA violations
- [ ] Test with NVDA/JAWS screen reader
- [ ] Test full keyboard navigation
- [ ] Verify color contrast ratios (4.5:1)
- [ ] Add missing ARIA labels
- [ ] Test focus indicators
- [ ] Achieve Lighthouse accessibility score > 90
- [ ] Commit: "a11y: fix accessibility issues"

### Phase 4.3: Performance Optimization
- [ ] Run Lighthouse performance audit
- [ ] Implement code splitting (lazy load History/Settings)
- [ ] Add React.memo where needed
- [ ] Add useMemo for expensive calculations
- [ ] Add useCallback for event handlers
- [ ] Optimize bundle size (check with `pnpm build`)
- [ ] Test on 3G network (Chrome DevTools)
- [ ] Achieve Lighthouse performance score > 90
- [ ] Verify bundle size < 500KB
- [ ] Commit: "perf: optimize performance"

### Phase 4.4: Cross-browser Testing
- [ ] Test on Chrome (latest)
- [ ] Test on Firefox (latest)
- [ ] Test on Safari (latest)
- [ ] Test on Edge (latest)
- [ ] Test on iOS Safari (mobile)
- [ ] Test on Chrome Mobile (Android)
- [ ] Fix any browser-specific issues
- [ ] Commit: "fix: cross-browser compatibility"

---

## 📦 Phase 5: PWA & Deployment

### Phase 5.1: PWA Assets
- [ ] Create 192x192 icon (use design or generate)
- [ ] Create 512x512 icon
- [ ] Add icons to `public/icons/`
- [ ] Verify manifest.json configuration in vite.config.ts
- [ ] Test service worker registration
- [ ] Test offline functionality
- [ ] Test "Add to Home Screen" on mobile
- [ ] Commit: "feat: add PWA icons and assets"

### Phase 5.2: Production Build
- [ ] Run `pnpm build`
- [ ] Check for build errors
- [ ] Run `pnpm preview`
- [ ] Test production build locally
- [ ] Verify all assets load correctly
- [ ] Verify base path works (/calculcator-demo/)
- [ ] Check bundle size in dist/
- [ ] Run Lighthouse on production build
- [ ] Commit: "chore: verify production build"

### Phase 5.3: GitHub Deployment
- [ ] Push all code to GitHub
- [ ] Go to Settings → Pages
- [ ] Set source to "Deploy from a branch"
- [ ] Set branch to "gh-pages"
- [ ] Wait for deployment workflow to complete
- [ ] Visit deployed URL
- [ ] Test all features on deployed site
- [ ] Test PWA installation from deployed site
- [ ] Verify no console errors
- [ ] Commit: "docs: update README with deployment URL"

---

## 📚 Phase 6: Documentation & Polish

### Phase 6.1: Code Documentation
- [ ] Add JSDoc comments to complex functions
- [ ] Document component props with TypeScript
- [ ] Update README with actual deployment URL
- [ ] Add usage examples to README
- [ ] Document keyboard shortcuts in README
- [ ] Create CHANGELOG.md
- [ ] Commit: "docs: add code documentation"

### Phase 6.2: User Guide (Optional)
- [ ] Create `docs/USER_GUIDE.md`
- [ ] Document all features
- [ ] Add screenshots
- [ ] Document keyboard shortcuts
- [ ] Add FAQ section
- [ ] Commit: "docs: create user guide"

### Phase 6.3: Final Review
- [ ] Review all code for quality
- [ ] Run all tests one final time
- [ ] Check test coverage reports
- [ ] Manual testing on all browsers
- [ ] Manual testing on all devices
- [ ] Fix any remaining bugs
- [ ] Update version to 1.0.0 in package.json
- [ ] Create GitHub release
- [ ] Commit: "chore: release v1.0.0"

---

## 📊 Progress Tracking

### Completed Phases
- [x] Phase 0: Planning & Documentation
  - [x] PRD created
  - [x] Tech Spec created
  - [x] Roadmap created
  - [x] Development rules defined (TDD, SOLID)
  - [x] GitHub Actions workflows created
  - [x] Design files organized

### Current Phase
- [ ] Phase 1: Project Setup & Foundation

### Remaining Phases
- [ ] Phase 2: Core Logic Development (TDD)
- [ ] Phase 3: UI Components
- [ ] Phase 4: Testing & Quality
- [ ] Phase 5: PWA & Deployment
- [ ] Phase 6: Documentation & Polish

---

## 🎯 Next Actions

**Immediate Next Steps**:
1. Initialize React + Vite project (Phase 1.1)
2. Install dependencies (Phase 1.2 - 1.3)
3. Configure code quality tools (Phase 1.4)
4. Setup project structure (Phase 1.5)

**Ready to start? Begin with Phase 1.1!** 🚀

---

## 📝 Notes

- ✅ All setup and planning tasks completed
- ✅ GitHub Actions CI/CD configured
- ✅ Design reference files organized
- ✅ Development rules documented (TDD + SOLID)
- 🔄 Ready to begin Phase 1: Project initialization

**Remember**: 
- Follow TDD for all core logic (Red → Green → Refactor)
- Apply SOLID principles in all code
- Write tests before implementation
- Commit frequently with conventional commit messages
