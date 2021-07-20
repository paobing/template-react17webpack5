const path = require("path");

const output = (env, argv) => {

    let publicPath = "/public/bundle/";
    let filename = "js/[name].js";
    let chunkFilename = "js/[name].js"

    switch (argv.mode) {
        case "production":
            publicPath = "/cms" + publicPath;
            filename = "js/[name].[chunkhash].js";
            chunkFilename = "js/[name].[chunkhash].js";
            break;
        default:
            break;
    }

    return {
        //打包文件存放的绝对路径，html、css、js都会按这个路径打包
        path: path.join(__dirname, '../public/bundle'),
        //网站运行时的访问路径，不设置的话，打包出的html中的默认引用的路径会是相对路径
        publicPath: publicPath,
        //打包后的文件名
        filename: filename,
        chunkFilename: chunkFilename,
    }
};

module.exports = output;
