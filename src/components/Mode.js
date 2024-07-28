import { data } from "../script";

const Mode = ({open}) => {
    return(
        <div className={`w-2/12 left-10 p-4 rounded-md absolute z-50 bg-[#282A2C] text-white font-semibold ${open? 'opacity-100' : 'opacity-0'} border-[1px] border-[rgba(255,255,255,0.33)]`}>
            <p className="text-center text-base mb-1 font-medium">Choose modes accordingly</p>
            <ul className="list-none flex gap-2">
                <li className="border border-white cursor-pointer pl-1 text-center rounded-md text-sm hover:bg-[#6c7176]">Note Mode</li>
                <li className="border border-white cursor-pointer pl-1 text-center rounded-md text-sm hover:bg-[#6c7176]">Caption Mode</li>
            </ul>
        </div>
    );
}

export default Mode;