import { describe, it, expect } from 'vitest';
import { evaluateExpression } from './calculator';

describe('evaluateExpression', () => {
    describe('Basic Arithmetic', () => {
        it('should correctly add two numbers', () => {
            expect(evaluateExpression('2 + 3', 'DEG')).toBe('5');
        });

        it('should correctly subtract two numbers', () => {
            expect(evaluateExpression('10 - 5', 'DEG')).toBe('5');
        });

        it('should correctly multiply two numbers', () => {
            expect(evaluateExpression('3 * 4', 'DEG')).toBe('12');
        });

        it('should correctly divide two numbers', () => {
            expect(evaluateExpression('8 / 2', 'DEG')).toBe('4');
        });

        it('should handle floating point numbers', () => {
            expect(evaluateExpression('1.5 + 2.5', 'DEG')).toBe('4');
        });
    });

    describe('Trigonometric Functions (DEG)', () => {
        it('should calculate sin(90) in DEG mode', () => {
            expect(evaluateExpression('sin(90)', 'DEG')).toBe('1');
        });

        it('should calculate cos(0) in DEG mode', () => {
            expect(evaluateExpression('cos(0)', 'DEG')).toBe('1');
        });

        it('should calculate tan(45) in DEG mode', () => {
            expect(evaluateExpression('tan(45)', 'DEG')).toBe('1');
        });
    });

    describe('Trigonometric Functions (RAD)', () => {
        it('should calculate sin(pi/2) in RAD mode', () => {
            expect(evaluateExpression('sin(pi/2)', 'RAD')).toBe('1');
        });

        it('should calculate cos(pi) in RAD mode', () => {
            expect(evaluateExpression('cos(pi)', 'RAD')).toBe('-1');
        });
    });

    describe('Additional Functions', () => {
        it('should calculate square root', () => {
            expect(evaluateExpression('sqrt(9)', 'DEG')).toBe('3');
        });

        it('should handle pi constant', () => {
            // checking start matches because of precision
            expect(evaluateExpression('pi', 'DEG').startsWith('3.14159')).toBe(true);
        });

        it('should handle parentheses', () => {
            expect(evaluateExpression('(2 + 3) * 4', 'DEG')).toBe('20');
        });
        describe('Error Handling', () => {
            it('should return "Error" when dividing by zero', () => {
                expect(evaluateExpression('1 / 0', 'DEG')).toBe('Error');
            });

            it('should return "Error" for invalid functions', () => {
                expect(evaluateExpression('sin(abc)', 'DEG')).toBe('Error');
            });

            it('should handle very large numbers (Infinity)', () => {
                // Mathjs might return Infinity, but if we want "Error" on overflow, or just "Infinity".
                // The requirement says "Implement overflow handling". 
                // Usually calculators show "Error" or "Infinity". 
                // Let's assume we want "Error" for now based on "Test 1/0 throws error".
                // But actually 1/0 is Infinity. 
                // Let's stick to the plan: "Test very large numbers".
                // If manual calculation, 1e1000 is Infinity.
                expect(evaluateExpression('10 ^ 1000', 'DEG')).toBe('Error');
            });
        });
    });
});

