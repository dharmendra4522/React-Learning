import React, {useEffect, useState} from 'react'
import { ThemeContext } from '../../ThemeContext'
import Home from './Home'

    const themeStyles = {
        light:{
            backgroundColor: "#ffffff",
            color: "#000"
        },
        dark:{
            backgroundColor: "#121212",
            color: "#fff"
        }
    }
    
const ThemeSwitcher = () => {
    const [theme, setTheme] =useState("light");

    useEffect(() => {
        localStorage.setItem("appTheme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    
    

    return (
        <ThemeContext.Provider value={{theme, toggleTheme, themeStyles}}>
            <Home />
        </ThemeContext.Provider>
    )
}

export default ThemeSwitcher;