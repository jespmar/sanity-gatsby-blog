export default {
  name: "videoLink",
  type: "object",
  title: "Video",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "link",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "title",
      description: "link",
    },
  },
};
