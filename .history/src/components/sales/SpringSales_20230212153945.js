import React from 'react';
import Button from '../button/Button';

const SpringSales = () => {
    return (
        <div className='bg-secondary h-[700px] w-full flex items-center justify-between'>
            <div className='ml-[112px]'>
                <h2 className='text-primary text-[70px] font-extrabold leading-[98px]'>Spring Sale</h2>
                <p className='text-primary text-[50px] font-medium leading-[68px] mb-[48px]'>Up to -40%</p>
                <Button className='text-white bg-primary rounded-lg px-8 py-2 text-lg'>See offer</Button>
            </div>
            <div className='h-[700px]'>
                <img src="/photo1.png" alt="" className='w-full h-auto object-cover' />
            </div>
        </div>
    );
};

export default SpringSales;