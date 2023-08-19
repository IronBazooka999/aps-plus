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
	console.log(`Flattening ${definitionCount} definitions...`);
	let flattened = {},
		flatten = definition => {

			// Support for string definition references
	        if ("string" == typeof definition) {
	            if (definition in module.exports) {
	                definition = module.exports[definition];
	            } else {
	            	throw Error(`Definition ${definition} is attempted to be gotten but does not exist!`);
	            }
	        }

			let output = {};
			for (let parent in definition.PARENT) {

				// Some people spell a class reference wrong
				if ("undefined" == typeof definition.PARENT[parent]) {
					throw Error(`Definition ${definition} has an undefined parent at index ${parent}!`)
				}

				// Flatten parents too!
				let toApply = flatten(definition.PARENT[parent]);
				for (let key in toApply) {
					output[key] = toApply[key];
				}
			}
			return output;
		};

	for (let key in module.exports) {
		flattened[key] = flatten(module.exports[key]);
	}
	module.exports = flattened;
}

console.log(`Combined ${groups.length} definition groups into ${definitionCount} definitions${c.flattenDefintions ? ' with flattening enabled' : ''}!`);