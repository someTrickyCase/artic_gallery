import type { Config } from "tailwindcss";

export default {
    content: [
        "./screens/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                gray: "var(--gray)",
            },
            keyframes: {
                spinLeft: {
                    to: { transform: "rotate(-360deg)" },
                },
            },
            animation: {
                "spin-left": "spinLeft 0.5s linear infinite",
            },
        },
    },
    plugins: [],
} satisfies Config;
