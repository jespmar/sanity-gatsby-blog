import { graphql } from "gatsby";
import React from "react";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import Container from "../components/container";
import SEO from "../components/seo";
import SectionList from "../components/section-list";

export const query = graphql`
  query SectionTemplateQuery($id: String!) {
    section: sanitySection(id: { eq: $id }) {
      id
      title
      slug {
        current
      }
      categories {
        category {
          slug {
            current
          }
          title
        }
      }
    }
  }
`;

const SectionTemplate = (props) => {
  console.log(props.id);

  const { data, errors } = props;
  const section = data && data.section;
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {section && <SectionList {...section} />}
    </Layout>
  );
};

export default SectionTemplate;
