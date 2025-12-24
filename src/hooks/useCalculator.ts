import { useReducer } from 'react';
import { evaluateExpression } from '../utils/calculator';
// formatter not used yet? or we should return formatted display
import { formatNumber } from '../utils/formatter';
import { validateInput } from '../utils/validator';
import type { CalculatorState, CalculatorAction } from '../types';

const initialState: CalculatorState = {
    expression: '',
    result: '',
    error: null,
    history: [], // Will implement history management effectively later or separate hook
    angleMode: 'DEG',
    memory: 0,
    isNewCalculation: false
};

// Reducer function (moved inside hook or separate file? efficient to keep here for now)
const calculatorReducer = (state: CalculatorState, action: CalculatorAction): CalculatorState => {
    switch (action.type) {
        case 'INPUT_NUMBER':
            const newExpressionNum = state.expression + action.payload;
            // Validate? Maybe. But here we just append. Logic is usually:
            // if (validateInput(state.expression, action.payload)) ...
            // But hook wrapper handles validation usually.
            // Let's assume validation happens before dispatch or inside?
            // "Integrate validateInput" -> Logic usually in hook wrapper function.
            return { ...state, expression: newExpressionNum };

        case 'INPUT_OPERATOR':
            const newExpressionOp = state.expression + action.payload;
            return { ...state, expression: newExpressionOp };

        case 'CALCULATE':
            const result = evaluateExpression(state.expression, state.angleMode);
            return { ...state, result, expression: result }; // Usually set result to expression for next calcs?

        case 'CLEAR':
            return { ...state, expression: '', result: '', error: null };

        default:
            return state;
    }
};

export const useCalculator = () => {
    const [state, dispatch] = useReducer(calculatorReducer, initialState);

    const inputNumber = (num: string) => {
        // Validate here
        if (validateInput(state.expression, num)) {
            dispatch({ type: 'INPUT_NUMBER', payload: num });
        }
    };

    const inputOperator = (op: string) => {
        if (validateInput(state.expression, op)) {
            dispatch({ type: 'INPUT_OPERATOR', payload: op });
        }
    };

    const calculate = () => {
        dispatch({ type: 'CALCULATE' });
    };

    const clear = () => {
        dispatch({ type: 'CLEAR' });
    };

    // Return formatNumber(display)? 
    // Ideally we return clean state and formatted display separately.
    // For now, let's just allow access to state.
    // Display logic: if result is empty, show expression (or formatted expression?)
    // If expression is empty, show '0'.
    const display = state.expression || '0';

    return {
        ...state,
        inputNumber,
        inputOperator,
        calculate,
        clear,
        display
    };
};
