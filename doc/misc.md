[sane.html](https://github.com/rchillard/sane.html) | [Table of Contents](README.md)

# Miscellaneous

- [Miscellaneous](#miscellaneous)
  - [robots.txt](#robotstxt)
  - [humans.txt](#humanstxt)
  - [sitemap.txt](#sitemaptxt)

--

## robots.txt

The `robots.txt` file is used to give instructions to web robots on what can
be crawled from the website.

By default, the file provided by this project includes the next two lines:

* `User-agent: *` -  the following rules apply to all web robots
* `Disallow:` - everything on the website is allowed to be crawled

If you want to disallow certain pages you will need to specify the path in a
`Disallow` directive (e.g.: `Disallow: /path`) or, if you want to disallow
crawling of all content, use `Disallow: /`.

The `/robots.txt` file is not intended for access control, so don't try to
use it as such. Think of it as a "No Entry" sign, rather than a locked door.
URLs disallowed by the `robots.txt` file might still be indexed without being
crawled, and the content from within the `robots.txt` file can be viewed by
anyone, potentially disclosing the location of your private content! So, if
you want to block access to private content, use proper authentication instead.

For more information about `robots.txt`, please see:

* [robotstxt.org](https://www.robotstxt.org/)
* [How Google handles the `robots.txt` file](https://developers.google.com/search/reference/robots_txt)

## humans.txt

The `humans.txt` file is used to provide information about people involved with
the website.

The provided file contains three sections:

* `TEAM` - this is intended to list the group of people responsible for the website
* `THANKS` - this is intended to list the group of people that have contributed
  to the website
* `TECHNOLOGY COLOPHON` - the section lists technologies used to make the website

For more information about `humans.txt`, please see: http://humanstxt.org/

## sitemap.txt

The `sitemap.txt` file is used to provide a list of individual page URLs. The sitemap is used by search engines to crawl and better understand your pages.  You can learn more here:
* [sitemaps.org](https://www.sitemaps.org/)
* [Learn about sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)

Here is an example sitemap.txt:
```txt
https://example.com/
https://example.com/page1.html
https://example.com/page2.html
```

The text file is a starting point, but you should generate an XML file as well.  You can generate an XML file without installing any software by using the [npx](https://github.com/npm/npx) tool in conjunction with [sitemap.js](https://github.com/ekalinin/sitemap.js).

This command will take your sitemap.txt and generate a sitemap.xml file:
```
npx sitemap < sitemap.txt > sitemap.xml # `npx sitemap -h` for more examples and a list of options.
```

