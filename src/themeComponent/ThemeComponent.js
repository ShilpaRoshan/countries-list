import React, { createContext, useState } from "react";

export const themes = {
    light: {
        background: "#3f37c9",
        tablehead: "#577590",
        tablebody: "#fffcf2",
        textbody: "#000000",
        text: "#FFFFFF",
    },
    dark: {
        background: "#000000",
        tablehead: "#403d39",
        tablebody: "#403d39",
        textbody: "#FFFFFF",
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
