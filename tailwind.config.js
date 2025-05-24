/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './resources/views/**/*.antlers.html', // Deine Antlers-Templates
    './resources/views/**/*.html',        // Falls du auch normale HTML-Dateien hast
    './resources/css/**/*.css',           // Deine CSS-Dateien (für @apply etc.)
    './resources/js/**/*.js',             // JavaScript-Dateien (z.B. Vue, Alpine.js)
    './content/**/*.md',                  // Statamic Markdown-Dateien
    './content/**/*.yaml',                // Statamic YAML-Dateien (z.B. Bard-Felder)
    // Wenn du weitere Ordner hast, in denen du Tailwind-Klassen verwendest,
    // füge sie hier hinzu. Zum Beispiel: './path/to/your/components/**/*.antlers.html'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'), // Füge das Typography Plugin hier hinzu, da du es in site.css importierst
  ],
}