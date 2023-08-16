import { NavLink, Outlet } from "react-router-dom";

function Layout () {
  return (
    <div>
      <nav>
        <NavLink to="/">Inicio</NavLink>
        <br />
        <NavLink to="/about">Sobre</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;