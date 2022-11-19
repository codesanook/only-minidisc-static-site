const configPath = './src/config';

module.exports = {
  siteMetadata: {
    siteTitle: 'Only MiniDisc',
    defaultTitle: 'Only MiniDisc',
    siteTitleShort: 'Only MiniDisc',
    siteDescription: 'All things about MiniDisc',
    siteUrl: 'https://onlyminidisc.com',
    siteAuthor: 'Only MiniDisc',
    siteImage: '/banner.png',
    siteLanguage: 'en',
    themeColor: '#8257E6',
    basePath: '/',
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: '@rocketseat/gatsby-theme-docs',
      options: {
        configPath: 'src/config',
        docsPath: 'src/docs',
        repositoryUrl: 'https://github.com/rocketseat/gatsby-themes',
        baseDir: 'examples/gatsby-theme-docs',
        gatsbyRemarkPlugins: [
          {
            // resolve: require.resolve(`./plugins/gatsby-remark-purple-headers`),
            resolve: require.resolve(`./plugins/remark-collapse`),
          },
        ],
      },
    },
    'gatsby-plugin-remove-trailing-slashes',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Only MiniDisc',
        short_name: 'Only MiniDisc',
        start_url: '/',
        background_color: '#ffffff',
        display: 'standalone',
        icon: 'static/favicon.png',
      },
    },
    // https://medium.com/@johnny02/how-to-add-font-awesome-to-a-gatsby-site-89da940924d5
    `gatsby-plugin-fontawesome-css`,
  ],
};

// https://meaganwaller.com/render-dynamic-pages-gatsby-file-system-route-api-yaml
