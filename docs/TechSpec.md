# Technical Specification
# Engineering Calculator Web App

**Version**: 1.0  
**Last Updated**: 2025-12-23  
**Status**: Draft

---

## 1. Technology Stack

### 1.1 Core Technologies

#### Frontend Framework
- **React 18.3+**
  - Rationale: Component-based architecture, excellent ecosystem, hooks for state management
  - Virtual DOM for efficient updates
  - Strong TypeScript support
  - Large community and extensive documentation

#### Language
- **TypeScript 5.3+**
  - Rationale: Type safety, better IDE support, reduced runtime errors
  - Strict mode enabled for maximum type safety
  - Interface definitions for all data models

#### Build Tool
- **Vite 5.0+**
  - Rationale: Fast HMR (Hot Module Replacement), optimized builds
  - Native ES modules support
  - Built-in TypeScript support
  - Excellent developer experience

---

### 1.2 Styling & UI

#### CSS Framework
- **TailwindCSS 3.4+**
  - Rationale: Utility-first approach, highly customizable, small bundle size
  - JIT (Just-In-Time) compiler for optimal performance
  - Dark mode support built-in
  - Custom design tokens for brand colors

#### Font Loading
- **Google Fonts**
  - Space Grotesk: Primary display font
  - Material Symbols: Icon font for UI elements
  - Font display: swap (for performance)

#### Animation Library
- **Framer Motion 11+** (Optional)
  - Rationale: Declarative animations, spring physics, gesture support
  - Alternative: CSS transitions/animations (lighter weight)

---

### 1.3 State Management

#### Local State
- **React Hooks** (useState, useReducer)
  - Rationale: Built-in, no additional dependencies
  - Sufficient for calculator state management

#### Persistent State
- **localStorage API**
  - Store calculation history
  - Save user preferences (theme, angle mode, settings)
  - Automatic serialization/deserialization

#### State Structure
```typescript
interface CalculatorState {
  expression: string;
  result: number | null;
  angleMode: 'DEG' | 'RAD';
  history: CalculationHistory[];
  error: string | null;
}
```

---

### 1.4 Calculation Engine

#### Math Library
- **mathjs 12.0+**
  - Rationale: Comprehensive math functions, expression parsing, high precision
  - Supports trigonometric functions, constants (π, e)
  - Handles complex expressions with proper precedence
  - Error handling for invalid expressions

#### Alternative (Lighter)
- **Custom Parser + Math.js native functions**
  - Pros: Smaller bundle size, full control
  - Cons: More development time, potential edge cases

---

### 1.5 Testing

#### Unit Testing (Core Logic Only)
- **Vitest 1.0+**
  - Rationale: Vite-native, fast, Jest-compatible API
  - Built-in code coverage
  - Snapshot testing support
  - **Scope**: Business logic, utilities, calculation engine, state management

#### E2E Testing
- **Playwright 1.40+**
  - Rationale: Cross-browser testing, reliable, fast
  - Mobile viewport testing
  - Screenshot/video recording for debugging
  - **Scope**: Full application flows, user interactions

#### Manual Testing (UI Components)
- **Browser DevTools**
  - Visual inspection during development
  - Responsive design testing
  - Accessibility audit
  - Cross-browser compatibility

---

### 1.6 Code Quality

#### Linting
- **ESLint 8+**
  - `eslint-config-airbnb-typescript`: Strict style guide
  - `eslint-plugin-react-hooks`: React hooks rules
  - `eslint-plugin-jsx-a11y`: Accessibility linting

#### Formatting
- **Prettier 3+**
  - Consistent code formatting
  - Integration with ESLint

#### Type Checking
- **TypeScript Compiler**
  - Strict mode enabled
  - No implicit any
  - Strict null checks

---

### 1.7 PWA & Offline Support

#### Service Worker
- **Workbox 7+**
  - Rationale: Google's PWA toolkit, precaching, runtime caching
  - Vite PWA plugin for easy integration

