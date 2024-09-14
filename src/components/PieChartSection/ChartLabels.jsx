import React from "react";
import { useTheme } from '../../contexts/ThemeContext';

const ChartLabels = ({ data }) => {
    const { isDark } = useTheme();

    return (
        <div className="flex flex-col">
            {data.map((item, index) => (
                <div key={index} className="flex items-center mb-2">
                    <div className={`w-8 h-4 ${isDark ? 'bg-gray-300' : 'bg-black'} mr-4`}></div>
                    <span className={`text-xs uppercase font-mono ${isDark ? 'text-gray-300' : 'text-gray-500'} whitespace-nowrap`}>
                        {item.label}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default ChartLabels;
