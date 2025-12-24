/**
 * Interface for expression validation strategy (ISP)
 */
export interface IExpressionValidator {
    validate(currentExpression: string, newInput: string): boolean;
}

/**
 * Handles validation of calculator input.
 */
export class ExpressionValidator implements IExpressionValidator {
    /**
     * Validates if a new input character is valid to append to the current expression.
     * @param currentExpression The current expression string
     * @param newInput The new character to append (number, operator, or decimal)
     * @returns true if the input is valid, false otherwise
     */
    public validate(currentExpression: string, newInput: string): boolean {
        // 1. Decimal Point Validation
        if (newInput === '.') {
            // Get the last number segment (split by operators)
            const parts = currentExpression.split(/[\+\-\*\/]/);
            const lastPart = parts[parts.length - 1];

            // If last part already has a decimal, return false
            if (lastPart.includes('.')) {
                return false;
            }
            return true;
        }

        // 2. Operator Validation
        if (['+', '-', '*', '/'].includes(newInput)) {
            // Handle Starting Character
            if (currentExpression === '') {
                // Only allow minus as starting operator (negative number)
                if (newInput === '-') return true;
                return false;
            }

            const lastChar = currentExpression.slice(-1);

            // Prevent consecutive operators, BUT allow minus sign for negative numbers
            // e.g. "1+" -> "-" is allowed (1 + -5)
            // "1-" -> "-" is NOT allowed (1 - -5) -> usually allowed in math, but maybe blocks logic?
            // Test says: "prevent multiple minus signs" (1--) -> false.
            // Test says: "allow minus sign for negative numbers after operator" (1+, -) -> true.

            if (['+', '*', '/'].includes(lastChar)) {
                if (newInput === '-') return true; // Allow negative
                return false; // Prevent other consecutive
            }

            if (lastChar === '-') {
                return false; // Prevent --, +-, *-, /-
            }
        }

        return true;
    }
}

// Export singleton/helper
export const validateInput = (currentExpression: string, newInput: string): boolean => {
    return new ExpressionValidator().validate(currentExpression, newInput);
};
