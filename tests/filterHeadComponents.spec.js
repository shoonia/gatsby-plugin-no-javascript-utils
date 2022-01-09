import { onPreRenderHTML } from '../gatsby-ssr';
import { Driver } from './Driver';

describe('filterPostBodyComponents', () => {
  it('should filter the components', () => {
    const driver = new Driver();

    driver.mockHead([
      {
        type: 'script',
        key: 'script-element-111',
        ref: null,
        props: {
          src: '/app-1.js',
          async: true,
        },
        _owner: null,
      },
      {
        type: 'script',
        key: 'script-element-222',
        ref: null,
        props: {
          src: '/app-2.js',
          async: true,
        },
        _owner: null,
      },
    ]);

    onPreRenderHTML(
      driver.api,
      driver.disableAllWith({
        filterHeadComponents(node) {
          return node?.key !== 'script-element-111';
        },
      }),
    );

    expect(driver.api.replaceHeadComponents).toHaveBeenCalledTimes(1);
    expect(driver.api.replaceHeadComponents).toHaveBeenCalledWith([
      {
        type: 'script',
        key: 'script-element-222',
        ref: null,
        props: {
          src: '/app-2.js',
          async: true,
        },
        _owner: null,
      },
    ]);
  });
});
