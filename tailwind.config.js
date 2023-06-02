/* @type {import('tailwindcss').Config} ` is a JSDoc type annotation that specifies the type of
the exported object in this JavaScript file. Specifically, it indicates that the exported object
conforms to the `Config` interface defined in the `tailwindcss` module. This is useful for providing
type information to editors and tools that support TypeScript or JSDoc annotations. */
/**@type {import('tailwindcss').Config} */
module.exports = {
  important:true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors:{
      indigoTitle: "#9094D5",
      indigoText: "#C3C6F1",
      pink: '#FCBABB',
      gray: "#B3B3B3",
      white: "#FFFFFF",
      transparent2: "#FFFFFF00",
    },
    extend: {
      animation: {
        'move-and-opacity-text': 'moveAndOpacityText 0.8s ease-out',
        'move-and-opacity-title': 'moveAndOpacityTitle 0.8s ease-out',
        'move-and-opacity-hr': 'moveAndOpacityHr 0.5s ease-in',
        'playing-pause-stop': 'playingPauseNStop 2s ease-out infinite',
        'play-triangle-anim' : 'playTriangleAnim 0.5s ease-out fowards',
        'play-triangle-anim-inverse' : 'playTriangleAnimInverse 0.8s ease-out forwards',
        'play-triangle-fade' : 'playTriangleFade 0.5s ease-out forwards',
        'button-hover' : 'buttonHover 2s ease-out infinite',
      },
      transitionProperty: {
        'background-color': 'background-color',
      }
    },
  },
  plugins: [],
}

