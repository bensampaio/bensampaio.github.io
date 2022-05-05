const path = require('path');

const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const metadata = require('./package.json');

module.exports = {
    entry: {
        main: [
            path.join(__dirname, 'src', 'index.scss'),
            path.join(__dirname, 'src', 'index.tsx'),
        ],
    },
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.m?tsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ],
            },
            {
                exclude: /node_modules/,
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    autoprefixer(),
                                ],
                            }
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
                            name: path.join('public', 'img', '[name].[contenthash].[ext]'),
                        },
                    },
                ],
            },
        ],
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin(),
        ],
    },
    output: {
        path: __dirname,
        filename: path.join('public', 'js', '[name].[contenthash].js'),
        chunkFilename: path.join('public', 'js', '[id].[contenthash].js'),
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
            filename: path.join('public', 'css', '[name].[contenthash].css'),
            chunkFilename: path.join('public', 'css', '[id].[contenthash].css'),
        }),
    ],
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    },
};