#### Manifest
- **Web App Manifest**
  - App name, icons, theme colors
  - Display mode: standalone
  - Orientation: portrait-primary

#### Offline Strategy
- **Cache-First** for static assets (HTML, CSS, JS, fonts)
- **Network-First** for API calls (if added later)
- **Fallback** to cached version on network failure

---

### 1.8 Development Tools

#### Version Control
- **Git**
  - Conventional commits
  - Feature branch workflow

#### Package Manager
- **pnpm 8+**
  - Rationale: Fast, efficient disk space usage, strict dependencies
  - Alternative: npm or yarn

#### Development Server
- **Vite Dev Server**
  - HMR for instant updates
  - HTTPS support for PWA testing

---

## 2. Architecture & Design Patterns

### 2.1 Project Structure

```
calculcator-demo/
├── public/
│   ├── icons/              # PWA icons (192x192, 512x512)
│   ├── manifest.json       # Web app manifest
│   └── robots.txt
├── src/
│   ├── components/         # React components
│   │   ├── Calculator/
│   │   │   ├── Calculator.tsx
│   │   │   ├── Display.tsx
│   │   │   ├── Keypad.tsx
│   │   │   ├── Button.tsx
│   │   │   └── TopBar.tsx
│   │   ├── History/
│   │   │   ├── HistoryPanel.tsx
│   │   │   └── HistoryItem.tsx
│   │   └── Settings/
│   │       └── SettingsPanel.tsx
│   ├── hooks/              # Custom React hooks
│   │   ├── useCalculator.ts
│   │   ├── useHistory.ts
│   │   └── useLocalStorage.ts
│   ├── utils/              # Utility functions
│   │   ├── calculator.ts   # Calculation logic
│   │   ├── formatter.ts    # Number formatting
│   │   └── validation.ts   # Input validation
│   ├── types/              # TypeScript types
│   │   └── index.ts
│   ├── constants/          # Constants & config
│   │   └── index.ts
│   ├── styles/             # Global styles
│   │   └── index.css       # Tailwind imports
│   ├── App.tsx             # Root component
│   ├── main.tsx            # Entry point
│   └── vite-env.d.ts       # Vite types
├── tests/
│   ├── unit/               # Unit tests
│   ├── integration/        # Integration tests
│   └── e2e/                # E2E tests
├── docs/                   # Documentation
│   ├── design/             # Design mockups
│   ├── rules/              # Development rules
│   ├── PRD.md
│   └── TechSpec.md
├── .eslintrc.cjs           # ESLint config
├── .prettierrc             # Prettier config
├── tsconfig.json           # TypeScript config
├── vite.config.ts          # Vite config
├── tailwind.config.js      # Tailwind config
├── package.json
└── README.md
```

---

### 2.2 Component Architecture

#### Component Hierarchy
```
App
├── TopBar
│   ├── HistoryButton
│   ├── ModeToggle (DEG/RAD)
│   └── SettingsButton
├── Display
│   ├── ExpressionDisplay
│   └── ResultDisplay
├── Keypad
│   ├── FunctionRow (sin, cos, tan, π)
│   ├── SecondaryRow ((, ), √, AC)
│   ├── NumberGrid (0-9, .)
│   ├── OperatorColumn (+, -, ×, ÷)
│   └── EqualsButton
├── HistoryPanel (conditional)
└── SettingsPanel (conditional)
```

#### Component Responsibilities

**Calculator (Container)**
- Manages overall calculator state
- Coordinates between display and keypad
- Handles calculation logic

**Display (Presentational)**
- Shows current expression
- Shows calculated result
- Handles number formatting

**Keypad (Presentational)**
- Renders button grid
- Emits button press events
- Manages button states (hover, active)

**Button (Atomic)**
- Reusable button component
- Variants: number, operator, function, action, equals
- Handles animations and interactions

---

