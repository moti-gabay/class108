import PrimarySearchAppBar from '../header/NavBar';
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <PrimarySearchAppBar/>
      <Outlet />
    </div>
  )
}

export default Layout;