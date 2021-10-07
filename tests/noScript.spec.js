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

    onPreRenderHTML(
      driver.api,
      driver.disableAllWith({ noScript: true }),
    );

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
});
