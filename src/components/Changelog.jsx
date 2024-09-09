import React, { useEffect, useState } from "react";
import ChangelogItem from "./ChangelogItem";
import LoadingBar from "./LoadingBar";

const ChangelogComponent = ({ id }) => {
    const [changelogs, setChangelogs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://new-notalim-backend.vercel.app/changelogs"
                );
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setChangelogs(data);
            } catch (error) {
                console.error("Fetch error:", error.message);
            }
        };
        fetchData();
    }, []);

    const ChangelogHeader = () => (
        <div className="flex items-center border-b border-gray-200 h-10 text-xs uppercase font-thin text-gray-500">
            <div className="w-1/4 sm:w-2/12">Commit / PR</div>
            <div className="w-1/4 sm:w-2/12">Project</div>
            <div className="w-1/4 sm:w-2/12">Author(s)</div>
            <div className="w-1/4 sm:w-2/12">Date</div>
            <div className="hidden sm:block sm:w-4/12">Commit Message</div>
        </div>
    );

    return (
        <div id={id} className="container mx-auto mt-10 changelog-container">
            <h2 className="text-xs uppercase font-thin py-2 border-b text-white bg-black">
                Changelog
            </h2>
            <ChangelogHeader />
            <div className="space-y-2">
                {changelogs.length === 0 ? (
                    <LoadingBar />
                ) : (
                    changelogs.map((changelog, index) => (
                        <ChangelogItem
                            key={index}
                            changelog={changelog}
                            index={index}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default ChangelogComponent;
