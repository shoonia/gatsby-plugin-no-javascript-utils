const { wrapRootElement } = require('../gatsby-ssr');

describe('removeGatsbyAnnouncer-v5.7', () => {
  it('should not break a build when the element does not have children in v5.7.0', () => {
    const result = wrapRootElement(
      {
        element: {
          key: null,
          ref: null,
          props: {
            location: {
              pathname: '/404/',
            },
            params: {},
            data: {
              site: {
                siteMetadata: {
                  title: 'Gatsby Starter Blog',
                },
              },
            },
            pageContext: {},
          },
          _owner: null,
        },
      },
      {
        removeGatsbyAnnouncer: true,
      },
    );

    expect(result).toEqual({
      key: null,
      ref: null,
      props: {
        location: {
          pathname: '/404/',
        },
        params: {},
        data: {
          site: {
            siteMetadata: {
              title: 'Gatsby Starter Blog',
            },
          },
        },
        pageContext: {},
      },
      _owner: null,
    });
  });
});
