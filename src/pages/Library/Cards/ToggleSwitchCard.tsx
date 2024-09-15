import { useTheme } from "@/contexts/ThemeContext";
import ComponentCard from "@/components/MyComponents/ComponentCard/ComponentCard";
import ToggleSwitch from "@/components/MyComponents/ToggleSwitch/ToggleSwitch";

const ToggleSwitchCard: React.FC = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <ComponentCard
            title="Toggle Switch"
            description="A simple toggle switch with customizable icons"
            githubLink="https://github.com/yourusername/yourrepo/blob/main/src/components/MyComponents/ToggleSwitch/ToggleSwitch.tsx"
        >
            <div className="flex items-center justify-center w-full h-full">
                <ToggleSwitch isOn={isDark} onToggle={toggleTheme} />
            </div>
        </ComponentCard>
    );
};

export default ToggleSwitchCard;