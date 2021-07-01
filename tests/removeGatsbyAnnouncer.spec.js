const { wrapRootElement } = require('../gatsby-ssr');

describe('removeGatsbyAnnouncer', () => {
  it('should remove announcer in v3.8.1', () => {
    const result = wrapRootElement(
      {
        element: {
          key: null,
          ref: null,
          props: {
            url: '/a-guide-to-css-counter',
            children: [
              {
                key: null,
                ref: null,
                props: {
                  id: 'gatsby-focus-wrapper',
                  baseuri: '',
                  children: {
                    key: null,
                    ref: null,
                    props: {
                      path: '/*',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'div',
                key: null,
                ref: null,
                props: {
                  id: 'gatsby-announcer',
                  style: {
                    position: 'absolute',
                    top: 0,
                    width: 1,
                    height: 1,
                    padding: 0,
                    overflow: 'hidden',
                    clip: 'rect(0, 0, 0, 0)',
                    whiteSpace: 'nowrap',
                    border: 0,
                  },
                  'aria-live': 'assertive',
                  'aria-atomic': 'true',
                },
                _owner: null,
              },
            ],
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
        url: '/a-guide-to-css-counter',
        children: [
          {
            key: null,
            ref: null,
            props: {
              id: 'gatsby-focus-wrapper',
              baseuri: '',
              children: {
                key: null,
                ref: null,
                props: {
                  path: '/*',
                },
                _owner: null,
              },
            },
            _owner: null,
          },
        ],
      },
      _owner: null,
    });
  });
});
