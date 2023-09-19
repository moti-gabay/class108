import Footer from '../Footer';
import PrimarySearchAppBar from '../header/NavBar';
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <PrimarySearchAppBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout;