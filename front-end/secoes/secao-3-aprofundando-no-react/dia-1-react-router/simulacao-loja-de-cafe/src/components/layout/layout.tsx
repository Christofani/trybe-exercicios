import { Outlet } from "react-router-dom";
import NavBar from "../../pages/NavBar/navbar";

function Layout() {
  return (
    <>
    <NavBar />
    <Outlet />
    <footer>
      <span>TRYBE - todos os direitos reservados</span>
    </footer>
    </>
  )
}

export default Layout;