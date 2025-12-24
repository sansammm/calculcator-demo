/**
 * Calculator Types and Interfaces
 */

/**
 * Angle modes for trigonometric calculations
 */
export type AngleMode = 'DEG' | 'RAD';

/**
 * Button categories for styling and behavior
 */
export type ButtonType = 'number' | 'operator' | 'function' | 'action' | 'equals';

/**
 * Configuration for a calculator button
 */
export interface ButtonConfig {
    label: string;
    value: string;
    type: ButtonType;
    className?: string; // Optional custom styling
    ariaLabel?: string; // For accessibility
}

/**
 * Calculator history item
 */
export interface HistoryItem {
    id: string; // Unique identifier
    expression: string;
    result: string;
    timestamp: number;
}

/**
 * Core Calculator State
 */
export interface CalculatorState {
    expression: string; // Current mathematical expression
    result: string; // Last calculated result
    history: HistoryItem[];
    angleMode: AngleMode;
    error: string | null; // Error message if any
    isNewCalculation: boolean; // Flag to reset expression on next number input
    memory: number; // For M+, M- functionality
}

/**
 * Calculator Settings
 */
export interface CalculatorSettings {
    theme: 'dark' | 'light';
    precision: number; // Decimal places
    soundEnabled: boolean;
    vibrationEnabled: boolean;
}

/**
 * Actions for the reducer (to be used later)
 */
export type CalculatorAction =
    | { type: 'INPUT_NUMBER'; payload: string }
    | { type: 'INPUT_OPERATOR'; payload: string }
    | { type: 'INPUT_FUNCTION'; payload: string }
    | { type: 'CALCULATE' }
    | { type: 'CLEAR' }
    | { type: 'BACKSPACE' }
    | { type: 'TOGGLE_MODE' }
    | { type: 'SET_ERROR'; payload: string | null }
    | { type: 'LOAD_HISTORY'; payload: string }; // Payload is the expression
