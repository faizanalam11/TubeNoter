import Mode from "./Mode";
import DisplayArea from "./DisplayArea";
import SearchBar from "./SearchBar";
import { useState } from "react";
import React, { useContext } from "react";
import { OpenContext } from "../script";

const Body = () => {
    const [ data, setData ] = useState("");
    const { open, setOpen } = useContext(OpenContext);

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