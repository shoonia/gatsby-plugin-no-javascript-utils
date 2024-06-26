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
  {
    type: 'meta',
    ref: null,
    props: {
      name: 'description',
      'data-gatsby-head': true,
      content: 'My Blog',
    },
    _owner: null,
  },
];

describe('removeHeadDataAttrs', () => {
  const driver = new Driver();

  afterEach(() => {
    driver.reset();
  });

  it('should remove data attrs', () => {
    driver.mockHead(getMock()).apply(onPreRenderHTML).disableAllWith({
      removeHeadDataAttrs: true,
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
      {
        type: 'meta',
        ref: null,
        props: {
          name: 'description',
          content: 'My Blog',
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
});
