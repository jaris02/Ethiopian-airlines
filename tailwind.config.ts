import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
      customgrey:'#EEEEEE',
      customgreen:'#548F46',
      customdarkgrey:'#565656'
      },
      boxShadow: {
        'custom-multi': '0px 1.85px 3.15px 0px #548F4604, 0px 8.15px 6.52px 0px #548F4607, 0px 20px 13px 0px #548F4609, 0px 38.52px 25.48px 0px #548F460B, 0px 64.81px 46.85px 0px #548F460E, 0px 100px 80px 0px #548F4612',
      },
      backgroundImage: {
        'custom-gradient': 'radial-gradient(circle, rgba(84, 143, 70, 0.04), rgba(84, 143, 70, 0.07), rgba(84, 143, 70, 0.09), rgba(84, 143, 70, 0.11), rgba(84, 143, 70, 0.14), rgba(84, 143, 70, 0.18))',
      },
    },
  },
  plugins: [],
};
export default config;
