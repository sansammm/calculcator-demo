# Project Development Rules

This directory contains the development rules and principles that must be followed in this project.

## Rules

### 1. [Test-Driven Development (TDD)](./tdd.md)
All core logic (non-UI code) must be developed using TDD methodology.

**Key Points**:
- Write tests before implementation (Red-Green-Refactor)
- Minimum 80% code coverage for core logic
- 100% coverage for calculation engine
- Tests must be fast and isolated

**Applies to**:
- Business logic
- Utilities
- Calculation engine
- State management logic

**Does NOT apply to**:
- React components (test after implementation)
- UI rendering
- Styling

---

### 2. [SOLID Principles](./solid.md)
All code must follow SOLID principles for maintainability and scalability.

**The Five Principles**:
1. **Single Responsibility**: One class/module, one responsibility
2. **Open/Closed**: Open for extension, closed for modification
3. **Liskov Substitution**: Subtypes must be substitutable for base types
4. **Interface Segregation**: Small, focused interfaces
5. **Dependency Inversion**: Depend on abstractions, not concretions

**Benefits**:
- Better testability
- Easier maintenance
- More flexible architecture
- Improved code reusability

---

## Enforcement

These rules are enforced through:

1. **Code Reviews**: All PRs must follow these principles
2. **CI/CD**: Automated tests must pass
3. **Coverage Reports**: Coverage must not decrease
4. **Linting**: ESLint rules enforce code quality

## Resources

- [TDD Rule Details](./tdd.md)
- [SOLID Principles Details](./solid.md)
- [Project Tech Spec](../TechSpec.md)
- [Product Requirements](../PRD.md)
