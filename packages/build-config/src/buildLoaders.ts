import {ModuleOptions} from 'webpack'
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";
import type { Configuration as  DevServerConfiguration } from "webpack-dev-server"
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import ReactRefreshTypeScript from 'react-refresh-typescript';
// import {buildBabelLoader} from "./babel/buildBabelLoader"


export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
    const isDev = options.mode === 'development'

    const cssLoaderWithModules = {
        test: /\.css$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
                    },
                },
            },
        ],
    };

    const assetLoader = {
            test: /\.(png|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        }

    const tsxLoader = {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: [
                {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                        getCustomTransformers: () => ({
                            before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                        })
                    }
                }
            ]
        }

    const svgrLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    //const babelLoader = buildBabelLoader()

    return [
        assetLoader,
        cssLoaderWithModules,
        //babelLoader,
        tsxLoader,
        svgrLoader
    ]
}