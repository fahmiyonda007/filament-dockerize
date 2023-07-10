const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./vendor/filament/**/*.blade.php",
    "./vendor/koalafacade/filament-alertbox/**/*.blade.php",
    "./vendor/awcodes/shout/resources/views/**/*.blade.php",
    "./vendor/awcodes/filament-tiptap-editor/resources/views/**/*.blade.php",
    './vendor/savannabits/filament-flatpickr/**/*.blade.php',
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        danger: colors.red,
        primary: colors.orange,
        success: colors.teal,
        warning: colors.cyan
      }
    }
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")]
};
