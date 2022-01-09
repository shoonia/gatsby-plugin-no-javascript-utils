const { onPreRenderHTML } = require('../gatsby-ssr.js');
const { Driver } = require('./Driver.js');

describe('noScript', () => {
  it('should not remove a ld+json script', () => {
    const driver = new Driver();

    driver.mockPostBody([
      {
        type: 'script',
        key: '0',
        ref: null,
        props: {
          src: '/app-45db90d0dadec37bb48d.js',
          async: true,
        },
        _owner: null,
      },
      {
        type: 'script',
        key: '1',
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

    driver.apply(onPreRenderHTML).disableAllWith({
      noScript: true,
    });

    expect(driver.api.replacePostBodyComponents).toHaveBeenCalledTimes(1);
    expect(driver.api.replacePostBodyComponents).toHaveBeenCalledWith([
      {
        type: 'script',
        key: '1',
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
  });

  it('should remove scripts', () => {
    const driver = new Driver();

    driver.mockPostBody([
      {
        type: 'script',
        key: '1',
        ref: null,
        props: {
          type: 'text/javascript',
          dangerouslySetInnerHTML: {
            __html: 'let x = 100;',
          },
        },
        _owner: null,
      },
      {
        type: 'script',
        key: '2',
        ref: null,
        props: {
          type: 'application/javascript',
          dangerouslySetInnerHTML: {
            __html: 'let y = 100;',
          },
        },
        _owner: null,
      },
    ]);

    driver.apply(onPreRenderHTML).disableAllWith({
      noScript: true,
    });

    expect(driver.api.replacePostBodyComponents).toHaveBeenCalledTimes(1);
    expect(driver.api.replacePostBodyComponents).toHaveBeenCalledWith([]);
  });

  it('should remove a module script', () => {
    const driver = new Driver();

    driver.mockPostBody([
      {
        type: 'script',
        key: '1',
        ref: null,
        props: {
          type: 'module',
          dangerouslySetInnerHTML: {
            __html: 'let x = 100;',
          },
        },
        _owner: null,
      },
    ]);

    driver.apply(onPreRenderHTML).disableAllWith({
      noScript: true,
    });

    expect(driver.api.replacePostBodyComponents).toHaveBeenCalledTimes(1);
    expect(driver.api.replacePostBodyComponents).toHaveBeenCalledWith([]);
  });
});
