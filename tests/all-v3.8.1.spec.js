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
            __html: '.main{border-bottom:1px solid rgba(0,0,0,.1)}',
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
        key: 'Web Development Blog',
        ref: null,
        props: {
          'data-react-helmet': true,
          children: 'Web Development Blog',
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
            __html: '{}',
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
            __html: '/*<![CDATA[*/window.___chunkMapping={};/*]]>*/',
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

    driver.apply(onPreRenderHTML).enableAllWith();

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
        key: 'Web Development Blog',
        ref: null,
        props: {
          children: 'Web Development Blog',
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
            __html: '{}',
          },
        },
        _owner: null,
      },
    ]);

    expect(driver.api.replacePostBodyComponents).toHaveBeenCalledTimes(1);
    expect(driver.api.replacePostBodyComponents).toHaveBeenCalledWith([]);
  });
});
