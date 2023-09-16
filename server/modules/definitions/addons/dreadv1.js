// An addon is guaranteed to run only after all groups are loaded.
// This is helpful, if your group relies on all other definitions already being loaded.
// Addons that are dependant on other addons should be named something like
// "[PARENT ADDON NAME]-[EXTENSION NAME].js", to make sure that it would run after that addon ran.

const { combineStats, makeAuto } = require('../facilitators.js');
const { gunCalcNames, smshskl } = require('../constants.js');
const g = require('../gunvals.js');
const ensureIsClass = (Class, str) => {
    if ("object" == typeof str) {
        return str;
    }
    if (str in Class) {
        return Class[str];
    }
    throw Error(`Definition ${str} is attempted to be gotten but does not exist!`);
};
const dreadnoughtBody = {
    ACCEL: 1.6,
    SPEED: 1.4,
    HEALTH: 400,
    DAMAGE: 10,
    RESIST: 3,
    PENETRATION: 2,
    SHIELD: 40,
    REGEN: 0.025,
    FOV: 1.5,
    DENSITY: 3,
};

module.exports = ({ Class }) => {

	// Misc
	Class.genericDreadnought1 = {
	    PARENT: ["genericTank"],
	    BODY: dreadnoughtBody,
	    SHAPE: 6,
	    COLOR: 9,
	    SIZE: 50,
	    LEVEL: 150,
	    EXTRA_SKILL: 48,
	    SKILL_CAP: [smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl],
	};
	Class.mechanismMainTurret = {
	    PARENT: ["genericTank"],
	    LABEL: "Turret",
	    CONTROLLERS: ["nearestDifferentMaster"],
	    INDEPEDENT: true,
	    BODY: {
	        FOV: 0.8,
	    },
	    COLOR: 16,
	    GUNS: [{
	        POSITION: [22, 10, 1, 0, 0, 0, 0],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.pound, g.destroy, g.morespeed, g.morereload, g.doublereload]),
	            TYPE: "bullet"
	        }
	    }]
	};
	Class.automationMainTurret = {
	    PARENT: ["genericTank"],
	    LABEL: "Turret",
	    CONTROLLERS: ["onlyAcceptInArc", "nearestDifferentMaster"],
	    INDEPEDENT: true,
	    BODY: {
	        FOV: 0.8,
	    },
	    COLOR: 16,
	    GUNS: [{
	        POSITION: [22, 10, 1, 0, 0, 0, 0],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.destroy, g.morespeed, g.morereload]),
	            TYPE: "bullet"
	        }
	    }]
	};
	Class.automationSecondaryTurret = {
	    PARENT: ["genericTank"],
	    LABEL: "Turret",
	    CONTROLLERS: ["onlyAcceptInArc", "nearestDifferentMaster"],
	    INDEPEDENT: true,
	    BODY: {
	        FOV: 0.8,
	    },
	    COLOR: 16,
	    GUNS: [{
	        POSITION: [22, 10, 1, 0, 0, 0, 0],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.pound, g.morereload]),
	            TYPE: "bullet"
	        }
	    }]
	};
	Class.turretedTrap = makeAuto(Class.trap);

	// T0
	Class.dreadv1 = {
	    PARENT: ["genericDreadnought1"],
	    LABEL: "Dreadnoughts V1",
	}

	// T1
	Class.swordv1 = {
	    PARENT: ["genericDreadnought1"],
	    LABEL: "Sword",
	    GUNS: [],
	    BRANCH_FROM: "dreadv1"
	}
	for (let i = 0; i < 3; i++) {
	    Class.swordv1.GUNS.push({
	        POSITION: [18, 7, 1, 0, 0, 120*i, 0],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.sniper, g.morereload]),
	            TYPE: "bullet"
	        }
	    });
	}

	Class.pacifierv1 = {
	    PARENT: ["genericDreadnought1"],
	    LABEL: "Pacifier",
	    GUNS: [],
	    BRANCH_FROM: "dreadv1"
	}
	for (let i = 0; i < 3; i++) {
	    Class.pacifierv1.GUNS.push({
	        POSITION: [15, 7, 1, 0, 0, 120*i, 0],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.morereload]),
	            TYPE: "bullet"
	        }
	    });
	}

	Class.invaderv1 = {
	    PARENT: ["genericDreadnought1"],
	    LABEL: "Invader",
	    GUNS: [],
	    BRANCH_FROM: "dreadv1"
	}
	for (let i = 0; i < 3; i++) {
	    Class.invaderv1.GUNS.push({
	        POSITION: [5.5, 7.5, 1.3, 7.5, 0, 120*i, 0],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.morespeed]),
	            TYPE: "drone",
	            AUTOFIRE: true,
	            SYNCS_SKILLS: true,
	            STAT_CALCULATOR: gunCalcNames.drone,
	            WAIT_TO_CYCLE: true,
	            MAX_CHILDREN: 4,
	        }
	    });
	}

	Class.centaurv1 = {
	    PARENT: ["genericDreadnought1"],
	    LABEL: "Centaur",
	    GUNS: [],
	    BRANCH_FROM: "dreadv1"
	}
	for (let i = 0; i < 3; i++) {
	    Class.centaurv1.GUNS.push({
	        POSITION: [12, 7, 1, 0, 0, 120*i, 0],
	    }, {
	        POSITION: [2.5, 7, 1.6, 12, 0, 120*i, 0],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.trap, g.pound, g.morereload]),
	            TYPE: ["trap", {HITS_OWN_TYPE: "never"} ],
	            STAT_CALCULATOR: gunCalcNames.trap,
	        },
	    });
	}

	Class.automationv1 = {
	    PARENT: ["genericDreadnought1"],
	    LABEL: "Automation",
	    TURRETS: [],
	}
	for (let i = 0; i < 6; i++) {
	    Class.automationv1.TURRETS.push({
	        POSITION: [4, 8.5, 0, 60*i+30, 180, 1],
	        TYPE: "automationSecondaryTurret",
	    });
	}
	Class.automationv1.TURRETS.push({
	    POSITION: [7, 0, 0, 0, 360, 1],
	    TYPE: "automationMainTurret",
	});

	Class.juggernautv1 = {
	    PARENT: ["genericDreadnought1"],
	    LABEL: "Juggernaut",
	    BODY: {
	        HEALTH: 2,
	        SHIELD: 3,
	        REGEN: 1.5,
	        SPEED: 0.85
	    },
	    TURRETS: [{
	        POSITION: [22, 0, 0, 0, 0, 0],
	        TYPE: ["smasherBody", {INDEPEDENT: false} ]
	    }]
	}

	// T2
	Class.sabrev1 = {
	    PARENT: ["genericDreadnought1"],
	    LABEL: "Sabre",
	    GUNS: [],
	    BRANCH_FROM: "swordv1",
	}
	for (let i = 0; i < 3; i++) {
	    Class.sabrev1.GUNS.push({
	        POSITION: [25, 7, 1, 0, 0, 120*i, 0],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.sniper, g.assass, g.morespeed, g.morereload]),
	            TYPE: "bullet"
	        }
	    }, {
	        POSITION: [5, 7, -1.4, 9, 0, 120*i, 0]
	    });
	}
	Class.gladiusv1 = {
	    PARENT: ["genericDreadnought1"],
	    LABEL: "Gladius",
	    GUNS: [],
	    BRANCH_FROM: "swordv1",
	}
	for (let i = 0; i < 3; i++) {
	    Class.gladiusv1.GUNS.push({
	        POSITION: [16, 8, 1, 0, 0, 120*i, 0]
	    }, {
	        POSITION: [20, 6, 1, 0, 0, 120*i, 0],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.sniper, g.rifle, g.morespeed, g.morereload]),
	            TYPE: "bullet"
	        }
	    });
	}

	Class.appeaserv1 = {
	    PARENT: ["genericDreadnought1"],
	    LABEL: "Appeaser",
	    GUNS: [],
	    BRANCH_FROM: "pacifierv1",
	}
	for (let i = 0; i < 3; i++) {
	    Class.appeaserv1.GUNS.push({
	        POSITION: [6, 8, 1.3, 7, 0, 120*i, 0],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.pound, g.morereload, g.slow, {size: 0.55}]),
	            TYPE: "bullet"
	        }
	    }, {
	        POSITION: [6, 7.5, 1.2, 9, 0, 120*i, 0],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.pound, g.morereload, g.slow, {size: 0.55 * 8 / 7.5}]),
	            TYPE: "bullet"
	        }
	    });
	}
	Class.peacekeeperv1 = {
	    PARENT: ["genericDreadnought1"],
	    LABEL: "Peacekeeper",
	    GUNS: [],
	    BRANCH_FROM: "pacifierv1",
	}
	for (let i = 0; i < 3; i++) {
	    Class.peacekeeperv1.GUNS.push({
	        POSITION: [15, 10, 1, 0, 0, 120*i, 0],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.destroy, g.morereload]),
	            TYPE: "bullet",
	        }
	    });
	}
	Class.diplomatv1 = {
	    PARENT: ["genericDreadnought1"],
	    LABEL: "Diplomat",
	    GUNS: [],
	    BRANCH_FROM: "pacifierv1",
	}
	for (let i = 0; i < 3; i++) {
	    Class.diplomatv1.GUNS.push({
	        POSITION: [13.5, 6, 1, 0, 2.2, 120*i, 0.5],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.slow, g.pound, g.morereload]),
	            TYPE: "bullet"
	        }
	    }, {
	        POSITION: [13.5, 6, 1, 0, -2.2, 120*i, 0.5],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.slow, g.pound, g.morereload]),
	            TYPE: "bullet"
	        }
	    }, {
	        POSITION: [15.5, 6, 1, 0, 0, 120*i, 0],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.slow, g.pound, g.morereload]),
	            TYPE: "bullet"
	        }
	    });
	}

	Class.inquisitorv1 = {
	    PARENT: ["genericDreadnought1"],
	    LABEL: "Inquisitor",
	    GUNS: [],
	    BRANCH_FROM: "invaderv1",
	}
	for (let i = 0; i < 3; i++) {
	    Class.inquisitorv1.GUNS.push({
	        POSITION: [7, 8.5, 1.3, 7.5, 0, 120*i, 0],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.morespeed, g.battle, {SIZE: 1.25}]),
	            TYPE: "drone",
	            AUTOFIRE: true,
	            SYNCS_SKILLS: true,
	            STAT_CALCULATOR: gunCalcNames.drone,
	            WAIT_TO_CYCLE: true,
	            MAX_CHILDREN: 4,
	        }
	    });
	}
	Class.assailantv1 = {
	    PARENT: ["genericDreadnought1"],
	    LABEL: "Assailant",
	    GUNS: [],
	    BRANCH_FROM: "invaderv1",
	}
	for (let i = 0; i < 3; i++) {
	    Class.assailantv1.GUNS.push({
	        POSITION: [13.5, 8, 1, 0, 0, 120*i, 0],
	    }, {
	        POSITION: [1.5, 10, 1, 13.5, 0, 120*i, 0],
	        PROPERTIES: {
	            MAX_CHILDREN: 4,
	            SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
	            TYPE: "minion",
	            STAT_CALCULATOR: gunCalcNames.drone,
	            AUTOFIRE: true,
	            SYNCS_SKILLS: true
	        }
	    }, {
	        POSITION: [12, 10, 1, 0, 0, 120*i, 0]
	    });
	}
	Class.infiltratorv1 = {
	    PARENT: ["genericDreadnought1"],
	    LABEL: "Infiltrator",
	    GUNS: [],
	    BRANCH_FROM: "invaderv1",
	}
	for (let i = 0; i < 3; i++) {
	    Class.infiltratorv1.GUNS.push({
	        POSITION: [7, 6, 0.6, 5.5, 2.8, 120*i, 0.5],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.pound]),
	            TYPE: "swarm",
	            STAT_CALCULATOR: gunCalcNames.swarm
	        }
	    }, {
	        POSITION: [7, 6, 0.6, 5.5, -2.8, 120*i, 0.5],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.pound]),
	            TYPE: "swarm",
	            STAT_CALCULATOR: gunCalcNames.swarm
	        }
	    }, {
	        POSITION: [7, 6, 0.6, 8, 0, 120*i, 0],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.pound]),
	            TYPE: "swarm",
	            STAT_CALCULATOR: gunCalcNames.swarm
	        }
	    });
	}

	Class.cerberusv1 = {
	    PARENT: ["genericDreadnought1"],
	    LABEL: "Cerberus",
	    GUNS: [],
	    BRANCH_FROM: "centaurv1",
	}
	for (let i = 0; i < 3; i++) {
	    Class.cerberusv1.GUNS.push({
	        POSITION: [11.5, 2.5, 1, 0, 4, 120*i, 0]
	    }, {
	        POSITION: [1.75, 2.5, 1.7, 11.5, 4, 120*i, 0],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.fast, g.pound, g.morereload]),
	            TYPE: ["trap", {HITS_OWN_TYPE: "never"} ],
	            STAT_CALCULATOR: gunCalcNames.trap,
	        },
	    }, {
	        POSITION: [11.5, 2.5, 1, 0, -4, 120*i, 0]
	    }, {
	        POSITION: [1.75, 2.5, 1.7, 11.5, -4, 120*i, 0],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.fast, g.pound, g.morereload]),
	            TYPE: ["trap", {HITS_OWN_TYPE: "never"} ],
	            STAT_CALCULATOR: gunCalcNames.trap
	        }
	    }, {
	        POSITION: [13.5, 3.2, 1, 0, 0, 120*i, 0.5]
	    }, {
	        POSITION: [1.75, 3.2, 1.7, 13.5, 0, 120*i, 0.5],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.fast, g.pound, g.morereload]),
	            TYPE: ["trap", {HITS_OWN_TYPE: "never"} ],
	            STAT_CALCULATOR: gunCalcNames.trap
	        }
	    });
	}
	Class.minotaurv1 = {
	    PARENT: ["genericDreadnought1"],
	    LABEL: "Minotaur",
	    GUNS: [],
	    BRANCH_FROM: "centaurv1",
	}
	for (let i = 0; i < 3; i++) {
	    Class.minotaurv1.GUNS.push({
	        POSITION: [13, 9, 1, 0, 0, 120*i, 0],
	    }, {
	        POSITION: [3, 9, 1.6, 13, 0, 120*i, 0],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.veryfast, g.pound, g.morereload]),
	            TYPE: ["unsetTrap", {HITS_OWN_TYPE: "never"} ],
	            STAT_CALCULATOR: gunCalcNames.trap
	        }
	    });
	}
	Class.sirenv1 = {
	    PARENT: ["genericDreadnought1"],
	    LABEL: "Siren",
	    GUNS: [],
	    BRANCH_FROM: "centaurv1",
	}
	for (let i = 0; i < 3; i++) {
	    Class.sirenv1.GUNS.push({
	        POSITION: [13, 7, -1.4, 0, 0, 120*i, 0],
	    }, {
	        POSITION: [2.5, 7, 1.6, 13, 0, 120*i, 0],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.fast, g.pound, g.morereload]),
	            TYPE: ["turretedTrap", {HITS_OWN_TYPE: "never"} ],
	            STAT_CALCULATOR: gunCalcNames.trap,
	        }
	    });
	}

	Class.mechanismv1 = {
	    PARENT: ["genericDreadnought1"],
	    LABEL: "Mechanism",
	    TURRETS: [],
	    BRANCH_FROM: "automationv1",
	}
	for (let i = 0; i < 6; i++) {
	    Class.mechanismv1.TURRETS.push({
	        POSITION: [4, 8.5, 0, 60*i+30, 180, 1],
	        TYPE: "automationMainTurret",
	    })
	}
	Class.mechanismv1.TURRETS.push({
	    POSITION: [9, 0, 0, 0, 360, 1],
	    TYPE: "mechanismMainTurret",
	})

	Class.behemothv1 = {
	    PARENT: ["genericDreadnought1"],
	    LABEL: "Behemoth",
	    BODY: {
	        HEALTH: 4,
	        SHIELD: 5,
	        REGEN: 2.25,
	        SPEED: 0.7,
	    },
	    TURRETS: [{
	        POSITION: [23.5, 0, 0, 0, 0, 0],
	        TYPE: ["smasherBody", {INDEPEDENT: false} ]
	    }],
	    BRANCH_FROM: "juggernautv1",
	}

	Class.developer.UPGRADES_TIER_0.push("dreadv1");
		Class.dreadv1.UPGRADES_TIER_0 = ["swordv1", "pacifierv1", "invaderv1", "centaurv1"];
			Class.swordv1.UPGRADES_TIER_0 = ["sabrev1", "gladiusv1"];
			Class.pacifierv1.UPGRADES_TIER_0 = ["appeaserv1", "peacekeeperv1", "diplomatv1"];
			Class.invaderv1.UPGRADES_TIER_0 = ["inquisitorv1", "assailantv1", "infiltratorv1"];
			Class.centaurv1.UPGRADES_TIER_0 = ["cerberusv1", "minotaurv1", "sirenv1"];
			Class.automationv1.UPGRADES_TIER_0 = ["mechanismv1"];
			Class.juggernautv1.UPGRADES_TIER_0 = ["behemothv1"];

	for (let primary of Class.dreadv1.UPGRADES_TIER_0) {
		let primaryName = primary;
		primary = ensureIsClass(Class, primary);
		primary.UPGRADES_TIER_0 = [];

		for (let secondary of [ "swordv1", "pacifierv1", "invaderv1", "centaurv1", "automationv1", "juggernautv1" ]) {
			let secondaryName = secondary;
	        secondary = ensureIsClass(Class, secondary);

			let GUNS = [],
				TURRETS = [],
				LABEL = primary.LABEL + "-" + secondary.LABEL,
				BODY = JSON.parse(JSON.stringify(dreadnoughtBody));

			// Label it
			if (primary.LABEL == secondary.LABEL) LABEL = primary.LABEL;

			// Guns
			if (primary.GUNS) GUNS.push(...primary.GUNS);
			for (let g in secondary.GUNS) {
				let POSITION = JSON.parse(JSON.stringify(secondary.GUNS[g].POSITION)),
					PROPERTIES = secondary.GUNS[g].PROPERTIES;
				POSITION[5] += 60;
				GUNS.push({ POSITION, PROPERTIES });
			}

			// Turrets
			if (primary.TURRETS) TURRETS.push(...primary.TURRETS);
			if (secondary.TURRETS) TURRETS.push(...secondary.TURRETS);

			// Body
			if (primary.BODY) for (let m in primary.BODY) BODY *= primary.BODY[m];
			if (secondary.BODY) for (let m in secondary.BODY) BODY *= secondary.BODY[m];

			// Definition name
			let definitionName = primaryName + secondaryName;

			// Actually make that guy
			Class[definitionName] = {
				PARENT: ["genericDreadnought1"],
				UPGRADES_TIER_0: [],
				BODY, LABEL, GUNS, TURRETS
			};
			Class[primaryName].UPGRADES_TIER_0.push(definitionName);
		}
	}
};