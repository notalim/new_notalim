import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
    const { isDark } = useTheme();
    return (
        <div className="container mx-auto px-2 mt-6 mb-6">
            <div className="text-center">
                <div  className="text-gray-800 space-x-4">
                    <a
                        className="hover:text-gray-800 text-xxs uppercase text-gray-500"
                        href="https://pg-webring.vercel.app/prev?site=notalim.com"
                    >
                        prev
                    </a>
                    <a
                        href="https://pg-webring.vercel.app"
                        className={`${isDark ? "text-gray-300" : "text-gray-900"} text-md underline`}
                    >
                        pixl garden webring
                    </a>
                    <a
                        className="hover:text-gray-800 text-xxs uppercase text-gray-500"
                        href="https://pg-webring.vercel.app/next?site=notalim.com"
                    >
                        next
                    </a>
                </div>
                <a
                    href="https://github.com/notalim"
                    className="text-gray-600 hover:text-gray-800 font-thin uppercase text-xs"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visit my GitHub
                </a>

                <p className="text-gray-500 text-xxs mt-4">
                    Inspired by{" "}
                    <a
                        className="hover:text-gray-800"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        index.year0001.com
                    </a>
                </p>
                <p className="text-gray-500 text-xxs">2024</p>
            </div>
        </div>
    );
};

export default Footer;