### 2.3 State Management Pattern

#### Calculator State (useReducer)
```typescript
type CalculatorAction =
  | { type: 'INPUT_NUMBER'; payload: string }
  | { type: 'INPUT_OPERATOR'; payload: string }
  | { type: 'INPUT_FUNCTION'; payload: string }
  | { type: 'CALCULATE' }
  | { type: 'CLEAR' }
  | { type: 'BACKSPACE' }
  | { type: 'TOGGLE_MODE' }
  | { type: 'SET_ERROR'; payload: string };

const calculatorReducer = (
  state: CalculatorState,
  action: CalculatorAction
): CalculatorState => {
  // Reducer logic
};
```

#### Custom Hooks

**useCalculator**
```typescript
const useCalculator = () => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);
  
  const inputNumber = (num: string) => 
    dispatch({ type: 'INPUT_NUMBER', payload: num });
  
  const calculate = () => dispatch({ type: 'CALCULATE' });
  
  // ... other methods
  
  return { state, inputNumber, calculate, ... };
};
```

**useHistory**
```typescript
const useHistory = () => {
  const [history, setHistory] = useLocalStorage<CalculationHistory[]>(
    'calc-history',
    []
  );
  
  const addToHistory = (item: CalculationHistory) => {
    setHistory([item, ...history].slice(0, 50)); // Keep last 50
  };
  
  return { history, addToHistory, clearHistory };
};
```

**useLocalStorage**
```typescript
const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });
  
  const setValue = (value: T | ((val: T) => T)) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
    window.localStorage.setItem(key, JSON.stringify(valueToStore));
  };
  
  return [storedValue, setValue] as const;
};
```

---

## 3. Data Models & Types

### 3.1 Core Types

```typescript
// Angle mode for trigonometric functions
type AngleMode = 'DEG' | 'RAD';

// Button types for styling
type ButtonType = 'number' | 'operator' | 'function' | 'action' | 'equals';

// Calculator state
interface CalculatorState {
  expression: string;        // Current input expression
  result: number | null;     // Calculated result
  angleMode: AngleMode;      // DEG or RAD
  error: string | null;      // Error message if any
  lastAction: string | null; // Last button pressed
}

// Calculation history item
interface CalculationHistory {
  id: string;                // Unique ID (timestamp or UUID)
  expression: string;        // Input expression
  result: number;            // Calculated result
  formattedResult: string;   // Formatted result with commas
  angleMode: AngleMode;      // Mode used for calculation
  timestamp: Date;           // When calculation was performed
}

// User settings
interface Settings {
  theme: 'light' | 'dark';
  angleMode: AngleMode;
  decimalPrecision: number;  // Number of decimal places
  soundEnabled: boolean;     // Button press sound
}

// Button configuration
interface ButtonConfig {
  label: string;             // Display label
  value: string;             // Value to input
  type: ButtonType;          // Button type for styling
  action?: () => void;       // Custom action (for AC, =, etc.)
  gridArea?: string;         // CSS grid area (for special layouts)
}
```

---

### 3.2 Constants

```typescript
// Mathematical constants
export const CONSTANTS = {
  PI: Math.PI,
  E: Math.E,
} as const;

// Button configurations
export const FUNCTION_BUTTONS: ButtonConfig[] = [
  { label: 'sin', value: 'sin(', type: 'function' },
  { label: 'cos', value: 'cos(', type: 'function' },
  { label: 'tan', value: 'tan(', type: 'function' },
  { label: 'π', value: 'π', type: 'function' },
];

export const NUMBER_BUTTONS: ButtonConfig[] = [
  { label: '7', value: '7', type: 'number' },
  { label: '8', value: '8', type: 'number' },
  // ... etc
];

export const OPERATOR_BUTTONS: ButtonConfig[] = [
  { label: '÷', value: '/', type: 'operator' },
  { label: '×', value: '*', type: 'operator' },
  { label: '-', value: '-', type: 'operator' },
  { label: '+', value: '+', type: 'operator' },
];

// Error messages
export const ERROR_MESSAGES = {
  DIVISION_BY_ZERO: 'Error: Division by zero',
  INVALID_EXPRESSION: 'Error: Invalid expression',
  MATH_ERROR: 'Error: Math error',
  OVERFLOW: 'Error: Number too large',
} as const;

// Default settings
export const DEFAULT_SETTINGS: Settings = {
  theme: 'dark',
  angleMode: 'DEG',
  decimalPrecision: 6,
  soundEnabled: false,
};
```

