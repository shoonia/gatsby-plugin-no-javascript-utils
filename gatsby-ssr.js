const isProduction = process.env.NODE_ENV === 'production';
const key = 'data-react-helmet';

exports.onPreRenderHTML = (
  { getHeadComponents, replaceHeadComponents },
  { removeGeneratorTag = true, removeReactHelmetAttrs = true },
) => {
  if (isProduction) {
    let header = getHeadComponents();

    if (removeGeneratorTag) {
      header = header.filter((i) => i.type !== 'meta' || i.props.name !== 'generator');
    }

    if (removeReactHelmetAttrs) {
      header.forEach((i) => {
        if (key in i.props) {
          delete i.props[key];
        }
      });
    }

    replaceHeadComponents(header);
  }
};
