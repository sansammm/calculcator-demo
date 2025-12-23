# SOLID Principles Rule

## Overview
All code in this project MUST follow SOLID principles to ensure maintainability, scalability, and testability.

## The Five SOLID Principles

### 1. Single Responsibility Principle (SRP)
**Definition**: A class/module should have only one reason to change.

#### Guidelines
- Each function/class should do ONE thing well
- Separate concerns into different modules
- If you can describe a module with "AND", it's doing too much

#### ✅ CORRECT Example
```typescript
// calculator.ts - Only handles calculation logic
export const evaluateExpression = (expr: string, mode: AngleMode): number => {
  // Pure calculation logic
};

// formatter.ts - Only handles formatting
export const formatNumber = (num: number, precision: number): string => {
  // Pure formatting logic
};

// validator.ts - Only handles validation
export const validateExpression = (expr: string): boolean => {
  // Pure validation logic
};
```

#### ❌ INCORRECT Example
```typescript
// DON'T mix responsibilities
export const calculate = (expr: string, mode: AngleMode): string => {
  const result = eval(expr); // Calculate
  const formatted = result.toLocaleString(); // Format
  localStorage.setItem('last', formatted); // Store
  return formatted; // Multiple responsibilities!
};
```

---

### 2. Open/Closed Principle (OCP)
**Definition**: Software entities should be open for extension but closed for modification.

#### Guidelines
- Use interfaces and abstract classes
- Extend behavior through composition/inheritance
- Don't modify existing code when adding features

#### ✅ CORRECT Example
```typescript
// Base interface
interface MathOperation {
  execute(a: number, b: number): number;
}

// Implementations can be added without modifying existing code
class Addition implements MathOperation {
  execute(a: number, b: number): number {
    return a + b;
  }
}

class Multiplication implements MathOperation {
  execute(a: number, b: number): number {
    return a * b;
  }
}

// Calculator uses the interface
class Calculator {
  calculate(a: number, b: number, operation: MathOperation): number {
    return operation.execute(a, b);
  }
}
```

#### ❌ INCORRECT Example
```typescript
// DON'T use switch statements that need modification for new operations
class Calculator {
  calculate(a: number, b: number, operator: string): number {
    switch (operator) {
      case '+': return a + b;
      case '-': return a - b;
      // Need to modify this function to add new operations!
    }
  }
}
```

---

### 3. Liskov Substitution Principle (LSP)
**Definition**: Subtypes must be substitutable for their base types without altering correctness.

#### Guidelines
- Derived classes should extend, not replace, base class behavior
- Don't strengthen preconditions or weaken postconditions
- Maintain the contract of the base class

#### ✅ CORRECT Example
```typescript
interface Calculator {
  calculate(expression: string): number;
}

class BasicCalculator implements Calculator {
  calculate(expression: string): number {
    // Basic implementation
    return eval(expression);
  }
}

class ScientificCalculator implements Calculator {
  calculate(expression: string): number {
    // Extended implementation with trig functions
    // Still returns a number, maintains contract
    return this.evaluateWithScientific(expression);
  }
  
  private evaluateWithScientific(expr: string): number {
    // Implementation
  }
}

// Both can be used interchangeably
function processCalculation(calc: Calculator, expr: string): number {
  return calc.calculate(expr); // Works with both!
}
```

#### ❌ INCORRECT Example
```typescript
// DON'T violate the contract
class BrokenCalculator implements Calculator {
  calculate(expression: string): number {
    // Throws error instead of returning number - violates contract!
    throw new Error('Not implemented');
  }
}
```

---

### 4. Interface Segregation Principle (ISP)
**Definition**: Clients should not be forced to depend on interfaces they don't use.

#### Guidelines
- Create small, focused interfaces
- Don't create "fat" interfaces with many methods
- Split large interfaces into smaller, specific ones

#### ✅ CORRECT Example
```typescript
// Small, focused interfaces
interface Evaluator {
  evaluate(expression: string): number;
}

interface Formatter {
  format(value: number): string;
}

interface Validator {
  validate(expression: string): boolean;
}

// Classes implement only what they need
class Calculator implements Evaluator {
  evaluate(expression: string): number {
    // Implementation
  }
}

class NumberFormatter implements Formatter {
  format(value: number): string {
    // Implementation
  }
}
```

