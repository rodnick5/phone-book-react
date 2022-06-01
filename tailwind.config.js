module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction:{
        DEFAULT: "ease-in-out"
      } ,
      transitionDuration: {
        DEFAULT: "300ms"
      },
      screens:{
        "sm": {"max":"560px"},
        "md": {"max": "768px"}
      }
    },
  },
  plugins: [],
}
