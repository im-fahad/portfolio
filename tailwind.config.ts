import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                Inter: ["Inter", "sans-serif"],
                Roboto: ["Roboto", "sans-serif"],
                Raleway: ["Raleway", "sans-serif"],
                mdi: ["Material Design Icons"],
            },
            boxShadow: {
                wrapper: "1px 2px 20px"
            },
            colors: {
                // primary: {
                //     DEFAULT: '#71717A',
                //     50: '#D0D0D3',
                //     100: '#C5C5C9',
                //     200: '#B0B0B6',
                //     300: '#9B9BA2',
                //     400: '#85858E',
                //     500: '#71717A',
                //     600: '#56565D',
                //     700: '#3B3B40',
                //     800: '#202023',
                //     900: '#050506',
                //     950: '#000000'
                // },

                // secondary: {
                //     DEFAULT: '#F97316',
                //     50: '#FEDFC9',
                //     100: '#FDD3B5',
                //     200: '#FCBB8D',
                //     300: '#FBA366',
                //     400: '#FA8B3E',
                //     500: '#F97316',
                //     600: '#D25905',
                //     700: '#9B4204',
                //     800: '#642B03',
                //     900: '#2D1301',
                //     950: '#120800'
                // },

                primary: {
                    DEFAULT: '#64748b',
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',
                    950: '#020617'
                },
                secondary: {
                    DEFAULT: '#14b8a6',
                    50: '#f0fdfa',
                    100: '#ccfbf1',
                    200: '#99f6e4',
                    300: '#5eead4',
                    400: '#2dd4bf',
                    500: '#14b8a6',
                    600: '#0d9488',
                    700: '#0f766e',
                    800: '#115e59',
                    900: '#134e4a',
                    950: '#042f2e'
                }
            }
        },
    },
    plugins: [],
};
export default config;
