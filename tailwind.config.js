/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "btn-gradient": "linear-gradient(130.88deg, #A854E9 -9.14%, #4F91FC 283.16%)",
        'Bghero': "url('/assets/images/web.p/hero-bg-img.webp')",
        'Bgnewsletter': "url('/assets/images/web.p/newsletter-bg-img.webp')",
        'Bgfooter': "url('/assets/images/web.p/footer-bg-img.webp')",
      },
      backgroundSize: {
        'bgsize': "100% 100%"
      },
    },
  },
  plugins: [],
};
