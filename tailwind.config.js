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
        forest: "#2A555A",
        "dark-forest": "#305157",
        "light-blue": "#5ACAC3",
        cyan: "#2DC2BB",
      },
      fontFamily: {
        "avenir-heavy": ["Avenir-Heavy"],
        "avenir-medium": ["Avenir-Medium"],
        "avenir-roman": ["Avenir-Roman"],
        "mackinac-pro-medium": ["P22-Mackinac-Pro-Medium"],
        "mackinac-regular": ["P22-Mackinac-Regular"],
        "mackinac-pro-bold": ["P22-Mackinac-Pro-Bold"],
        "brownhill-script": ["Brownhill-Script"],
      },
    },
  },
  plugins: [],
};