---

## 4. Core Algorithms & Logic

### 4.1 Expression Parsing & Evaluation

#### Using mathjs
```typescript
import { create, all } from 'mathjs';

const math = create(all);

// Configure mathjs
math.config({
  number: 'BigNumber',      // Use BigNumber for precision
  precision: 64,            // 64 significant digits
});

export const evaluateExpression = (
  expression: string,
  angleMode: AngleMode
): number => {
  try {
    // Replace visual operators with mathjs operators
    let processedExpr = expression
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/π/g, 'pi');
    
    // Set angle mode
    if (angleMode === 'DEG') {
      // Convert deg to rad for trig functions
      processedExpr = processedExpr
        .replace(/sin\(/g, 'sin(deg(')
        .replace(/cos\(/g, 'cos(deg(')
        .replace(/tan\(/g, 'tan(deg(');
      
      // Add closing parenthesis
      processedExpr = processedExpr.replace(/deg\(/g, 'deg(') + ')';
    }
    
    // Evaluate
    const result = math.evaluate(processedExpr);
    
    // Convert to number
    return typeof result === 'number' ? result : result.toNumber();
  } catch (error) {
    throw new Error(ERROR_MESSAGES.INVALID_EXPRESSION);
  }
};
```

#### Custom Parser (Alternative)
```typescript
// Tokenizer
const tokenize = (expr: string): Token[] => {
  // Split expression into tokens (numbers, operators, functions)
};

// Parser (converts tokens to AST)
const parse = (tokens: Token[]): ASTNode => {
  // Build Abstract Syntax Tree
};

// Evaluator (evaluates AST)
const evaluate = (ast: ASTNode, angleMode: AngleMode): number => {
  // Recursively evaluate AST
};
```

---

### 4.2 Number Formatting

```typescript
export const formatNumber = (
  num: number,
  precision: number = 6
): string => {
  // Handle special cases
  if (!isFinite(num)) return 'Error';
  if (Math.abs(num) > 1e9 || (Math.abs(num) < 1e-6 && num !== 0)) {
    return num.toExponential(precision);
  }
  
  // Round to precision
  const rounded = Number(num.toFixed(precision));
  
  // Format with thousand separators
  const parts = rounded.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
  return parts.join('.');
};

// Remove trailing zeros
export const cleanNumber = (str: string): string => {
  return str.replace(/\.?0+$/, '');
};
```

---

### 4.3 Input Validation

```typescript
export const validateInput = (
  currentExpr: string,
  newInput: string
): boolean => {
  // Prevent multiple decimal points in same number
  if (newInput === '.') {
    const lastNumber = currentExpr.split(/[+\-*/()]/).pop() || '';
    if (lastNumber.includes('.')) return false;
  }
  
  // Prevent operator after operator (except minus for negatives)
  const lastChar = currentExpr.slice(-1);
  if (['+', '-', '*', '/'].includes(lastChar) && 
      ['+', '*', '/'].includes(newInput)) {
    return false;
  }
  
  // Prevent starting with operator (except minus)
  if (currentExpr === '' && ['+', '*', '/'].includes(newInput)) {
    return false;
  }
  
  return true;
};
```

---

## 5. Styling & Theming

