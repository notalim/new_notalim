import React, { useMemo } from "react";

const ScrollingBadges = ({ badges }) => {
    const shuffledBadges = useMemo(() => {
        return [...badges].sort(() => Math.random() - 0.5);
    }, [badges]);

    const totalWidth = shuffledBadges.length * 120; 

    return (
        <div className="overflow-hidden whitespace-nowrap">
            <div 
                className="inline-block animate-scroll"
                style={{
                    animationDuration: `${totalWidth * 0.02}s`,
                    width: `${totalWidth}px`
                }}
            >
                {shuffledBadges.map((badge, index) => (
                    <span
                        key={index}
                        className="inline-block mr-2 text-white text-xs uppercase font-thin bg-black"
                    >
                        {badge.name}
                    </span>
                ))}
                {shuffledBadges.map((badge, index) => (
                    <span
                        key={`duplicate-${index}`}
                        className="inline-block mr-2 text-white text-xs uppercase font-thin bg-black"
                    >
                        {badge.name}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ScrollingBadges;
