import { MathJsEvaluator } from './ExpressionEvaluator';
import type { AngleMode } from '../types';

const evaluator = new MathJsEvaluator();

/**
 * Evaluates a mathematical expression string.
 * @param expression The expression to evaluate
 * @param angleMode The current angle mode (DEG or RAD)
 * @returns The calculated result as a string
 */
export const evaluateExpression = (expression: string, angleMode: AngleMode): string => {
    return evaluator.evaluate(expression, angleMode);
};