### 5.1 Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#137FEC',
        'background-light': '#F6F7F8',
        'background-dark': '#101922',
        'surface-dark': '#1A2632',
        'key-dark': '#233648',
        'key-active': '#2F4B66',
        'number-key-dark': '#16202A',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px',
      },
      boxShadow: {
        'primary-glow': '0 10px 40px rgba(19, 127, 236, 0.4)',
      },
    },
  },
  plugins: [],
};
```

---

### 5.2 CSS Custom Properties

```css
/* src/styles/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --transition-fast: 150ms;
    --transition-normal: 200ms;
    --transition-slow: 300ms;
    
    --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  }
  
  body {
    @apply font-display antialiased;
    min-height: 100dvh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}

@layer components {
  .btn-base {
    @apply flex items-center justify-center rounded-xl
           transition-all duration-200
           hover:brightness-110 active:scale-95;
  }
  
  .btn-number {
    @apply btn-base h-16 sm:h-20
           bg-white dark:bg-number-key-dark
           text-gray-900 dark:text-white
           text-2xl font-normal shadow-sm;
  }
  
  .btn-operator {
    @apply btn-base h-16 sm:h-20
           bg-primary/10 dark:bg-primary/20
           text-primary text-2xl font-medium
           hover:bg-primary/20 dark:hover:bg-primary/30;
  }
  
  .btn-function {
    @apply btn-base h-14 sm:h-16
           bg-gray-300 dark:bg-key-dark
           text-gray-700 dark:text-gray-300
           text-sm sm:text-base font-medium;
  }
  
  .btn-action {
    @apply btn-base h-14 sm:h-16
           bg-red-100 dark:bg-red-900/30
           text-red-600 dark:text-red-400
           text-lg font-bold;
  }
  
  .btn-equals {
    @apply btn-base h-16 sm:h-20
           bg-primary text-white
           text-3xl font-bold
           shadow-lg shadow-primary/40
           active:scale-[0.98];
  }
}
```

---

### 5.3 Responsive Design Breakpoints

```typescript
// Tailwind default breakpoints
const breakpoints = {
  sm: '640px',   // Small devices (phones, 640px and up)
  md: '768px',   // Medium devices (tablets, 768px and up)
  lg: '1024px',  // Large devices (desktops, 1024px and up)
  xl: '1280px',  // Extra large devices (large desktops, 1280px and up)
};

// Calculator max-width constraints
const maxWidth = {
  mobile: '100%',
  tablet: '480px',
  desktop: '420px',
};
```

---

## 6. Performance Optimization

### 6.1 Code Splitting

```typescript
// Lazy load non-critical components
const HistoryPanel = lazy(() => import('./components/History/HistoryPanel'));
const SettingsPanel = lazy(() => import('./components/Settings/SettingsPanel'));

// Use Suspense for loading states
<Suspense fallback={<LoadingSpinner />}>
  {showHistory && <HistoryPanel />}
</Suspense>
```

---

### 6.2 Memoization

```typescript
// Memoize expensive calculations
const formattedResult = useMemo(
  () => formatNumber(result, decimalPrecision),
  [result, decimalPrecision]
);

// Memoize callbacks to prevent re-renders
const handleButtonPress = useCallback(
  (value: string) => {
    // Handle button press
  },
  [/* dependencies */]
);
```

---

### 6.3 Bundle Size Optimization

#### Vite Configuration
```typescript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'math-vendor': ['mathjs'],
        },
      },
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
      },
    },
  },
});
```

#### Tree Shaking
```typescript
// Import only needed mathjs functions
import { create, evaluateDependencies, sinDependencies, cosDependencies } from 'mathjs';

