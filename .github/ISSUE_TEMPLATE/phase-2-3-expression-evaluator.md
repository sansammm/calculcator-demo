---
name: Phase 2.3 - Expression Evaluator (TDD)
about: Implement calculation engine using TDD methodology
title: "[Core Logic] Expression Evaluator (TDD)"
labels: core-logic, TDD, P0
assignees: ''
---

## 작업 배경 (Background)

계산기의 핵심 기능인 수식 평가 엔진을 구현합니다. **TDD (Test-Driven Development)** 방법론을 따라 테스트를 먼저 작성하고, 구현 후 리팩토링하는 Red-Green-Refactor 사이클을 적용합니다. SOLID 원칙 중 DIP(Dependency Inversion Principle)와 SRP(Single Responsibility Principle)를 준수합니다.

## 작업 내용 (Tasks)

### Basic Arithmetic (Red-Green-Refactor)
- [ ] 🔴 RED: Write test for `2 + 3 = 5`
- [ ] 🟢 GREEN: Implement addition
- [ ] 🔵 REFACTOR: Clean up implementation
- [ ] 🔴 RED: Write tests for subtraction, multiplication, division
- [ ] 🟢 GREEN: Implement remaining operations

### Trigonometric Functions (DEG Mode)
- [ ] 🔴 RED: Write test for `sin(90) = 1` in DEG mode
- [ ] 🟢 GREEN: Implement sin with mathjs
- [ ] 🔴 RED: Write tests for cos, tan in DEG mode
- [ ] 🟢 GREEN: Implement cos, tan functions

### Trigonometric Functions (RAD Mode)
- [ ] 🔴 RED: Write test for `sin(π/2) = 1` in RAD mode
- [ ] 🟢 GREEN: Implement RAD mode angle conversion
- [ ] 🔵 REFACTOR: Extract angle conversion logic

### Additional Functions
- [ ] 🔴 RED: Write test for square root `√9 = 3`
- [ ] 🟢 GREEN: Implement square root
- [ ] 🔴 RED: Write test for π constant
- [ ] 🟢 GREEN: Implement π constant
- [ ] 🔴 RED: Write test for parentheses `(2 + 3) * 4 = 20`
- [ ] 🟢 GREEN: Implement parentheses handling

### Error Handling
- [ ] 🔴 RED: Write test for division by zero
- [ ] 🟢 GREEN: Implement error handling
- [ ] 🔴 RED: Write test for invalid expressions
- [ ] 🟢 GREEN: Implement validation

### SOLID Refactoring
- [ ] Create `IExpressionEvaluator` interface (DIP)
- [ ] Implement `MathJsEvaluator` class
- [ ] Extract mathjs configuration (SRP)

## 인수 조건 (Acceptance Criteria)

- ✅ **100% test coverage** for calculation engine
- ✅ All test cases pass:
  - Basic arithmetic: `2 + 3 = 5`, `10 - 5 = 5`, `3 * 4 = 12`, `8 / 2 = 4`
  - Trig (DEG): `sin(90) = 1`, `cos(0) = 1`, `tan(45) ≈ 1`
  - Trig (RAD): `sin(π/2) = 1`, `cos(π) = -1`
  - Square root: `√9 = 3`, `√2 ≈ 1.414`
  - Constants: `π ≈ 3.14159`
  - Parentheses: `(2 + 3) * 4 = 20`
  - Errors: `1/0 → Error`, `sin(abc) → Error`
- ✅ Follows SOLID principles (SRP, DIP)
- ✅ Tests written **before** implementation (TDD)
- ✅ Code is well-documented with JSDoc comments

## 참고 자료 (References)

- TDD Rule: `docs/rules/tdd.md`
- SOLID Principles: `docs/rules/solid.md`
- Tech Spec: `docs/TechSpec.md` - Section 4.1 (Expression Parsing & Evaluation)
- [mathjs Documentation](https://mathjs.org/docs/index.html)

## 예상 시간 (Estimated Time)

8 hours

## 개발 방법론 (Development Method)

**TDD + SOLID**
- Follow Red-Green-Refactor cycle
- Write tests first, then implement
- Refactor to apply SOLID principles
