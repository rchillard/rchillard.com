import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import merlin from "./merlin-facing-crocodile.jpg";

export default ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>
      Learn, Build, Teach is my personal blog to embrace learning in public as
      inspired by <a href="https://twitter.com/swyx">Swyx</a>. The idea behind
      learning in public is that you learn more effectively by digesting
      concepts and explaining them in your own words. This blog is a way for me
      to digest my own learning. It's here for future me, and it's how I plan
      on:
    </p>
    <ul>
      <li>Tracing my personal journey with code</li>
      <li>Capturing important concepts I've learned along the way</li>
      <li>Showcasing the projects I've built that solidify my understanding</li>
      <li>Teaching back to the wider universe these lessons</li>
    </ul>
    <h2>My Background</h2>
    <p>
      I grew up fascinated by technology and was fortunate enough to learn the
      fundamentals of programming and networking a long, long time ago, when the
      internet was new. Since then, I have spent most of my professional career
      in the service and support of software development teams, but I keep
      itching to get back to the hands-on fun of web development.
    </p>
    <p>
      <strong>I love software, because I believe it's modern day magic.</strong>
    </p>
    <p>
      But I'm a sorcerer that hasn't cast a serious spell in years, and trying
      to dive back in, I've found that modern web development can feel like
      this:
    </p>
    <img
      src={merlin}
      alt="Merlin facing Crocodile"
      style={{ marginBottom: "0" }}
    />
    <p style={{ textAlign: "right" }}>The Sword in the Stone (1963)</p>
    <p>
      In short, even though I have worked in tech for years, I feel like a
      dinosaur in the world of web development today, and this blog is here to
      help me shake off that rust, learn modern practices, and get back into the
      magic of casting spells.
    </p>
    <p>
      Follow me on my quest to find my magic wand again by reading my first
      post, <Link to={`/2018/11/15-need-more-leather/`}>Need More Leather</Link>
      .
    </p>
  </Layout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
