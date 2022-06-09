import React, { createContext, useState } from "react";

export const themes = {
    light: {
        background: "#3f37c9",
        text: "#FFFFFF",
    },
    dark: {
        background: "#000000",
        text: "#FFFFFF",
    },
};
export const ThemeContext = createContext(themes.light);
function ThemeComponent({ children }) {
    const [theme, setTheme] = useState("light");
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeComponent;
