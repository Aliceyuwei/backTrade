module.exports = {
  // plugins: [
  //   'cypress'
  // ],
  plugins: [
    new webpack.ProvidePlugin({
        jQuery: "jquery",
        $: "jquery",
        _: "lodash",
        'cypress': 'cypress'
    })
],
  env: {
    mocha: true,
    'cypress/globals': true
  },
  rules: {
    strict: 'off'
  }
}
