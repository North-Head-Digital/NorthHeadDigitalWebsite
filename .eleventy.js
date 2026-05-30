module.exports = function (eleventyConfig) {
  const crypto = require("crypto");
  const fs = require("fs");

  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });
  eleventyConfig.addPassthroughCopy({ "src/sitemap.xml": "sitemap.xml" });

  // Append a content hash so long-lived asset caches are invalidated
  // automatically whenever a file's contents change.
  eleventyConfig.addFilter("cacheBust", (urlPath) => {
    try {
      const contents = fs.readFileSync("src" + urlPath);
      const hash = crypto.createHash("md5").update(contents).digest("hex").slice(0, 8);
      return `${urlPath}?v=${hash}`;
    } catch (e) {
      return urlPath;
    }
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "public",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
