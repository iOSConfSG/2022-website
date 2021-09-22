const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `iOS Conf SG`,
    description: `The largest iOS developer conference in Southeast Asia. Early-bird tickets are available until 15th November 2021!`,
    siteUrl: `https://2022.iosconf.sg`,
    author: `@vinamelody`,
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.orange["400"],
        display: `minimal-ui`,
        icon: `src/images/logo-flat.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "2358779474344408",
      },
    },
  ],
};
