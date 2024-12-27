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
            <div className="md:w-7/12 w-11/12 h-5/6 flex flex-col mx-auto p-2 gap-2 justify-evenly my-auto">
                {data === "" ? <h1 className="text-4xl font-bold text-center mb-8 text-gray-400">
                    Transform YouTube Videos into Notes
                </h1> : <p></p>}
                {data === "" ? <p className="text-center text-gray-500 mb-8">
                    Simply paste your YouTube video link and get organized notes instantly
                </p> : <p></p>}
                {data === "" ? <p></p> : <DisplayArea data = {data}/>}
                <SearchBar data = {data} setData = {setData}/>
            </div>
        </div>
    );
}

export default Body;