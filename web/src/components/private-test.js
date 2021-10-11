import { useQuery, gql } from "@apollo/client";
import React from "react";

import "../styles/global.css";
import PrivatePost from "./private-post";

function PrivateTest(props) {
  const EXCHANGE_RATES = gql`
    query MyQuery {
      Post(id: "${props.id}") {
      _id
      videoLink
      categories {
        _id
        title
      }
      title
      slug {
        current
      }
      excerptRaw
      bodyRaw
      authors {
        _key
        author {
          image {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
              url
            }
          }
          name
        }
      }
    }
    }
  `;

  const { data, loading } = useQuery(EXCHANGE_RATES);

  // eslint-disable-next-line no-unused-vars
  console.log(data);

  return (
    <div>
      {data && <PrivatePost {...data.Post} />}
      {loading && (
        <div className="w-full p-5 text-center">Laddar innehåll...</div>
      )}
    </div>
  );
}

export default PrivateTest;
