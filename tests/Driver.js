class Driver {
  #head;
  #postBody;

  constructor() {
    this.#head = [];
    this.#postBody = [];
  }

  /**
   * @param {any[]} nodes
   */
  mockHead(nodes) {
    this.#head.push(...nodes);
  }

  /**
   * @param {any[]} nodes
   */
  mockPostBody(nodes) {
    this.#postBody.push(...nodes);
  }

  /**
   * @typedef {import('../gatsby-ssr').Options} Options
   *
   * @param {Options} [options]
   * @returns {Options}
   */
  enableAllWith(options) {
    return {
      noScript: true,
      noSourcemaps: true,
      removeGeneratorTag: true,
      removeReactHelmetAttrs: true,
      noInlineStyles: true,
      removeGatsbyAnnouncer: true,
      ...options,
    };
  }

  /**
   * @param {Options} [options]
   * @returns {Options}
   */
  disableAllWith(options) {
    return {
      noScript: false,
      noSourcemaps: false,
      removeGeneratorTag: false,
      removeReactHelmetAttrs: false,
      noInlineStyles: false,
      removeGatsbyAnnouncer: false,
      ...options,
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
