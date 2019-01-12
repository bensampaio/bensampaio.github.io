const path = require('path');

const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const metadata = require('./package.json');

module.exports = {
    entry: {
        main: [
            path.join(__dirname, 'src', 'index.scss'),
            path.join(__dirname, 'src', 'index.jsx'),
        ],
    },
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.m?jsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: [
                                '@babel/plugin-syntax-dynamic-import'
                            ],
                            presets: [
                                '@babel/preset-flow',
                                ['@babel/preset-env', {
                                    useBuiltIns: 'usage',
                                }],
                                '@babel/preset-react',
                            ],
                        },
                    }
                ],
            },
            {
                exclude: /node_modules/,
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                    'sass-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer(),
                            ],
                        },
                    },
                ],
            },
            {
                exclude: /node_modules/,
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: path.join('public', 'img', '[name].[hash].[ext]'),
                        },
                    },
                ],
            },
        ],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                react: {
                    chunks: 'initial',
                    enforce: true,
                    name: 'react',
                    test: /node_modules\/react/,
                },
                others: {
                    chunks: 'initial',
                    enforce: true,
                    name: 'vendor',
                    test: /node_modules\/(?!react)/,
                },
            },
        },
    },
    output: {
        path: __dirname,
        filename: path.join('public', 'js', '[name].[hash].js'),
        chunkFilename: path.join('public', 'js', '[id].[chunkhash].js'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: path.join(__dirname, 'src', 'favicon.ico'),
            meta: {
                author: metadata.author,
                description: metadata.description,
                keywords: metadata.keywords.join(','),
                viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
            },
            template: path.join(__dirname, 'src', 'index.html'),
            title: '',
        }),
        new MiniCssExtractPlugin({
            filename: path.join('public', 'css', '[name].[hash].css'),
            chunkFilename: path.join('public', 'css', '[id].[chunkhash].css'),
        }),
        new OptimizeCssAssetsPlugin({}),
    ],
};
