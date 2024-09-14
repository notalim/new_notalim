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
                myflame: "#EB5E28",
                primary: 'var(--bg-primary)',
                'primary-text': 'var(--text-primary)',
                inverse: 'var(--bg-inverse)',
                'inverse-text': 'var(--text-inverse)',
                gray: {
                    50: '#f9fafb',
                    100: '#f3f4f6',
                    200: '#e5e7eb',
                    300: '#d1d5db',
                    400: '#9ca3af',
                    500: '#6b7280',
                    600: '#4b5563',
                    700: '#374151',
                    800: '#1f2937',
                    900: '#111827',
                    950: '#030712',
                },
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
    darkMode: 'class',
};