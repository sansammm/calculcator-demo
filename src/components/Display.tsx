import React from 'react';

interface DisplayProps {
    value: string; // The current input or result
    expression: string; // The small text showing full calculation
}

export const Display: React.FC<DisplayProps> = ({ value, expression }) => {
    return (
        <div className="display-container">
            <div className="display-expression">{expression}</div>
            <div className="display-value">{value}</div>
        </div>
    );
};
