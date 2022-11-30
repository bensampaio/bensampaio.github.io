import { createRequire } from 'module';
import path from 'path';
import { fileURLToPath } from 'url';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

const require = createRequire(import.meta.url);

const metadata = require('./package.json');

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
    entry: {
        main: [
            path.join(dirname, 'src', 'index.scss'),
            path.join(dirname, 'src', 'index.tsx'),
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
                    },
                ],
            },
            {
                exclude: /node_modules/,
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                    'postcss-loader',
                ],
            },
            {
                exclude: /node_modules/,
                test: /\.(jpg|png|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: path.join(
                                'public',
                                'img',
                                '[name].[contenthash].[ext]'
                            ),
                        },
                    },
                ],
            },
        ],
    },
    optimization: {
        minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
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
        path: dirname,
        filename: path.join('public', 'js', '[name].[contenthash].js'),
        chunkFilename: path.join('public', 'js', '[id].[contenthash].js'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: path.join(dirname, 'src', 'favicon.ico'),
            meta: {
                author: metadata.author,
                description: metadata.description,
                keywords: metadata.keywords.join(','),
                viewport:
                    'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
            },
            template: path.join(dirname, 'src', 'index.html'),
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
