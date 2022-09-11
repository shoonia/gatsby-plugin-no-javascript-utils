class Driver {
  #head = [];
  #postBody = [];

  /**
   * @param {any[]} nodes
   */
  mockHead(nodes) {
    this.#head.push(...nodes);

    return this;
  }

  /**
   * @param {any[]} nodes
   */
  mockPostBody(nodes) {
    this.#postBody.push(...nodes);

    return this;
  }

  /**
   * @param {(...any) => any} onPreRenderHTML
   */
  apply(onPreRenderHTML) {
    return {
      /**
       * @param {import('../gatsby-ssr').Options} [options]
       */
      enableAllWith: (options) => {
        onPreRenderHTML(this.api, {
          noScript: true,
          noSourcemaps: true,
          removeGeneratorTag: true,
          removeReactHelmetAttrs: true,
          removeHeadDataAttrs: true,
          noInlineStyles: true,
          removeGatsbyAnnouncer: true,
          ...options,
        });
      },

      /**
       * @param {import('../gatsby-ssr').Options} [options]
       */
      disableAllWith: (options) => {
        onPreRenderHTML(this.api, {
          noScript: false,
          noSourcemaps: false,
          removeGeneratorTag: false,
          removeReactHelmetAttrs: false,
          removeHeadDataAttrs: false,
          noInlineStyles: false,
          removeGatsbyAnnouncer: false,
          ...options,
        });
      },
    };
  }

  /** @type {import('../gatsby-ssr').Api} */
  api = {
    getHeadComponents: jest.fn(() => this.#head),
    getPostBodyComponents: jest.fn(() => this.#postBody),

    replaceHeadComponents: jest.fn(),
    replacePostBodyComponents: jest.fn(),
  };
}

exports.Driver = Driver;
