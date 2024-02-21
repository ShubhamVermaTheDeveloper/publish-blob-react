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

create the .env file and configure the environment variable

```
REACT_APP_APPWRITE_URL=<---------------->
REACT_APP_APPWRITE_PROJECT_ID=<---------------->
REACT_APP_APPWRITE_DATABASE_ID=<---------------->
REACT_APP_APPWRITE_COLLECTION_ID=<---------------->
REACT_APP_APPWRITE_BUCKET_ID=<---------------->
```
