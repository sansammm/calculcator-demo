# Product Requirements Document (PRD)
# Engineering Calculator Web App

## 1. Product Overview

### 1.1 Product Vision
A modern, mobile-first engineering calculator web application that combines the simplicity of a basic calculator with advanced scientific and engineering functions. The app features a premium dark mode design with smooth animations and an intuitive user interface.

### 1.2 Target Users
- Engineering students
- Professionals in STEM fields
- Anyone needing advanced mathematical calculations on-the-go
- Users who prefer web-based tools over native calculator apps

### 1.3 Key Differentiators
- **Premium Design**: Modern dark mode with glassmorphism effects and smooth animations
- **Mobile-First**: Optimized for touch interactions with large, accessible buttons
- **Progressive Web App**: Works offline and can be installed on mobile devices
- **Dual Mode Support**: DEG/RAD angle mode switching for trigonometric functions

---

## 2. Core Features

### 2.1 Basic Calculator Functions
**Priority**: P0 (Must Have)

#### Requirements
- **Arithmetic Operations**: Addition (+), Subtraction (−), Multiplication (×), Division (÷)
- **Decimal Support**: Floating-point number input with decimal point (.)
- **Clear Function**: AC (All Clear) button to reset calculator state
- **Backspace**: Delete last character/digit
- **Real-time Display**: Show input expression and calculated result

#### User Stories
- As a user, I want to perform basic arithmetic operations so I can do everyday calculations
- As a user, I want to see my input expression so I can verify what I'm calculating
- As a user, I want to clear my input quickly so I can start a new calculation

---

### 2.2 Engineering Functions
**Priority**: P0 (Must Have)

#### Trigonometric Functions
- **sin**: Sine function
- **cos**: Cosine function
- **tan**: Tangent function
- **Angle Mode Toggle**: Switch between DEG (degrees) and RAD (radians)

#### Mathematical Functions
- **√**: Square root
- **π**: Pi constant (3.14159...)
- **Parentheses**: ( ) for grouping expressions

#### User Stories
- As an engineering student, I want to calculate trigonometric functions so I can solve physics problems
- As a user, I want to switch between degrees and radians so I can work in my preferred unit
- As a user, I want to use parentheses so I can control the order of operations

---

### 2.3 Display & Input System
**Priority**: P0 (Must Have)

