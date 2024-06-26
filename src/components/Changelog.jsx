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

    return (
        <div id={id} className="container mx-auto mt-10 changelog-container">
            <h2 className="text-xs uppercase font-thin py-2 border-b text-white bg-black">
                Changelog
            </h2>
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
