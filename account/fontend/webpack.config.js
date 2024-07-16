const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const BundleTracker = require('webpack-bundle-tracker');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './src/index.ts',
  mode: 'none',
  output: {
    path: path.resolve(__dirname, '../static/account/javascripts'), // '../static'
    filename: 'main-[id]-[hash].js',

    clean: true,

  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(tsx|jsx|ts|js)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: path.resolve(__dirname, './babel.config.js'),
            }
          },

        ],
        exclude: [
          path.resolve(__dirname, "node_modules"),
        ]

      },

      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          'postcss-loader',

        ],

      },
      // {
      //   test: /\.svg$/,
      //   include: path.resolve(__dirname, 'src/pic/svg'),

      //   type: 'asset/inline',
      //   generator: {
      //     filename: 'pic/svg/[name][ext]',
      //   },

      // },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: '../pic/[name][ext]',
        },
      },
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/i,
      //   type: 'asset/resource',
      //   generator: {
      //     filename: '../fonts/[name][ext]'  // [hash][ext][query]'
      //   }
      // },

    ]
  },



  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env.APP_SERVER_PORT': JSON.stringify(process.env.APP_SERVER_PORT),
    //   'process.env.APP_SERVER_HOST': JSON.stringify(process.env.APP_SERVER_HOST),
    //   'process.env.APP_ACCOUNTS_PATHNAME': JSON.stringify(process.env.APP_ACCOUNTS_PATHNAME),
    // }),
    // new Dotenv(),
    new TsconfigPathsPlugin(),
    new BundleTracker({
      path: path.join(__dirname, 'src/bundles'),
      filename: 'webpack-stats.json'
    }),

    new SpriteLoaderPlugin(), // svg

    // new HtmlWebpackPlugin({
    //   template: 'src/public/index.html' //'../templates/index.html'
    // }),
    new webpack.SourceMapDevToolPlugin({
      test: /\.tsx?$/,
      filename: './dist/maps/[file].map.[query]',
      include: path.resolve(__dirname, 'src/'),
    }),

    new ESLintPlugin({
      files: path.resolve(__dirname, 'src/scripts'),

    }),

    new MiniCssExtractPlugin({
      filename: '../css/style.css'
    }),
  ],
  watchOptions: {
    ignored: [
      "node_modules",
      "**/node_modules"
    ]
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'), // '../static'

    },


    watchFiles: [
      'dist',
    ],
    hot: true, // Включение горячей перезагрузки
    liveReload: true, // Включение live-reload

    compress: true,
    historyApiFallback: true,
    open: true, // Автоматическое открытие браузера
    port: process.env.APP_SERVER_PORT ||'8000'
  },

  resolve: {
    extensions: [".tsx", ".jsx", ".ts", ".js", ".svg"],
    modules: [
      path.resolve(__dirname, "./.browserslistrc"),
      path.resolve(__dirname, "node_modules"),
      path.resolve(__dirname, "dist")
    ],

    alias: {
      '@cookies': path.resolve(__dirname, 'src/scripts/cookies.ts'),
      '@intarfaces': path.relative(__dirname, "src/scripts/interfaces.ts"),
      '@Postman': path.resolve(__dirname, 'src/scripts/oop/Postman'),
      
      '@Validaors': path.resolve(__dirname, 'src/scripts/Validators'),
    }
  },

};
