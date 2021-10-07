export default {
  name: "articleReference",
  type: "object",
  title: "Article reference",
  fields: [
    {
      name: "article",
      type: "reference",
      to: [
        {
          type: "post",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "article.title",
    },
  },
};
