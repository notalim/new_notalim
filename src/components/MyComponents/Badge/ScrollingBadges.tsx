import { useState, useEffect, useRef } from "react";
import { ScrollingBadgesProps } from "./types";
import Badge from "./Badge";

const ScrollingBadges: React.FC<ScrollingBadgesProps> = ({
    badges,
    isScrolling,
    scrollSpeed = 0.5,
    darkMode = false,
}) => {
    const [offset, setOffset] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isScrolling || !containerRef.current) return;

        const animate = () => {
            setOffset((prevOffset) => {
                const newOffset = prevOffset + scrollSpeed;
                const containerWidth = containerRef.current?.offsetWidth || 0;
                return newOffset >= containerWidth ? 0 : newOffset;
            });
        };

        const intervalId = setInterval(animate, 16); // ~60fps

        return () => clearInterval(intervalId);
    }, [isScrolling, scrollSpeed]);

    const renderBadges = () => {
        return badges.map((badge, index) => (
            <Badge key={index} name={badge.name} darkMode={darkMode} />
        ));
    };

    return (
        <div className="overflow-hidden whitespace-nowrap" ref={containerRef}>
            <div
                className="inline-block"
                style={{
                    transform: `translateX(-${offset}px)`,
                    transition: isScrolling
                        ? "none"
                        : "transform 0.5s ease-out",
                }}
            >
                {renderBadges()}
                {renderBadges()}{" "}
                {/* Duplicate to ensure continuous scrolling */}
            </div>
        </div>
    );
};

export default ScrollingBadges;
