import { BadgeProps } from "./types";

const Badge: React.FC<BadgeProps> = ({ name, darkMode = false }) => {

    return (
        <span
            className={`inline-block mr-2 text-xs uppercase font-thin ${
                darkMode ? "text-black bg-gray-300" : "text-white bg-black"
            }`}
        >
            {name}
        </span>
    );
};

export default Badge;
