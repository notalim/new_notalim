import { useTheme } from '../../contexts/ThemeContext';

const ProjectDetails = ({ project }) => {
    const { isDark } = useTheme();
    const truncateDescription = (text, length = 200) => {
        if (!text) return "";
        return text.length > length ? text.substring(0, length) + "..." : text;
    };
    const parseDate = (date) => {
        if (!date) return "";
        // I want it too look YYYY-MM-DD
        const dateObj = new Date(date);
        return dateObj.toISOString().split("T")[0];
    };
    return (
        <div className="h-36">
            <div className="md:flex-1 mt-2 md:mt-0">
                <p className="hidden md:block text-xs text-gray-600 font-thin uppercase">
                    {truncateDescription(project.description)}
                </p>
                <div className="text-xxs sm:text-xs text-gray-400 uppercase tracking-wider font-thin">
                    {parseDate(project.releaseDate).length == 0
                        ? `Last updated ${parseDate(project.lastUpdateDate)}`
                        : `Released ${parseDate(project.releaseDate)}`}
                </div>
                <div className="flex flex-wrap gap-0.5 sm:gap-2 mt-2">
                    {project.technologies ? (
                        project.technologies.map((tech, index) => (
                            <span
                                key={index}
                                className={`text-xxs sm:text-xs uppercase font-thin ${isDark ? 'text-gray-900 bg-gray-300' : 'text-white bg-black'}`}
                            >
                                {tech}
                            </span>
                        ))
                    ) : (
                        <span className={`text-xxs sm:text-xs uppercase font-thin ${isDark ? 'text-gray-900 bg-gray-300' : 'text-white bg-black'}`}>
                            No technologies
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
