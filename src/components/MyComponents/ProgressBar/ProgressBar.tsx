import { ProgressBarProps } from "./types";

const ProgressBar: React.FC<ProgressBarProps> = ({
    progress,
    maxValue = 100,
    height = 20,
    showPercentage = true,
}) => {
    const percentage = Math.min(100, Math.max(0, (progress / maxValue) * 100));

    return (
        <div className="w-full bg-gray-200" style={{ height: `${height}px` }}>
            <div
                className="h-full bg-black transition-all duration-300 ease-in-out flex items-center justify-end"
                style={{ width: `${percentage}%` }}
            >
                {showPercentage && (
                    <span className="text-white text-xs font-thin mr-1">
                        {Math.round(percentage)}%
                    </span>
                )}
            </div>
        </div>
    );
};

export default ProgressBar;
