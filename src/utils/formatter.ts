/**
 * Interface for number formatting strategy (ISP)
 */
export interface INumberFormatter {
    format(value: string, precision?: number): string;
}

/**
 * Handles number formatting for the calculator
 */
export class NumberFormatter implements INumberFormatter {
    /**
     * Formats a number string with thousand separators, precision, and scientific notation.
     * @param value The number string to format
     * @param precision Optional decimal precision
     * @returns The formatted string
     */
    public format(value: string, precision?: number): string {
        const num = parseFloat(value);

        // Handle Invalid numbers and Infinity
        if (!isFinite(num)) {
            if (isNaN(num)) return 'Error';
            return 'Error';
        }

        // Handle Scientific Notation for very large numbers
        if (Math.abs(num) >= 1e16) {
            return num.toExponential();
        }

        let formatted = value;

        // Handle Precision
        if (precision !== undefined) {
            formatted = num.toFixed(precision);
        } else {
            formatted = num.toString();
        }

        // Remove trailing zeros
        if (formatted.includes('.')) {
            formatted = formatted.replace(/\.?0+$/, '');
        }

        // Apply Thousand Separators
        const parts = formatted.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return parts.join('.');
    }
}

// Export singleton/helper for backward compatibility or easy usage
export const formatNumber = (value: string, precision?: number): string => {
    return new NumberFormatter().format(value, precision);
};
