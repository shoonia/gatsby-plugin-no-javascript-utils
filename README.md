# gatsby-plugin-no-javascript-utils

[![npm version](https://img.shields.io/npm/v/gatsby-plugin-no-javascript-utils.svg)](https://www.npmjs.com/package/gatsby-plugin-no-javascript-utils)

The utils for static site without javascript

> TODO: remove Gatsby tags in body

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
        noSourcemap: true,
        removeGeneratorTag: true,
        removeReactHelmetAttrs: true,
        noInlineStyles: false,
      },
    },
  ],
}
```

## Options

|    Name                    |   Type      | Default  | Description |
|:--------------------------:|:-----------:|:--------:|:-----------:|
| **noSourcemap**            | `{Boolean}` | `true`   | Disabling generation sourcemap
| **removeGeneratorTag**     | `{Boolean}` | `true`   | [Remove generator meta tag](#remove-generator-meta-tag)
| **removeReactHelmetAttrs** | `{Boolean}` | `true`   | [Remove react-helmet data attributes](#Remove-react-helmet-data-attributes)
| **noInlineStyles**         | `{Boolean}` | `false`  | [replace `<style data-href>` tag with `<link>` tag](#no-inline-styles)

### Remove generator meta tag

```diff
<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
- <meta name="generator" content="Gatsby 2.21.4">
  <title>My Blog</title>
```

### Remove react-helmet data attributes

```diff
- <html lang="en" data-react-helmet="lang">
+ <html lang="en">
```

### No inline styles

Replacing `<style data-href>` tag with `<link>` tag for reducing the size of HTML files and caching of CSS files in the browser.

```diff
- <style data-href="/styles.457cfd10c24f55260d5a.css"> ⋯ </style>
+ <link rel="stylesheet" href="/styles.457cfd10c24f55260d5a.css" type="text/css"/>
```

## License

[MIT](./LICENSE)
