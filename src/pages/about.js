import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import merlin from "../images/merlin-facing-crocodile.jpg";

export default ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>
      This is my embrace of learning in public as inspired by Shawn Wang. The
      idea behind learning in public is that you learn more effectively by being
      open about what you don't know, by adding to the corpus of human
      knowledge, and by digesting concepts and explaining them in your own
      words.<sup>1</sup> This site is a way for me to digest my own learning.
      It's primarily here for future me, and it's how I plan on:
    </p>
    <ul>
      <li>Tracing my journey</li>
      <li>Capturing important concepts</li>
      <li>Showcasing the projects I've built</li>
      <li>Teaching back to the universe the lessons I've learned</li>
    </ul>
    <p>
      I write essays on leadership, articles on infrastructure, and posts on
      software development.
    </p>
    <h2>My Background</h2>
    <p>
      I grew up fascinated by technology and was fortunate enough to learn the
      fundamentals of programming a long, long time ago, when the internet was
      new. Since then, I have spent most of my professional career in the
      service of software development teams. I have served in roles as a
      business analyst, project manager, quality tester, scrum master, and team
      coach. I've made a lot of mistakes along the way.
    </p>
    <h2>Leadership</h2>
    <p>
      From those mistakes, I write essays sharing hard lessons I've learned, so
      that I can improve how project managers, scrum masters, and team leads
      think about, interact with, and understand their development teams. My
      writing focuses on how to effectively lead and organize really smart
      humans.
    </p>
    <h2>Technology</h2>
    <p>
      Although I've supported dev teams for years, I keep itching to get back to
      the hands-on fun of coding. I love software, because I believe it's{" "}
      <strong>modern day magic</strong>. But I'm a sorcerer that hasn't cast a
      serious spell in years, and trying to dive back in, I've found that modern
      web development can feel like this:
    </p>
    <img
      src={merlin}
      alt="Merlin facing Crocodile"
      style={{ marginBottom: "0" }}
    />
    <p style={{ textAlign: "right" }}>The Sword in the Stone (1963)</p>
    <p>
      I am shaking off that rust, learning modern practices, and getting back
      into the magic of casting spells. Follow me on my quest to discover magic
      again by reading my first post,{" "}
      <Link to={`/2018/11/15-need-more-leather/`}>Need More Leather</Link>.
    </p>
    <p />
    <hr />
    <small>
      1. Wang, Shawn. Learn in Public, 2018,{" "}
      <a href="https://www.swyx.io/writing/learn-in-public/">
        https://www.swyx.io/writing/learn-in-public/
      </a>{" "}
    </small>
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
