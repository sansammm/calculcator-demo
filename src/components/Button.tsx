import React from 'react';

interface ButtonProps {
    label: string;
    onClick: () => void;
    className?: string; // For variant styling: 'operator', 'action', 'number', 'equals'
    ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick, className = '', ariaLabel }) => {
    // Base styles + incoming className
    // We will use CSS classes defined in App.css or index.css later, or simple inline/module styles.
    // Ideally use CSS Modules or Tailwind if configured. User said "Vanilla CSS".
    // So we will add classNames like 'btn btn-number', etc.
    return (
        <button
            className={`btn ${className}`}
            onClick={onClick}
            aria-label={ariaLabel || label}
        >
            {label}
        </button>
    );
};
