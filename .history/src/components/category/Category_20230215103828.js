import React from 'react';
import Button from '../button/Button';

const Category = () => {
    return (
        <div className='flex mb-[112px] mx-auto max-w-[1400px] w-full gap-x-2'>
            <div className='h-[596px] relative'>
                <img src="category1.png" alt="" className='w-full h-full object-cover' />
                <div className='absolute bottom-24 left-14'>
                    <p className='font-extrabold text-[40px] leading-[98px] text-white'>Optical</p>
                    <Button className='bg-secondary text-primary rounded-[4px] px-6 py-2 font-bold text-lg leading-[30px]'>Buy</Button>
                </div>
            </div>
            <div className='h-[596px] relative'>
                <img src="category2.png" alt="" className='w-full h-full object-cover' />
                <div className='absolute bottom-24 left-14'>
                    <p className='font-extrabold text-[40px] leading-[98px] text-white'>Sunwear</p>
                    <Button className='bg-secondary text-primary rounded-[4px] px-6 py-2 font-bold text-lg leading-[30px]'>Buy</Button>
                </div>
            </div>
        </div>
    );
};

export default Category;