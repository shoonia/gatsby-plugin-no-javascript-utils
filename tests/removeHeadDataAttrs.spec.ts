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
  it('should remove data attrs', () => {
    const driver = new Driver();

    driver.mockHead(getMock()).apply(onPreRenderHTML).disableAllWith({
      removeHeadDataAttrs: true,
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
    const driver = new Driver();

    driver.mockHead(getMock()).apply(onPreRenderHTML).disableAllWith();

    expect(driver.api.replaceHeadComponents).toHaveBeenCalledTimes(1);
    expect(driver.api.replaceHeadComponents).toHaveBeenCalledWith(getMock());
  });
});
