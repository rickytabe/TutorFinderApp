/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        gradient: "gradient 3s ease infinite",
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      colors: {
        primary: "#4CAF50", // Green
        secondary: "#2196F3", // Blue
        accent: "#FFC107", // Amber
        background: "#F9F9F9", // Light Gray
        text: "#212121", // Dark Gray/Black
      },
      fontFamily: {
        heading: ["serif"], // For headings
        body: ["Roboto", "sans-serif"], // For body text
      },
      // **Button Styles**
      borderRadius: {
        button: "8px", // Custom button border radius
      },
      spacing: {
        buttonPadding: "12px", // Custom padding for buttons
      },

      // **Icon Sizes**
      width: {
        iconSm: "16px", // Small icon
        iconMd: "24px", // Medium icon
        iconLg: "32px", // Large icon
      },
      height: {
        iconSm: "16px", // Small icon
        iconMd: "24px", // Medium icon
        iconLg: "32px", // Large icon
      },

      // **Custom Button Sizes**
      buttonSizes: {
        sm: "py-1 px-2 text-sm",
        md: "py-2 px-4 text-base",
        lg: "py-3 px-6 text-lg",
      },
    },
  },
  plugins: [],
};
