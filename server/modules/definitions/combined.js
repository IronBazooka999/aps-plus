let fs = require('fs'),
	groups = fs.readdirSync('./groups'),
	definitionCount = 0;

module.exports = {};

for (let filename of groups) {
	let group = require('./groups/' + filename);
	for (let key of group) {
		if (module.exports[key]) {
			console.warn("WARNING: " + key + ' is present in multiple definition groups!');
		}
		module.exports[key] = group[key];
	}
}

console.log(`Combined ${groups.length} definition groups into ${Object.keys(module.exports).length} definitions!`);