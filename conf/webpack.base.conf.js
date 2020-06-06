const path = require('path')
const fs = require('fs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/'
} 

//Pages const for HtmlWebpackPlugin
const PAGES_DIR = `${PATHS.src}/pages`
const PAGES = fs.readdirSync(PAGES_DIR).filter(filename => filename.endsWith('.pug'))

module.exports = {
  externals: {
    paths: PATHS
  },
  entry: {
    app: PATHS.src,
    lk:  `${PATHS.src}/lk.js` //дополнительная точка входа для примера
  },
  output: {
    filename: `${PATHS.assets}js/[name].[hash].js`,
    path: PATHS.dist,
    //publicPath: './' //без pablicPath работают стили и в dev и в build
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  module: {
    rules:[{
      test: /\.pug$/,
      loader: 'pug-loader'
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    }, {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader',
      options: {
        outputPath: "assets/fonts",
        publicPath: "../fonts",
        name: '[name].[ext]',
        limit: 1000
      }
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'url-loader',
      options: {
        name: '[name].[ext]'
      }
    }, {
    test: /\.scss$/,
    use: [
      'style-loader',
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: { sourceMap: true }
      }, {
      loader: 'postcss-loader',
      options: { sourceMap: true, config: { path: `./postcss.config.js`} }
      }, {
        loader: 'sass-loader',
        options: { sourceMap: true }
      } 
    ]
    }, 
    // {
    // test: /\.css$/,
    // use: [
    //   'style-loader',
    //   MiniCssExtractPlugin.loader,
    //   {
    //     loader: 'css-loader',
    //     options: { sourceMap: true }
    //   }, {
    //     loader: 'postcss-loader',
    //     options: { sourceMap: true, config: { path: `./postcss.config.js`} }
    //   }
    // ]
    // }
    ]
  },
  resolve: {
    alias: {
      '~'   : 'src'
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].[hash].css`,
    }),
    new CopyWebpackPlugin([
      { from: `${PATHS.src}/components/**/*.{jpg,jpeg,png,svg,gif}`,    to: `${PATHS.assets}img`, flatten: true },
      { from: `${PATHS.src}/${PATHS.assets}fonts`,  to: `${PATHS.assets}fonts` },
      { from: `${PATHS.src}/static`, to: '' },
    ]),
    /*
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/index.html`,
      filename: './index.html',
      inject: true
    }),
    */

    /*
      Automatic creation any html pages (Don't forget to RERUN dev server!)
      See more:
      https://github.com/vedees/webpack-template/blob/master/README.md#create-another-html-files
      Best way to create pages:
      https://github.com/vedees/webpack-template/blob/master/README.md#third-method-best
    */
    ...PAGES.map(
     page =>
      new HtmlWebpackPlugin({
        template: `${PAGES_DIR}/${page}`, // .pug
        filename: `./${page.replace(/\.pug/,'.html')}` // .html
      })
    )
  ],
}