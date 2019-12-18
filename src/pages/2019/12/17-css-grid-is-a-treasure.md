---
title: "CSS Grid is a Treasure"
date: "2019-12-17"
category: "development"
tags: ["css"]
---

I'm working on a fun new project that is making me write a lot of HTML and CSS. I've taken this opportunity to learn CSS grid. Wow, it's really nice. I wanted to share some treasures, as well as a default that makes a lot sense for me.

CSS grid _just makes sense_. It finally gives you, the web developer, the tools you need to create really powerful grid layouts, without having to reason through floats and alignments and all the wackiness of the old web. Here's why I think CSS grid just makes sense and you should try it on your next project.

CSS grid allows you to:

- Describe the columns and rows of a grid mixing different units of measurement like % and rem
- Declare the various areas of your grid and the corresponding space they will take up
- Adjust the alignment of both the grid itself and the items within the grid

Here's a good starter grid that addresses the main elements of any page in a way that makes sense:

```css
body {
  display: grid;
  grid-template-columns: 10% 80% 10%;
  grid-template-rows: auto;
  grid-template-areas:
    ". header ."
    ". main ."
    ". footer .";
}
```

This is the container for the page, the body, and the display: grid; setting is what makes this a CSS grid container. In this example, I am declaring three columns, which are two gutters of 10% each (on either side) and a main column to take up 80% of the page. For the rows, I am telling the grid to just automatically (auto) adjust to the size of the content.

Here's where it gets cool though. :sunglasses:

CSS grid allows you to describe the shape of the grid with arbitrary names. The '.' represents an empty grid cell. The other sections for header, main, and footer are reference names, which you can use to have content span cells. In this case, I am just using header, main, and footer to fill the middle column in order. Here's how you actually make that happen:

```css
header {
  grid-area: header;
}

main {
  grid-area: main;
}

footer {
  grid-area: footer;
}
```

This is a simple example, but you can start to see how powerful CSS grid can be.

## Grids within Grids

Now let's say we have a navigation bar within our header that we want to also exist on a grid. One of the tricky parts about CSS grid, which you must remember, is that the container applies its rules to _only its direct descendants_. This means you can nest grids within grids, if you have a deep tree of HTML elements. For our navbar, let's show one of the short hand ways of creating columns:

```css
nav {
  display: grid;
  grid-template-columns: repeat(4, 25%);
  place-items: center;
}
```

The repeat(4, 25%) shorthand means create four columns at 25% of the available size. The place-items: center attribute means that the items within this grid will be centered both horizontally and vertically within their cells. Amazing! Now, let's say we have individual elements with different ids, and we want to put them in a certain order of our grid. A navigational menu bar has never been so easy. Given this HTML:

```html
<header>
  <nav>
    <span id="title"><a href="index.html">HTML.Haus</a></span>
    <span id="learn"><a href="learn.html">Learn</a></span>
    <span id="reference"><a href="reference.html">Reference</a></span>
    <span id="templates"><a href="templates.html">Templates</a></span>
  </nav>
</header>
```

And the CSS grid magic:

```css
nav #title {
  grid-column: 1;
}

nav #learn {
  grid-column: 2;
}

nav #reference {
  grid-column: 3;
}

nav #templates {
  grid-column: 4;
}
```

You'll get a perfectly aligned, symmetrically laid out grid, without any of the old school mucking around with justify, re-ordering your list items, or doing any of that crazy geocities stuff you love to hate.

## Responsive Grid

Finally, let's look at how you could resize your grid's dimensions based off of the screen size or view port size. I've left content and the old way you might do this (through modifying the width attribute) for your reference. The uncommented CSS is what matters and applies to CSS grid. Check out these media queries:

```css
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  body {
    grid-template-columns: 3% 94% 3%;
    /* width: 95vw; */
    /* 570 px */
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  body {
    grid-template-columns: 5% 90% 5%;
    /* width: 90vw; */
    /* 540 px */
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  body {
    grid-template-columns: 12.5% 75% 12.5%;
    /* width: 75vw; */
    /* 576px */
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  body {
    grid-template-columns: 20% 60% 20%;
    /* width: 60vw; */
    /* 595.2 px */
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  body {
    grid-template-columns: 25% 50% 25%;
    /* width: 50vw; */
    /* 600 px */
  }
}
```

All right, as you can see, the grid adds more white space as the screen gets larger, so that it's easier to read on large screens; while it shrinks the white space on smaller screens (such as phones), so that no extra real estate is lost. True responsive layout, sticking to easy percentages, not having to worry about any complicated math.

Damn, it feels good to be a web developer in 2019.

Curious to see a demo of this code? Go check out my burgeoning project, [HTML.Haus](https://html.haus)!
