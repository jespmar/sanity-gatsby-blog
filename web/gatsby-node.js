/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createBlogPostPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanitySection {
        nodes {
          slug {
            current
          }
          id
          title
          categories {
            category {
              id
              title
              slug {
                current
              }
              articles {
                article {
                  title
                  slug {
                    current
                  }
                  id
                }
              }
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  //const postEdges = (result.data.sections || {}).nodes || [];
  const nodes = (result.data.allSanitySection || {}).nodes || [];

  const parseAllPaths = (nodes) => {
    const paths = [];

    for (let node of nodes) {
      const sectionSlug = node.slug.current;
      const obj = {
        ...node,
        path: `/docs/${sectionSlug}`,
        component: "section.js",
      };
      paths.push(obj);

      for (let category of node.categories) {
        const categorySlug = category.category.slug.current;

        const obj = {
          ...category.category,
          path: `/docs/${sectionSlug}/${categorySlug}`,
          component: "category.js",
        };
        paths.push(obj);

        for (let article of category.category.articles) {
          const articleSlug = article.article.slug.current;
          const obj = {
            ...article.article,
            path: `/docs/${sectionSlug}/${categorySlug}/${articleSlug}`,
            component: "blog-post.js",
          };
          paths.push(obj);
        }
      }
    }
    return paths;
  };

  parseAllPaths(nodes).forEach((node) => {
    console.log(node);
    const path = node.path;
    const id = node.id;
    const component = node.component;

    createPage({
      path,
      component: require.resolve(`./src/templates/${component}`),
      context: { id },
    });
  });

  /*   postEdges.forEach((edge) => {
    const { id, slug = {} } = edge.node;
    const path = `/docs/${slug.current}/`;

    createPage({
      path,
      component: require.resolve("./src/templates/blog-post.js"),
      context: { id },
    });
  }); */
}

exports.createPages = async ({ graphql, actions }) => {
  await createBlogPostPages(graphql, actions);
};
