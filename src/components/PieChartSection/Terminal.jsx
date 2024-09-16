import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { useNavigate } from "react-router-dom";

const Terminal = ({ toggleChart, isChartVisible, scrollToSection }) => {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState([]);
    const [blink, setBlink] = useState(true);
    const [cursorPosition, setCursorPosition] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const { isDark, toggleTheme } = useTheme();
    const inputRef = useRef(null);
    const outputRef = useRef(null);
    const navigate = useNavigate();
    
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust this breakpoint as needed
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        const blinkInterval = setInterval(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearInterval(blinkInterval);
    }, []);

    useEffect(() => {
        const asciiArt = `
             _        _ _           
            | |      | (_)          
 _ __   ___ | |_ __ _| |_ _ __ ___  
| '_ \\ / _ \\| __/ _\` | | | '_ \` _ \\ 
| | | | (_) | || (_| | | | | | | | \\
|_| |_|\\___/ \\__\\__,_|_|_|_| |_| |_|
                                    
                                    `;
        const separator = "-".repeat(60);
        setOutput([
            asciiArt,
            separator,
            'WELCOME TO MY PORTFOLIO. TYPE "HELP" FOR COMMANDS.',
            separator,
        ]);
        inputRef.current.focus();
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [output]);

    const scrollToBottom = () => {
        if (outputRef.current) {
            outputRef.current.scrollTop = outputRef.current.scrollHeight;
        }
    };

    const handleInputChange = (e) => {
        setInput(e.target.value.toUpperCase());
        setCursorPosition(e.target.selectionStart);
        scrollToBottom();
    };

    const handleKeyDown = (e) => {
        if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
            setTimeout(() => {
                setCursorPosition(e.target.selectionStart);
            }, 0);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        processCommand(input);
        setInput("");
        setCursorPosition(0);
    };

    const processCommand = (cmd) => {
        setOutput((prev) => [...prev, `> ${cmd}`]);
        switch (cmd.toLowerCase()) {
            case "help":
                setOutput((prev) => [
                    ...prev,
                    "AVAILABLE COMMANDS: HELP, LIB, THEME,CLEAR, CHART, RESUME, LINKEDIN, GITHUB, EMAIL, PROJECTS, CHANGELOG, COFFEE",
                ]);
                break;
            case "clear":
                setOutput([]);
                break;
            case "chart":
                toggleChart();
                setOutput((prev) => [
                    ...prev,
                    `CHART IS NOW ${isChartVisible ? "HIDDEN" : "VISIBLE"}`,
                ]);
                break;
            case "resume":
                window.open("/notalim_resume.pdf", "_blank");
                setOutput((prev) => [...prev, "RESUME DOWNLOADED"]);
                break;
            case "linkedin":
                window.open("https://www.linkedin.com/in/notalim", "_blank");
                setOutput((prev) => [...prev, "OPENING LINKEDIN PROFILE"]);
                break;
            case "github":
                window.open("https://github.com/notalim", "_blank");
                setOutput((prev) => [...prev, "OPENING GITHUB PROFILE"]);
                break;
            case "email":
                window.open("mailto:notalimka@gmail.com", "_blank");
                setOutput((prev) => [...prev, "OPENING EMAIL CLIENT"]);
                break;
            case "projects":
                //console.log("Scrolling to projects section");
                scrollToSection("projectsSection");
                setOutput((prev) => [...prev, "SCROLLING TO PROJECTS SECTION"]);
                break;
            case "changelog":
                // console.log("Scrolling to changelog section");
                scrollToSection("changelogsSection");
                setOutput((prev) => [
                    ...prev,
                    "SCROLLING TO CHANGELOG SECTION",
                ]);
                break;
            case "lib" || "library":
                navigate("/lib");
                break;
            case "ls":
            case "cd":
            case "pwd":
            case "mkdir":
            case "rm":
            case "cp":
            case "mv":
                setOutput((prev) => [
                    ...prev,
                    "THIS IS A WEBSITE, NOT A DIRECTORY. YOU CAN'T DO THAT HERE.",
                ]);
                break;
            case "theme":
                toggleTheme();
                setOutput((prev) => [
                    ...prev,
                    `THEME CHANGED TO ${isDark ? "LIGHT" : "DARK"} MODE.`,
                ]);
                break;
            case "coffee":
                const coffeeArt = `
                  ( (
                   ) )
                .______.
                |      |]
                \\      /
                 \`----'
                `;
                setOutput((prev) => [
                    ...prev,
                    coffeeArt,
                    "Brewing... Your virtual coffee is ready! ☕",
                ]);
                break;
            case "hello":
                setOutput((prev) => [...prev, "𝓗𝓮𝓵𝓵𝓸 𝓑𝓻𝓸 "]);
                break;
            default:
                setOutput((prev) => [
                    ...prev,
                    'COMMAND NOT RECOGNIZED. TYPE "HELP" FOR AVAILABLE COMMANDS.',
                ]);
        }
    };

    return (
        <div className="w-full h-full">
            <div
                className={`bg-gray-400 p-1 ${
                    isDark ? "text-gray-800" : "text-white"
                } text-xs uppercase`}
            >
                NOTALIM TERM
            </div>
            <div
                className={`p-2 font-mono overflow-y-auto flex flex-col text-xs uppercase h-[calc(100%-1.5rem)] ${
                    isDark ? "bg-gray-300 text-gray-900" : "bg-black text-white"
                }`}
            >
                <div
                    ref={outputRef}
                    className="flex-grow whitespace-pre overflow-y-auto"
                >
                    {output.map((line, index) => (
                        <div key={index}>{line}</div>
                    ))}
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="flex items-center relative"
                >
                    <span className="mr-2">{">"}</span>
                    <div className="flex-grow relative">
                        <input
                            type="text"
                            value={input}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            ref={inputRef}
                            className={`w-full outline-none text-xs uppercase caret-transparent bg-transparent ${
                                isDark ? "text-gray-900" : "text-white"
                            }`}
                            style={isMobile ? { fontSize: "16px" } : {}}
                        />
                        {!isMobile && (
                            <span
                                className={`absolute top-0 left-0 inline-block w-[0.6em] h-[1em] ${
                                    blink ? "opacity-100" : "opacity-0"
                                } ${isDark ? "bg-gray-900" : "bg-white"}`}
                                style={{
                                    transform: `translateX(${
                                        cursorPosition * 0.6
                                    }em)`,
                                }}
                            ></span>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Terminal;
