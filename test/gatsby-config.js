const myCustomQueries = {
  responsiveMenu: "(max-width: 1200px)",
};

module.exports = {
  siteMetadata: {
    title: `Components Library`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-breakpoints",
      options: {
        queries: myCustomQueries,
      },
    },
  ],
};
