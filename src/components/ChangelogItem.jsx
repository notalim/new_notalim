const parseDate = (date) => {
    if (!date) return "";
    // I want it too look YYYY-MM-DD
    const dateObj = new Date(date);
    return dateObj.toISOString().split("T")[0];
};

const parseMessage = (message, length = 30) => {
    if (!message) return "";
    return message.length > length
        ? message.substring(0, length) + "..."
        : message;
};

const ChangelogItem = ({ changelog, index }) => {
    const borderTopClass = index === 0 ? "" : "border-t border-gray-200";
    return (
        <div className={`flex items-center ${borderTopClass} h-16`}>
            {" "}
            {/* fixed height of 10 */}
            <div className="w-2/12 text-xxs font-thin text-gray-500">
                {changelog.type}
            </div>
            <div className="w-2/12 text-xs font-thin uppercase">
                {changelog.projectName}
            </div>
            <div className="w-2/12 text-xs font-thin text-gray-500 uppercase">
                By{" "}
                <span className="text-xxs bg-black text-white">
                    {changelog.by}
                </span>
            </div>
            <div className="w-2/12 text-xxs font-thin text-gray-500 uppercase">
                @{" "}
                <span className="text-black">
                    {parseDate(changelog.dateTime)}
                </span>
            </div>
            <div className="w-4/12 text-xs font-thin uppercase overflow-hidden">
                {changelog.message}
            </div>
        </div>
    );
};

export default ChangelogItem;
