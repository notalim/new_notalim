import React from "react";
import Typewriter from "./Typewriter";
import phrases from "../assets/phrases";

const Navbar = () => {
    return (
        <>
            <nav className="flex justify-between items-center p-4 bg-black text-white border-b border-white">
                <div className="text-md font-light">notalim</div>
                <ul className="flex space-x-4">
                    <li className="cursor-pointer uppercase text-sm font-light">Home</li>
                    <li className="cursor-pointer uppercase text-sm font-light">
                        Projects
                    </li>
                    <li className="cursor-pointer uppercase text-sm font-light">
                        Changelog
                    </li>
                </ul>
            </nav>
            <div className="flex justify-center items-center p-4 border-b border-black">
                <Typewriter phrases={phrases} />
            </div>
        </>
    );
};

export default Navbar;
