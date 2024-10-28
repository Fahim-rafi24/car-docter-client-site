import { Link, NavLink } from "react-router-dom"
import NavLogo from '../../../public/assets_Img/logo.svg'
// react icon
import { CiSearch } from "react-icons/ci";
import { TbShoppingBagCheck } from "react-icons/tb";





const NavBar = () => {


    const navLink = <>
        <li className="mr-2 text-[17px]"><NavLink to={'/'}>Home</NavLink></li>
        <li className="mr-2 text-[17px]"><NavLink to={'/about'}>About</NavLink></li>
        <li className="mr-2 text-[17px]"><NavLink to={'/service'}>Services</NavLink></li>
        <li className="mr-2 text-[17px]"><NavLink to={'/login'}>Login</NavLink></li>
        <li className="mr-2 text-[17px]"><NavLink to={'/contact'}>Contact</NavLink></li>
    </>
    return (
        <>
            <nav className="navbar bg-base-100 w-5/6 mx-auto">
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
                            {navLink}
                        </ul>
                    </div>
                    <Link to={'/'}><img src={NavLogo} alt="Home" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <CiSearch className="text-2xl mr-7" />
                    <TbShoppingBagCheck className="text-2xl mr-5" />
                    <Link to={'/'} className="btn border-2 border-[#FF3811] text-[#FF3811]">Appoinment</Link>
                </div>
            </nav>

        </>
    )
}
export default NavBar