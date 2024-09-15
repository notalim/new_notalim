import { useState, useEffect } from "react";
import { TypewriterProps } from "./types";

const Typewriter: React.FC<TypewriterProps> = ({ phrases, darkMode }) => {
    const [index, setIndex] = useState(
        Math.floor(Math.random() * phrases.length)
    );
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        if (!phrases || phrases.length === 0) return;

        const currentPhrase = phrases[index];
        if (subIndex === currentPhrase.length + 1 && !reverse) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex(Math.floor(Math.random() * phrases.length));
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : subIndex === currentPhrase.length ? 1000 : 150, Math.floor(Math.random() * 350))); 

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, phrases]);

    return (
        <p className="text-center uppercase font-thin">
            {phrases[index].substring(0, subIndex)}
            <span className={`inline-block w-[0.6em] h-[1em] ${darkMode ? "bg-gray-300" : "bg-black"}`}>
            </span>
        </p>
    );
};

export default Typewriter;
