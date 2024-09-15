import { Moon, Sun } from 'lucide-react';
import { ToggleSwitchProps } from './types';

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
    isOn,
    onToggle,
    size = 24,
    lightIcon = <Sun size={size * 0.75} />,
    darkIcon = <Moon size={size * 0.75} />,
    isVertical = false,
}) => {
    const containerClasses = isVertical
        ? `h-12 w-6 flex flex-col items-center`
        : `w-12 h-6 flex items-center`;

    const toggleClasses = isVertical
        ? `h-5 w-5 flex items-center justify-center transition-all duration-300 ease-in-out`
        : `w-5 h-5 flex items-center justify-center transition-all duration-300 ease-in-out`;

    const translateClasses = isVertical
        ? isOn ? 'translate-y-6' : ''
        : isOn ? 'translate-x-6' : '';

    return (
        <div
            className={`${containerClasses} 
                cursor-pointer border border-gray-400
                transition-colors duration-400 ease-in-out
                ${isOn ? 'bg-gray-300' : 'bg-black'}`}
            onClick={onToggle}
        >
            <div
                className={`${toggleClasses} ${translateClasses}`}
            >
                {isOn ? (
                    <div className="text-black transition-all duration-100 ease-in-out transform scale-100">{darkIcon}</div>
                ) : (
                    <div className="text-white transition-all duration-100 ease-in-out transform scale-100">{lightIcon}</div>
                )}
            </div>
        </div>
    );
};

export default ToggleSwitch;
