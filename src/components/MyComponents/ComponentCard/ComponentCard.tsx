import { Link } from 'react-router-dom';
import { ComponentCardProps } from './types';
import { useTheme } from '@/contexts/ThemeContext';
import Button from '../Button/Button';

const ComponentCard: React.FC<ComponentCardProps> = ({
    title,
    description,
    githubLink,
    children,
    buttons = [],
    rounded = false,
    className = "",
    input,
}) => {
    const { isDark } = useTheme();

    return (
        <div
            className={`border border-gray-300 p-4 w-full flex flex-col h-full ${
                rounded ? "rounded-lg" : ""
            } ${className}`}
        >
            <div
                className={`mb-4 h-40 flex items-center justify-center border border-gray-200 ${
                    rounded ? "rounded-lg" : ""
                } ${isDark ? "bg-gray-800" : "bg-gray-50"}`}
            >
                {children}
            </div>
            <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-lg uppercase">{title}</h3>
                <Link
                    to={githubLink}
                    className="uppercase text-sm text-gray-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </Link>
            </div>
            <p className="text-sm text-gray-600 lowercase mb-2">
                {description}
            </p>
            <div className="flex-grow"></div>
            {input && <div className="mb-4">{input}</div>}
            {buttons.length > 0 && (
                <div className="flex space-x-2 mt-auto">
                    {buttons.map((button, index) => (
                        <Button key={index} {...button} darkMode={isDark} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ComponentCard;