import { describe, it, expect } from 'vitest';
import { formatNumber } from './formatter';

describe('formatNumber', () => {
    describe('Thousand Separators', () => {
        it('should format numbers with thousand separators', () => {
            expect(formatNumber('1234.56')).toBe('1,234.56');
        });

        it('should format large integers with separators', () => {
            expect(formatNumber('1000000')).toBe('1,000,000');
        });
    });

    describe('Decimal Precision', () => {
        it('should round decimal numbers to specified precision', () => {
            // Default max precision could be, say, 10, or passed as arg.
            // Let's assume the function signature handles it or we update it.
            expect(formatNumber('1.12345678901', 6)).toBe('1.123457');
        });

        it('should remove trailing zeros after decimal point', () => {
            expect(formatNumber('1.500000')).toBe('1.5');
        });
    });

    describe('Scientific Notation', () => {
        it('should format very large numbers in scientific notation', () => {
            // If number is >= 1e16, use scientific
            expect(formatNumber('10000000000000000')).toContain('e');
        });

        it('should format existing scientific notation with separators if possible or keep as is?', () => {
            // Ideally '1e+16' stays '1e+16' or becomes '1e+16'.
            // The thousand separator logic usually doesn't apply to scientific notation.
            expect(formatNumber('1.23e+16')).toBe('1.23e+16');
        });
    });

    describe('Edge Cases', () => {
        it('should return "Error" for Infinity', () => {
            expect(formatNumber('Infinity')).toBe('Error');
        });

        it('should return "Error" for -Infinity', () => {
            expect(formatNumber('-Infinity')).toBe('Error');
        });

        it('should return "Error" for NaN strings', () => {
            expect(formatNumber('NaN')).toBe('Error');
            expect(formatNumber('abc')).toBe('Error');
        });
    });
});
