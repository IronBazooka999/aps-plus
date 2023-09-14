// An addon is guaranteed to run only after all groups are loaded.
// This is helpful, if your group relies on all other definitions already being loaded.
// Addons that are dependant on other addons should be named something like
// "[PARENT ADDON NAME]-[EXTENSION NAME].js", to make sure that it would run after that addon ran.

const { dreadnought1 } = require('../constants.js');

module.exports = ({ Class }) => {
	let primaryName,
		definitionName,
		LABEL,
		BODY = dreadnought1,
		GUNS,
		TURRETS,
		POSITION,
		PROPERTIES,

		primaries = ["swordv1", "pacifierv1", "invaderv1", "centaurv1"],
		secondaries = ["swordv1", "pacifierv1", "invaderv1", "centaurv1", "automationv1", "juggernautv1"];

	// Loop through all possibilities
	for (let i in primaries) {
		primary = primaries[i];
		primaryName = primary;
		
		// Failsafe
		if ("string" == typeof primary) {
			if (!(primary in Class)) throw Error(`Definition ${primary} is attempted to be gotten but does not exist!`);
			primary = Class[primary];
		}

		primary.UPGRADES_TIER_0 = [];

		for (let j in secondaries) {
			secondary = secondaries[j];
			GUNS = [],
			TURRETS = [],

			// Set the definition name
			definitionName = primaryName.substring(0, primaryName.length - 2) + secondary;

			// Failsafe
	        if ("string" == typeof secondary) {
				if (!(secondary in Class)) throw Error(`Definition ${secondary} is attempted to be gotten but does not exist!`);
				secondary = Class[secondary];
			}

			// Label it
			LABEL = primary.LABEL + "-" + secondary.LABEL;
			if (primary.LABEL == secondary.LABEL) LABEL = primary.LABEL;

			// Guns
			if (primary.GUNS) GUNS.push(...primary.GUNS);

			for (let g in secondary.GUNS) {
				POSITION = JSON.parse(JSON.stringify(secondary.GUNS[g].POSITION));
				PROPERTIES = secondary.GUNS[g].PROPERTIES;
				POSITION[5] += 60;
				GUNS.push(
					{
						POSITION,
						PROPERTIES,
					}
				)
			}

			// Turrets
			if (primary.TURRETS) TURRETS.push(...primary.TURRETS);
			if (secondary.TURRETS) TURRETS.push(...secondary.TURRETS);

			// Body modifiers
			if (primary.BODY) for (let m in primary.BODY) BODY *= primary.BODY[m];
			if (secondary.BODY) for (let m in secondary.BODY) BODY *= secondary.BODY[m];

			// Add dreadnought to definitions and place it in the upgrade tree
			Class[definitionName] = {
				PARENT: ["genericDreadnought1"],
				UPGRADES_TIER_0: [],
				BODY, LABEL, GUNS, TURRETS
			};
			primary.UPGRADES_TIER_0.push(definitionName);
		}
	}
};