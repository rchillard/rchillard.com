import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>Learn, Build, Teach is my personal blog to embrace learning in public as inspired by <a href="https://twitter.com/swyx">Swyx</a>. The idea behind learning in public is that you learn more effectively by digesting concepts and explaining them in your own words. This blog is a way for me to digest my own learning.  It's here for future me, and it's how I plan on:</p>
    <ul>
      <li>Tracing my personal journey with code</li>
      <li>Capturing important concepts I've learned along the way</li>
      <li>Showcasing the projects I've built that solidify my understanding</li>
      <li>Teaching back to the wider universe these lessons</li>
    </ul>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`