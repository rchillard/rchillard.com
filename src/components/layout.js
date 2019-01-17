import React from "react";
import { css } from "react-emotion";
import { StaticQuery, Link, graphql } from "gatsby";
import layoutStyles from "./layout.module.css";
import { rhythm } from "../utils/typography";

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className={layoutStyles.day}>
        <div
          className={css`
            background: white;
            margin: 0 auto;
            max-width: 900px;
            padding: ${rhythm(2)};
            padding-top: ${rhythm(1.5)};
          `}
        >
          <Link to={`/`}>
            <h3
              className={css`
                margin-bottom: ${rhythm(2)};
                display: inline-block;
                font-style: normal;
              `}
            >
              {data.site.siteMetadata.title}
            </h3>
          </Link>
          <div
            className={css`
              float: right;
            `}
          >
            <Link to={`/about/`}>About</Link>
          </div>
          {children}
        </div>
      </div>
    )}
  />
);
