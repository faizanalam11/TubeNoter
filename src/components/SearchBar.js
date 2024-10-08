import { FaArrowAltCircleUp } from "react-icons/fa";
import { BiSend } from "react-icons/bi";
import { useState, useEffect } from "react";

const SearchBar = ({ setData }) => {
    const [search, setSearch] = useState("");

    const getResponseNote = async (search) => {
        console.log("Sending request with query:", search);
        try {
            const response = await fetch(`tube-noter-backend.vercel.app`, {
                method: "POST",
                headers: {
                    "Accept": "text/markdown",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify({ 
                    url: search,
                    stream: true
                }),
            });

            if (response.ok) {
                const reader = response.body.getReader();
                const decoder = new TextDecoder("utf-8");
                let result = '';
    
                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;
                    
                    result += decoder.decode(value, { stream: true });
                }    
                result += decoder.decode();
                setData(result);
            } else {
                console.error("Error fetching data. Status:", response.status, response.statusText);
                const errorText = await response.text();
                console.error("Error details:", errorText);
            }
        } catch (error) {
            console.error("Error fetching data:", error.message);
        }
    };

    return (
        <div className="w-full p-2 justify-center flex">
            <input
                type="text"
                className="text-white py-3 px-4 rounded-l-2xl w-[90%] bg-[#282A2C] outline-0"
                placeholder="Paste link here..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        if (search !== '') {
                            getResponseNote(search);
                        }
                    }
                }}
            />
            <button
                className="text-white py-3 px-4 rounded-r-2xl w-[10%] bg-[#282A2C] text-3xl"
                onClick={() => {
                    getResponseNote(search);
                }}
            >
                <BiSend className="hover:text-[rgb(11,11,12)]"/>
            </button>
        </div>
    );
};

export default SearchBar;