import { useState } from "react";
import ComponentCard from "@/components/MyComponents/ComponentCard/ComponentCard";
import Date from "@/components/MyComponents/Date/Date";
import CustomInput from "@/components/MyComponents/Input/Input";
import { useTheme } from "@/contexts/ThemeContext";

const DateCard: React.FC = () => {
    const { isDark } = useTheme();
    const [date] = useState(new globalThis.Date());
    const [prefix, setPrefix] = useState<"@" | "*" | "" | "date" | string>(
        "date"
    );
    const [format, setFormat] = useState<
        "yyyy-mm-dd" | "mm-dd-yyyy" | "dd-mm-yyyy"
    >("yyyy-mm-dd"); // Changed to lowercase

    const handlePrefixChange = (newPrefix: string) => {
        setPrefix(newPrefix as "@" | "*" | "");
    };

    const formats: ("yyyy-mm-dd" | "mm-dd-yyyy" | "dd-mm-yyyy")[] = [ // Changed to lowercase
        "yyyy-mm-dd",
        "mm-dd-yyyy",
        "dd-mm-yyyy",
    ];

    return (
        <ComponentCard
            title="Date"
            description="what time is it?"
            githubLink="https://github.com/notalim/new_notalim/tree/main/src/components/MyComponents/Date/Date.tsx"
            buttons={formats.map((f) => ({
                label: f.toUpperCase(), // Optional: Display in uppercase
                onClick: () => setFormat(f),
            }))}
            input={
                <CustomInput
                    value={prefix}
                    onChange={handlePrefixChange}
                    onSubmit={handlePrefixChange}
                    darkMode={isDark}
                />
            }
        >
            <div className="">
                <div className="flex items-center justify-center w-full h-full">
                    <Date date={date} prefix={prefix} format={format} darkMode={isDark} />
                </div>
            </div>
        </ComponentCard>
    );
};

export default DateCard;
