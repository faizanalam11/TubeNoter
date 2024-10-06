import profile from '../assets/Images/profile.jpeg'
import { FaAngleDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { OpenContext } from '../script';
import { useContext } from 'react';
import { RiFingerprint2Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
    const {open, setOpen } = useContext(OpenContext);
    return (
        <div className='flex justify-between py-4 px-20 sticky h-[10%] border-b-[1px] border-gray-700'>
            <div className='flex items-center cursor-pointer p-2 hover:bg-[#282A2C] rounded-md' onClick={() => {setOpen(!open);}}>
                <h1 className='font-bold text-[rgb(255,255,255)] text-xl flex items-center justify-center'>TubeNoter <FaAngleDown/></h1>
            </div>
            <div className='gap-4 flex items-center'>
                <button className='cursor-pointer px-3 py-1 hover:bg-[#0E9272] transition duration-200 rounded-2xl font-semibold text-sm m-1 text-white'>
                    <Link to="/login">
                        <span className='flex items-center gap-1 font-extrabold'><RiFingerprint2Fill className='text-lg'/>Log in</span>
                    </Link>
                </button>
                <button className='cursor-pointer px-3 py-1 border border-[rgb(81,86,89)] hover:bg-[#0E9272] transition duration-200 text-[#F9F9F9] rounded-2xl font-semibold text-sm m-1'>
                    <Link to="/register">
                        <span className='font-extrabold flex gap-1 items-center'><CgProfile className='text-lg'/>Sign up</span>
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default Navbar;