import React from "react";
/* import clientConfig from "../../client-config";
import BasePortableText from "@sanity/block-content-to-react";
import serializers from "./serializers"; */

const returnContent = (children) => {
  return children.map((child) => {
    let className;

    if (child.marks) {
      if (child.marks.includes("strong")) className = "font-bold";
    }
    return (
      <span className={className} key={child._key}>
        {child.text}
      </span>
    );
  });
};

const Content = (block) => {
  //console.log(block);
  let className;

  if (block.style === "h1") className = "text-3xl font-bold my-2";
  if (block.style === "h2") className = "text-2xl font-bold my-2";
  if (block.style === "h3") className = "text-xl font-bold my-2";
  if (block.style === "h4") className = "text-lg font-bold my-2";
  if (block.style === "normal") className = "text-base mb-6";
  // else className = "text-base";

  if (block.children) {
    if (block.listItem) {
      if (block.listItem === "bullet") {
        return (
          <ul className="list-item list-disc ml-5">
            {returnContent(block.children)}
          </ul>
        );
      }
    } else return <p className={className}>{returnContent(block.children)}</p>;
  } else return <p></p>;
};

export default Content;
