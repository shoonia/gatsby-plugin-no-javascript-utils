exports.onCreateWebpackConfig = (
  { stage, actions },
  { noSourcemap = true },
) => {
  if (noSourcemap && stage === 'build-javascript') {
    actions.setWebpackConfig({
      devtool: false,
    });
  }
}
