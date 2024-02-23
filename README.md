# simple blog application

### clone the repo

```
git clone git@github.com:ShubhamVermaTheDeveloper/publish-blob-react.git
```

### install dependencies

```
npm i
```

## configure the tailwindcss(if needed)

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

### visit this url for [Email and passwrod login](https://appwrite.io/docs/products/auth/email-password)

### tiny cloud

[tiny cloud](https://www.tiny.cloud/docs/tinymce/6/react-cloud/)
