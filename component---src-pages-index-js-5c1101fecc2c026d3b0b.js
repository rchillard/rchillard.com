(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return u});a(49);var n=a(0),r=a.n(n),i=a(152),o=a(148),c=a(149);t.default=function(e){var t=e.data;return console.log(t),r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement("h1",{className:Object(i.a)("display:inline-block;border-bottom:1px solid;")},"Amazing Projects and Things"),r.a.createElement("h4",null,t.allMarkdownRemark.totalCount," Posts"),t.allMarkdownRemark.edges.map(function(e){var t=e.node;return r.a.createElement("div",{key:t.id},r.a.createElement("h3",{className:Object(i.a)("margin-bottom:",Object(o.a)(.25),";")},t.frontmatter.title," ",r.a.createElement("span",{className:Object(i.a)("color:#bbb;")},"— ",t.frontmatter.date)),r.a.createElement("p",null,t.excerpt))})))};var u="1054267027"},146:function(e,t,a){var n;e.exports=(n=a(151))&&n.default||n},147:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(145),u=a.n(c);a.d(t,"Link",function(){return u.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var l=a(146),s=a.n(l);a.d(t,"PageRenderer",function(){return s.a});var d=a(34);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var n=a(153),r=a.n(n),i=a(154),o=a.n(i),c=new r.a(o.a),u=c.rhythm},149:function(e,t,a){"use strict";var n=a(150),r=a(0),i=a.n(r),o=a(152),c=a(147),u=a(148);t.a=function(e){var t=e.children;return i.a.createElement(c.StaticQuery,{query:"3892401927",render:function(e){return i.a.createElement("div",{className:Object(o.a)("margin:0 auto;max-width:700px;padding:",Object(u.a)(2),";padding-top:",Object(u.a)(1.5),";")},i.a.createElement(c.Link,{to:"/"},i.a.createElement("h3",{className:Object(o.a)("margin-bottom:",Object(u.a)(2),";display:inline-block;font-style:normal;")},e.site.siteMetadata.title)),i.a.createElement(c.Link,{to:"/about/",className:Object(o.a)("float:right;")},"About"),t)},data:n})}},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Learn, Build, Teach"}}}}},151:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(48),u=a(2),l=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l}}]);
//# sourceMappingURL=component---src-pages-index-js-5c1101fecc2c026d3b0b.js.map