/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        taskoo: {
          primary: "#FF5C5C",
          secondary: "#FFD6A5",
          accent: "#B9FBC0",
          neutral: "#2B2B2B",
          "base-100": "#FDF4F5",
          "neutral-content": "#FFFFFF",
          "primary-content": "#FFFFFF",
          info: "#CAB8FF",
          success: "#B1D199",
          warning: "#FFD6A5",
          error: "#FF5C5C",
        },
      },
    ],
  },
};
