import DisplayArea from "./DisplayArea";
import SearchBar from "./SearchBar";
import { useState } from "react";
import React, { useContext } from "react";
import { OpenContext } from "../script";

const Body = () => {
    const [ data, setData ] = useState("");
    const { open, setOpen } = useContext(OpenContext);

    return (
        <div className="relative h-[85vh] flex bg-[#171717]" onClick={() => open && setOpen(!open)}>
            <div className="w-7/12 h-5/6 flex flex-col mx-auto p-2 gap-2 justify-evenly my-auto">
                <DisplayArea data = {data}/>
                <SearchBar data = {data} setData = {setData}/>
            </div>
        </div>
    );
}

export default Body;