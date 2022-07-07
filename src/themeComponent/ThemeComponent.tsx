import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

type ThemeType = "light" | "dark";
type ThemeContextProps = {
  theme: ThemeType;
  setTheme: Dispatch<SetStateAction<ThemeType>> | (() => null);
};
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
export const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  setTheme: () => null,
});

type ThemeComponentProps = {
  children: React.ReactNode;
};

function ThemeComponent({ children }: ThemeComponentProps) {
  const [theme, setTheme] = useState<ThemeType>("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeComponent;
