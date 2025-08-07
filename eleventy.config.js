module.exports = function(eleventyConfig) {
  // Copy CNAME file to output directory
  eleventyConfig.addPassthroughCopy("CNAME");
  
  // Copy CSS files to output directory
  eleventyConfig.addPassthroughCopy("css");
  
  // Copy favicon to output directory
  eleventyConfig.addPassthroughCopy("favicon.svg");
  
  // Create a collection for blog posts
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./blog/**/*.md")
      .filter(post => !post.data.draft) // Exclude draft posts
      .reverse();
  });
  
  // Add date filter
  eleventyConfig.addFilter("dateFilter", function(date) {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });
  
  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    }
  };
}; 