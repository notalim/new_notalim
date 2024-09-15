import { useState, useRef, useEffect } from "react";
import { CustomInputProps } from "./types";

const CustomInput: React.FC<CustomInputProps> = ({
    onSubmit,
    onChange,
    value,
    placeholder = "",
    blinkSpeed = 600,
    darkMode = false,
}) => {
    const [inputValue, setInputValue] = useState(value || "");
    const [isFocused, setIsFocused] = useState(false);
    const [showCursor, setShowCursor] = useState(true);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        let interval: any;
        if (isFocused) {
            interval = setInterval(() => {
                setShowCursor((prev) => !prev);
            }, blinkSpeed);
        } else {
            setShowCursor(false);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isFocused, blinkSpeed]);

    useEffect(() => {
        setInputValue(value || "");
    }, [value]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim()) {
            onSubmit(inputValue.trim());
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full relative">
            <div className="border-b border-gray-300 pb-1">
                <p className="text-sm uppercase font-thin min-h-[1.5em]">
                    {inputValue || (
                        <span className="text-gray-400">{placeholder}</span>
                    )}
                    {isFocused && (
                        <span
                            className={`inline-block w-[0.6em] h-[1em] transition-opacity duration-100 ${
                                showCursor ? "opacity-100" : "opacity-0"
                            } ${darkMode ? "bg-gray-300" : "bg-black"}`}
                        ></span>
                    )}
                </p>
            </div>
            <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={handleChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder={placeholder}
                className="w-full h-full bg-transparent absolute top-0 left-0 opacity-0 z-10"
            />
        </form>
    );
};

export default CustomInput;
