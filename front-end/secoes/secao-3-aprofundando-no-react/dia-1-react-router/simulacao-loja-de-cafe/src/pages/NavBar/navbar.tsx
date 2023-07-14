import { NavLink } from "react-router-dom";
import './navbar.css';

function NavBar() {
  return (
    <nav className="nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/coffees">Cafés</NavLink>
    </nav>
  );
}

export default NavBar;