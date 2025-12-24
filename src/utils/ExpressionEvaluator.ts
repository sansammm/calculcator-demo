import { create, all } from 'mathjs';
import type { AngleMode } from '../types';

export interface IExpressionEvaluator {
    evaluate(expression: string, angleMode: AngleMode): string;
}

export class MathJsEvaluator implements IExpressionEvaluator {
    private math = create(all);

    constructor() {
        // Any specific config if needed
    }

    public evaluate(expression: string, angleMode: AngleMode): string {
        try {
            const scope = {
                sin: (x: number) => (angleMode === 'DEG' ? this.math.sin(this.math.unit(x, 'deg')) : this.math.sin(x)),
                cos: (x: number) => (angleMode === 'DEG' ? this.math.cos(this.math.unit(x, 'deg')) : this.math.cos(x)),
                tan: (x: number) => (angleMode === 'DEG' ? this.math.tan(this.math.unit(x, 'deg')) : this.math.tan(x)),
            };

            const result = this.math.evaluate(expression, scope);

            // Handle Infinity, -Infinity, and NaN
            if (typeof result === 'number' && (!isFinite(result) || isNaN(result))) {
                return 'Error';
            }

            // Use format to handle floating point precision (e.g., tan(45) -> 1)
            return this.math.format(result, { precision: 14 });
        } catch (error) {
            return 'Error';
        }
    }
}
