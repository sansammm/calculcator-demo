import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useCalculator } from './useCalculator';

describe('useCalculator', () => {
    it('should initialize with default state', () => {
        const { result } = renderHook(() => useCalculator());
        expect(result.current.display).toBe('0');
        expect(result.current.expression).toBe('');
    });

    it('should handle number input', () => {
        const { result } = renderHook(() => useCalculator());

        act(() => {
            result.current.inputNumber('1');
        });
        expect(result.current.display).toBe('1');
        expect(result.current.expression).toBe('1');

        act(() => {
            result.current.inputNumber('2');
        });
        expect(result.current.display).toBe('12');
        expect(result.current.expression).toBe('12');
    });

    it('should handle operator input', () => {
        const { result } = renderHook(() => useCalculator());

        act(() => {
            result.current.inputNumber('5');
        });

        act(() => {
            result.current.inputOperator('+');
        });

        expect(result.current.expression).toBe('5+');
        // Display usually keeps showing the number until new number is typed? 
        // Or shows "5+"? Design decision. Let's say it shows '5'.
        // Wait, standard calculators often show the result or current operand.
        // Let's assume display shows current constructed number OR result.
    });
});
