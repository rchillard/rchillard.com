---
title: "Breaking the Blog"
date: "2018-11-17"
tags: ['learn']
---

Well, that didn't take long.  Yesterday, I broke the blog.  I stumbled into [the long grass](https://youtu.be/Cr1MvzAr26E) without even knowing it.  However, I learned a very important lesson about this brave new component based world that we live in.  Here be my raptors:
```javascript
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
This is the original GraphQL query that I was using on the template for my blog posts.  I proudly displayed it two days ago in my first ever post, [Need More Leather](/2018-11-15-need-more-leather/).  There's one serious problem with it though.  It's not setup as a template, meaning it cannot support more than one blog post.  Every time this template is used, this query would only pull data for the 1st blog post. 

That's a serious bug :ant: :anguished:.

As it turns out, a slight modification to the query brings back the magic :grinning::

```javascript
export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
      }
    }
  }
`
```

However, it took me several hours of investigation and tracing back through how Gatsby and React work (neither of which I really understand very well yet).  So, what's the lesson learned here?

## Lesson Learned
A component driven frontend is massively powerful, because it is abstracted enough that your code is very [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself).  Only a few lines of code (44 for my current blog post template) can generate pages upon pages of blog posts resulting in thousands of lines of HTML/CSS, but untested work can and will break big portions of a site.  There's a certain level of basic care that comes with this kind of architecture. :point_up: