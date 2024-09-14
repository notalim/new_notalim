import React, { useState } from "react";
import PieChart from "./PieChart";
import ChartLabels from "./ChartLabels";
import Terminal from "./Terminal";
import { useTheme } from '../../contexts/ThemeContext';

const PieChartSection = () => {
    const { isDark } = useTheme();
    const [isChartVisible, setIsChartVisible] = useState(false);
    const skillsData = [
        { label: "TYPESCRIPT", value: 40 },
        { label: "PYTHON", value: 5 },
        { label: "NEXT.JS", value: 15 },
        { label: "JOB SEARCH", value: 18 },
        { label: "GRIND", value: 18 },
        { label: "AURA", value: 3 },
        { label: "NON-CHALANCY", value: 8 },
        { label: "TERMINALLY ONLINE", value: 2 },
        { label: "THIS CHART", value: 7 },
    ];

    const toggleChart = () => {
        setIsChartVisible(!isChartVisible);
    };

    return (
        <section className="py-8 px-2 bg-background text-black">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row md:space-x-8">
                    <div className="w-full md:w-3/5 h-96"> 
                        <Terminal toggleChart={toggleChart} isChartVisible={isChartVisible} />
                    </div>
                    {isChartVisible && (
                        <div className="w-full md:w-2/5 mt-4 md:mt-0 flex items-center">
                            <div className="flex flex-row items-center justify-center w-full">
                                <div className="w-1/2 h-64">
                                    <PieChart data={skillsData} />
                                </div>
                                <div className="w-1/2 pl-4">
                                    <ChartLabels data={skillsData} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PieChartSection;
