import { Link } from "gatsby";
import React, { useState } from "react";

const Category = ({ category, sectionSlug }) => {
  // eslint-disable-next-line no-unused-vars
  const [current, set] = useState();

  // console.log(state);

  const isActive = ({ isPartiallyCurrent }) => {
    setTimeout(() => {
      if (isPartiallyCurrent) set(true);
      else set(false);
    }, 50);

    return isPartiallyCurrent
      ? { className: "text-blue-900 w-full mb-1 underline" }
      : { className: "w-full mb-1" };
  };

  return (
    <div className="w-full flex flex-col ml-1">
      <Link
        to={`/app/docs/${sectionSlug}/${category.slug.current}`}
        key={category.id}
        getProps={isActive}
        activeStyle={{ color: "red" }}
        partiallyActive={true}
      >
        {category.title}
      </Link>
      <div>
        {isActive &&
          category.articles.map((cat) => (
            <Link
              key={cat.article.id}
              to={`/app/docs/${sectionSlug}/${category.slug.current}/${cat.article.slug.current}`}
              activeClassName="text-blue-900 bg-blue-100"
              state={{ fromFeed: cat.article._id }}
              className={`w-full text-sm ml-1 rounded my-1 bg-gray-50 hover:bg-gray-800 hover:text-white list-item list-none p-1 ${
                current ? "visible" : "hidden"
              }`}
            >
              {cat.article.title}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Category;