#### Display Components
1. **Input Expression Display**
   - Shows the current mathematical expression
   - Text color: Gray (#6B7280 light, #9CA3AF dark)
   - Font size: 20px (xl)
   - Right-aligned
   - Example: "250 × 4 + sin(30)"

2. **Result Display**
   - Shows the calculated result
   - Text color: Black (#111827 light, #FFFFFF dark)
   - Font size: 48px mobile, 64px desktop
   - Right-aligned
   - Number formatting with thousand separators
   - Example: "1,234.56"

#### User Stories
- As a user, I want to see my input expression so I can verify my calculation before executing
- As a user, I want large, readable numbers so I can easily see results
- As a user, I want formatted numbers with commas so large numbers are easier to read

---

### 2.4 History Feature
**Priority**: P1 (Should Have)

#### Requirements
- **History Button**: Top-left icon button to access calculation history
- **History Panel**: Slide-in panel showing previous calculations
- **History Items**: Display both expression and result for each calculation
- **Reuse Calculations**: Tap history item to load it back into calculator
- **Clear History**: Option to clear all history

#### User Stories
- As a user, I want to view my calculation history so I can reference previous results
- As a user, I want to reuse previous calculations so I don't have to re-enter complex expressions

---

### 2.5 Settings
**Priority**: P2 (Nice to Have)

#### Requirements
- **Settings Button**: Top-right icon button
- **Theme Toggle**: Switch between light and dark mode
- **Decimal Precision**: Configure number of decimal places
- **Sound Effects**: Toggle button press sounds (optional)

#### User Stories
- As a user, I want to customize the calculator appearance so it matches my preferences
- As a user, I want to control decimal precision so results match my needs

---

## 3. User Interface Design

### 3.1 Design System

#### Color Palette
```
Primary Blue: #137FEC
Background (Light): #F6F7F8
Background (Dark): #101922
Surface (Dark): #1A2632
Key Background (Dark): #233648
Key Active (Dark): #2F4B66
Number Key (Dark): #16202A
```

#### Typography
- **Font Family**: Space Grotesk (sans-serif)
- **Display Text**: 48-64px, Medium weight
- **Expression Text**: 20px, Normal weight
- **Button Text**: 14-24px, Medium/Normal weight

#### Spacing & Layout
- **Button Grid**: 4 columns with 12-16px gaps
- **Button Height**: 56px (function keys), 64-80px (number/operator keys)
- **Border Radius**: 12px (buttons), 24px (keypad container)
- **Padding**: 16px (container), 24px (display area)

---

### 3.2 Layout Structure

#### Top Bar
```
[History Icon]  [DEG/RAD Toggle]  [Settings Icon]
```

#### Display Area
```
Input Expression (right-aligned)
Result (large, right-aligned)
```

#### Keypad Layout
```
┌─────────────────────────────────┐
│  sin   cos   tan    π           │
│  (     )     √     AC           │
│  7     8     9     ÷            │
│  4     5     6     ×            │
│  1     2     3     −            │
│  .     0     ⌫     +            │
│         [=] (full width)        │
└─────────────────────────────────┘
```

---

### 3.3 Button States & Interactions

#### Button Types
1. **Number Buttons** (0-9, .)
   - Background: White (light), #16202A (dark)
   - Text: Black (light), White (dark)
   - Shadow: Subtle shadow

2. **Operator Buttons** (+, −, ×, ÷)
   - Background: Primary blue with 10-20% opacity
   - Text: Primary blue (#137FEC)
   - Hover: Increase opacity

3. **Function Buttons** (sin, cos, tan, √, π, parentheses)
   - Background: Gray 300 (light), #233648 (dark)
   - Text: Gray 700 (light), Gray 300 (dark)

4. **Clear Button** (AC)
   - Background: Red 100 (light), Red 900/30% (dark)
   - Text: Red 600 (light), Red 400 (dark)

5. **Equals Button** (=)
   - Background: Primary blue (#137FEC)
   - Text: White
   - Shadow: Blue glow
   - Full width, prominent placement

#### Interaction States
- **Hover**: Brightness increase (110%)
- **Active/Press**: Scale down (95-98%)
- **Transition**: Smooth 150-200ms transitions

---

## 4. Technical Requirements

### 4.1 Technology Stack
- **Frontend Framework**: Vanilla HTML/CSS/JavaScript or React
- **Styling**: TailwindCSS (already configured in design)
- **Fonts**: Space Grotesk (Google Fonts), Material Symbols (icons)
- **Build Tool**: Vite or similar modern bundler
- **PWA Support**: Service worker for offline functionality

### 4.2 Browser Support
- Chrome/Edge (latest 2 versions)
- Safari (latest 2 versions)
- Firefox (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

### 4.3 Performance Requirements
- **Initial Load**: < 2 seconds on 3G
- **Button Response**: < 50ms
- **Calculation Speed**: < 100ms for complex expressions
- **Animation Frame Rate**: 60 FPS

### 4.4 Responsive Design
- **Mobile First**: Optimized for 375px - 428px width
- **Tablet**: 768px - 1024px width
- **Desktop**: 1024px+ width (centered, max-width constraint)

---

## 5. Functional Specifications

### 5.1 Calculation Engine

#### Order of Operations
Follow standard mathematical precedence (PEMDAS/BODMAS):
1. Parentheses
2. Functions (sin, cos, tan, √)
3. Exponents (if added later)
4. Multiplication and Division (left to right)
5. Addition and Subtraction (left to right)

#### Error Handling
- **Division by Zero**: Display "Error: Division by zero"
- **Invalid Expression**: Display "Error: Invalid expression"
- **Domain Errors**: Display "Error: Math error" (e.g., √-1)
- **Overflow**: Display "Error: Number too large"

#### Number Formatting
- **Thousand Separators**: Use commas (1,234.56)
- **Decimal Precision**: Default 6 decimal places, configurable
- **Scientific Notation**: For numbers > 1e9 or < 1e-6

---

### 5.2 Input Behavior

#### Number Input
- Consecutive digit presses append to current number
- Decimal point can only be entered once per number
- Leading zeros are removed (except "0.")

#### Operator Input
- Pressing an operator after a number adds it to expression
- Pressing an operator after another operator replaces it
- Operators cannot be the first character (except minus for negative numbers)

#### Function Input
- Functions automatically add opening parenthesis
- Closing parenthesis is auto-suggested but not forced

#### Backspace Behavior
- Removes last character from expression
- If expression is empty, does nothing
- If result is displayed, clears result and shows expression

#### AC (All Clear) Behavior
- Clears both expression and result
- Resets calculator to initial state

---

### 5.3 Angle Mode (DEG/RAD)

#### DEG Mode (Default)
- Trigonometric functions interpret angles as degrees
- sin(90) = 1
- cos(180) = -1
- tan(45) = 1

#### RAD Mode
- Trigonometric functions interpret angles as radians
- sin(π/2) = 1
- cos(π) = -1
- tan(π/4) = 1

#### Mode Indicator
- Highlighted toggle button in top bar
- Mode persists across sessions (localStorage)

---

## 6. User Experience Requirements

### 6.1 Accessibility
- **Keyboard Support**: Full keyboard navigation and shortcuts
- **Screen Reader**: ARIA labels for all buttons
- **Touch Targets**: Minimum 44x44px (WCAG AAA)
- **Color Contrast**: WCAG AA compliant (4.5:1 for text)
- **Focus Indicators**: Visible focus states for keyboard navigation

### 6.2 Animations & Feedback
- **Button Press**: Scale animation (95-98%)
- **Mode Switch**: Smooth slide animation
- **History Panel**: Slide-in from left
- **Error State**: Shake animation for display
- **Success State**: Subtle pulse on equals button press

### 6.3 Offline Support
- **PWA Installation**: Add to home screen prompt
- **Service Worker**: Cache all static assets
- **Offline Indicator**: Show when offline
- **Data Persistence**: Save history and settings locally

---

## 7. Success Metrics

### 7.1 User Engagement
- **Daily Active Users (DAU)**: Target 1,000+ within 3 months
- **Session Duration**: Average 2-5 minutes
- **Calculations per Session**: Average 10-15
- **Return Rate**: 40%+ weekly return rate

### 7.2 Performance Metrics
- **Load Time**: < 2s on 3G (95th percentile)
- **Time to Interactive**: < 3s
- **Calculation Accuracy**: 100% for standard operations
- **Error Rate**: < 0.1% calculation errors

### 7.3 User Satisfaction
- **User Rating**: 4.5+ stars (if published to app stores)
- **Bug Reports**: < 5 critical bugs per month
- **Feature Requests**: Track and prioritize top 10

---

## 8. Future Enhancements (Post-MVP)

### 8.1 Phase 2 Features
- **Additional Functions**: log, ln, exp, power (x²), inverse trig (asin, acos, atan)
- **Constants**: e (Euler's number), additional mathematical constants
- **Unit Conversion**: Length, weight, temperature, etc.
- **Graphing**: Plot functions on a coordinate plane
- **Multi-line Input**: Support for complex, multi-step calculations

### 8.2 Phase 3 Features
- **Equation Solver**: Solve for x in algebraic equations
- **Matrix Calculator**: Matrix operations (add, multiply, determinant)
- **Statistics**: Mean, median, mode, standard deviation
- **Programmer Mode**: Binary, hexadecimal, octal conversions
- **Currency Converter**: Real-time exchange rates

### 8.3 Integration & Sharing
- **Export History**: Download calculation history as CSV/PDF
- **Share Results**: Share calculations via URL or social media
- **Cloud Sync**: Sync history and settings across devices
- **API Access**: Provide calculation API for developers

---

## 9. Design Reference

The design is based on the provided mockup with the following key characteristics:

### Visual Style
- **Modern Dark Mode**: Primary design theme
- **Glassmorphism**: Subtle transparency and blur effects
- **Rounded Corners**: 12px for buttons, 24px for containers
- **Shadows**: Subtle elevation for depth
- **Color Accents**: Blue (#137FEC) for primary actions

### Layout
- **Mobile-First**: Optimized for portrait mobile screens
- **Bottom Sheet**: Keypad in a rounded bottom sheet with drag handle
- **Spacious Display**: Large area for expression and result
- **Grid System**: 4-column button grid with consistent spacing

### Typography
- **Space Grotesk**: Modern geometric sans-serif
- **Clear Hierarchy**: Large results, medium expression, small labels
- **Monospaced Numbers**: Consistent width for better alignment

### Reference Files
- Design Screenshot: `docs/design/screen.png`
- HTML Implementation: `docs/design/code.html`

---

## 10. Acceptance Criteria

### 10.1 MVP Launch Criteria
- ✅ All P0 features implemented and tested
- ✅ Works on iOS Safari, Chrome Mobile, and desktop browsers
- ✅ Passes accessibility audit (WCAG AA)
- ✅ Load time < 2s on 3G
- ✅ Zero critical bugs
- ✅ Design matches provided mockup (95%+ fidelity)

### 10.2 Quality Gates
- **Code Coverage**: > 80% for calculation engine
- **Performance Budget**: < 500KB total bundle size
- **Accessibility Score**: > 90 (Lighthouse)
- **Performance Score**: > 90 (Lighthouse)
- **User Testing**: 5+ users complete tasks without assistance

---

## 11. Risks & Mitigation

### 11.1 Technical Risks
| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Calculation accuracy issues | High | Medium | Extensive unit testing, use proven math libraries |
| Browser compatibility | Medium | Low | Progressive enhancement, polyfills |
| Performance on low-end devices | Medium | Medium | Code splitting, lazy loading, optimization |

### 11.2 UX Risks
| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Complex expressions hard to input | High | Medium | User testing, improved input visualization |
| Button size too small on mobile | High | Low | Follow WCAG guidelines (44x44px minimum) |
| Dark mode eye strain | Low | Low | Offer light mode option |

---

## 12. Timeline & Milestones

### Phase 1: MVP (4-6 weeks)
- **Week 1-2**: Setup, basic calculator UI and layout
- **Week 3-4**: Calculation engine, engineering functions
- **Week 5**: History feature, settings, polish
- **Week 6**: Testing, bug fixes, optimization

### Phase 2: Enhancements (2-3 weeks)
- Additional functions and constants
- PWA implementation
- Performance optimization

### Phase 3: Advanced Features (4-6 weeks)
- Graphing calculator
- Unit conversions
- Advanced math functions

---

## Appendix

### A. Keyboard Shortcuts
- **Numbers**: 0-9, decimal point
- **Operators**: +, -, *, /
- **Functions**: s (sin), c (cos), t (tan), r (sqrt), p (pi)
- **Controls**: Enter (=), Escape (AC), Backspace (delete)
- **Mode**: d (DEG), r (RAD)

### B. API Specification (Future)
```javascript
// Example calculation API
POST /api/calculate
{
  "expression": "sin(30) + 5 * 2",
  "mode": "DEG"
}

Response:
{
  "result": 10.5,
  "formatted": "10.5",
  "expression": "sin(30) + 5 × 2"
}
```

### C. Data Models
```javascript
// Calculation History Item
{
  id: string,
  expression: string,
  result: number,
  mode: 'DEG' | 'RAD',
  timestamp: Date
}

// Settings
{
  theme: 'light' | 'dark',
  angleMode: 'DEG' | 'RAD',
  decimalPrecision: number,
  soundEnabled: boolean
}
```
