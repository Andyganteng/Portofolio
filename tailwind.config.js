/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // Enable class-based dark mode
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"Segoe UI"',
                    'Roboto',
                    'Helvetica',
                    'Arial',
                    'sans-serif'
                ],
            },
            colors: {
                apple: {
                    light: '#f5f5f7', // iOS Light background
                    dark: '#000000',  // iOS Dark perfect black
                    gray: '#1c1c1e',  // iOS Dark card background
                    textLight: '#000000', // Pure black text for light mode
                    textDark: '#ffffff',  // Pure white text for dark mode
                }
            }
        },
    },
    plugins: [],
}
