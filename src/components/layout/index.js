import { Outlet } from "react-router-dom";
import NavbarMenu from "../Navbar";
import Footer from "../../templates/footer";
// import Sidebar from "../../templates/sidebar";
import ScrollButton from '../../components/Button/ScrollButton';

const Layout = () => {
    return (
        <>
            <NavbarMenu />
            {/* <Header /> */}
            {/* <Sidebar /> */}
            <Outlet />
            <Footer />
            <ScrollButton />
        </>
    );
}

export default Layout;