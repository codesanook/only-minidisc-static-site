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
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: 'data',
    //     path: './src/data',
    //   },
    // },
    // {
    //   resolve: `gatsby-transformer-yaml`,
    //   options: {
    //     typeName: ({ node, object, isArray }) => {
    //       const name = node.sourceInstanceName;
    //       if (name === 'data') {
    //         return `${node.name}YAML`
    //       }

    //       return 'SidebarItems';
    //     }
    //   },
    // },
    {
      resolve: '@rocketseat/gatsby-theme-docs',
      options: {
        configPath: 'src/config',
        docsPath: 'src/docs',
        repositoryUrl: 'https://github.com/rocketseat/gatsby-themes',
        baseDir: 'examples/gatsby-theme-docs',
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
  ],
};

// https://meaganwaller.com/render-dynamic-pages-gatsby-file-system-route-api-yaml
