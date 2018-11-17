import React from "react"
import { css } from "react-emotion"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

require("prismjs/themes/prism-coy.css")

export default ({ data, pageContext }) => { 
  const {next, prev} = pageContext

  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <div>
          <h1 >{ post.frontmatter.title }</h1>
          <h4 className={css`display: inline; float: right;`}>{ post.frontmatter.date }</h4>
        </div>
        <p className={css`color: gray;`}> { post.timeToRead } minute read</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <div className={css`text-align: center`}>
          { prev && <Link className={css`display: inline; margin-right: 1em`} to={prev}>Previous</Link> }
          { next && <Link className={css`display: inline; margin-left: 1em`} to={next}>Next Post</Link> } 
        </div>
        <div className={css`margin-top: 2em;`}>
          <Link to="/">Return Home</Link>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
        tags
      }
    }
  }
`