// import LargeComponentCard from "@/components/MyComponents/ComponentCard/LargeComponentCard";
import ComponentCard from "@/components/MyComponents/ComponentCard/ComponentCard";
import P5Sketch from "@/components/MyComponents/P5Sketch/P5Sketch";
import { useTheme } from "@/contexts/ThemeContext";

const P5SketchCard = () => {
    const { isDark } = useTheme();
    return (
        <ComponentCard
            title="spinning flower"
            description="The animation I made for my our friends at pixl.garden (can use any png/svg!) "
            githubLink="https://github.com/yourusername/yourrepo/blob/main/src/components/MyComponents/P5Sketch/P5Sketch.tsx"
        >
            <P5Sketch
                backgroundColor={isDark ? "#111827" : "#d1d5db"}
                pixelColor={isDark ? "#d1d5db" : "black"}
            />
        </ComponentCard>
    );
};

export default P5SketchCard;
