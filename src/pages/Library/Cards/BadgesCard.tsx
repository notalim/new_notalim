import { useState } from "react";
import ComponentCard from "@/components/MyComponents/ComponentCard/ComponentCard";
import ScrollingBadges from "@/components/MyComponents/Badge/ScrollingBadges";
import { useTheme } from "@/contexts/ThemeContext";

const BadgesCard: React.FC = () => {
    const { isDark } = useTheme();
    const [isScrolling, setIsScrolling] = useState(true);

    const scrollingBadges = [
        { name: "TAILWIND" },
        { name: "MONGODB" },
        { name: "REDUX" },
        { name: "GRAPHQL" },
        { name: "NEXT.JS" },
        { name: "NODE" },
        { name: "Badge" },
        { name: "why" },
        { name: "are" },
        { name: "you" },
        { name: "reading" },
        { name: "this" },
        { name: "?" },
    ];

    return (
        <ComponentCard
            title="BADGES"
            description="i actually like them having no paddings"
            githubLink="https://github.com/notalim/new_notalim/tree/main/src/components/MyComponents/Badge/Badge.tsx"
            buttons={[
                {
                    label: isScrolling ? "STOP SCROLLING" : "SCROLL",
                    onClick: () => setIsScrolling(!isScrolling),
                },
            ]}
        >
            <ScrollingBadges
                badges={scrollingBadges}
                isScrolling={isScrolling}
                scrollSpeed={0.4}
                darkMode={isDark}
            />
        </ComponentCard>
    );
};

export default BadgesCard;
