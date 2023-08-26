import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'smartphone':"url('/smartphone.jpg')",
        'blackpc':"url('/blackpc.jpg')",
        'campas':"url('/campas.jpg')",
        'factly':"url('/factly.webp')",
        'kumitoru':"url('/kumitoru.webp')",
        'maiking':"url('/maiking.jpg')",
        'oohira':"url('/oohira.webp')",
        'pc':"url('/pc.jpg')",
        'scroll':"url('/scroll.webp')",
      },
    },
  },
  plugins: [],
}
export default config
