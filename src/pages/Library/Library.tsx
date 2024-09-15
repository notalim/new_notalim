import DotPatternCard from "./Cards/DotPatternCard";
import BadgesCard from "./Cards/BadgesCard";
import TypewriterCard from "./Cards/TypewriterCard";
import DateCard from "./Cards/DateCard";
import ProgressBarCard from "./Cards/ProgressBarCard";
import ToggleSwitchCard from "./Cards/ToggleSwitchCard";
import P5SketchCard from "./Cards/P5SketchCard";
const Library: React.FC = () => {
    return (
        <div className="w-full px-4">
            {" "}
            {/* Kept the full width container */}
            <div className="container mx-auto mt-12">
                <h1 className="text-lg lowercase font-bold">
                    my Component Library
                </h1>
                <p className="text-xs text-gray-500">
                    i go for this "pixely-monospace" style a lot, but you can
                    always change the style to your liking
                </p>
                <p className="text-xs text-gray-500 mb-8">
                    fun fact: i actually intended to use most of these
                    components on my portfolio initially, but ended up going for
                    more simplicity - but i have to show them off somewhere lol
                </p>
            </div>
            <div className="max-w-7xl mx-auto">
                {" "}
                {/* Kept the max-width wrapper */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <DotPatternCard />
                    <BadgesCard />
                    <TypewriterCard />
                    <DateCard />
                    <ProgressBarCard />
                    <ToggleSwitchCard />

                    <P5SketchCard />

                    {/* Add more ComponentCards here as you create more components */}
                </div>
            </div>
        </div>
    );
};

export default Library;
