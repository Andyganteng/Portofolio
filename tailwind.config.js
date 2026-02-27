/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
            },
            colors: {
                // Professional warm neutral scale
                pro: {
                    bg: '#f9f9f8',
                    card: '#ffffff',
                    muted: '#f3f3f1',
                    border: '#e5e5e2',
                    text: '#18181b',
                    text2: '#52525b',
                    text3: '#a1a1aa',
                    'dark-bg': '#0e0e0f',
                    'dark-card': '#161618',
                    'dark-muted': '#1c1c1e',
                    'dark-border': '#27272a',
                }
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease forwards',
                'blob': 'blob 8s infinite',
            },
            keyframes: {
                fadeIn: {
                    from: { opacity: '0' },
                    to: { opacity: '1' },
                },
                blob: {
                    '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
                    '33%': { transform: 'translate(30px, -20px) scale(1.05)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
                },
            },
        },
    },
    plugins: [],
}
