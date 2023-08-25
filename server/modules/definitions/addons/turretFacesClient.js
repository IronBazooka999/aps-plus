// An addon is guaranteed to run only after all groups are loaded.
// This is helpful, if your group relies on all other definitions already being loaded.
// Addons that are dependant on other addons should be named something like
// "[PARENT ADDON NAME]-[EXTENSION NAME].js", to make sure that it would run after that addon ran.

// const { base } = require('../constants.js');

module.exports = ({ Class }) => {

	// This addon is disabled by default.
	// You can also disable addons by not making them end with '.js'
	return console.log(`[turretFacesClient.js] Addon is disabled by default`);

	// This adds the tank to the definitions and to the memes menu
	Class.aimToCursorMan = {
        PARENT: ['genericTank'],
        LABEL: 'Turret Faces Client Test',
        TURRETS: [{
            POSITION: [15, 0, 0, 0, 0, 1],
            TYPE: [{ SHAPE: 4, COLOR: 1 }]
        }, {
            POSITION: [15, 0, 10, 0, 0, 1],
            TYPE: [{ SHAPE: 4, COLOR: 3 }]
        }, {
            POSITION: [15, 0, 10, 0, 0, 1],
            TYPE: [{ SHAPE: 4, COLOR: 2 }]
        }]
    }
    Class.fun.UPGRADES_TIER_0.push('aimToCursor')
};