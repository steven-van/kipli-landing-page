module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-green": "#2b555a",
        "light-green": "#f0f6ed",
        "ocean-blue": "#2c525a",
        orange: "#B85E4C",
      },
      fontFamily: {
        "avenir-heavy": ["Avenir-Heavy"],
        "avenir-medium": ["Avenir-Medium"],
        "mackinac-pro-medium": ["P22-Mackinac-Pro-Medium"],
        "mackinac-regular": ["P22-Mackinac-Regular"],
      },
    },
  },
  plugins: [],
};
