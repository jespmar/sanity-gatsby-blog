export const reducer = (state, action) => {
  switch (action.type) {
    case "section_slug":
      return {
        ...state,
        sectionSlug: action.payload,
      };

    case "category_slug":
      return {
        ...state,
        categorySlug: action.payload,
      };

    default:
      return state;
  }
};

export const initialState = {
  sectionSlug: "",
  categorySlug: "",
};
