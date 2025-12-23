# Test-Driven Development (TDD) Rule

## Overview
All core logic (non-UI code) in this project MUST be developed using Test-Driven Development methodology.

## Scope
- **Applies to**: All business logic, utilities, calculation engine, state management logic
- **Does NOT apply to**: React components, UI rendering, styling

## TDD Workflow

### Red-Green-Refactor Cycle

1. **RED**: Write a failing test first
   - Write a test that describes the desired behavior
   - Run the test and verify it fails
   - The test should fail for the right reason (not syntax errors)

2. **GREEN**: Write minimal code to pass the test
   - Implement just enough code to make the test pass
   - Don't worry about optimization or elegance yet
   - Run the test and verify it passes

3. **REFACTOR**: Improve the code while keeping tests green
   - Clean up the implementation
   - Remove duplication
   - Improve readability
   - Ensure all tests still pass

## Implementation Guidelines

### Test File Organization
```
src/
├── utils/
│   ├── calculator.ts
│   └── calculator.test.ts      # Test file next to implementation
├── hooks/
│   ├── useCalculator.ts
│   └── useCalculator.test.ts
```

### Test Naming Convention
```typescript
describe('Calculator', () => {
  describe('add', () => {
    it('should add two positive numbers', () => {
      // Test implementation
    });
    
    it('should handle negative numbers', () => {
      // Test implementation
    });
  });
});
```

### Test Coverage Requirements
- **Minimum coverage**: 80% for core logic
- **Critical paths**: 100% coverage for calculation engine
- **Edge cases**: Must include tests for:
  - Boundary values
  - Error conditions
  - Invalid inputs
  - Edge cases (division by zero, overflow, etc.)

## Examples

### ✅ CORRECT: TDD Approach

```typescript
// Step 1: Write test first
describe('evaluateExpression', () => {
  it('should calculate basic addition', () => {
    expect(evaluateExpression('2 + 3', 'DEG')).toBe(5);
  });
});

// Step 2: Implement minimal code
export const evaluateExpression = (expr: string, mode: AngleMode): number => {
  // Minimal implementation to pass test
  const [a, op, b] = expr.split(' ');
  if (op === '+') return Number(a) + Number(b);
  throw new Error('Not implemented');
};

// Step 3: Refactor and add more tests
```

### ❌ INCORRECT: Implementation First

```typescript
// DON'T write implementation before tests
export const evaluateExpression = (expr: string, mode: AngleMode): number => {
  // Complex implementation without tests
  // ...
};
```

## Test Categories

### Unit Tests
- Test individual functions in isolation
- Mock external dependencies
- Fast execution (< 100ms per test)

### Integration Tests
- Test multiple units working together
- Test state management logic
- Test calculation engine with mathjs integration

### Property-Based Tests (Optional)
- Use for mathematical functions
- Test with random inputs
- Verify mathematical properties hold

## Tools

### Testing Framework
- **Vitest**: Primary test runner for core logic
- **Playwright**: E2E testing for full application flows

### Coverage Tool
- Built-in Vitest coverage
- Run: `pnpm test:coverage`
- View: `coverage/index.html`

## Enforcement

### Pre-commit Checks
- All tests must pass before commit
- Coverage must not decrease

### CI/CD
- CI workflow runs all tests
- Fails if coverage drops below threshold
- Blocks merge if tests fail

## Exceptions

UI components (React components) are **exempt from TDD and automated testing**. UI components should be tested **manually** through browser testing during development.

**Manual UI Testing Approach**:
- Test components visually in the browser during development
- Verify interactions work correctly (clicks, keyboard input)
- Check responsive design at different screen sizes
- Verify accessibility with browser dev tools
- Test cross-browser compatibility manually

## Benefits

1. **Better Design**: TDD forces you to think about API design first
2. **Documentation**: Tests serve as living documentation
3. **Confidence**: Refactor with confidence knowing tests will catch regressions
4. **Fewer Bugs**: Catch bugs early in development cycle
5. **Faster Debugging**: Failing tests pinpoint exact issue

## Resources

- [Vitest Documentation](https://vitest.dev/)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
- [TDD by Example - Kent Beck](https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530)