const math = create({
  evaluateDependencies,
  sinDependencies,
  cosDependencies,
  // ... only import what's needed
});
```

---

### 6.4 Image Optimization

- Use WebP format for icons
- Provide multiple sizes (192x192, 512x512) for PWA
- Lazy load images if used in history/settings

---

## 7. Testing Strategy

### 7.1 Unit Tests

#### Calculator Logic
```typescript
// tests/unit/calculator.test.ts
describe('evaluateExpression', () => {
  it('should calculate basic arithmetic', () => {
    expect(evaluateExpression('2 + 2', 'DEG')).toBe(4);
    expect(evaluateExpression('10 - 5', 'DEG')).toBe(5);
    expect(evaluateExpression('3 * 4', 'DEG')).toBe(12);
    expect(evaluateExpression('8 / 2', 'DEG')).toBe(4);
  });
  
  it('should handle trigonometric functions in DEG mode', () => {
    expect(evaluateExpression('sin(90)', 'DEG')).toBeCloseTo(1);
    expect(evaluateExpression('cos(0)', 'DEG')).toBeCloseTo(1);
    expect(evaluateExpression('tan(45)', 'DEG')).toBeCloseTo(1);
  });
  
  it('should handle trigonometric functions in RAD mode', () => {
    expect(evaluateExpression('sin(π/2)', 'RAD')).toBeCloseTo(1);
  });
  
  it('should throw error for division by zero', () => {
    expect(() => evaluateExpression('1/0', 'DEG')).toThrow();
  });
});
```

#### Number Formatting
```typescript
describe('formatNumber', () => {
  it('should format with thousand separators', () => {
    expect(formatNumber(1234.56)).toBe('1,234.56');
    expect(formatNumber(1000000)).toBe('1,000,000');
  });
  
  it('should use scientific notation for large numbers', () => {
    expect(formatNumber(1e10)).toContain('e');
  });
});
```

---

### 7.2 Component Tests

```typescript
// tests/unit/Calculator.test.tsx
describe('Calculator Component', () => {
  it('should render all buttons', () => {
    render(<Calculator />);
    expect(screen.getByText('sin')).toBeInTheDocument();
    expect(screen.getByText('7')).toBeInTheDocument();
    expect(screen.getByText('=')).toBeInTheDocument();
  });
  
  it('should update display on button click', async () => {
    render(<Calculator />);
    const button7 = screen.getByText('7');
    const button8 = screen.getByText('8');
    
    await userEvent.click(button7);
    await userEvent.click(button8);
    
    expect(screen.getByText('78')).toBeInTheDocument();
  });
  
  it('should calculate result on equals click', async () => {
    render(<Calculator />);
    
    await userEvent.click(screen.getByText('2'));
    await userEvent.click(screen.getByText('+'));
    await userEvent.click(screen.getByText('3'));
    await userEvent.click(screen.getByText('='));
    
    expect(screen.getByText('5')).toBeInTheDocument();
  });
});
```

---

### 7.3 E2E Tests

```typescript
// tests/e2e/calculator.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Engineering Calculator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
  });
  
  test('should perform basic calculation', async ({ page }) => {
    await page.click('text=5');
    await page.click('text=+');
    await page.click('text=3');
    await page.click('text==');
    
    await expect(page.locator('[data-testid="result"]')).toHaveText('8');
  });
  
  test('should switch between DEG and RAD modes', async ({ page }) => {
    await page.click('text=RAD');
    await expect(page.locator('[data-testid="mode-indicator"]')).toHaveText('RAD');
  });
  
  test('should save calculation to history', async ({ page }) => {
    await page.click('text=2');
    await page.click('text=+');
    await page.click('text=2');
    await page.click('text==');
    
    await page.click('[data-testid="history-button"]');
    await expect(page.locator('[data-testid="history-item"]').first()).toContainText('2 + 2');
  });
});
```

---

### 7.4 Test Coverage Goals

- **Unit Tests**: > 80% code coverage
- **Component Tests**: All user-facing components
- **E2E Tests**: Critical user flows (calculation, history, mode switching)
- **Accessibility Tests**: Automated a11y checks with axe-core

---

## 8. Build & Deployment

### 8.1 Build Configuration

#### Vite Config
```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'icons/*.png'],
      manifest: {
        name: 'Engineering Calculator',
        short_name: 'Calc',
        description: 'Modern engineering calculator web app',
        theme_color: '#137FEC',
        background_color: '#101922',
        display: 'standalone',
        orientation: 'portrait-primary',
        icons: [
          {
            src: '/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
            },
          },
        ],
      },
    }),
  ],
  build: {
    target: 'es2015',
    outDir: 'dist',
    sourcemap: true,
  },
});
```

---

### 8.2 Environment Variables

```bash
# .env.development
VITE_APP_NAME=Engineering Calculator
VITE_APP_VERSION=1.0.0
VITE_ENABLE_ANALYTICS=false

