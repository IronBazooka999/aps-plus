let fs = require('fs'),
	groups = fs.readdirSync('./groups');

module.exports = {};

for (let filename of groups) {
	let group = require('./groups/' + filename);
	for (let key in group) {
		if (module.exports[key]) {
			console.warn("WARNING: " + key + ' is present in multiple definition groups!');
		}
		module.exports[key] = group[key];
	}
}

let definitionCount = Object.keys(module.exports).length;

// "Flattening" refers to removing PARENT attributes and applying the parents' attributes to the definition themselves, if not overwritten later on.
if (c.flattenDefintions) {
//	console.log(`Flattening ${definitionCount} definitions...`);
//	let flattened = {},
//		flatten = definition => {
//			let output = {};
//			for (let parent of definition.PARENT) {}
//		};

//	for (let key in module.exports) {
//		flattened[key] = flatten(module.exports[key]);
//	}

//	module.exports = flattened;
}

console.log(`Combined ${groups.length} definition groups into ${definitionCount} definitions${c.flattenDefintions ? ' with flattening enabled' : ''}!`);