import { useTheme } from "../../contexts/ThemeContext";

const parseDate = (date) => {
    if (!date) return "";
    // I want it too look YYYY-MM-DD
    const dateObj = new Date(date);
    return dateObj.toISOString().split("T")[0];
};

const parseMessage = (message, length = 200) => {
    if (!message) return "";
    return message.length > length
        ? message.substring(0, length) + "..."
        : message;
};

const parseCoAuthors = (message) => {
    const coAuthors = [];
    const lines = message.split("\n");
    const coAuthorRegex =
        /Co-authored-by: [^<]+<(\w+)@users.noreply.github.com>/;

    lines.forEach((line) => {
        const match = line.match(coAuthorRegex);
        if (match) {
            coAuthors.push(match[1]); // match[1] is the captured username
        }
    });
    return coAuthors;
};

const ChangelogItem = ({ changelog, index }) => {
    const { isDark } = useTheme();

    const displayAuthors = (authors) => {
        return authors.map((author, index) => (
            <div key={index}>
                <span
                    className={`ml-1 text-xxs ${
                        isDark
                            ? "bg-gray-300 text-gray-900"
                            : "bg-black text-white"
                    }`}
                >
                    {author}
                </span>
                {index < authors.length - 1 && (
                    <span className="text-xs font-thin text-gray-500 uppercase">
                        ,
                    </span>
                )}
            </div>
        ));
    };
    const borderTopClass = index === 0 ? "" : "border-t border-gray-200";
    const coAuthors = parseCoAuthors(changelog.message);

    return (
        <div className={`flex items-center ${borderTopClass} h-16`}>
            <div className="w-1/4 text-xxs font-thin text-gray-500 sm:w-2/12">
                {changelog.type}
            </div>
            <div className="w-1/4 text-xs font-thin uppercase sm:w-2/12">
                {changelog.projectName}
            </div>
            <div className="w-1/4 text-xs font-thin text-gray-500 uppercase sm:w-2/12 flex items-center">
                By {displayAuthors([changelog.by].concat(coAuthors))}
            </div>
            <div className="w-1/4 text-xxs font-thin text-gray-500 uppercase sm:w-2/12">
                @{" "}
                <span className="text-black">
                    {parseDate(changelog.dateTime)}
                </span>
            </div>
            <div className="hidden w-1/4 text-xs font-thin uppercase overflow-hidden sm:w-4/12 sm:block">
                {parseMessage(changelog.message)}
            </div>
        </div>
    );
};

export default ChangelogItem;
