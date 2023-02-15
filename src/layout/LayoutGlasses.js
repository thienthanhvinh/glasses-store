import React from 'react';
import Footer from '../modules/Footer';
import Menu from '../modules/Menu';

const LayoutGlasses = ({children}) => {
    return (
        <>
         <Menu></Menu>
            {children}
         <Footer></Footer>
        </>
    );
};

export default LayoutGlasses;