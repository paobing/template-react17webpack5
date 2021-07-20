const path = require("path");
const fs = require("fs");
const webpack = require("webpack");

const Config = require("./config");
const entries = require("./entry");

/* HtmlWebpackPlugin，打包html */
const HtmlWebpackPlugin = require("html-webpack-plugin");

const createHtmlPlugins = () => {
    let plugins = [];
    const templateFold = "../resources/templates/*.ejs";
    const templateValidate = /templates\/([\w-]+)(\.ejs)$/;

    const templates = { ...Config.getKeyPath(templateFold, templateValidate) };

    for (const chunkname in templates) {
        if (Object.hasOwnProperty.call(templates, chunkname)) {
            const viewFilename = `${chunkname}.html`;
            const viewPath = path.join(__dirname, `../${viewFilename}`);
            const relatedChunks = fs.existsSync(entries[chunkname]) ? ["manifest", "vendors", "antd", "commons", chunkname] : [];

            const conf = {
                filename: viewPath, // the path to save page(html).
                template: templates[chunkname], // templates to render html.
                inject: true,   // set allow to modify mate tag include html & body.
                chunks: relatedChunks,  // 设置该页面引用的文件，只有符合条件的才会被引用
                chunksSortMode: "manual",
                minify: {   // 压缩HTML, 当 webpack 命令行内 mode 值为 production 时生效.
                    removeComments: true,
                    collapseWhitespace: false
                },
                hash: false // 版本号，打出来的html中对css和js的引用自带版本号
            };

            plugins.push(new HtmlWebpackPlugin(conf));
        }
    }

    return plugins;
};

/* CleanWebpackPlugin， 删除bundle文件夹 */
// 一般只在生产环境打包时使用，本地热更新需要单独配置
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const cleanPlugin = () => {
    let plugin;

    plugin = new CleanWebpackPlugin();

    return plugin;
}

/* css-loader plugin */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const cssLoaderPlugin = (hasHash) => {
    let plugin;
    let options = {};

    if (hasHash) {
        options.filename = "css/[name].[contenthash:8].css";
        options.chunkFilename = "css/[name].[contenthash:8].chunk.css"
    } else {
        options.filename = "css/[name].css";
        options.chunkFilename = "css/[name].chunk.css"
    }

    plugin = (new MiniCssExtractPlugin(options));

    return plugin;
}

/* ProvidePlugin， 自加载模块 */
const providerPlugin = () => {
    let plugin;

    plugin = new webpack.ProvidePlugin({
        $: "jquery",
        JQuery: "jquery",
        "window.jQuery": "jquery",
        "window.$": "jquery",
        _: "lodash",
        React: "react",
        ReactDOM: "react-dom"
    })

    return plugin;
}

/* 代码拆分依赖关系图  测试分析用 */
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const bundlePlugin = () => {
    let plugin;

    plugin = new BundleAnalyzerPlugin({
        analyzerMode: "server",
        analyzerHost: "127.0.0.1",
        analyzerPort: 8080,
        reportFilename: "index.html",
        openAnalyzer: true,
        generateStatsFile: false,
        statsOptions: null,
        logLevel: "info"
    });

    return plugin;
}

/* g-zip 压缩 */
const CompressionWebpackPlugin = require('compression-webpack-plugin');

const gzipPlugin = () => {
    let plugin;

    plugin = new CompressionWebpackPlugin({ // gzip 压缩
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp( '\\.(js|css)$' ),    // 压缩 js、css
        threshold: 10240,
        minRatio: 0.8,
        // deleteOriginalAssets: true  // 删除原始文件
    });

    return plugin;
}

module.exports = (env, argv) => {
    let plugins = [];

    const bol = argv.mode == "production" ? true : false;

    plugins.push(...createHtmlPlugins());
    plugins.push(cssLoaderPlugin(hasHash=bol));
    plugins.push(providerPlugin());

    bol && plugins.push(cleanPlugin());
    bol && plugins.push(bundlePlugin());

    return plugins;
};
