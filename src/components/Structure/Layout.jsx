import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div id="site-wrapper">
      <Navbar />
      <main id="pageMain">

      <Outlet />
      </main>
     
      <Footer />
    </div>
  );
};

export default Layout;
