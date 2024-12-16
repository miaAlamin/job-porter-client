import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import logo from '../../assets/image/logo.png';



const Navber = () => {
    const {user, logOut} = useContext(AuthContext)


    const Links = <>

        <li><NavLink>Item 1</NavLink></li>
        <li><NavLink to='/myapplication'>My Application</NavLink></li>
        <li><NavLink to='/addjob'>Add  New Job</NavLink></li>
        <li><NavLink to='/mypostedjobs'>My Posted Jobs</NavLink></li>
       
                    
        
    
    
    </>


            return (
                <div className="navbar bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                    {Links}
                

            </ul>
            </div>
            <img  src={logo}/>
            <h1 className=" text-2xl lg:text-3xl  font-bold ml-4">Job Portal</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
         {Links}
            </ul>
        </div>
        <div className="navbar-end">

            {
                user? <><button onClick={logOut} className="btn">Log Out</button></>

                 :

                  <>
                  <Link to='/register' className="btn mr-3">Register</Link>
                  <Link to='/signin' className="btn">Sign In</Link>
                  
                  </>
            }

            
        </div>
        </div>
            );
};

export default Navber;