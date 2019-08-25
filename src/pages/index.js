import React from "react";
import { css } from "react-emotion";
import { Link, graphql } from "gatsby";
import { rhythm } from "../utils/typography";
import Layout from "../components/layout.js";

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <h1>Hello, my name's Ryan. Welcome!</h1>
        <p>
          I'm a{" "}
          <Link to={"/2019/01/01-whats-a-servant-leader/"}>
            <strong>servant leader</strong>
          </Link>{" "}
          and{" "}
          <Link to={"/2019/01/07-whats-a-shortstack-developer/"}>
            <strong>shortstack developer</strong>
          </Link>{" "}
          that writes about leading teams and learning technology.
        </p>
      </div>
      <div>
        <h2>Latest Posts</h2>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              className={css`
                text-decoration: none;
              `}
              to={node.fields.slug}
            >
              <h3
                className={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.frontmatter.title}{" "}
              </h3>
              <small>
                <span
                  className={css`
                    color: #bbb;
                  `}
                >
                  {node.frontmatter.date}
                </span>
              </small>
            </Link>

            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
      <Link to={"/all-posts/"}>Read all posts</Link>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 10
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM, DD YYYY")
          }
          excerpt(pruneLength: 200)
        }
      }
    }
  }
`;
