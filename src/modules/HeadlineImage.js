import React from 'react';

const HeadlineImage = ({className= '', src = "headline1.png"}) => {
    return (
        <div className={className}>
             <img src={src} alt="" />
        </div>
    );
};

export default HeadlineImage;