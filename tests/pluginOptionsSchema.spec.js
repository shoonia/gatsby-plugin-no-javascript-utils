const { testPluginOptionsSchema } = require('gatsby-plugin-utils');

const { pluginOptionsSchema } = require('../gatsby-node');

const testSchema = (option) => {
  return testPluginOptionsSchema(pluginOptionsSchema, option);
};

describe('Options Schema', () => {
  it('should be valid with empty options', async () => {
    const { isValid, errors } = await testSchema({});

    expect(isValid).toBe(true);
    expect(errors).toEqual([]);
  });

  it('should be valid with all options', async () => {
    const { isValid, errors } = await testSchema({
      noScript: true,
      noSourcemaps: true,
      removeGeneratorTag: true,
      removeReactHelmetAttrs: true,
      removeHeadDataAttrs: true,
      noInlineStyles: true,
      removeGatsbyAnnouncer: true,
    });

    expect(isValid).toBe(true);
    expect(errors).toEqual([]);
  });

  it('should be invalid schema', async () => {
    const { isValid, errors } = await testSchema({
      noScript: 'string',
      noSourcemaps: 'string',
      removeGeneratorTag: 'string',
      removeReactHelmetAttrs: 'string',
      noInlineStyles: 'string',
      removeGatsbyAnnouncer: 'string',
      removeHeadDataAttrs: 'string',
    });

    expect(isValid).toBe(false);
    expect(errors).toEqual([
      '"noScript" must be a boolean',
      '"noSourcemaps" must be a boolean',
      '"removeGeneratorTag" must be a boolean',
      '"removeReactHelmetAttrs" must be a boolean',
      '"removeHeadDataAttrs" must be a boolean',
      '"noInlineStyles" must be a boolean',
      '"removeGatsbyAnnouncer" must be a boolean',
    ]);
  });
});
