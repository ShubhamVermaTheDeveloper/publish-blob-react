# simple blog application

```
npm create vite@latest
```

## configure the tailwindcss

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

### tailwind.config.js : file look like this

```tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

```
npm run dev
```

### install appwrite

```
npm install appwrite
```
