import { useQuery, gql } from "@apollo/client";
import React from "react";

import "../styles/global.css";
import PrivateTest from "./private-test";

function FallbackPost(props) {
  const { slug } = props;
  const EXCHANGE_RATES = gql`
    query MyQuery {
      allPost {
        _id
        slug {
          current
        }
      }
    }
  `;

  const { loading, data } = useQuery(EXCHANGE_RATES);

  // eslint-disable-next-line no-unused-vars
  console.log(data);

  return (
    <div>
      {data &&
        data.allPost.map((post) => {
          if (post.slug.current === slug) {
            return <PrivateTest key={post._id} id={post._id} />;
          } else return null;
        })}
      {loading && <p>Loading</p>}
    </div>
  );
}

export default FallbackPost;
