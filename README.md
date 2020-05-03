# gatsby-plugin-no-javascript-utils

> TODO: remove Gatsby tags in body

The utils for static site without javascript

## Install

```bash
npm i gatsby-plugin-no-javascript gatsby-plugin-no-javascript-utils
#or
yarn add gatsby-plugin-no-javascript gatsby-plugin-no-javascript-utils
```

## How to use

```js
// In your gatsby-config.js
module.exports = {
  siteMetadata: {
    title: 'Blog',
    description: 'Web Blog'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',

    /* ... */

    // make sure it is included last in the plugins array.
    'gatsby-plugin-no-javascript',
    'gatsby-plugin-no-javascript-utils',
  ],
}
```

## Options

```js
// In your gatsby-config.js
module.exports = {
  plugins: [
    'gatsby-plugin-no-javascript',
    {
      resolve: 'gatsby-plugin-no-javascript-utils',
      options: {
        noSourcemap: true, // disable sourcemaps
        removeGeneratorTag: true,
        removeReactHelmetAttrs: true,
        noInlineStyles: false,
      },
    },
  ],
}
```

### Remove Generator Meta Tag

```diff
<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
- <meta name="generator" content="Gatsby 2.21.4">
  <title>My Blog</title>
```

### Remove react-helmet attributes

```diff
- <html lang="en" data-react-helmet="lang">
+ <html lang="en">
```

### No inline styles

```diff
- <style data-href="/styles.457cfd10c24f55260d5a.css">...</style>
+ <link rel="stylesheet" href="/styles.457cfd10c24f55260d5a.css" type="text/css"/>
```

## License

[MIT](./LICENSE)
