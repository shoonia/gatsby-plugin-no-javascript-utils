const { describe, it, afterEach } = require('node:test');

const { expect } = require('./expect.js');
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
  const driver = new Driver();

  afterEach(() => {
    driver.reset();
  });

  it('should remove data attrs', () => {
    driver.mockHead(getMock()).apply(onPreRenderHTML).disableAllWith({
      removeReactHelmetAttrs: true,
    });

    expect(driver.api.replaceHeadComponents).toHaveBeenCalledTimes(1);
    expect(driver.api.replaceHeadComponents).toHaveBeenLastCalledWith([
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
    driver.mockHead(getMock()).apply(onPreRenderHTML).disableAllWith();

    expect(driver.api.replaceHeadComponents).toHaveBeenCalledTimes(1);
    expect(driver.api.replaceHeadComponents).toHaveBeenLastCalledWith(getMock());
  });

  it('should not break the build if in head components include an array', () => {
    driver.mockHead([ [] ]).apply(onPreRenderHTML).enableAllWith();

    expect(driver.api.replaceHeadComponents).toHaveBeenCalledTimes(1);
    expect(driver.api.replaceHeadComponents).toHaveBeenLastCalledWith([[]]);
  });
});
