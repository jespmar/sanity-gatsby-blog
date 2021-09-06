export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6135bbc5dcfbb46b89e385a4",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-jvdts3ac",
                  apiId: "56822c2f-dc47-40d0-aba6-249eb028a528",
                },
                {
                  buildHookId: "6135bbc541a3856599fc4513",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-rrxs449v",
                  apiId: "2e05130a-8ae7-467b-8532-28bd687c605b",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/jespmar/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-rrxs449v.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
