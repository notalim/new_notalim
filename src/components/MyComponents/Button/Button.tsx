import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    className = "",
    darkMode = false,
}) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 text-xs font-medium hover:bg-gray-800  border-1 border-solid focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black ${className}
            ${
                darkMode
                    ? "text-black bg-gray-300  border-white"
                    : "text-white bg-black border-black"
            }
            `}
        >
            {label}
        </button>
    );
};

export default Button;
