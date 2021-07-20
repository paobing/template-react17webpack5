const glob = require("glob");
const path = require("path");

const defaultName = null;

const readFileResponse = (n) => {
    let response = {
        "success": "Read file success.",
        "error": "Some unknown errors have occurred."
    }
    response["error"] = `Some errors have occurred about ${n}.`;
    return response;
};

function getKeyPath(target, validateReg) {
    const results = {};

    // TODO: 完善validate参数规则

    if(!target || !validateReg){
        results["error"] = readFileResponse("params").error;
        return results;
    }

    const targetPath = path.resolve(__dirname, target);

    glob.sync(targetPath).forEach(function(entry){
        let key = entry.match(validateReg) ? entry.match(validateReg)[1] : defaultName;
        let fullpath = path.resolve(__dirname, entry);
        key && (results[key] = fullpath);
    })

    // TODO: 当results没有结果时，返回告知没有结果。

    return results;
}

module.exports = {
    getKeyPath
}
