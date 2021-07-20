const Config = require("./config");

const entryFold = "../resources/entries/*.js";
const entryValidate = /entries\/([\w-]+)(\.js)$/;

const entries = { ...Config.getKeyPath(entryFold, entryValidate) };

module.exports = entries;
