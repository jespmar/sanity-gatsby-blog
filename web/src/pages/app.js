import React from "react";
// eslint-disable-next-line import/no-unresolved
import { Router } from "@reach/router";
import Layout from "../containers/layout";
import PrivateTest from "../components/private-test";
import BlogPostTemplate from "../templates/blog-post";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import SectionList from "../components/section-list";

const client = new ApolloClient({
  uri: "https://39bhl3kb.api.sanity.io/v1/graphql/production/default",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Router basepath="/app">
          <PrivateTest path="/doc/:id" />
          <SectionList path="/docs/:section" />
          <SectionList path="/docs/:section/:category" />
          <SectionList path="/docs/:section/:category/:article" />
          <BlogPostTemplate path="/blog/:id" />
        </Router>
      </Layout>
    </ApolloProvider>
  );
};
export default App;
