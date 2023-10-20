import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";
import navlogo from  '../../assets/image/logo (3).png' 


const NavBar = () => {
    const {user,logOut} = useContext(AuthContext)
    const navLink = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/addtoproduct'>Add Product</NavLink></li>
    <li><NavLink to='/mycart'>My Cart</NavLink></li>
    
    </>

    const handlesignOut = () => {

      logOut()
      .then()
      .catch()
    }
    return (
        <div className="bg-primary py-2 border-b-4 border-indigo-500">
            <div className="navbar w-11/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#ffffff] rounded-box w-52">
        {navLink}

      </ul>
    </div>
    <a className="btn btn-ghost">
  <img width="170px" src={navlogo} alt="" className="hidden md:block" />
</a>


  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white text-[18px]">
      {navLink}

    </ul>
  </div>
  <div className="navbar-end">
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          {
            user &&  <img alt="null" src={user.photoURL} />
          }
         
        </div>
  </label>

        {
          user ? 
          <button onClick={handlesignOut} className="text-[18px] text-white">Sign Out</button>
          :
          <Link to='/login'>
          <button className="text-[18px] text-white">Login</button>
          </Link>
        }
  </div>
</div>
        </div>
    );
};

export default NavBar;