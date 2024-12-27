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
                    <span className="text-xl font-bold text-[rgb(255,255,255)]">TubeNoter</span>
                </div>

                <div className='gap-4 flex items-center'>
                    <button className="flex items-center space-x-1 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                        <IoDownloadOutline className='text-lg'/>
                        <span>Download</span>
                    </button>
                    <button className='flex items-center space-x-1 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors'>
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