# gatsby-plugin-no-javascript-utils

[![npm version](https://img.shields.io/npm/v/gatsby-plugin-no-javascript-utils.svg)](https://www.npmjs.com/package/gatsby-plugin-no-javascript-utils)

The utils for static site without JavaScript

Support Gatsby v2, v3, v4 and v5

## Install

```bash
npm i gatsby-plugin-no-javascript-utils
#or
yarn add gatsby-plugin-no-javascript-utils
```

## How to use

```js
// In your gatsby-config.js
module.exports = {
  siteMetadata: {
    title: 'Blog',
    description: 'Web Blog',
  },
  polyfill: false,
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',

    /* ... */

    // make sure it is included last in the plugins array.
    'gatsby-plugin-no-javascript-utils',
  ],
}
```

## Options

```js
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-no-javascript-utils',
      options: {
        noScript: true,
        noSourcemaps: true,
        removeGeneratorTag: true,
        removeHeadDataAttrs: true,
        noInlineStyles: false,
        removeGatsbyAnnouncer: false,
      },
    },
  ],
}
```

**`noScript?: boolean (default: true)`**

Removes all scripts and preload links for scripts and page-data fetching.

```diff
<head>
  <meta charSet="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
- <link as="fetch" rel="preload" href="/page-data/index/page-data.json" crossorigin="anonymous">
- <link as="script" rel="preload" href="/commons-04bd7a1d51d6af5d636b.js">

  ⋯

- <script id="gatsby-chunk-mapping"> ⋯ </script>
- <script src="/polyfill-fa0c516ee6a6b8206a36.js" nomodule=""></script>
- <script src="/commons-04bd7a1d51d6af5d636b.js" async=""></script>
</body>
```

**`noSourcemaps?: boolean (default: true)`**

Disable generation of JavaScript sourcemaps.

**`removeGeneratorTag?: boolean (default: true)`**

Remove generator meta tag

```diff
<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
- <meta name="generator" content="Gatsby 2.21.4">
  <title>My Blog</title>
```

**`removeHeadDataAttrs?: boolean (default: true)`**

Removes [data-react-helmet](https://github.com/nfl/react-helmet) and [data-gatsby-head](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/) data attributes

```diff
- <html lang="en" data-react-helmet="lang">
- <meta name="description" content="my blog" data-gatsby-head="true">
+ <html lang="en">
+ <meta name="description" content="my blog">
```

**`noInlineStyles?: boolean (default: false)`**

Replacing `<style data-href>` tag with `<link>` tag for reducing the size of HTML files and browser caching of CSS files.

```diff
- <style data-href="/styles.457cfd10c24f55260d5a.css"> ⋯ </style>
+ <link rel="stylesheet" href="/styles.457cfd10c24f55260d5a.css">
```

**`removeGatsbyAnnouncer?: boolean (default: false)`**

The `<div id="gatsby-announcer" ⋯>` is announcing route changes in a single-page application where the pages update without a reload.  It may be unnecessary on a static sites when you don't use any JavaScript.

More: [Accessibility Improvements to Client Side Routing in Gatsby](https://www.gatsbyjs.com/blog/2020-02-10-accessible-client-side-routing-improvements/)

```diff
<body>
  <div id="___gatsby">
    <div style="outline:none" tabindex="-1" id="gatsby-focus-wrapper"> ⋯ </div>
-   <div id="gatsby-announcer" style="position:absolute;top:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0" aria-live="assertive" aria-atomic="true"></div>
  </div>
```

## License

[MIT](./LICENSE)
