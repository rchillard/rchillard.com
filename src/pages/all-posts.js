import React from "react";
import { css } from "react-emotion";
import { Link, graphql } from "gatsby";
import { rhythm } from "../utils/typography";
import Layout from "../components/layout.js";

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <h2>
          All {data.allMarkdownRemark.totalCount} articles, essays, and posts in
          chronological order
        </h2>
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
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
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
