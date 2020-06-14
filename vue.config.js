module.exports = {
  transpileDependencies: ['vuetify'],
  configureWebpack: {
    resolve: {
      symlinks: false
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/trello-revamp/'
    : '/'
};
