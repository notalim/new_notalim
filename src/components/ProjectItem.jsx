const ProjectItem = ({ project }) => {
    const getUpdatedDaysAgo = (lastUpdateDate) => {
        const lastUpdate = new Date(lastUpdateDate);
        const now = new Date();
        const differenceInTime = now.getTime() - lastUpdate.getTime();
        return Math.floor(differenceInTime / (1000 * 3600 * 24)); // convert time difference to days
    };

    return (
        <div className="flex flex-col md:flex-row justify-between h-36">
            <div className="md:flex-1">
                <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h3 className="text-md uppercase font-thin cursor-pointer">
                        {project.title}
                    </h3>
                </a>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-thin">
                    {getUpdatedDaysAgo(project.lastUpdateDate) === 0
                        ? "Updated Today"
                        : `Updated ${getUpdatedDaysAgo(
                              project.lastUpdateDate
                          )} days ago`}
                </p>
            </div>
        </div>
    );
};

export default ProjectItem;