# .env.production
VITE_APP_NAME=Engineering Calculator
VITE_APP_VERSION=1.0.0
VITE_ENABLE_ANALYTICS=true
```

---

### 8.3 Deployment Platform: GitHub Pages

#### Repository Configuration

**GitHub Pages Settings**:
1. Go to repository Settings → Pages
2. Source: Deploy from a branch
3. Branch: `gh-pages` / `root`
4. Save

**Base Path Configuration**:
- GitHub Pages serves from `https://<username>.github.io/<repository-name>/`
- Vite `base` config must match repository name: `/calculcator-demo/`
- All asset paths will be prefixed with this base path

---

#### GitHub Actions Workflows

**CI Workflow** (`.github/workflows/ci.yml`):
- **Triggers**: Push to any branch, all pull requests
- **Jobs**: 
  - Lint (ESLint)
  - Type Check (TypeScript)
  - Test (Vitest with coverage)
  - Build (Production bundle verification)
- **Caching**: pnpm dependencies cached for faster builds
- **Parallel Execution**: All jobs run concurrently

**Deployment Workflow** (`.github/workflows/deploy.yml`):
- **Triggers**: Push to `main` branch only
- **Permissions**: Configured for GitHub Pages deployment
- **Concurrency**: Only one deployment at a time
- **Steps**:
  1. Checkout code
  2. Setup Node.js 18 with pnpm
  3. Install dependencies
  4. Build production bundle
  5. Create `.nojekyll` file
  6. Deploy to `gh-pages` branch using `peaceiris/actions-gh-pages@v3`

---

#### Deployment URL

**Production URL**: `https://<username>.github.io/calculcator-demo/`

**Testing Deployment**:
```bash
# After pushing to main branch
# 1. Check GitHub Actions tab for workflow status
# 2. Wait for deployment to complete (~2-3 minutes)
# 3. Visit the URL above
```

---

#### Environment Variables

No environment variables required for basic deployment. Optional analytics can be added later:

```bash
# .env.production (optional)
VITE_APP_NAME=Engineering Calculator
VITE_APP_VERSION=1.0.0
VITE_ENABLE_ANALYTICS=false
```

---

### 8.4 CI/CD Pipeline

```yaml
# .github/workflows/ci.yml
name: CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'pnpm'
      
      - name: Install dependencies
        run: pnpm install
      
      - name: Lint
        run: pnpm lint
      
      - name: Type check
        run: pnpm type-check
      
      - name: Unit tests
        run: pnpm test:unit
      
      - name: Build
        run: pnpm build
      
      - name: E2E tests
        run: pnpm test:e2e
```

---

## 9. Security Considerations

### 9.1 Input Sanitization
- Validate all user inputs before evaluation
- Prevent code injection through expression parsing
- Use mathjs safe evaluation mode

### 9.2 Content Security Policy
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; 
               font-src 'self' https://fonts.gstatic.com; 
               script-src 'self';">
