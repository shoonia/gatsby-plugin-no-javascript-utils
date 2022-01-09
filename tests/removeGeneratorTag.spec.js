const { onPreRenderHTML } = require('../gatsby-ssr.js');
const { Driver } = require('./Driver.js');

const getMock = () => [
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
    key: 'Blog',
    ref: null,
    props: {
      'data-react-helmet': true,
      children: 'Blog',
    },
    _owner: null,
  },
];

describe('removeGeneratorTag', () => {
  it('should remove generator tag', () => {
    const driver = new Driver();

    driver.mockHead(getMock()).apply(onPreRenderHTML).disableAllWith({
      removeGeneratorTag: true,
    });

    expect(driver.api.replaceHeadComponents).toHaveBeenCalledTimes(1);
    expect(driver.api.replaceHeadComponents).toHaveBeenCalledWith([
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
    ]);
  });

  it('should not remove generator tag', () => {
    const driver = new Driver();

    driver.mockHead(getMock()).apply(onPreRenderHTML).disableAllWith();

    expect(driver.api.replaceHeadComponents).toHaveBeenCalledTimes(1);
    expect(driver.api.replaceHeadComponents).toHaveBeenCalledWith(getMock());
  });
});
