const MiniCssExtractPlugin = require('mini-css-extract-plugin');    // css文件化

const modules = {
    rules: [
        {
            test: /\.css$/,
            use: [
                "style-loader",
                "css-loader"
            ]
        },
        {
            test: /\.styl$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "postcss-loader",
                "stylus-loader"
            ]
        },
        {
            test: /\.less$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "postcss-loader",
                {
                    loader: "less-loader",
                    options: {
                        lessOptions: {
                            javascriptEnabled: true
                        }
                    }
                }
            ]
        },
        {
            test: /\.(png|jpg|gif)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'images/[name].[ext]',
                    }
                }
            ]
        },
        {
            test: /\.(woff2|woff|eot|ttf|otf)(\?.*)?$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: '[path][name].[ext]',
                    }
                }
            ]
        },
        {
            test: /\.js$/,
            exclude: /[\\/]node_modules[\\/][^antd]/,
            use: [
                {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            {
                                plugins: [
                                    // "@babel/plugin-proposal-class-properties", // 已在 ES2022，preset-react 中内置
                                    ["import", {
                                        libraryName: "antd",
                                        libraryDirectory: "lib",
                                        // style: "css" // 使用.css文件
                                        style: true // 使用.less文件
                                    }]
                                ]
                            }
                        ],
                        cacheDirectory: false
                    }
                }
            ]
        },
        // {
        //     // 此处是node.js调用，与webpack处理流程中的`require.resolve`无关
        //     // 此处的`require.resolve`用来获取模块的绝对路径("../../node_modules/jquery/dist/jquery.js")
        //     // 此处生效需要在bundle中被require过。(此处的require是指webpack中的引用)
        //     test: require.resolve("jquery"),
        //     use: [
        //         {
        //             loader: "expose-loader",
        //             options: {
        //                 exposes: ["JQuery", "$"]
        //             }
        //         }
        //     ]
        // },
    ]
};

module.exports = modules;
