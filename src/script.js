import React, { useState, useContext, createContext } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Error from "./components/Error";

export const OpenContext = createContext();

const AppLayout = () => {
    const [open, setOpen] = useState(false);
    return(
        <OpenContext.Provider value={{open, setOpen}}>
            <div className="h-[100vh] w-screen bg-[#212121]">
                <Navbar/>
                <Outlet />
            </div>
        </OpenContext.Provider>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement:<Error/>,
        children: [
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            },
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);