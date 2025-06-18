import { FaBars} from 'react-icons/fa6';
import logo from '../assets/remo.png'
import { useState } from "react";
import { Link } from 'react-router-dom';
function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return(<>
    <header className="py-4 mx-4 shadow-md">
        <nav className="container mx-auto flex items-center justify-between px-4 relative">
            <div className="max-w-sm">
                <Link to="/home"><img className="w-24 md:w-32" src={logo} alt="Logo" /></Link>
                
            </div>
            <ul className="hidden md:flex gap-8 capitalize font-bold font-mono">
                <li className='hover:text-skyBlue '><a href="#">Home</a></li>
                <li className='hover:text-skyBlue'><a href="#">Service</a></li>
                <li className='hover:text-skyBlue'><a href="#">Order</a></li>
                <li className='hover:text-skyBlue'><a href="#">Report</a></li>
            </ul>
            <div className="md:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FaBars />
            </div>
            <div className="hidden md:flex space-x-4">
                <Link to="/login" className="px-4 py-1 bg-skyBlue text-white rounded-xl transition duration-300 ease-out hover:bg-skyHover hover:border-skyHover">Login</Link>
                <Link to="/signup" className="px-4 py-1 border-2 border-skyBlue rounded-xl transition duration-300 ease-out text-skyBlue hover:text-white hover:bg-skyHover hover:border-skyHover">Sign Up</Link>
            </div>
            {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-md mt-2 p-4 z-10 md:hidden space-y-3 text-center">
                <ul className="flex flex-col gap-4 capitalize font-bold font-mono">
                    <li className='hover:text-skyBlue hover:bg-slate-200'><a href="#">Home</a></li>
                    <li className='hover:text-skyBlue hover:bg-slate-200'><a href="#">Service</a></li>
                    <li className='hover:text-skyBlue hover:bg-slate-200'><a href="#">Order</a></li>
                    <li className='hover:text-skyBlue hover:bg-slate-200'><a href="#">Report</a></li>
                </ul>
                <div className="space-y-2 pt-4">
                    <button className="w-full px-4 py-2 bg-skyBlue text-white rounded-xl transition duration-300 ease-out hover:bg-skyHover hover:border-skyHover">Login</button>
                    <button className="w-full px-4 py-2 border-2 border-skyBlue rounded-xl text-skyBlue hover:text-white transition duration-300 ease-out hover:bg-skyHover hover:border-skyHover">Sign Up</button>
                </div>
            </div>
            )}
        </nav>
        </header>
    </>)
}
export default Nav;