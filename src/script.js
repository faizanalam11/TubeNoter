import React, { useState, useContext, createContext } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Navbar from "./components/Navbar";

export const data = createContext();
const AppLayout = () => {
    const [open, setOpen] = useState(false);
    return(
        <div className="h-[100vh] w-screen bg-[#212121]">
            <Navbar open = {open} setOpen = {setOpen}/>
            <data.Provider value={open}>
                <Body open = {open} setOpen = {setOpen}/>
            </data.Provider>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);