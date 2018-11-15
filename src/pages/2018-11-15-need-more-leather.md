---
title: "Need More Leather"
date: "2018-11-15"
tags: ['learn']
excerpt: "We're going to need more leather for this bootstrap effort!"
---

Learn, Build, Teach is my personal blog to embrace *learning in public* as inspired by [Swyx](https://twitter.com/swyx).  The idea behind learning in public is that you learn more effectively by digesting concepts and explaining them in your own words.  This blog is a way for me to digest my own learning.  

That's right: *you're in my brain's stomach!*  :stuck_out_tongue_closed_eyes: Welcome. :smiling_imp:

This is my first post, and it has been such a large bootstrapping effort that I think we're going to need more leather.  Seriously, the digital equivalent of this just happened:

![Set of leather working tools](https://images.unsplash.com/reserve/oIpwxeeSPy1cnwYpqJ1w_Dufer%20Collateral%20test.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4e6cb38a2b7ce702bc48afa2badadef6&auto=format&fit=crop&w=1216&q=80 "Need More Leather")

This site was built from traversing the amazing [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/).  
*Props* to them (ouch, I know, sorry! Prepare yourself for bad jokes :smiley:) for their outstanding work teaching the basics of an impressive set of technologies through an easy to read, well written set of lessons.  Their tutorial includes an introduction to:
* Node and NPM
* React and JSX
* CSS Modules
* GraphQL

All of which add up to the building blocks of Gatsby.  

I have been through a number of different React tutorials, including an all day in-person workshop, and this tutorial is the first one that has helped me truly wrap my head around React and components.  

Why is this such a big problem for me?

![Tyrannosaurus Rex](https://images.unsplash.com/photo-1525877442103-5ddb2089b2bb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d21ce61ae48c05d8b8d4173dccd4abb2&auto=format&fit=crop&w=1350&q=80 "Tyrannosaurus Rex")

I'm a dinosaur.  

I learned HTML and CSS in the 90's, when Notepad was the weapon of choice.  I was shocked to *recently* hear about the demise of the **bold** tag.  I can't even conceive of a world where dogs (markup/HTML) and cats (logic/JavaScript) live in the same file, *in natural harmony*.

And before the Gatsby tutorial, this Notepad T-Rex could never hope to understand:

```javascript
import React from "react"
import { css } from "react-emotion"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => { 
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>{ post.frontmatter.title }</h1>
        <h2>{ post.frontmatter.date }</h2>
        <p> { post.timeToRead } </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <div className={css`margin-top: 2em;`}>
          <Link to="/">Return</Link>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    markdownRemark {
      frontmatter {
        title
        date
      }
      timeToRead
      html
    }
  }
`
```

This is the template powering this page, which I implemented myself (yay, go me!).  Now I'm still learning and I want to break down how it works in a future post.  Before I do that though, here's what Learn, Build, Teach is all about:
* Tracing my personal journey with code
* Capturing important concepts I've learned along the way
* Showcasing the projects I've built that solidify my understanding
* Teaching back to the wider universe these lessons

So, stay a while and listen.
<iframe width="560" height="315" src="https://www.youtube.com/embed/tAVVy_x3Erg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
(And prepare yourself for the throwbacks! :sunglasses:)