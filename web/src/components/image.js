import React from "react";
import { imageUrlFor } from "../lib/image-url";
/* import clientConfig from "../../client-config";
import BasePortableText from "@sanity/block-content-to-react";
import serializers from "./serializers"; */

/* const returnContent = (children) => {
  return children.map((child) => {
    let className;
    if (child.marks.includes("strong")) className = "font-bold";
    return (
      <span className={className} key={child._key}>
        {child.text}
      </span>
    );
  });
}; */

const Image = (image) => {
  console.log(image);

  return <img className="p-2 rounded" src={imageUrlFor(image)} />;
};

export default Image;
