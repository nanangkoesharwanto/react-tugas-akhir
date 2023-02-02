import { Outlet } from "react-router-dom";
import NavbarMenu from "../Navbar";
import Footer from "../../templates/footer";
// import Sidebar from "../../templates/sidebar";

const Layout = () => {
    return (
        <>
            <NavbarMenu />
            {/* <Header /> */}
            {/* <Sidebar /> */}
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;