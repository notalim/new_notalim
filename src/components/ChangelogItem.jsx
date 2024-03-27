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
            <div className="w-1/4 text-xxs font-thin text-gray-500 sm:w-2/12">
                {changelog.type}
            </div>
            <div className="w-1/4 text-xs font-thin uppercase sm:w-2/12">
                {changelog.projectName}
            </div>
            <div className="w-1/4 text-xs font-thin text-gray-500 uppercase sm:w-2/12">
                By{" "}
                <span className="text-xxs bg-black text-white">
                    {changelog.by}
                </span>
            </div>
            <div className="w-1/4 text-xxs font-thin text-gray-500 uppercase sm:w-2/12">
                @{" "}
                <span className="text-black">
                    {parseDate(changelog.dateTime)}
                </span>
            </div>
            {/* On small screens, the message will be hidden to maintain the layout */}
            <div className="hidden w-1/4 text-xs font-thin uppercase overflow-hidden sm:w-4/12 sm:block">
                {changelog.message}
            </div>
        </div>
    );
};

export default ChangelogItem;
