[sane.html](https://github.com/rchillard/sane.html) | [Table of Contents](README.md)

# CSS

sane.html's CSS includes:

- [CSS](#css)
  - [sane.css](#sanecss)
  - [styles.css](#stylescss)

## sane.css

sane.css is a stylesheet that normalizes behavior in modern browsers while providing sane defaults. This combines the idea of a basic boilerplate, a CSS reset, and sane defaults. Using a stylesheet like sane.css drives consistency, but it can also have added benefits. Benefits such as built in protection for inaccessible images.

sane.css combines features from [HTML 5 Boilerplate](https://github.com/h5bp/main.css), [Normalize CSS](https://github.com/necolas/normalize.css), and the [Modern CSS Reset](https://github.com/hankchizljaw/modern-css-reset):

* A default color, font-size, and line-height (1.4) on the HTML element
* Setting box-sizing rules to border-box on everything
* Fixing vertical alignment of multimedia elements (audio, canvas, iframe, img, svg, video)
* Incorrect H1 sizes inside of section and articles elements
* Various font adjustments for elements like b, strong, code, kbd, samp
* Form and button margin and font size adjustments
* Body element will always fill the screen and text rendering will be optimized for speed
* A media query for prefers-reduced-motion that removes animation, transition, and scroll behavior

For more information about sane.css, please refer to its [project
page](https://github.com/rchillard/sane.css).

## styles.css

Several base styles are included that build upon `sane.css`. These styles:

* Provide meaningful CSS variables for colors, fonts, and layouts
* Use the [CubeCSS](https://cube.fyi/) method for writing CSS
* Give structure for scaling your CSS in the future
