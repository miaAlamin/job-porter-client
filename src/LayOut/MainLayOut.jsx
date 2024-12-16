import { Outlet } from "react-router-dom";
import Navber from "../pages/shered/Navber";
import Footer from "../pages/shered/Footer";

const MainLayOut = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;