/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable key-spacing */
/* eslint-disable quote-props */
const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  ui_kit: path.join(__dirname, '../src/components/ui-kit'),
  assets: 'assets/',
};

// Pages const for HtmlWebpackPlugin
const PAGES_DIR = `${PATHS.src}/pages`;
const PAGES = fs
  .readdirSync(PAGES_DIR)
  .filter((filename) => !filename.endsWith('.pug')); // TODO

module.exports = {
  externals: {
    paths: PATHS,
  },
  entry: {
    'app': PATHS.src,
    'landing-page': `${PAGES_DIR}/landing-page/landingPage.js`,
    'registration': `${PAGES_DIR}/registration/registration.js`,
    'room-details': `${PAGES_DIR}/room-details/roomDetails.js`,
    'search-room': `${PAGES_DIR}/search-room/searchRoom.js`,
    'sign-in': `${PAGES_DIR}/sign-in/signIn.js`,
    '404': `${PAGES_DIR}/404/404.js`,

    'cards': `${PATHS.ui_kit}/cards/cards.js`,
    'colors-and-types': `${PATHS.ui_kit}/colors-and-types/colorsAndTypes.js`,
    'form-elements': `${PATHS.ui_kit}/form-elements/formElements.js`,
    'headers-and-footers': `${PATHS.ui_kit}/headers-and-footers/headers-and-footers/headersAndFooters.js`,
    'index': `${PAGES_DIR}/index/index.js`,
  },
  output: {
    filename: `${PATHS.assets}js/[name].[hash].js`,
    path: PATHS.dist,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          outputPath: 'assets/fonts',
          publicPath: '../fonts',
          name: '[name].[ext]',
          limit: 1000,
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/img',
              publicPath: '../img',
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: { path: './postcss.config.js' },
            },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      '~': 'src',
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jquery: 'jquery',
      jQuery: 'jquery',
      'window.jquery': 'jquery',
      'window.jQuery': 'jquery',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].[hash].css`,
      ignoreOrder: true,
    }),
    new CopyWebpackPlugin([
      {
        from: `${PATHS.src}/components/**/*.{jpg,jpeg,png,svg,gif}`,
        to: `${PATHS.assets}img`,
        flatten: true,
      },
      {
        from: `${PATHS.src}/pages/**/*.{jpg,jpeg,png,svg,gif}`,
        to: `${PATHS.assets}img`,
        flatten: true,
      },
      {
        from: `${PATHS.src}/pages/**/*.{jpg,jpeg,png,svg,gif}`,
        to: `${PATHS.assets}img`,
        flatten: true,
      },
      { from: `${PATHS.src}/static`, to: 'static' },
      { from: `${PATHS.src}/assets/json`, to: 'assets/json' },
    ]),

    ...PAGES.map(
      (page) => new HtmlWebpackPlugin({
        template: `${PAGES_DIR}/${page}/${page}.pug`, // .pug // TODO
        filename: `${page}.html`,
        minify: {
          removeScriptTypeAttributes: true,
        },
        chunks: ['app', 'vendors', path.parse(page).name],
      }),
    ),
  ],
};
