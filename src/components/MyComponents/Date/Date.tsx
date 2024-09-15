import { DateProps } from "./types";

const formatDate = (date: Date, format: string): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    switch (format) {
        case 'yyyy-mm-dd':
            return `${year}-${month}-${day}`;
        case 'mm-dd-yyyy':
            return `${month}-${day}-${year}`;
        case 'dd-mm-yyyy':
            return `${day}-${month}-${year}`;
        default:
            return `${year}-${month}-${day}`;
    }
};

const Date: React.FC<DateProps> = ({ date, prefix = '', format = 'yyyy-mm-dd', darkMode = false }) => {
    const dateObj = date instanceof globalThis.Date ? date : new globalThis.Date(date);
    const formattedDate = isNaN(dateObj.getTime()) ? "" : formatDate(dateObj, format);

    return (
        <span className="text-xxs font-thin text-gray-500 uppercase">
            {prefix}{" "}
            <span
                className={`text-black ${
                    darkMode ? "text-white" : "text-black"
                }`}
            >
                {formattedDate}
            </span>
        </span>
    );
};

export default Date;
