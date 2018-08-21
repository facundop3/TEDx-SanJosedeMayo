const VueLoaderPlugin = require('vue-loader/lib/plugin')

const path = require('path')

module.exports = {

  entry: path.resolve(__dirname, 'src/main.js'),
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module:{
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
    // this will apply to both plain `.js` files
    // AND `<script>` blocks in `.vue` files
    {
      test: /\.js/,
      loader: 'babel-loader'
    },
    // this will apply to both plain `.css` files
    // AND `<style>` blocks in `.vue` files
    {
      test: /\.css/,
      use: [
        'vue-style-loader',
        'css-loader'
      ]
    }

    ]
  },
  plugins:[
    new VueLoaderPlugin()
  ],
  resolve:{
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
}