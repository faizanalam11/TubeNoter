import logo from '../assets/Images/favicon.png';
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { Link } from 'react-router-dom';
import { IoDownloadOutline } from "react-icons/io5";

const Navbar = () => {
    const handleContact = () => {
        window.open('https://www.linkedin.com/in/faizanalam123', '_blank');
    }

    return (
        <div className='mx-2'>
            <div className='flex justify-center md:justify-between sm:py-4 sm:px-20 sticky h-[10%] shadow-md flex-col md:flex-row items-center'>
                <div className='flex items-center p-2 rounded-md gap-2 justify-center md:justify-start'>
                    <img src={logo} className='w-[4%]'/>
                    <h1 className='font-bold text-[rgb(255,255,255)] text-xl flex items-center justify-center'>TubeNoter</h1>
                </div>

                <div className='gap-4 flex items-center'>
                    <button className='cursor-pointer px-3 py-2 hover:bg-[#262626] transition duration-200 rounded-3xl text-sm m-1 text-white border hover:border-[#0A0A0A] p-[1px]'>
                        <span className='flex items-center gap-1'><IoDownloadOutline className='text-lg'/>Download</span>
                    </button>
                    <button className='cursor-pointer px-3 py-2 border hover:border-white shadow-sm border-[#0E9272] hover:bg-[#0E9272] transition duration-200 text-[#3CB371] hover:text-white rounded-2xl text-sm m-1'>
                        <Link onClick={handleContact}>
                            <span className='justify-center flex gap-1 items-center p-[1px]'>
                                <MdOutlineLocalPostOffice className='text-lg'/>
                                <span className='flex items-center justify-center'>Contact</span>
                            </span>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;