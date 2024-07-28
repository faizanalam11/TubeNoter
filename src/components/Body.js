import Mode from "./Mode";
import DisplayArea from "./DisplayArea";
import SearchBar from "./SearchBar";
import { useState } from "react";

const Body = ({open, setOpen}) => {
    const [ data, setData ] = useState("");

    return (
        <div className="relative h-[90%]" onClick={() => open && setOpen(!open)}>
            <Mode open = {open}/>
            <div className="w-7/12 h-5/6 flex flex-col mx-auto my-2 p-2 gap-2 justify-evenly">
                <DisplayArea data = {data}/>
                <SearchBar data = {data} setData = {setData}/>
            </div>
        </div>
    );
}

export default Body;