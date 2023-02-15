import React from 'react';

const Heading = ({children, className = '', type="primary"}) => {
    return (
        <h2 className={`font-extrabold text-[70px] leading-[98px] text-center text-primary ${type === "primary" ? "mb-[70px]" : "mb-[50px]" } ${className}`}>
            {children}
        </h2>
    );
};
export default Heading;
