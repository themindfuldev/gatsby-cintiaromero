const { resolve } = require("path");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            excerpt(pruneLength: 400)
            html
            id
            frontmatter {
              templateKey
              path
              date
              title
              tags
              description
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const allTags = new Set();
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const { path, tags } = node.frontmatter;
      createPage({
        path,
        component: resolve(
          `src/templates/${String(node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          path
        }
      });
      if (tags) {
        tags.forEach(allTags.add.bind(allTags));
      }
    });

    const tagTemplate = resolve('src/templates/tag-page.js');
    allTags.forEach(tag => {
      createPage({
        path: `/tags/${tag}/`,
        component: tagTemplate,
        context: {
          tag
        },
      });
    });
    
  });
};
