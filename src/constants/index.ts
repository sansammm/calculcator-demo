import type { ButtonConfig } from '../types';

/**
 * Mathematical Constants
 */
export const CONSTANTS = {
    PI: Math.PI,
    E: Math.E,
} as const;

/**
 * Error Messages
 */
export const ERROR_MESSAGES = {
    DIVIDE_BY_ZERO: 'Error: Divide by Zero',
    INVALID_EXPRESSION: 'Error: Invalid Input',
    OVERFLOW: 'Error: Overflow',
    UNKNOWN_ERROR: 'Error',
} as const;

/**
 * Default Settings
 */
export const DEFAULT_SETTINGS = {
    theme: 'dark' as const,
    precision: 6,
    soundEnabled: false,
    vibrationEnabled: true,
};

/**
 * Number Pad Buttons (0-9, .)
 */
export const NUMBER_BUTTONS: ButtonConfig[] = [
    { label: '7', value: '7', type: 'number' },
    { label: '8', value: '8', type: 'number' },
    { label: '9', value: '9', type: 'number' },
    { label: '4', value: '4', type: 'number' },
    { label: '5', value: '5', type: 'number' },
    { label: '6', value: '6', type: 'number' },
    { label: '1', value: '1', type: 'number' },
    { label: '2', value: '2', type: 'number' },
    { label: '3', value: '3', type: 'number' },
    { label: '0', value: '0', type: 'number', className: 'col-span-2' },
    { label: '.', value: '.', type: 'number' },
];

/**
 * Basic Operator Buttons (+, -, *, /)
 */
export const OPERATOR_BUTTONS: ButtonConfig[] = [
    { label: '÷', value: '/', type: 'operator', ariaLabel: 'divide' },
    { label: '×', value: '*', type: 'operator', ariaLabel: 'multiply' },
    { label: '-', value: '-', type: 'operator', ariaLabel: 'subtract' },
    { label: '+', value: '+', type: 'operator', ariaLabel: 'add' },
    { label: '=', value: '=', type: 'equals', ariaLabel: 'calculate result' },
];

/**
 * Scientific Function Buttons
 */
export const FUNCTION_BUTTONS: ButtonConfig[] = [
    { label: 'sin', value: 'sin', type: 'function' },
    { label: 'cos', value: 'cos', type: 'function' },
    { label: 'tan', value: 'tan', type: 'function' },
    { label: '√', value: 'sqrt', type: 'function', ariaLabel: 'square root' },
    { label: 'π', value: 'pi', type: 'function', ariaLabel: 'pi' },
    { label: '(', value: '(', type: 'function' },
    { label: ')', value: ')', type: 'function' },
    { label: '^', value: '^', type: 'function', ariaLabel: 'power' },
];

/**
 * Action Buttons (Clear, Backspace)
 */
export const ACTION_BUTTONS: ButtonConfig[] = [
    { label: 'AC', value: 'AC', type: 'action', ariaLabel: 'all clear', className: 'text-red-500' },
    { label: '⌫', value: 'BACKSPACE', type: 'action', ariaLabel: 'backspace' },
];
