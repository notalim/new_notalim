import React, { useState, useEffect } from "react";

const LoadingBar = () => {
    const [dots, setDots] = useState("");

    useEffect(() => {
        const timer = setInterval(() => {
            setDots((prevDots) => {
                if (prevDots.length === 3) {
                    return "";
                } else {
                    return prevDots + ".";
                }
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="flex items-center justify-center text-sm uppercase font-thin text-gray-500 mt-2">
            Loading{dots}
        </div>
    );
};

export default LoadingBar;
