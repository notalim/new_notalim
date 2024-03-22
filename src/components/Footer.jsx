const Footer = () => {
    return (
        <div className="container mx-auto px-2 mt-10 mb-5">
            <div className="text-center">
                <a
                    href="https://github.com/notalim"
                    className="text-gray-600 hover:text-gray-800 font-thin uppercase text-xs"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visit my GitHub
                </a>

                <p className="text-gray-500 text-xxs mt-2">
                    Inspired by{" "}
                    <a
                        href="https://index.year0001.com"
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
