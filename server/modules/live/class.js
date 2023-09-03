let Class = require("../../lib/definitions.js");
//let Class = require("../definitions/combined.js");
let i = 0;
for (let key in Class) {
    if (!Class.hasOwnProperty(key)) continue;
    Class[key].index = i++;
}

module.exports = { Class };