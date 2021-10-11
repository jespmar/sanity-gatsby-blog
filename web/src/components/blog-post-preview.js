import * as styles from "./blog-post-preview.module.css";
import { buildImageObj, cn } from "../lib/helpers";
import { Link } from "gatsby";
import PortableText from "./portableText";
import React from "react";
import { imageUrlFor } from "../lib/image-url";

import { responsiveTitle3 } from "./typography.module.css";
import "../styles/global.css";

function BlogPostPreview(props) {
  return (
    <Link
      className={props.isInList ? styles.inList : styles.inGrid}
      to={`/app/doc/${props._id}`}
    >
      <div className="rounded w-full">
        {props.mainImage && props.mainImage.asset && (
          <img
            className="rounded w-full"
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(2000)
              .height(Math.floor((9 / 16) * 2000))
              .auto("format")
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </div>
      <div className={styles.text}>
        <h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
        {props._rawExcerpt && (
          <div className={styles.excerpt}>
            <PortableText blocks={props._rawExcerpt} />
          </div>
        )}
      </div>
    </Link>
  );
}

export default BlogPostPreview;
