module.exports = {
  siteMetadata: {
    siteTitle: 'MD Burner',
    defaultTitle: 'MD Burner',
    siteTitleShort: 'MD Burner',
    siteDescription: 'Write your mini disc online',
    siteUrl: 'https://mdburner.com',
    siteAuthor: 'MD Burner team',
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
      },
    },
    'gatsby-plugin-remove-trailing-slashes',
  ],
};
