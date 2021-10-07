import { graphql } from "gatsby";
import React from "react";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import Container from "../components/container";
import SEO from "../components/seo";
import SectionList from "../components/section-list";

export const query = graphql`
  query CategoryTemplateQuery($id: String!) {
    category: sanityCategory(id: { eq: $id }) {
      slug {
        current
      }
      title
      articles {
        article {
          title
          slug {
            current
          }
        }
      }
    }
  }
`;

const CategoryTemplate = (props) => {
  console.log(props.id);

  const { data, errors } = props;
  const category = data && data.category;
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {category && <SectionList {...category} />}
    </Layout>
  );
};

export default CategoryTemplate;
