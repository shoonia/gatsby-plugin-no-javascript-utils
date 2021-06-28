exports.onCreateWebpackConfig = (
  {
    stage,
    actions,
  },
  {
    noSourcemaps = true,
  },
) => {
  if (noSourcemaps && stage === 'build-javascript') {
    actions.setWebpackConfig({
      devtool: false,
    });
  }
};

exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    noSourcemaps: Joi.boolean(),
    removeGeneratorTag: Joi.boolean(),
    removeReactHelmetAttrs: Joi.boolean(),
    noInlineStyles: Joi.boolean(),
    removeGatsbyAnnouncer: Joi.boolean(),
    removePreloadLinks: Joi.boolean(),
  });
};
