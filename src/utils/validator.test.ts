import { describe, it, expect } from 'vitest';
import { validateInput } from './validator';

describe('validateInput', () => {
    describe('Decimal Point Validation', () => {
        it('should allow valid decimal numbers', () => {
            // If current is '12', adding '.' is valid -> '12.'
            expect(validateInput('12', '.')).toBe(true);
        });

        it('should prevent multiple decimal points in the same number', () => {
            // '12.3.4' shouldn't exist if validator works. 
            // The function validates if 'newInput' can be added to 'currentExpression'.
            // So if current is '12.3', adding '.' should be false.
            expect(validateInput('12.3', '.')).toBe(false);

            // If current is '12', adding '.' is true.
            expect(validateInput('12', '.')).toBe(true);

            // If current is '12.34', adding '.' is false.
            expect(validateInput('12.34', '.')).toBe(false);
        });

        it('should prevent adding decimal if one already exists in current number', () => {
            expect(validateInput('12.3', '.')).toBe(false);
            expect(validateInput('12', '.')).toBe(true);
            expect(validateInput('1 + 2.3', '.')).toBe(false); // Last number has decimal
            expect(validateInput('1 + 2', '.')).toBe(true);
        });
    });

    describe('Operator Validation', () => {
        it('should prevent multiple consecutive operators', () => {
            expect(validateInput('12+', '+')).toBe(false);
            expect(validateInput('12+', '*')).toBe(false); // Should replace? Or prevent? Calculator usually replaces.
            // Requirement: "Test preventing consecutive operators"
            // If we implement 'replace' logic in reducer, validator might just say "false" for "append".
            // Let's stick to "is this valid to append?" -> false.
        });

        it('should allow valid operators', () => {
            expect(validateInput('12', '+')).toBe(true);
        });
    });

    describe('Starting Characters', () => {
        it('should allow digits and minus as starting characters', () => {
            expect(validateInput('', '1')).toBe(true);
            expect(validateInput('', '-')).toBe(true);
        });

        it('should prevent other operators as starting characters', () => {
            expect(validateInput('', '+')).toBe(false);
            expect(validateInput('', '*')).toBe(false);
            expect(validateInput('', '/')).toBe(false);
            expect(validateInput('', '.')).toBe(true); // .1 is valid 0.1 usually
        });
    });

    describe('Negative Numbers', () => {
        it('should allow minus sign for negative numbers after operator', () => {
            expect(validateInput('1+', '-')).toBe(true); // 1 + -5
            expect(validateInput('1*', '-')).toBe(true); // 1 * -5
        });

        it('should prevent multiple minus signs', () => {
            expect(validateInput('1--', '-')).toBe(false);
        });
    });
});
