[sane.html](https://github.com/rchillard/sane.html)| [Table of Contents](README.md)

# HTML

sane.html provides two `html` pages:

* [`index.html`](#indexhtml) - a default HTML skeleton that should form the
  basis of all pages on your website
* `404.html` - a placeholder 404 error page

## `index.html`

### The `no-js` Class

The `no-js` class is provided in order to allow you to more easily and
explicitly add custom styles based on whether JavaScript is disabled (`.no-js`)
or enabled (`.js`). Using this technique also helps [avoid the
FOUC](https://www.paulirish.com/2009/avoiding-the-fouc-v3/).

### Language Attribute

Please consider specifying the language of your content by adding a
[value](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry)
to the `lang` attribute in the `<html>` as in this example:

```html
<html class="no-js" lang="en">
```

### The order of the `<title>` and `<meta>` tags

The charset declaration (`<meta charset="utf-8">`) must be included completely
within the [first 1024 bytes of the
document](https://html.spec.whatwg.org/multipage/semantics.html#charset)
and should be specified as early as possible (before any content that could be
controlled by an attacker, such as a `<title>` element) in order to avoid a
potential [encoding-related security
issue](https://code.google.com/archive/p/doctype-mirror/wikis/ArticleUtf7.wiki).

### Content Security Policy

Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross-Site Scripting (XSS) and data injection attacks.  A CSP works by specifying what domains (origins) assets can be loaded from, including html, images, scripts, and styles.  It is typically implemented with an HTTP header.  However, the meta tag can be used, and is particularly useful when you are building a website without access to the web server (to set HTTP response headers).  For example, you may be using sane.html on a CDN, such as GitHub pages.  You can [read more about CSP here](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP).

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'; report-uri /csp-report-endpoint;">
```

### Meta Description

The `description` meta tag provides a short description of the page. In some
situations this description is used as a part of the snippet shown in the search
results.

```html
<meta name="description" content="This is a description">
```

Google's [Create good meta
descriptions](https://support.google.com/webmasters/answer/35624?hl=en#meta-descriptions)
documentation has useful tips on creating an effective description.

### Mobile Viewport

There are a few different options that you can use with the [`viewport` meta
tag](https://docs.google.com/present/view?id=dkx3qtm_22dxsrgcf4 "Viewport and
Media Queries - The Complete Idiot's Guide"). You can find out more in [the MDN
Web
Docs](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag).
sane.html comes with a simple setup that strikes a good balance for
general use cases.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

If you want to take advantage of edge-to-edge displays of iPhone X/XS/XR you
can do so with additional viewport parameters. [Check the WebKit
blog](https://webkit.org/blog/7929/designing-websites-for-iphone-x/) for
details.

### Open Graph Metadata

The [Open Graph Protocol](https://ogp.me/) allows you to define the way your
site is presented when referenced on third party sites and applications
(Facebook, Twitter, LinkedIn). The protocol provides a series of meta elements
that define the details of your site. The required attributes define the title,
preview image, URL, and [type](https://ogp.me/#types) (e.g., video, music,
website, article).

``` html
<meta property="og:title" content="">
<meta property="og:type" content="">
<meta property="og:url" content="">
<meta property="og:image" content="">
```

In addition to these four attributes there are many more attributes you can use
to add more richness to the description of your site. This just represents the
most basic implementation.

### Web App Manifest

The web app manifest is a simple JSON file that allows you to control how your
app appears on a device's home screen, what it looks like when it launches in
that context and what happens when it is launched. This allows for much greater control over the UI of a saved site or web app on a mobile device.

It's linked to from the HTML as follows:

```html
<link rel="manifest" href="site.webmanifest">
```
You should fill this file out with [more information about your site or
application](https://developer.mozilla.org/en-US/docs/Web/Manifest)

### Favicons and Touch Icon

The shortcut icons should be put in the root directory of your site.
`favicon.ico` is automatically picked up by browsers if it's placed in the root.
sane.html comes with a default set of icons (include favicon and one
Apple Touch Icon) that you can use as a baseline to create your own.

### The Content Area

The central part of the boilerplate template is pretty much empty. This is
intentional.
