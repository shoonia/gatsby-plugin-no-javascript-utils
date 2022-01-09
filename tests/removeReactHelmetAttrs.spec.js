const { onPreRenderHTML } = require('../gatsby-ssr.js');
const { Driver } = require('./Driver.js');

const getMock = () => [
  {
    type: 'title',
    key: 'Blog',
    ref: null,
    props: {
      'data-react-helmet': true,
      children: 'Blog',
    },
    _owner: null,
  },
];

describe('removeReactHelmetAttrs', () => {
  it('should remove data attrs', () => {
    const driver = new Driver();

    driver.mockHead(getMock()).apply(onPreRenderHTML).disableAllWith({
      removeReactHelmetAttrs: true,
    });

    expect(driver.api.replaceHeadComponents).toHaveBeenCalledTimes(1);
    expect(driver.api.replaceHeadComponents).toHaveBeenCalledWith([
      {
        type: 'title',
        key: 'Blog',
        ref: null,
        props: {
          children: 'Blog',
        },
        _owner: null,
      },
    ]);
  });

  it('should not remove data attrs', () => {
    const driver = new Driver();

    driver.mockHead(getMock()).apply(onPreRenderHTML).disableAllWith();

    expect(driver.api.replaceHeadComponents).toHaveBeenCalledTimes(1);
    expect(driver.api.replaceHeadComponents).toHaveBeenCalledWith(getMock());
  });

  it('should not break the build if in head components include an array', () => {
    const driver = new Driver();

    driver.mockHead([ [] ]).apply(onPreRenderHTML).enableAllWith();

    expect(driver.api.replaceHeadComponents).toHaveBeenCalledTimes(1);
    expect(driver.api.replaceHeadComponents).toHaveBeenCalledWith([[]]);
  });
});
