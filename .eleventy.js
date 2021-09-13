const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
// const Image = require("@11ty/eleventy-img");

const markdownIt = require("markdown-it");
const markdownItImgSize = require("markdown-it-imsize");
const markdownItContainer = require("markdown-it-container");

module.exports = function(eleventyConfig) {

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPassthroughCopy('images')
  eleventyConfig.addPassthroughCopy('admin')

  eleventyConfig.addShortcode("rndGrad", function() {
    const rnd = Math.floor(Math.random() * 360);
    const start = Math.floor(Math.random() * 360);
    const end = (start + 180) % 360
    return `linear-gradient(${rnd}deg, hsl(${start}, 100%, 50%) 0%, hsl(${end}, 100%, 50%) 100%)`;
  });

  const markdownLib = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
  })
  .use(markdownItImgSize)
  .use(markdownItContainer, 'aside', {
    render: function (tokens, idx) {
        const m = tokens[idx].info.trim().match(/^aside.+?(\d*).+?(.*)/);

        if (tokens[idx].nesting === 1) {
            return `<div class="aside ${m ? m[2] : ''}" style="grid-row: span ${m ? m[1] : 99};">\n`;
        } else {
            return '</div>\n';
        }
    }
  })
  .use(markdownItContainer, 'sidebar', {
    render: function (tokens, idx) {
        const m = tokens[idx].info.trim().match(/^sidebar.+?(\d*).+?(.*)/);

        if (tokens[idx].nesting === 1) {
            return `<div class="sidebar ${m ? m[2] : ''}" style="grid-row: span ${m ? m[1] : 99}">\n`;
        } else {
            return '</div>\n';
        }
    }
  });

  eleventyConfig.setLibrary(
    'md',
    markdownLib
)

  const {
    DateTime
  } = require("luxon");

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    eleventyConfig.addFilter('htmlDateString', (dateObj) => {
      return DateTime.fromJSDate(dateObj, {
        zone: 'utc'
      }).toFormat('yy-MM-dd');
    });

    eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc'
    }).toFormat("dd/MM/yyyy");
  });

  // Deep-Merge
  eleventyConfig.setDataDeepMerge(true)

  // Base Config
  return {
      dir: {
          input: 'src',
          output: '_site',
          includes: '_includes',
          layouts: '_includes/layouts/',
          data: '_data'
      },
      templateFormats: ['njk', 'md', '11ty.js', 'jpg', 'webp', 'png'],
      htmlTemplateEngine: 'njk',
      markdownTemplateEngine: 'njk',
      browserSyncConfig: {
          ui: false,
          ghostMode: false,
      }
  }
};
