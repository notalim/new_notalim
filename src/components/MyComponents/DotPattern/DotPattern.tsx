import { useId, useRef, useEffect, useState } from "react";
import { DotPatternProps } from "./types";

export const DotPattern: React.FC<DotPatternProps> = ({
    dotColor = "black",
    pattern = "dot",
    className = "",
    patternSizeDivisor = 20,
    spacingFactor = 1.5, 
}) => {
    const id = useId();
    const containerRef = useRef<SVGSVGElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (containerRef.current) {
            const resizeObserver = new ResizeObserver(entries => {
                for (let entry of entries) {
                    const { width, height } = entry.contentRect;
                    setDimensions({ width, height });
                }
            });

            resizeObserver.observe(containerRef.current);

            return () => {
                resizeObserver.disconnect();
            };
        }
    }, []);

    const patternSize = Math.min(dimensions.width, dimensions.height) / patternSizeDivisor;
    const patternSpacing = patternSize * spacingFactor;
    const cx = patternSpacing / 2;
    const cy = patternSpacing / 2;
    const cr = patternSize / 4; // Increased from 6 to 4 for larger symbols

    const renderPattern = () => {
        switch (pattern) {
            case "+":
                return (
                    <>
                        <line x1={cx} y1={cy - cr} x2={cx} y2={cy + cr} stroke={dotColor} strokeWidth={cr / 2} />
                        <line x1={cx - cr} y1={cy} x2={cx + cr} y2={cy} stroke={dotColor} strokeWidth={cr / 2} />
                    </>
                );
            case "x":
                return (
                    <>
                        <line x1={cx - cr} y1={cy - cr} x2={cx + cr} y2={cy + cr} stroke={dotColor} strokeWidth={cr / 2} />
                        <line x1={cx - cr} y1={cy + cr} x2={cx + cr} y2={cy - cr} stroke={dotColor} strokeWidth={cr / 2} />
                    </>
                );
            case "dot":
            default:
                return (
                    <circle
                        cx={cx}
                        cy={cy}
                        r={cr / 2}
                        fill={dotColor}
                    />
                );
        }
    };

    return (
        <svg
            ref={containerRef}
            aria-hidden="true"
            className={`pointer-events-none w-full h-full ${className}`}
        >
            <defs>
                <pattern
                    id={id}
                    width={patternSpacing}
                    height={patternSpacing}
                    patternUnits="userSpaceOnUse"
                >
                    {renderPattern()}
                </pattern>
            </defs>
            <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill={`url(#${id})`}
            />
        </svg>
    );
};

export default DotPattern;
