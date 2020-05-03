exports.onCreateWebpackConfig = (
  { stage, actions },
  { noSourcemaps = true },
) => {
  if (noSourcemaps && stage === 'build-javascript') {
    actions.setWebpackConfig({
      devtool: false,
    });
  }
}
