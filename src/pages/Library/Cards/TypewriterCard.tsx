import { useState } from "react";
import ComponentCard from "@/components/MyComponents/ComponentCard/ComponentCard";
import Typewriter from "@/components/MyComponents/Input/Typewriter";
import CustomInput from "@/components/MyComponents/Input/Input";
import { useTheme } from "@/contexts/ThemeContext";

const TypewriterCard: React.FC = () => {
    const { isDark } = useTheme();
    const [input, setInput] = useState("");
    const [phrases, setPhrases] = useState([
        "Hello, World!",
        "Welcome to my portfolio",
        "I need a job fr"
    ]);

    const addPhrase = (newPhrase: string) => {
        setPhrases([...phrases, newPhrase]);
        setInput("");
        // console.log(phrases);
    };

    return (
        <ComponentCard
            title="Typewriter"
            description="and an input!"
            githubLink="https://github.com/notalim/new_notalim/tree/main/src/components/MyComponents/Input/Typewriter.tsx"
            input={<CustomInput onSubmit={addPhrase} placeholder="Add a new phrase..." darkMode={isDark}
            value={input}
            onChange={(e: any) => setInput(e.target.value)}
             />}
        >
            <div className="w-full h-full flex items-center justify-center">
                <Typewriter phrases={phrases} darkMode={isDark} />
            </div>
        </ComponentCard>
    );
};

export default TypewriterCard;
