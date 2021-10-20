
const entries = require("./webpack/entry");
const modules = require("./webpack/module");
const plugins = require("./webpack/plugins");
const resolve = require("./webpack/resolve");
const output = require("./webpack/output");

const setConfig = (env, argv) => {

    const config = {
        entry: entries,
        module: modules,
        plugins: plugins(env, argv),
        resolve: resolve,
        output: output(env, argv),
        optimization: {
            runtimeChunk: {
                name: "manifest"
            },
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        chunks: "all",
                        test: /[\\/]node_modules[\\/][^antd]/,
                        name: "vendors"
                    },
                    antd: {
                        chunks: "all",
                        test: /[\\/]node_modules[\\/][antd]/,
                        name: "antd"
                    },
                    commons: {
                        chunks: "all",
                        test: /[\\/]vendor[\\/]/,
                        name: "commons"
                    }
                }
            }
        }
    }

    if(argv.mode === "development"){
        config.devtool = "inline-source-map";
        config.devServer = {
            hot: true,
            historyApiFallback: true
        }
    }

    return config;
};

module.exports = setConfig;
