import React, { useState, useEffect } from "react";
import ProjectItem from "./ProjectItem";
import ProjectDetails from "./ProjectDetails";
import LoadingBar from "../LoadingBar";
import { useTheme } from '../../contexts/ThemeContext';

const ProjectsComponent = () => {
    const [projects, setProjects] = useState([]);
    const [showArchive, setShowArchive] = useState(false);
    const { isDark } = useTheme();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://new-notalim-backend.vercel.app/projects"
                );
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                const sortedData = data.sort((a, b) => {
                    const dateA = new Date(b.releaseDate || b.lastUpdateDate);
                    const dateB = new Date(a.releaseDate || a.lastUpdateDate);
                    return dateA - dateB;
                });
                setProjects(sortedData);
            } catch (error) {
                console.error("Fetch error: ", error.message);
            }
        };

        fetchData();
    }, []);

    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

    const recentProjects = projects.filter(project => {
        const projectDate = new Date(project.releaseDate || project.lastUpdateDate);
        return projectDate > oneYearAgo;
    });

    const archivedProjects = projects.filter(project => {
        const projectDate = new Date(project.releaseDate || project.lastUpdateDate);
        return projectDate <= oneYearAgo;
    });

    return (
        <div className="container mx-auto px-2 mb-30">
            <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="col-span-2 space-y-4">
                    <h2 className={`text-xs uppercase mb-4 pb-2 font-thin ${isDark ? 'text-white' : 'text-black'}`}>
                        Projects
                    </h2>
                    {projects.length === 1 ? (
                        <LoadingBar />
                    ) : (
                        recentProjects.map((project, index) => (
                            <ProjectItem key={index} project={project} />
                        ))
                    )}
                </div>
                <div className="col-span-1 space-y-4">
                    <h2 className={`text-xs uppercase mb-4 pb-2 font-thin ${isDark ? 'text-white' : 'text-black'}`}>
                        Details
                    </h2>
                    {projects.length === 1 ? (
                        <LoadingBar />
                    ) : (
                        recentProjects.map((project, index) => (
                            <ProjectDetails key={index} project={project} />
                        ))
                    )}
                </div>
            </div>
            
            {archivedProjects.length > 0 && (
                <div className="mt-8">
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => setShowArchive(!showArchive)}
                            className={`text-lg uppercase font-thin ${isDark ? 'text-white hover:text-gray-300' : 'text-black hover:underline'} transition-colors duration-200`}
                        >
                            {showArchive ? "Hide Archived Projects" : "Show Archived Projects"}
                        </button>
                        <span className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'} font-thin`}>
                            ←----- i archive old projects that haven't been worked on for a while
                        </span>
                    </div>
                    {showArchive && (
                        <div className="grid grid-cols-3 gap-4 mt-4">
                            <div className="col-span-2 space-y-4">
                                {archivedProjects.map((project, index) => (
                                    <ProjectItem key={`archived-${index}`} project={project} />
                                ))}
                            </div>
                            <div className="col-span-1 space-y-4">
                                {archivedProjects.map((project, index) => (
                                    <ProjectDetails key={`archived-${index}`} project={project} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProjectsComponent;
