import React, { useState } from "react";
import { useTheme } from '../../contexts/ThemeContext';
import ScrollingBadges from "./ScrollingBadges";
import ScreenDimensions from "./ScreenDimensions";
import badges from "../../assets/badges.json";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isDark } = useTheme();

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
            <nav
                className={`sticky top-0 z-10 ${
                    isDark ? "bg-gray-300" : "bg-black"
                } text-inverse-text border-primary-text`}
            >
                <div className="flex justify-between items-center p-4">
                    <div className="flex items-center">
                        <div className="flex items-center space-x-2">
                            <Link
                                to="/"
                                className="flex items-center space-x-2 cursor-pointer"
                            >
                                <img
                                    src="/favicon.ico"
                                    alt="notalim"
                                    className="w-6 h-6"
                                />
                                <div className="text-md font-light">
                                    notalim
                                </div>
                                <div className="justify-end text-gray-400">
                                    <ScreenDimensions />
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>

                    <ul className="hidden md:flex space-x-4">
                        <Link
                            to="/lib"
                            className="text-xs sm:text-sm uppercase ml-12 font-light hover:underline"
                        >
                            View My Components
                        </Link>
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
                            onClick={scrollToChangelog}
                        >
                            Changelog
                        </li>
                    </ul>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden">
                        <ul className="flex flex-col items-center space-y-2 py-2">
                            <Link
                                to="/lib"
                                className="uppercase font-light hover:underline"
                            >
                                View My Components
                            </Link>
                            <a
                                href="/notalim_resume.pdf"
                                target="_blank"
                                download="Resume_Alim_Kassymov.pdf"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <li className="cursor-pointer uppercase text-sm font-light">
                                    Resume
                                </li>
                            </a>
                            <a
                                href="https://github.com/notalim"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <li className="cursor-pointer uppercase text-sm font-light">
                                    Github
                                </li>
                            </a>
                            <li
                                className="cursor-pointer uppercase text-sm font-light"
                                onClick={scrollToChangelog}
                            >
                                Changelog
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
            <div
                className={`bg-primary text-primary-text border-b border-inverse overflow-hidden py-2`}
            >
                <ScrollingBadges badges={badges} />
            </div>
        </>
    );
};

export default Navbar;
