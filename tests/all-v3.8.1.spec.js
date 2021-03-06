const { onPreRenderHTML } = require('../gatsby-ssr.js');
const { Driver } = require('./Driver.js');

describe('all v3.8.1', () => {
  it('should do all transformation', () => {
    const driver = new Driver();

    driver.mockHead([
      {
        type: 'style',
        key: null,
        ref: null,
        props: {
          'data-href': '/styles.ba9894c6f3837a50e142.css',
          'data-identity': 'gatsby-global-css',
          dangerouslySetInnerHTML: {
            __html: '.main-module--post--JaqUm{border-bottom:1px solid rgba(0,0,0,.1)}',
          },
        },
        _owner: null,
      },
      {
        type: 'meta',
        key: 'generator-3.8.1',
        ref: null,
        props: {
          name: 'generator',
          content: 'Gatsby 3.8.1',
        },
        _owner: null,
      },
      {
        type: 'title',
        key: 'Velo by Wix: The utils for repeated item scope event handlers | Web Development Blog',
        ref: null,
        props: {
          'data-react-helmet': true,
          children: 'Velo by Wix: The utils for repeated item scope event handlers | Web Development Blog',
        },
        _owner: null,
      },
      {
        type: 'script',
        key: '0',
        ref: null,
        props: {
          'data-react-helmet': true,
          type: 'application/ld+json',
          dangerouslySetInnerHTML: {
            __html: '{"@context":"https://schema.org","@type":"BlogPosting","name":"Alexander Zaytsev | Web Development Blog","headline":"Velo by Wix: The utils for repeated item scope event handlers","description":"npm library with utils for event handlers in Repeater","inLanguage":"en","url":"https://shoonia.site/the-utils-for-repeated-item-scope-event-handlers","datePublished":"2021-06-23T12:00:00.000Z","dateModified":"2021-06-23T12:00:00.000Z","author":{"@type":"Person","name":"Alexander Zaytsev"},"publisher":{"@type":"Organization","name":"Alexander Zaytsev","email":"zaytsev126@gmail.com","sameAs":"https://twitter.com/_shoonia","logo":{"@type":"ImageObject","url":"https://shoonia.site/icons/icon-512x512.png"}},"image":{"@type":"ImageObject","url":"https://shoonia.site/images/velo.png"},"mainEntityOfPage":{"@type":"itemPage","@id":"https://shoonia.site/the-utils-for-repeated-item-scope-event-handlers","url":"https://shoonia.site/the-utils-for-repeated-item-scope-event-handlers"}}',
          },
        },
        _owner: null,
      },
      {
        type: 'link',
        key: 'app-45db90d0dadec37bb48d.js',
        ref: null,
        props: {
          as: 'script',
          rel: 'preload',
          href: '/app-45db90d0dadec37bb48d.js',
        },
        _owner: null,
      },
      {
        type: 'link',
        key: '/page-data/the-utils-for-repeated-item-scope-event-handlers/page-data.json',
        ref: null,
        props: {
          as: 'fetch',
          rel: 'preload',
          href: '/page-data/the-utils-for-repeated-item-scope-event-handlers/page-data.json',
          crossOrigin: 'anonymous',
        },
        _owner: null,
      },
    ]);

    driver.mockPostBody([
      {
        type: 'script',
        key: 'script-loader',
        ref: null,
        props: {
          id: 'gatsby-script-loader',
          dangerouslySetInnerHTML: {
            __html: '/*<![CDATA[*/window.pagePath="/the-utils-for-repeated-item-scope-event-handlers";/*]]>*/',
          },
        },
        _owner: null,
      },
      {
        type: 'script',
        key: 'chunk-mapping',
        ref: null,
        props: {
          id: 'gatsby-chunk-mapping',
          dangerouslySetInnerHTML: {
            __html: '/*<![CDATA[*/window.___chunkMapping={"polyfill":["/polyfill-fa0ce16e96a65820ea36.js"],"app":["/app-45db90d0dadec37bb48d.js"],"component---src-pages-404-jsx":["/component---src-pages-404-jsx-741c03740fc9b85b5ba1.js"],"component---src-pages-index-jsx":["/component---src-pages-index-jsx-cece42efe51515412608.js"],"component---src-templates-post-jsx":["/component---src-templates-post-jsx-5552dd8a98322adcb231.js"]};/*]]>*/',
          },
        },
        _owner: null,
      },
      {
        type: 'script',
        key: '/polyfill-fa0ce16e96a65820ea36.js',
        ref: null,
        props: {
          src: '/polyfill-fa0ce16e96a65820ea36.js',
          noModule: true,
        },
        _owner: null,
      },
      {
        type: 'script',
        key: '/app-45db90d0dadec37bb48d.js',
        ref: null,
        props: {
          src: '/app-45db90d0dadec37bb48d.js',
          async: true,
        },
        _owner: null,
      },
    ]);

    onPreRenderHTML(
      driver.api,
      driver.enableAllWith(),
    );

    expect(driver.api.replaceHeadComponents).toHaveBeenCalledTimes(1);
    expect(driver.api.replaceHeadComponents).toHaveBeenCalledWith([
      {
        type: 'link',
        key: null,
        ref: null,
        props: {
          href: '/styles.ba9894c6f3837a50e142.css',
          rel: 'stylesheet',
        },
        _owner: null,
      },
      {
        type: 'title',
        key: 'Velo by Wix: The utils for repeated item scope event handlers | Web Development Blog',
        ref: null,
        props: {
          children: 'Velo by Wix: The utils for repeated item scope event handlers | Web Development Blog',
        },
        _owner: null,
      },
      {
        type: 'script',
        key: '0',
        ref: null,
        props: {
          type: 'application/ld+json',
          dangerouslySetInnerHTML: {
            __html: '{"@context":"https://schema.org","@type":"BlogPosting","name":"Alexander Zaytsev | Web Development Blog","headline":"Velo by Wix: The utils for repeated item scope event handlers","description":"npm library with utils for event handlers in Repeater","inLanguage":"en","url":"https://shoonia.site/the-utils-for-repeated-item-scope-event-handlers","datePublished":"2021-06-23T12:00:00.000Z","dateModified":"2021-06-23T12:00:00.000Z","author":{"@type":"Person","name":"Alexander Zaytsev"},"publisher":{"@type":"Organization","name":"Alexander Zaytsev","email":"zaytsev126@gmail.com","sameAs":"https://twitter.com/_shoonia","logo":{"@type":"ImageObject","url":"https://shoonia.site/icons/icon-512x512.png"}},"image":{"@type":"ImageObject","url":"https://shoonia.site/images/velo.png"},"mainEntityOfPage":{"@type":"itemPage","@id":"https://shoonia.site/the-utils-for-repeated-item-scope-event-handlers","url":"https://shoonia.site/the-utils-for-repeated-item-scope-event-handlers"}}',
          },
        },
        _owner: null,
      },
    ]);

    expect(driver.api.replacePostBodyComponents).toHaveBeenCalledTimes(1);
    expect(driver.api.replacePostBodyComponents).toHaveBeenCalledWith([]);
  });
});