#### ❌ INCORRECT Example
```typescript
// DON'T create fat interfaces
interface CalculatorService {
  evaluate(expr: string): number;
  format(value: number): string;
  validate(expr: string): boolean;
  saveHistory(item: HistoryItem): void;
  loadHistory(): HistoryItem[];
  exportToPDF(): Blob;
  // Too many responsibilities!
}

// Forces implementations to implement everything
class SimpleCalculator implements CalculatorService {
  evaluate(expr: string): number { /* ... */ }
  format(value: number): string { /* ... */ }
  validate(expr: string): boolean { /* ... */ }
  saveHistory(item: HistoryItem): void { throw new Error('Not needed!'); }
  loadHistory(): HistoryItem[] { throw new Error('Not needed!'); }
  exportToPDF(): Blob { throw new Error('Not needed!'); }
}
```

---

### 5. Dependency Inversion Principle (DIP)
**Definition**: High-level modules should not depend on low-level modules. Both should depend on abstractions.

#### Guidelines
- Depend on interfaces, not concrete implementations
- Inject dependencies rather than creating them
- Use dependency injection for better testability

#### ✅ CORRECT Example
```typescript
// Abstraction
interface MathEngine {
  evaluate(expression: string): number;
}

// Low-level module
class MathJsEngine implements MathEngine {
  evaluate(expression: string): number {
    return math.evaluate(expression);
  }
}

// High-level module depends on abstraction
class Calculator {
  constructor(private engine: MathEngine) {} // Dependency injection
  
  calculate(expression: string): number {
    return this.engine.evaluate(expression);
  }
}

// Usage
const engine = new MathJsEngine();
const calculator = new Calculator(engine); // Inject dependency
```

#### ❌ INCORRECT Example
```typescript
// DON'T depend on concrete implementations
class Calculator {
  private engine: MathJsEngine; // Concrete dependency!
  
  constructor() {
    this.engine = new MathJsEngine(); // Creates dependency internally
  }
  
  calculate(expression: string): number {
    return this.engine.evaluate(expression);
    // Hard to test, hard to swap implementations
  }
}
```

---

## Application to This Project

### Calculator Core
```typescript
// interfaces/calculator.interface.ts
export interface IExpressionEvaluator {
  evaluate(expression: string, mode: AngleMode): number;
}

export interface INumberFormatter {
  format(value: number, precision: number): string;
}

export interface IExpressionValidator {
  validate(expression: string): boolean;
}

// implementations/mathjs-evaluator.ts
export class MathJsEvaluator implements IExpressionEvaluator {
  evaluate(expression: string, mode: AngleMode): number {
    // Implementation using mathjs
  }
}

// implementations/number-formatter.ts
export class NumberFormatter implements INumberFormatter {
  format(value: number, precision: number): string {
    // Implementation
  }
}

// calculator.ts
export class Calculator {
  constructor(
    private evaluator: IExpressionEvaluator,
    private formatter: INumberFormatter,
    private validator: IExpressionValidator
  ) {}
  
  calculate(expression: string, mode: AngleMode): string {
    if (!this.validator.validate(expression)) {
      throw new Error('Invalid expression');
    }
    const result = this.evaluator.evaluate(expression, mode);
    return this.formatter.format(result, 6);
  }
}
```

### State Management
```typescript
// Follow SRP - separate state, actions, and reducers
interface CalculatorState {
  expression: string;
  result: number | null;
  // ...
}

interface CalculatorActions {
  inputNumber: (num: string) => void;
  inputOperator: (op: string) => void;
  calculate: () => void;
  // ...
}

// Each action handler is a separate function
const handleInputNumber = (state: CalculatorState, num: string): CalculatorState => {
  // Single responsibility
};

const handleCalculate = (state: CalculatorState): CalculatorState => {
  // Single responsibility
};
```

## Benefits

1. **Maintainability**: Easy to understand and modify
2. **Testability**: Easy to write unit tests with mocked dependencies
3. **Flexibility**: Easy to swap implementations
4. **Scalability**: Easy to add new features without breaking existing code
5. **Reusability**: Components can be reused in different contexts

## Enforcement

### Code Review Checklist
- [ ] Each module has a single, well-defined responsibility
- [ ] New features extend existing code, not modify it
- [ ] Interfaces are small and focused
- [ ] Dependencies are injected, not created internally
- [ ] Derived classes maintain base class contracts

### Refactoring Red Flags
- Functions with multiple responsibilities
- Large switch/if-else statements for type checking
- Classes with many dependencies
- Tight coupling between modules
- Difficulty writing unit tests

## Resources

- [SOLID Principles Explained](https://www.digitalocean.com/community/conceptual_articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design)
- [Clean Code by Robert C. Martin](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)
- [SOLID TypeScript](https://khalilstemmler.com/articles/solid-principles/solid-typescript/)
