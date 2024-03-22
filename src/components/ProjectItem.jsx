const ProjectItem = ({ project }) => {
    const getUpdatedDaysAgo = (lastUpdateDate) => {
        const lastUpdate = new Date(lastUpdateDate);
        const now = new Date();
        const differenceInTime = now.getTime() - lastUpdate.getTime();
        return Math.floor(differenceInTime / (1000 * 3600 * 24)); // convert time difference to days
    };

    return (
        <div className="flex flex-col md:flex-row justify-between h-24">
            <div className="md:flex-1">
                <h3 className="text-md uppercase font-thin">{project.title}</h3>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-thin">
                    Updated {getUpdatedDaysAgo(project.lastUpdateDate)} days ago
                </p>
            </div>
        </div>
    );
};

export default ProjectItem;
