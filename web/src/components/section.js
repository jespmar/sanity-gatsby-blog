import { Link } from "gatsby";
import React, { useState } from "react";
import Category from "./category";

const Section = ({ section }) => {
  const [current, set] = useState();

  const isActive = ({ isPartiallyCurrent }) => {
    setTimeout(() => {
      if (isPartiallyCurrent) set(true);
      else set(false);
    }, 100);
  };

  return (
    <div className="w-full flex flex-col">
      <Link
        to={`/app/docs/${section.slug.current}`}
        className="w-full font-bold my-1 text-lg"
        key={section.id}
        activeStyle={{ color: "red" }}
        partiallyActive={true}
        getProps={isActive}
      >
        {section.title}
      </Link>
      <div className={`${current ? "visible" : "hidden"}`}>
        {section.categories.map((cat) => (
          <Category
            key={cat.category.id}
            category={cat.category}
            sectionSlug={section.slug.current}
          />
        ))}
      </div>
    </div>
  );
};

export default Section;
