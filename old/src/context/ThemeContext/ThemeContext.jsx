import React, { useState } from 'react';
import ThemeProvider from '../../provider/ThemeProvider';

const ThemeContext = ({children}) => {
    const [darkMode, setDarkMode] = useState(true)
 const handleDarkMode=() =>{
    setDarkMode(prevDarkMode => !prevDarkMode)
}
const value = {
    darkMode,
    setDarkMode,
    handleDarkMode
}
    return (
        <ThemeProvider.Provider value={value}>
{children}
        </ThemeProvider.Provider>
    );
}

export default ThemeContext;
