import { Outlet } from "react-router-dom";
import NavBar from "../Sharate/NavBar/NavBar";


const Root = () => {
    return (
        <div className="font-poppins">
            <NavBar></NavBar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;