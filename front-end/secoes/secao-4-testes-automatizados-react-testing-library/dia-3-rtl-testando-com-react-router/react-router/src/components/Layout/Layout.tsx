import { NavLink, Outlet } from "react-router-dom";

function Layout () {
  return (
    <div>
      <nav>
        <NavLink to="/">Início</NavLink>
        <br />
        <NavLink to="/about">Sobre</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;