import profile from '../assets/Images/profile.jpeg'
import { FaAngleDown } from 'react-icons/fa';
const Navbar = ({open, setOpen}) => {
    return (
        <div className='flex justify-between py-2 px-10 sticky h-[10%]'>
            <div className='my-auto cursor-pointer p-2 hover:bg-[#282A2C] rounded-md' onClick={() => {setOpen(!open);}}>
                <h1 className='font-bold text-[rgb(255,255,255)] text-xl flex items-center justify-center'>TubeNoter <FaAngleDown/></h1>
            </div>
            <div className='my-auto'>
                <button className='cursor-pointer px-3 py-1 bg-[#F9F9F9] hover:bg-[#f9f9f999] transition duration-200 rounded-2xl font-semibold text-sm m-1'>Log in</button>
                <button className='cursor-pointer px-3 py-1 border border-white hover:bg-gray-900 transition duration-200 text-[#F9F9F9] rounded-2xl font-semibold text-sm m-1'>Sign up</button>
            </div>
        </div>
    );
}

export default Navbar;