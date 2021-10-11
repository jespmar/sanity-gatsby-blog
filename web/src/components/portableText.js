import React from "react";
import Content from "./content";
import Image from "./image";
import VideoPlayer from "./video-player";

/* const sectionContent = (blocks) => {
  let sections = [];
  let sectionCount = null;
  let subSectionCount = null;

  for (let block of blocks) {
    if (block._type === "block" && block.style === "h1") {
      if (sectionCount === null) sectionCount = 0;
      else sectionCount++;
      // Set subsection count to zero for every h1
      subSectionCount = null;
      // Define the current section
      const section = {
        type: "section header",
        children: block.children,
        style: block.style,
        key: block._key,
        subSections: [],
        paragraphs: [],
      };
      // Push the defined section on to the array
      sections.push(section);
      // Increase the section count
    }
    if (block._type === "block" && block.style === "h2") {
      if (sections.length === 0) {
        if (sectionCount === null) sectionCount = 0;
        else sectionCount++;

        // Define the intro section
        const section = {
          type: "intro",
          subSections: [],
          key: block._key,
          style: block.style,
          children: block.children,
          paragraphs: [],
        };
        // Push the intro section on to the array
        sections.push(section);
      }

      if (subSectionCount === null) subSectionCount = 0;
      else subSectionCount++;

      // Define the subSection
      const subSection = {
        type: "subSection header",
        children: block.children,
        style: block.style,
        key: block._key,
        paragraphs: [],
      };

      sections[sectionCount].subSections.push(subSection);
    } else {
      // If section is 0, create a intro section
      if (sections.length === 0) {
        if (sectionCount === null) sectionCount = 0;
        else sectionCount++;

        // Define the intro section
        const section = {
          type: "intro",
          subSections: [],
          key: block._key,
          style: block.style,
          children: block.children,
          paragraphs: [],
        };
        // Push the intro section on to the array
        sections.push(section);
      }
      // if section is there
      else {
        const paraGraph = {
          type: "paragraph",
          children: block.children,
          key: block._key,
          style: block.style,
        };

        if (subSectionCount === null) {
          sections[sectionCount].paragraphs.push(paraGraph);
        } else {
          sections[sectionCount].subSections[subSectionCount].paragraphs.push(
            paraGraph
          );
        }
      }
    }
  }

  return sections;
}; */

const getText = (children) => {
  let text = [];

  for (let child of children) {
    text.push(child.text);
  }

  return text.join(" ");
};

const contentMap = (blocks) => {
  return blocks.map((block) => {
    if (block.children) {
      return {
        style: block.style,
        key: block._key,
        text: getText(block.children),
      };
    } else return null;
  });
};

const PortableText = ({ blocks }) => {
  console.log(contentMap(blocks));
  return blocks.map((block) => {
    if (block._type === "block") return <Content key={block._key} {...block} />;
    if (block._type === "mainImage")
      return <Image key={block._key} {...block} />;
    if (block._type === "videoLink")
      return <VideoPlayer key={block._key} videoLink={block.link} />;
    else return null;
  });
};

export default PortableText;
