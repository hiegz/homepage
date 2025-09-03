import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(import.meta.dirname, "dist"),
    },
    resolve: {
        alias: {
            "@": path.resolve(import.meta.dirname, "src"),
        },
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.woff2?$/,
                type: "asset/resource",
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
};
