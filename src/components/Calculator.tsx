import React from 'react';
import { useCalculator } from '../hooks/useCalculator';
import { Display } from './Display';
import { Button } from './Button';

export const Calculator: React.FC = () => {
    const {
        display,
        expression,
        inputNumber,
        inputOperator,
        calculate,
        clear
    } = useCalculator();

    return (
        <div className="calculator-container">
            <Display value={display} expression={expression} />
            <div className="keypad">
                <Button label="C" onClick={clear} className="btn-action" />
                <Button label="(" onClick={() => inputOperator('(')} className="btn-action" />
                <Button label=")" onClick={() => inputOperator(')')} className="btn-action" />
                <Button label="/" onClick={() => inputOperator('/')} className="btn-operator" />

                <Button label="7" onClick={() => inputNumber('7')} className="btn-number" />
                <Button label="8" onClick={() => inputNumber('8')} className="btn-number" />
                <Button label="9" onClick={() => inputNumber('9')} className="btn-number" />
                <Button label="*" onClick={() => inputOperator('*')} className="btn-operator" />

                <Button label="4" onClick={() => inputNumber('4')} className="btn-number" />
                <Button label="5" onClick={() => inputNumber('5')} className="btn-number" />
                <Button label="6" onClick={() => inputNumber('6')} className="btn-number" />
                <Button label="-" onClick={() => inputOperator('-')} className="btn-operator" />

                <Button label="1" onClick={() => inputNumber('1')} className="btn-number" />
                <Button label="2" onClick={() => inputNumber('2')} className="btn-number" />
                <Button label="3" onClick={() => inputNumber('3')} className="btn-number" />
                <Button label="+" onClick={() => inputOperator('+')} className="btn-operator" />

                <Button label="0" onClick={() => inputNumber('0')} className="btn-number zero-span" />
                <Button label="." onClick={() => inputNumber('.')} className="btn-number" />
                <Button label="=" onClick={calculate} className="btn-equals" />
            </div>
        </div>
    );
};
