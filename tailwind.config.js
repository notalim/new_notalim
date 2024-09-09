/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html",
        
  ],
    theme: {
        extend: {
            colors: {
                myoffwhite: "#FFFCF2",
                mybeige: "#CCC5B9",
                mydarkgray: "#403D39",
                myblack: "#252422",
                myflame: "#EB5E28",
            },
            fontFamily: {
                sans: ["Helvetica", "Arial", "sans-serif"],
            },
            animation: {
                scroll: 'scroll 60s linear infinite',
            },
            keyframes: {
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                }
            }
        },
    },
    plugins: [],
};
