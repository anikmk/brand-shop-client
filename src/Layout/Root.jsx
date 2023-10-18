import { Outlet } from "react-router-dom";
import NavBar from "../Sharate/NavBar/NavBar";
import Footer from "../Sharate/Footer/Footer";


const Root = () => {
    return (
        <div className="font-poppins">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;