import { Link, NavLink } from "react-router-dom";


const NavBar = () => {
    const navLink = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/addtoproduct'>Add Product</NavLink></li>
    <li><NavLink to='/mycart'>My Cart</NavLink></li>
    
    </>
    return (
        <div className="bg-red-400 py-2 border-b-4 border-indigo-500">
            <div className="navbar w-11/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-red-400 rounded-box w-52">
        {navLink}

      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Automotive</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white text-[18px]">
      {navLink}

    </ul>
  </div>
  <div className="navbar-end">
    <Link to='/login'>
    <button className="text-[18px] text-white">Login</button>
    </Link>
  </div>
</div>
        </div>
    );
};

export default NavBar;