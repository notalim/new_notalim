import React, { useState, useEffect } from "react";

const ScreenDimensions = () => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        function handleResize() {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        handleResize(); 
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="text-xs font-light sm:text-sm">
            {dimensions.width}x{dimensions.height}
        </div>
    );
};

export default ScreenDimensions;
