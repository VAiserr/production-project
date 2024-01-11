import webpack from "webpack";
import {IBuildOptions} from "./types/config";

export function buildResolvers({paths}: IBuildOptions): webpack.ResolveOptions {

    return {
        extensions: ['.tsx', '.ts', '.js'],
        modules: [paths.src, "node_modules"],
        preferAbsolute: true,
        mainFiles: ["index"],
        alias: {},
    }
}