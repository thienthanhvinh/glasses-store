import React from 'react';

const Label = ({htmlFor, children, className = ''}) => {
    return (
        <label htmlFor={htmlFor} className={`${className} dark:text-dark-text-primary text-sm text-color-1 font-semibold block cursor-pointer`}>
            {children}
        </label>
    );
};

export default Label;