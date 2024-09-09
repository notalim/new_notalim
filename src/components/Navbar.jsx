import React from "react";
import Typewriter from "./Typewriter";
import phrases from "../assets/phrases";
import ScrollingBadges from "./ScrollingBadges";
import badges from "../assets/badges.json";

const Navbar = () => {
    const scrollToChangelog = () => {
        const changelogSection = document.getElementById("changelogSection");
        if (changelogSection) {
            // scroll a bit more above the changelog section
            changelogSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <>
            <nav className="sticky top-0 z-10 flex justify-between items-center p-4 bg-black text-white border-b border-white">
                <div className="flex items-center space-x-2">
                    <img src="/favicon.ico" alt="notalim" className="w-6 h-6" />
                    <div className="text-md font-light">notalim</div>
                </div>

                <div className="flex-grow text-center">
                    <Typewriter phrases={phrases} />
                </div>

                <ul className="flex space-x-4">
                    <a
                        href="/notalim_resume.pdf"
                        target="_blank"
                        download="Resume_Alim_Kassymov.pdf"
                    >
                        <li className="cursor-pointer uppercase text-sm font-light">
                            Resume
                        </li>
                    </a>
                    <a href="https://github.com/notalim">
                        <li className="cursor-pointer uppercase text-sm font-light">
                            Github
                        </li>
                    </a>
                    <li
                        className="cursor-pointer uppercase text-sm font-light"
                        onClick={() => scrollToChangelog()}
                    >
                        Changelog
                    </li>
                </ul>
            </nav>
            <div className="bg-white border-b border-black overflow-hidden py-2">
                <ScrollingBadges badges={badges} />
            </div>
        </>
    );
};

export default Navbar;
