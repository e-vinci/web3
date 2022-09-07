const emoji = require(`remark-emoji`);
const siteURL = "https://e-vinci.github.io/web3"; // No trailing slash allowed!
const siteTitle = "web3course";
const youtubeUrl = ""; //"https://www.youtube.com/channel/UC_iU0pfrDaYFXd6X9mPlAJQ";
const authorEmail = "raphael.baroni@vinci.be";
const facebookUrl = "";
const instagramUrl = "";
const defaultLanguage = "fr";
const defaultAssociatedProjectGroupName = "Web3 2022";

module.exports = {
  pathPrefix: `/web3`,
  siteMetadata: {
    title: siteTitle,
    description: "web3course : Apprendre React, Node.js & MongoDB",
    url: siteURL,
    siteUrl: siteURL, // config for gatsby-plugin-robots-txt
    youtubeUrl: youtubeUrl,
    authorEmail: authorEmail,
    facebookUrl: facebookUrl,
    instagramUrl: instagramUrl,
    languages: { langs: ["fr"], defaultLangKey: defaultLanguage },
    defaultAssociatedProjectGroupName: defaultAssociatedProjectGroupName,
    isAuthentication: true, // currently there is only Vinci MSAL
    //twitterUsername: "@whoever; )",
    menuLinks: [
      {
        name: `Home`,
        link: `/`,
      },
      {
        name: "Contenu du cours",
        link: "",
        subMenu: [
          { name: "Introduction", link: "/intro" },
          {
            name: "Module 1 : Introduction à React",
            link: "/modules/1",
          },
          { name: "Module 2 : React state", link: "/modules/2" },
          {
            name: "Module 3 : Rendering collections",
            link: "/modules/3",
          },
          { name: "Module 4 : Forms", link: "/modules/4" },
          { name: "Module 5 : State & Context", link: "/modules/5" },
          { name: "Module 6 : REST API", link: "/modules/6" },
          { name: "Module 7 : Exercice récapitulatif", link: "/modules/7" },
          {
            name: "Module 8 : REST API & middleware",
            link: "/modules/8",
          },         
        ],
      },
      {
        name: `Projets`,
        link: `/project-page`,
        protected: true,
      },
      {
        name: "Revues de projets",
        link: "",
        protected: true,
        subMenu: [
          { name: "Mes revues", link: "/my-reviews-page" },
          { name: "Toutes les revues", link: "/review-page" },
          {protected: true},
        ],
      },
    ],
  },
  plugins: [
    {
      resolve: `web-projects-source-plugin`,
      options: {
        projectGroupNames: [], // ["Web2 2020", "Web2 2021"],
      },
    },
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-image`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "slides",
        path: `./src/slides`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "texts",
        path: `./src/texts`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
        name: "texts",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "mdx-pages",
        path: `./src/mdx-pages`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "other-ressources",
        path: `./src/other-resources`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "sounds",
        path: `./src/sounds`,
      },
    },
    {
      resolve: "gatsby-plugin-remove-console",
      options: {
        exclude: ["error", "warn"], // <- will be removed all console calls except these
      },
    },
    `gatsby-remark-images`,

    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: true,
            },
          },
        ],
        extensions: [".mdx", ".md"],
        remarkPlugins: [emoji],
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteTitle,
        short_name: siteTitle,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#303030`,
        display: `standalone`,
        icon: `src/images/React-icon.svg`,
        cache_busting_mode: "none",
        // sizes: "any",
        //type: "image/svg+xml",
        include_favicon: true,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyForNull: "any",
        langKeyDefault: defaultLanguage,
        useLangKeyLayout: true,
        prefixDefault: false,
        pagesPaths: ["/src/mdx-pages/", "/src/pages"],
      },
    },
    `gatsby-plugin-offline`,
    "gatsby-plugin-robots-txt",
  ],
};
