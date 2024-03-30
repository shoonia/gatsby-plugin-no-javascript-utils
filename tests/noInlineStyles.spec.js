const { onPreRenderHTML } = require('../gatsby-ssr.js');
const { Driver } = require('./Driver.js');

const getMock = () => [
  {
    type: 'style',
    key: null,
    ref: null,
    props:
    {
      'data-href': '/styles.hash.css',
      dangerouslySetInnerHTML: 'p{color:red}',
    },
    _owner: null,
  },
];

describe('noInlineStyles', () => {
  const driver = new Driver();

  afterEach(() => {
    driver.reset();
  });

  it('should replace style tag to link', () => {
    driver.mockHead(getMock()).apply(onPreRenderHTML).disableAllWith({
      noInlineStyles: true,
    });

    expect(driver.api.replaceHeadComponents).toHaveBeenCalledTimes(1);
    expect(driver.api.replaceHeadComponents).toHaveBeenLastCalledWith([
      {
        type: 'link',
        key: null,
        ref: null,
        props:
        {
          href: '/styles.hash.css',
          rel: 'stylesheet',
        },
        _owner: null,
      },
    ]);
  });

  it('should replace tag', () => {
    driver.mockHead(getMock()).apply(onPreRenderHTML).disableAllWith();

    expect(driver.api.replaceHeadComponents).toHaveBeenCalledTimes(1);
    expect(driver.api.replaceHeadComponents).toHaveBeenLastCalledWith(getMock());
  });
});
