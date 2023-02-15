import React from 'react';

const Intro = () => {
    return (
        <div className='flex items-center justify-center gap-x-[300px] mt-[64px] mb-[110px]'>
            <div className='flex flex-col items-center'>
                <img srcSet="Icon1.png 2x" alt="" className='w-[80px] h-[80px] object-cover' />
                <p className='text-tertiary text-xl leading-[30px] font-bold'>Original products</p>
            </div>
            <div className='flex flex-col items-center'>
                <img srcSet="Icon2.png 2x" alt="" className='w-[80px] h-[80px] object-cover' />
                <p className='text-tertiary text-xl leading-[30px] font-bold'>Original products</p>
            </div>
            <div className='flex flex-col items-center'>
                <img srcSet="Icon3.png 2x" alt="" className='w-[80px] h-[80px] object-cover' />
                <p className='text-tertiary text-xl leading-[30px] font-bold'>Original products</p>
            </div>
        </div>
    );
};

export default Intro;