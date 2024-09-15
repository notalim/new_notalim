import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ComponentCardProps } from "./types";
import { useTheme } from "@/contexts/ThemeContext";
import Button from "../Button/Button";

const LargeComponentCard: React.FC<ComponentCardProps> = ({
    title,
    description,
    githubLink,
    children,
    buttons = [],
    rounded = false,
    className = "",
    input,
}) => {
    const { isDark } = useTheme();
    const innerDivRef = useRef<HTMLDivElement>(null);
    const [innerDivHeight, setInnerDivHeight] = useState(0);

    useEffect(() => {
        const updateHeight = () => {
            if (innerDivRef.current) {
                const width = innerDivRef.current.offsetWidth;
                const height = Math.min(width, window.innerHeight * 0.8);
                setInnerDivHeight(height);
            }
        };

        updateHeight();
        window.addEventListener("resize", updateHeight);
        return () => window.removeEventListener("resize", updateHeight);
    }, []);

    return (
        <div
            className={`border border-gray-300 p-4 w-full flex flex-col ${
                rounded ? "rounded-lg" : ""
            } ${className}`}
        >
            <div
                ref={innerDivRef}
                style={{ height: `${innerDivHeight}px`, minHeight: '300px' }}
                className={`w-full flex items-center justify-center border border-gray-200 ${
                    rounded ? "rounded-lg" : ""
                } ${isDark ? "bg-gray-800" : "bg-white"} overflow-hidden`}
            >
                {children}
            </div>
            <div className="mt-4 flex justify-between items-baseline">
                <h3 className="text-lg uppercase">{title}</h3>
                <Link
                    to={githubLink}
                    className="uppercase text-sm text-gray-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </Link>
            </div>
            <p className="text-sm text-gray-600 lowercase mt-2">
                {description}
            </p>
            {input && <div className="mt-4">{input}</div>}
            {buttons.length > 0 && (
                <div className="flex space-x-2 mt-4">
                    {buttons.map((button, index) => (
                        <Button key={index} {...button} darkMode={isDark} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default LargeComponentCard;
