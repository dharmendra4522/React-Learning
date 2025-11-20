import React, { useContext } from 'react'
import { ThemeContext } from '../../ThemeContext'

const Home = () => {
    const {theme, toggleTheme, themeStyles} = useContext(ThemeContext);

    const btnStyle = {
        light:{
            backgroundColor: "#000",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            cursor: "pointer",
            borderRadius: "5px",
        },
        dark:{
            backgroundColor: "#fff",
            color: "#000",
            border: "none",
            padding: "10px 20px",
            cursor: "pointer",
            borderRadius: "5px",
        }
    }

    const style = {
        minHeight: "100vh",
        padding: "50px",
        textAlign: "center",
        ...themeStyles[theme],
    };
    return (
        <div style={style}>
            <h1>Theme Switcher App</h1>
            <p>Current Theme: {theme}</p>
            <button onClick={toggleTheme}
            style={btnStyle[theme]}>
                {theme === "light" ? "🌙 Dark Mode" : "🌞 Light Mode"}
            </button>
        </div>
    )
}

export default Home;


// ⭐ How it works?

// User clicks “Toggle Theme”

// toggleTheme() theme ko update kar deta hai

// Context se theme value Home component me aa jati hai

// Styles theme ke hisab se change ho jati hain

// Background + text color instantly switch