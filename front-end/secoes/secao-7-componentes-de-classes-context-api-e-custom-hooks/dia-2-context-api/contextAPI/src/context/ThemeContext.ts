import { createContext } from "react"

type ThemeContextType = {
  theme: 'dark' | 'light' | string,
  toggleTheme: () => void;
};

const ThemeContext =  createContext({} as ThemeContextType)

export default ThemeContext;