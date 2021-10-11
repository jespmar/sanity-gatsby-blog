import * as styles from "./blog-post.module.css";
import AuthorList from "./author-list";
import Container from "./container";
import PortableText from "./portableText";
import React from "react";

import "../styles/global.css";

function BlogPost(props) {
  const { _rawBody, authors, categories, title } = props;

  // eslint-disable-next-line no-unused-vars

  return (
    <article className="w-full">
      <Container>
        <div className="w-full">
          <div className="w-full">
            <h1 className="text-4xl title mb-1 font-bold">{title}</h1>
            {_rawBody && <PortableText blocks={_rawBody} />}
          </div>
          <aside className={styles.metaContent}>
            {authors && <AuthorList items={authors} title="Authors" />}
            {categories && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Categories</h3>
                <ul>
                  {categories.map((category) => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </article>
  );
}

export default BlogPost;
