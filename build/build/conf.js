/*
* Copyright 2011 Research In Motion Limited.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var path = require("path"),
    fs = require("fs");

function getToolsDir() {
    var localTools = path.normalize(__dirname + "/../../dependencies/tools"),
        bbndkDir;

    //Check if dependencies/tools folder exists
    if (fs.existsSync(localTools)) {
        return localTools;
    } else if (process.env && process.env["QNX_HOST"]) {
        bbndkDir = path.join(process.env["QNX_HOST"], "usr");
        if (fs.existsSync(bbndkDir)) {
            //BBNDK exists on path, use its tools
            return bbndkDir;
        }
    }
}

module.exports = {
    ROOT: path.normalize(__dirname + "/../../"),
    DEPLOY: path.normalize(__dirname + "/../../target/zip/"),
    TARGET: path.normalize(__dirname + "/../../target/"),
    BUILD: path.normalize(__dirname + "/.."),
    LIB: path.normalize(__dirname + "/../../lib"),
    DEPENDENCIES: path.normalize(__dirname + "/../../dependencies"),
    TOOLS: getToolsDir(),
    NODE_MOD: path.normalize(__dirname + "/../../node_modules"),
    FRAMEWORK: path.normalize(__dirname + "/../../Framework"),
    FRAMEWORK_DEPLOY: path.normalize(__dirname + "/../../Framework/target/zip/"),
    THIRD_PARTY: path.normalize(__dirname + "/../../third_party")
};
