import React from 'react';

const FormGroup = ({children}) => {
    return (
        <div className='flex flex-col mb-5 gap-y-2'>
            {children}
        </div>
    );
};

export default FormGroup;