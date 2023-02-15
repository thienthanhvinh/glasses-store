import React from 'react';

const Button = ({type, children, className=''}) => {
    return (
        <button type='submit' className={`bg-primary text-white ${className} rounded-lg px-3 py-3 font-medium`}>
            {children}
        </button>
    );
};

export default Button;