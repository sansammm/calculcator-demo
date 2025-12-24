/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e',
                },
                dark: {
                    bg: '#0f172a',
                    surface: '#1e293b',
                    border: '#334155',
                },
            },
            fontFamily: {
                sans: ['Space Grotesk', 'system-ui', '-apple-system', 'sans-serif'],
            },
            borderRadius: {
                'xl': '1rem',
                '2xl': '1.5rem',
            },
            boxShadow: {
                'glow': '0 0 20px rgba(14, 165, 233, 0.3)',
                'glow-lg': '0 0 40px rgba(14, 165, 233, 0.4)',
            },
        },
    },
    plugins: [],
}
