const ghpages = require("gh-pages");

ghpages.publish(
  "dist",
  {
    repo: "https://github.com/sameermujahid/sameermujahid.github.io.git",
    branch: "gh-pages",
    remote: "origin",
    silent: false,
  },
  (error) => {
    if (error) {
      console.error(error);
      process.exit(1);
    }

    console.log("GitHub Pages deployment completed successfully.");
  }
);