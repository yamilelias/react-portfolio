const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const entry = require('./webpack.entry.js');

const babelrc = fs.readFileSync(path.join(__dirname, '..', '.babelrc')).toString();

const base = (env) => {
  const envs = ['production', 'homologation', 'test', 'development'];
  if (envs.indexOf(env) === -1) {
    throw new Error(`env '${env}' not supported`);
  }

  return {
    entry,
    output: {
      filename: 'js/index.js',
      path: path.join(__dirname, '..', 'release'),
      publicPath: '/',
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
      alias: {
        config: path.join(__dirname, '..', 'src', 'config', env === 'development' ? 'test' : env),
      },
    },
    plugins: [
      new CopyWebpackPlugin([
        {
          context: './src/static',
          from: '**/*',
          to: './',
        },
      ]),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(env === 'development' ? 'development' : 'production'),
        },
      }),
      new HtmlWebpackPlugin({
        template: './src/html/index.ejs',
        production: env === 'production',
        filename: 'index.html',
        inject: true,
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: [{
            loader: 'babel-loader',
            options: JSON.parse(babelrc),
          }],
        }, {
          test: /\.(jpg|png|gif)$/,
          use: [{
            loader: 'url-loader',
            options: {
              limit: 30000,
              name: 'img/[name].[ext]',
            },
          }],
        }, {
          test: /\.svg$/,
          use: [{
            loader: 'url-loader',
            options: {
              name: 'img/[name].[ext]',
            },
          }],
        },
      ],
    },
  };
};

module.exports = base;
