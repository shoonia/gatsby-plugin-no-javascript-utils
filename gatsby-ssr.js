const isProduction = process.env.NODE_ENV === 'production';

exports.onPreRenderHTML = (
  { getHeadComponents, replaceHeadComponents },
  { removeGeneratorTag = true },
) => {
  if (isProduction && removeGeneratorTag) {
    const header = getHeadComponents()
      .filter((i) => i.type !== 'meta' || i.props.name !== 'generator');

    replaceHeadComponents(header);
  }
};
