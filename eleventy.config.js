module.exports = function(eleventyConfig) {
  // Copy CNAME file to output directory
  eleventyConfig.addPassthroughCopy("CNAME");
  
  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    }
  };
}; 