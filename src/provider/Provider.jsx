import React from 'react';
import ThemeProvider from './ThemeProvider';
import ThemeContext from '../context/ThemeContext/ThemeContext';

const Provider = ({children}) => {

    return (
        <>
     <ThemeContext>
        {children}
     </ThemeContext>
        </>
    );
}

export default Provider;
