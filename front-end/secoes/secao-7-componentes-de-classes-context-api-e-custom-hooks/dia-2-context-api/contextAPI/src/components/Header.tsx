import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Header() {
  const themeContext = useContext(ThemeContext);

  return (
    <header>
      <h1>TRYBE</h1>
      <button
      onClick={() => themeContext.toggleTheme()}
      >
        {themeContext.theme === "dark" ? '☀️' : '🌒'}
      </button>
    </header>
  )
}

export default Header;