import React, { useState } from "react";
import Typewriter from "./Typewriter";
import phrases from "../assets/phrases";
import ScrollingBadges from "./ScrollingBadges";
import badges from "../assets/badges.json";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToChangelog = () => {
        const changelogSection = document.getElementById("changelogSection");
        if (changelogSection) {
            changelogSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
        setIsMenuOpen(false);
    };

    return (
        <>
            <nav className="sticky top-0 z-10 bg-black text-white border-b border-white">
                <div className="flex justify-between items-center p-4">
                    <div className="flex items-center space-x-2">
                        <img src="/favicon.ico" alt="notalim" className="w-6 h-6" />
                        <div className="text-md font-light">notalim</div>
                    </div>

                    <div className="hidden md:block flex-grow text-center">
                        <Typewriter phrases={phrases} />
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>

                    <ul className="hidden md:flex space-x-4">
                        <a href="/notalim_resume.pdf" target="_blank" download="Resume_Alim_Kassymov.pdf">
                            <li className="cursor-pointer uppercase text-sm font-light">Resume</li>
                        </a>
                        <a href="https://github.com/notalim">
                            <li className="cursor-pointer uppercase text-sm font-light">Github</li>
                        </a>
                        <li className="cursor-pointer uppercase text-sm font-light" onClick={scrollToChangelog}>
                            Changelog
                        </li>
                    </ul>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden">
                        <ul className="flex flex-col items-center space-y-2 py-2">
                            <a href="/notalim_resume.pdf" target="_blank" download="Resume_Alim_Kassymov.pdf" onClick={() => setIsMenuOpen(false)}>
                                <li className="cursor-pointer uppercase text-sm font-light">Resume</li>
                            </a>
                            <a href="https://github.com/notalim" onClick={() => setIsMenuOpen(false)}>
                                <li className="cursor-pointer uppercase text-sm font-light">Github</li>
                            </a>
                            <li className="cursor-pointer uppercase text-sm font-light" onClick={scrollToChangelog}>
                                Changelog
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
            <div className="bg-white border-b border-black overflow-hidden py-2">
                <ScrollingBadges badges={badges} />
            </div>
        </>
    );
};

export default Navbar;
