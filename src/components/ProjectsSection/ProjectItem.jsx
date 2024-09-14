import { useTheme } from '../../contexts/ThemeContext';

const ProjectItem = ({ project }) => {
    const { isDark } = useTheme();
    const getDaysAgo = (date) => {
        const givenDate = new Date(date);
        const now = new Date();
        const differenceInTime = now.getTime() - givenDate.getTime();
        return Math.floor(differenceInTime / (1000 * 3600 * 24)); // convert time difference to days
    };

    const getStatusText = () => {
        if (project.releaseDate) {
            const daysAgo = getDaysAgo(project.releaseDate);
            if (daysAgo === 0) return "Released Today";
            return `Released ${daysAgo} days ago`;
        } else if (project.lastUpdateDate) {
            const daysAgo = getDaysAgo(project.lastUpdateDate);
            if (daysAgo === 0) return "Updated Today";
            return `Updated ${daysAgo} days ago`;
        }
        return "No update information";
    };

    return (
        <div className="flex flex-col md:flex-row justify-between h-36">
            <div className="md:flex-1">
                <a
                    href={project.liveLink || project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h3 className="text-md uppercase font-thin cursor-pointer hover:underline">
                        {project.title}
                    </h3>
                </a>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-thin">
                    {getStatusText()}
                </p>
            </div>
        </div>
    );
};

export default ProjectItem;
