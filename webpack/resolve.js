/**
 * 创建 import 或 require 的别名，来确保模块引入变得更简单
 */
const path = require("path");
const vendorsPath = path.resolve(__dirname, "../public/vendors");

const resolve = {
    alias: {
        'jwplayer': path.resolve(vendorsPath, 'jwplayer-7.12.1/jwplayer-cgtn.js'),
        'jquery-slimscroll': path.resolve(vendorsPath, 'global/plugins/jquery-slimscroll/jquery.slimscroll.min.js'),
        'jquery.codemirror': path.resolve(vendorsPath, 'global/plugins/jquery-diff/codemirror.min.js'),
        'jquery.mergely': path.resolve(vendorsPath, 'global/plugins/jquery-diff/mergely.min.js'),
        'diff-codemirror-style': path.resolve(vendorsPath, 'global/plugins/jquery-diff/css/codemirror.css'),
        'diff-mergely-style': path.resolve(vendorsPath, 'global/plugins/jquery-diff/css/mergely.css'),
        'sina-emotion': path.resolve(vendorsPath, 'global/plugins/sina-emotion/jquery-sinaEmotion-2.1.0.min.js'),
        'sina-emotion-style': path.resolve(vendorsPath, 'global/plugins/sina-emotion/jquery-sinaEmotion-2.1.0.min.css'),
        'diff_match_patch': path.resolve(vendorsPath, 'global/plugins/diff_match_patch.js'),
        'jquery_pretty_text_diff': path.resolve(vendorsPath, 'global/plugins/jquery.pretty-text-diff.min.js'),
    },
    extensions: ['.js'],
    // modules: [
    //     path.resolve(__dirname, '../../resources'),
    //     path.resolve(__dirname, '../../public/images'),
    //     path.resolve(__dirname, '../../node_modules')
    // ]
};

module.exports = resolve;
