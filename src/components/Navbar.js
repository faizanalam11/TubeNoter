import profile from '../assets/Images/profile.jpeg'
import { FaAngleDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { OpenContext } from '../script';
import { useContext } from 'react';

const Navbar = () => {
    const {open, setOpen } = useContext(OpenContext);
    return (
        <div className='flex justify-between py-2 px-10 sticky h-[10%]'>
            <div className='my-auto cursor-pointer p-2 hover:bg-[#282A2C] rounded-md' onClick={() => {setOpen(!open);}}>
                <h1 className='font-bold text-[rgb(255,255,255)] text-xl flex items-center justify-center'>TubeNoter <FaAngleDown/></h1>
            </div>
            <div className='my-auto'>
                <Link to="/login">
                    <button className='cursor-pointer px-3 py-1 bg-[#F9F9F9] hover:bg-[#0E9272] transition duration-200 rounded-2xl font-semibold text-sm m-1'>Log in</button>
                </Link>
                <Link to="/register">
                    <button className='cursor-pointer px-3 py-1 border border-white hover:bg-[#0E9272] transition duration-200 text-[#F9F9F9] rounded-2xl font-semibold text-sm m-1'>Sign up</button>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;