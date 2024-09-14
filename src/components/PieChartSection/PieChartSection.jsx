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
                <div className="flex space-x-8 items-start h-96">
                    <div className="w-3/5 h-full"> 
                        <Terminal toggleChart={toggleChart} isChartVisible={isChartVisible} />
                    </div>
                    <div className="w-2/5 h-full flex items-center justify-center">
                        {isChartVisible ? (
                            <div className="flex items-center">
                                <div className="w-64 h-64 mr-4">
                                    <PieChart data={skillsData} />
                                </div>
                                <ChartLabels data={skillsData} />
                            </div>
                        ) : (
                            <div className="w-full h-full" />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PieChartSection;
