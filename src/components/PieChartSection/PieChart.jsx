import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { useTheme } from '../../contexts/ThemeContext';

const PieChart = ({ data }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);
    const { isDark } = useTheme();

    useEffect(() => {
        const ctx = chartRef.current?.getContext("2d");

        if (!ctx) {
            console.error("Failed to get 2D context from canvas");
            return;
        }

        if (!data || data.length === 0) {
            console.error("No data provided for the chart");
            return;
        }

        const createChart = () => {
            try {
                if (chartInstance.current) {
                    chartInstance.current.destroy();
                }

                chartInstance.current = new Chart(ctx, {
                    type: "pie",
                    data: {
                        labels: data.map((item) => item.label),
                        datasets: [
                            {
                                data: data.map((item) => item.value),
                                backgroundColor: Array(data.length).fill(
                                    isDark ? "#d1d5db" : "black"
                                ),
                                borderColor: Array(data.length).fill(
                                    isDark ? "gray" : "white"
                                ),
                                borderWidth: 1,
                            },
                        ],
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                display: false,
                            },
                            tooltip: {
                                enabled: false,
                            },
                        },
                    },
                });
            } catch (error) {
                console.error("Error creating chart:", error);
            }
        };

        createChart();

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [data, isDark]);

    return <canvas ref={chartRef} />;
};

export default PieChart;
