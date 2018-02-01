const webpack = require('webpack')

module.exports = {
  lintOnSave: true,

  /**
   * Chain Webpack (working)
   * requires the file .env.development.local with the content 'FOO = BAR'
   */
  // chainWebpack: chainableConfig => {
  //   chainableConfig
  //     .plugin('env')
  //     .use(webpack.EnvironmentPlugin, ['FOO'])
  // }

  /**
   * Chain Webpack (error)
   * produces TypeError: undefined is not a function
   */
  // chainWebpack: chainableConfig => {
  //   chainableConfig
  //     .plugin('env')
  //     .use(webpack.EnvironmentPlugin, {FOO: 'BAR'})
  // }

  /**
   * Configure Webpack
   * produces TypeError: arguments[i].apply is not a function
   */
  configureWebpack: {
    plugins: [
      new webpack.EnvironmentPlugin(['FOO'])
    ]
  }
}
