import React, { useState, useEffect } from "react";
import projectsData from "../assets/projects.json";
import ProjectItem from "./ProjectItem";
import ProjectDetails from "./ProjectDetails";

const ProjectsComponent = () => {
    const [projects, setProjects] = useState([projectsData]);

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

                setProjects(data);
            } catch (error) {
                console.error("Fetch error: ", error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto px-2 mb-30">
            <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="col-span-2 space-y-4">
                    <h2 className="text-xs uppercase mb-4 pb-2 font-thin">
                        Projects
                    </h2>
                    {projects.map((project, index) => (
                        <ProjectItem key={index} project={project} />
                    ))}
                </div>
                <div className="col-span-1 space-y-4">
                    <h2 className="text-xs uppercase mb-4 pb-2 font-thin">
                        Details
                    </h2>
                    {projects.map((project, index) => (
                        <ProjectDetails key={index} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsComponent;
