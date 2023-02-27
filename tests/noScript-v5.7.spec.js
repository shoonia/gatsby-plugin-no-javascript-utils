const { onPreRenderHTML } = require('../gatsby-ssr.js');
const { Driver } = require('./Driver.js');

describe('noScript v5.7', () => {
  it('should remove "_gatsby-scripts" component in v5.7', () => {
    const driver = new Driver();

    driver.mockPostBody([
      {
        type: 'script',
        key: 'script-loader',
        ref: null,
        props: {
          id: 'gatsby-script-loader',
          dangerouslySetInnerHTML: {
            __html: '/*<![CDATA[*/window.pagePath="/404.html";/*]]>*/',
          },
        },
        _owner: null,
      },
      {
        key: null,
        ref: null,
        props: {
          sliceId: '_gatsby-scripts',
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
