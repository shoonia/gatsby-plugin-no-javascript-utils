const { mock } = require('node:test');

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

  reset() {
    this.#head.length = 0;
    this.#postBody.length = 0;
    this.api.replaceHeadComponents.mock.resetCalls();
    this.api.replacePostBodyComponents.mock.resetCalls();
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

  api = {
    getHeadComponents: () => this.#head,
    getPostBodyComponents: () => this.#postBody,

    replaceHeadComponents: mock.fn(),
    replacePostBodyComponents: mock.fn(),
  };
}

exports.Driver = Driver;
