import { Link } from "gatsby";
import React from "react";

import "../styles/global.css";
import FallbackPost from "./fallback-post";
import PrivateTest from "./private-test";

function SectionList(props) {
  const { section, category, article, location } = props;

  // eslint-disable-next-line no-unused-vars

  const checkLocationState = () => {
    console.log(location.state.fromFeed);
    if (location.state.fromFeed)
      return <PrivateTest id={location.state.fromFeed} />;
    else if (article) return <FallbackPost slug={article} />;
    else return null;
  };

  const splitName = (name) => {
    let n = name.split("-");
    console.log(n);
    return n.join(" ");
  };

  return (
    <div>
      <div className="text-sm text-gray-700 mt-2 ml-6">
        {section && (
          <Link to={`/app/docs/${section}`}>{splitName(section)}</Link>
        )}
        {category && " / "}
        {category && (
          <Link to={`/app/docs/${section}/${category}`}>
            {splitName(category)}
          </Link>
        )}
        {article && " / "}
        {article && (
          <Link to={`/app/docs/${section}/${category}/${article}`}>
            {splitName(article)}
          </Link>
        )}{" "}
      </div>
      <div>{checkLocationState()}</div>
    </div>
  );
}

export default SectionList;