```

### 9.3 HTTPS Only
- Enforce HTTPS in production
- PWA requires HTTPS for service worker registration

---

## 10. Monitoring & Analytics

### 10.1 Error Tracking
- **Sentry** (optional): Track runtime errors
- Console error logging in development
- User-friendly error messages in production

### 10.2 Performance Monitoring
- **Web Vitals**: Track LCP, FID, CLS
- Lighthouse CI in GitHub Actions
- Bundle size monitoring

### 10.3 Usage Analytics (Optional)
- **Google Analytics 4** or **Plausible**: Privacy-friendly analytics
- Track: page views, calculation count, feature usage
- GDPR compliant (no PII collection)

---

## 11. Accessibility (a11y)

### 11.1 WCAG Compliance
- **Level AA** compliance target
- Color contrast ratio: 4.5:1 for text
- Touch targets: minimum 44x44px
- Keyboard navigation support

### 11.2 ARIA Labels
```tsx
<button
  aria-label="Calculate result"
  onClick={handleCalculate}
>
  =
</button>

<div role="region" aria-label="Calculator display">
  <p aria-label="Input expression">{expression}</p>
  <h1 aria-label="Calculation result">{result}</h1>
</div>
```

### 11.3 Screen Reader Support
- Announce calculation results
- Describe button functions
- Provide context for mode changes

---

## 12. Browser Compatibility

### 12.1 Target Browsers
- Chrome/Edge 90+
- Safari 14+
- Firefox 88+
- iOS Safari 14+
- Chrome Mobile 90+

### 12.2 Polyfills
- Not required for modern browsers
- Consider `core-js` for older browser support if needed

### 12.3 Progressive Enhancement
- Core functionality works without JavaScript (static HTML fallback)
- Enhanced features require JavaScript (animations, calculations)

---

## 13. Development Workflow

### 13.1 Git Workflow
- **Main branch**: Production-ready code
- **Feature branches**: `feature/button-animations`
- **Conventional commits**: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`

### 13.2 Code Review Checklist
- [ ] TypeScript types are correct
- [ ] Tests pass (unit, integration, e2e)
- [ ] No console errors
- [ ] Accessibility checked
- [ ] Performance impact assessed
- [ ] Documentation updated

### 13.3 Release Process
1. Update version in `package.json`
2. Update `CHANGELOG.md`
3. Create git tag: `v1.0.0`
4. Push to main branch
5. CI/CD automatically deploys

---

## 14. Performance Budget

### 14.1 Bundle Size Targets
- **Initial JS**: < 150 KB (gzipped)
- **Initial CSS**: < 20 KB (gzipped)
- **Total Page Weight**: < 500 KB
- **Fonts**: < 100 KB

### 14.2 Runtime Performance
- **Time to Interactive**: < 3s on 3G
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

---

## 15. Documentation

### 15.1 Code Documentation
- JSDoc comments for complex functions
- README.md with setup instructions
- Component prop documentation (TypeScript interfaces)

### 15.2 User Documentation
- In-app help/tutorial (optional)
- Keyboard shortcuts reference
- FAQ section

---

## Appendix

### A. Package.json Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "test": "vitest",
    "test:unit": "vitest run",
    "test:e2e": "playwright test",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "lint:fix": "eslint . --ext ts,tsx --fix",
    "format": "prettier --write \"src/**/*.{ts,tsx,css}\"",
    "type-check": "tsc --noEmit"
  }
}
```

### B. Dependencies

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "mathjs": "^12.4.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "@typescript-eslint/eslint-plugin": "^7.0.0",
    "@typescript-eslint/parser": "^7.0.0",
    "@vitejs/plugin-react": "^4.3.0",
    "@vitest/ui": "^1.6.0",
    "autoprefixer": "^10.4.19",
    "eslint": "^8.57.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.6",
    "playwright": "^1.44.0",
    "postcss": "^8.4.38",
    "prettier": "^3.2.5",
    "tailwindcss": "^3.4.3",
    "typescript": "^5.4.5",
    "vite": "^5.2.11",
    "vite-plugin-pwa": "^0.20.0",
    "vitest": "^1.6.0"
  }
}
```

### C. TypeScript Configuration

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

---

**End of Technical Specification**
