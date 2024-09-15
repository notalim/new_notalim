import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import ComponentCard from "@/components/MyComponents/ComponentCard/ComponentCard";
import DotPattern from "@/components/MyComponents/DotPattern/DotPattern";

const DotPatternCard: React.FC = () => {
    const [dotPattern, setDotPattern] = useState<"dot" | "+" | "x">("dot");
    const { isDark } = useTheme();

    const changeDotPattern = () => {
        setDotPattern((current) => {
            switch (current) {
                case "dot":
                    return "+";
                case "+":
                    return "x";
                case "x":
                    return "dot";
            }
        });
    };

    // Determine the dot color based on the theme
    const dotColor = isDark ? "#d1d5db" : "black";

    return (
        <ComponentCard
            title="Dot Pattern"
            description="dot dot dot..."
            githubLink="https://github.com/yourusername/yourrepo/blob/main/src/components/MyComponents/DotPattern/DotPattern.tsx"
            buttons={[{ label: "PATTERN", onClick: changeDotPattern }]}
            rounded={false}
        >
            <div className="w-full h-full relative">
                <DotPattern
                    pattern={dotPattern}
                    dotColor={dotColor}
                    patternSizeDivisor={30}
                    spacingFactor={4}
                />
            </div>
        </ComponentCard>
    );
};

export default DotPatternCard;
