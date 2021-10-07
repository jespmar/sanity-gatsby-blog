export default {
  name: "section",
  type: "document",
  title: "Section",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description:
        "Some frontends will require a slug to be set to be able to show the post",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "Describe your blog for search engines and social media.",
    },

    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "categoryReference",
        },
      ],
    },
  ],
};
