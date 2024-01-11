import {IBuildOptions} from "./types/config";
import webpack from "webpack";
import path from "node:path";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildPlugin} from "./buildPlugin";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: IBuildOptions): webpack.Configuration {
    const {mode, paths, isDev} = options;
    return  {
        mode,
        entry: paths.entry,
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
        // dev опции
        devtool: isDev ? 'inline-source-map' : false,
        devServer: isDev ? buildDevServer(options) : undefined,
        // Плагины
        plugins: buildPlugin(options),
    }
}