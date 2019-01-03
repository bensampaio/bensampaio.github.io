require('dotenv').config();

const path = require('path');

const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

const metadata = require('./package.json');

module.exports = {
    entry: {
        main: path.join(__dirname, 'src', 'index.jsx'),
    },
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            {
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', {
                                    useBuiltIns: 'usage',
                                }],
                                '@babel/preset-react',
                            ],
                        },
                    }
                ],
                test: /\.m?jsx?$/,
            },
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'style-loader',
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
                test: /\.(jpg|png)$/,
                use: [
                    'file-loader',
                ],
            },
        ],
    },
    output: {
        path: path.join(__dirname, 'public', 'build'),
        filename: '[name].[hash].js',
    },
    plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin({
            favicon: path.join(__dirname, 'public', 'favicon.ico'),
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
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css',
        }),
    ],
};
