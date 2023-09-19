const { combineStats, addAura } = require('../facilitators.js');
const { gunCalcNames, smshskl, base } = require('../constants.js');
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
const eggnoughtBody = {
    SPEED: base.SPEED * 0.8,
    HEALTH: base.HEALTH * 1.75,
	SHIELD: base.SHIELD * 1.5,
	REGEN: base.REGEN * 1.5,
    FOV: base.FOV * 1.1,
	RESIST: base.RESIST * 1.5,
	DENSITY: base.DENSITY * 1.5,
};
const squarenoughtBody = {
    SPEED: base.SPEED * 0.675,
    HEALTH: base.HEALTH * 2.5,
	SHIELD: base.SHIELD * 2,
	REGEN: base.REGEN * 2,
    FOV: base.FOV * 1.15,
	RESIST: base.RESIST * 2,
	DENSITY: base.DENSITY * 2,
};
const trinoughtBody = {
    SPEED: base.SPEED * 0.55,
    HEALTH: base.HEALTH * 3.5,
	SHIELD: base.SHIELD * 2.5,
	REGEN: base.REGEN * 2.5,
    FOV: base.FOV * 1.15,
	RESIST: base.RESIST * 2.5,
	DENSITY: base.DENSITY * 2.5,
};
const pentanoughtBody = {
    SPEED: base.SPEED * 0.425,
    HEALTH: base.HEALTH * 4.25,
	SHIELD: base.SHIELD * 3,
	REGEN: base.REGEN * 3,
    FOV: base.FOV * 1.2,
	RESIST: base.RESIST * 3,
	DENSITY: base.DENSITY * 3,
};
const hexnoughtBody = {
    SPEED: base.SPEED * 0.3,
    HEALTH: base.HEALTH * 5,
	SHIELD: base.SHIELD * 3.5,
	REGEN: base.REGEN * 3.5,
    FOV: base.FOV * 1.2,
	RESIST: base.RESIST * 3.5,
	DENSITY: base.DENSITY * 3.5,
};

module.exports = ({ Class }) => {
	return;

	// Misc
	Class.genericEggnought = {
		PARENT: ["genericTank"],
		BODY: eggnoughtBody,
	    SHAPE: 0,
	    COLOR: 6,
	    SIZE: 12.5,
	    EXTRA_SKILL: 18,
	    SKILL_CAP: Array(10).fill(smshskl),
	}
	Class.squareEggnought = {
		PARENT: ["genericTank"],
		BODY: squarenoughtBody,
	    SHAPE: 4,
	    COLOR: 13,
	    SIZE: 15,
	    EXTRA_SKILL: 18,
	    SKILL_CAP: Array(10).fill(smshskl),
	}
	Class.triEggnought = {
		PARENT: ["genericTank"],
		BODY: trinoughtBody,
	    SHAPE: 3.5,
	    COLOR: 2,
	    SIZE: 20,
	    EXTRA_SKILL: 18,
	    SKILL_CAP: Array(10).fill(smshskl),
	}
	Class.pentaEggnought = {
		PARENT: ["genericTank"],
		BODY: pentanoughtBody,
	    SHAPE: 5.5,
	    COLOR: 14,
	    SIZE: 25,
	    EXTRA_SKILL: 18,
	    SKILL_CAP: Array(10).fill(smshskl),
	}
	Class.hexEggnought = {
		PARENT: ["genericTank"],
		BODY: hexnoughtBody,
	    SHAPE: 6,
	    COLOR: 0,
	    SIZE: 30,
	    EXTRA_SKILL: 18,
	    SKILL_CAP: Array(10).fill(smshskl),
	}

	// T0
	Class.dreadv2 = {
		PARENT: ["genericEggnought"],
	    LABEL: "Dreadnought",
		LEVEL: 90,
	}

	// T1 Weapons
	Class.swordv2 = {
	    PARENT: ["genericEggnought"],
	    LABEL: "Sword",
	    GUNS: [],
	}
	Class.pacifierv2 = {
	    PARENT: ["genericEggnought"],
	    LABEL: "Pacifier",
	    GUNS: [],
	}
	Class.peacekeeperv2 = {
	    PARENT: ["genericEggnought"],
	    LABEL: "Peacekeeper",
	    GUNS: [],
	}
	Class.invaderv2 = {
	    PARENT: ["genericEggnought"],
	    LABEL: "Invader",
	    GUNS: [],
	}
	Class.centaurv2 = {
	    PARENT: ["genericEggnought"],
	    LABEL: "Centaur",
	    GUNS: [],
	}

	// T1 Bodies
	Class.bytev2 = {
	    PARENT: ["genericEggnought"],
	    LABEL: "Byte",
	    TURRETS: [],
	}
	Class.atmospherev2 = {
	    PARENT: ["genericEggnought"],
	    LABEL: "Atmosphere",
	    TURRETS: [],
	}
	Class.juggernautv2 = {
	    PARENT: ["genericEggnought"],
	    LABEL: "Juggernaut",
	    TURRETS: [],
	}

	// T2 Weapons
	Class.sabrev2 = {
	    PARENT: ["genericSquarenought"],
	    LABEL: "Sabre",
	    GUNS: [],
	}
	Class.gladiusv2 = {
	    PARENT: ["genericSquarenought"],
	    LABEL: "Gladius",
	    GUNS: [],
	}
	Class.mediatorv2 = {
	    PARENT: ["genericSquarenought"],
	    LABEL: "Mediator",
	    GUNS: [],
	}
	Class.negotiatorv2 = {
	    PARENT: ["genericSquarenought"],
	    LABEL: "Negotiator",
	    GUNS: [],
	}
	Class.enforcerv2 = {
	    PARENT: ["genericSquarenought"],
	    LABEL: "Enforcer",
	    GUNS: [],
	}
	Class.executorv2 = {
	    PARENT: ["genericSquarenought"],
	    LABEL: "Executor",
	    GUNS: [],
	}
	Class.inquisitorv2 = {
	    PARENT: ["genericSquarenought"],
	    LABEL: "Inquisitor",
	    GUNS: [],
	}
	Class.assailantv2 = {
	    PARENT: ["genericSquarenought"],
	    LABEL: "Assailant",
	    GUNS: [],
	}
	Class.daemonv2 = {
	    PARENT: ["genericSquarenought"],
	    LABEL: "Daemon",
	    GUNS: [],
	}
	Class.minotaurv2 = {
	    PARENT: ["genericSquarenought"],
	    LABEL: "Minotaur",
	    GUNS: [],
	}

	// T2 Bodies
	Class.automationv2 = {
	    PARENT: ["genericSquarenought"],
	    LABEL: "Automation",
	    TURRETS: [],
	}
	Class.kilobytev2 = {
	    PARENT: ["genericSquarenought"],
	    LABEL: "Kilobyte",
	    TURRETS: [],
	}
	Class.coronav2 = {
	    PARENT: ["genericSquarenought"],
	    LABEL: "Corona",
	    TURRETS: [],
	}
	Class.thermospherev2 = {
	    PARENT: ["genericSquarenought"],
	    LABEL: "Thermosphere",
	    TURRETS: [],
	}
	Class.jumbov2 = {
	    PARENT: ["genericSquarenought"],
	    LABEL: "Jumbo",
	    TURRETS: [],
	}
	Class.colossalv2 = {
	    PARENT: ["genericSquarenought"],
	    LABEL: "Colossal",
	    TURRETS: [],
	}

	// T3 Weapons
	Class.bayonetv2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Bayonet",
	    GUNS: [],
	}
	Class.bladev2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Blade",
	    GUNS: [],
	}
	Class.mitigatorv2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Mitigator",
	    GUNS: [],
	}
	Class.appeaserv2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Appeaser",
	    GUNS: [],
	}
	Class.suppressorv2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Suppressor",
	    GUNS: [],
	}
	Class.inhibitorv2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Inhibitor",
	    GUNS: [],
	}
	Class.infiltratorv2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Infiltrator",
	    GUNS: [],
	}
	Class.aggressorv2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Aggressor",
	    GUNS: [],
	}
	Class.hydrav2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Hydra",
	    GUNS: [],
	}
	Class.charonv2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Charon",
	    GUNS: [],
	}

	// T3 Bodies
	Class.mechanismv2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Mechanism",
	    TURRETS: [],
	}
	Class.fusionv2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Fusion",
	    TURRETS: [],
	}
	Class.binaryv2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Binary",
	    TURRETS: [],
	}
	Class.exospherev2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Exosphere",
	    TURRETS: [],
	}
	Class.megabytev2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Megabyte",
	    TURRETS: [],
	}
	Class.trojanv2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Trojan",
	    TURRETS: [],
	}
	Class.hardwarev2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Hardware",
	    TURRETS: [],
	}
	Class.chromospherev2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Chromosphere",
	    TURRETS: [],
	}
	Class.mesospherev2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Mesosphere",
	    TURRETS: [],
	}
	Class.goliathv2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Goliath",
	    TURRETS: [],
	}
	Class.planetv2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Planet",
	    TURRETS: [],
	}
	Class.titanv2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Titan",
	    TURRETS: [],
	}
	Class.sirenv2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Siren",
	    TURRETS: [],
	}
	Class.harpyv2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Harpy",
	    TURRETS: [],
	}

	// T4 Weapons
	Class.javelinv2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Javelin",
	    GUNS: [],
	}
	Class.rapierv2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Rapier",
	    GUNS: [],
	}
	Class.diplomatv2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Diplomat",
	    GUNS: [],
	}
	Class.arbitratorv2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Arbitrator",
	    GUNS: [],
	}
	Class.retardantv2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Retardant",
	    GUNS: [],
	}
	Class.tyrantv2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Tyrant",
	    GUNS: [],
	}
	Class.raiderv2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Raider",
	    GUNS: [],
	}
	Class.gladiatorv2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Gladiator",
	    GUNS: [],
	}
	Class.cerberusv2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Cerberus",
	    GUNS: [],
	}
	Class.luciferv2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Lucifer",
	    GUNS: [],
	}

	// T4 Bodies
	Class.skynetv2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Skynet",
	    TURRETS: [],
	}
	Class.supernovav2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Supernova",
	    TURRETS: [],
	}
	Class.cipherv2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Cipher",
	    TURRETS: [],
	}
	Class.interstellarv2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Interstellar",
	    TURRETS: [],
	}
	Class.gigabytev2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Gigabyte",
	    TURRETS: [],
	}
	Class.malwarev2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Malware",
	    TURRETS: [],
	}
	Class.softwarev2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Software",
	    TURRETS: [],
	}
	Class.photospherev2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Photosphere",
	    TURRETS: [],
	}
	Class.stratospherev2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Stratosphere",
	    TURRETS: [],
	}
	Class.behemothv2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Behemoth",
	    TURRETS: [],
	}
	Class.astronomicv2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Astronomic",
	    TURRETS: [],
	}
	Class.leviathanv2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Leviathan",
	    TURRETS: [],
	}
	Class.valrayvnv2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Valrayvn",
	    TURRETS: [],
	}
	Class.grandiosev2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Grandiose",
	    TURRETS: [],
	}

	const hexDreadNames = {

	};

	Class.developer.UPGRADES_TIER_0.push("dreadv2");
		Class.dreadv2.UPGRADES_TIER_1 = ["swordv2", "pacifierv2", "peacekeeperv2", "invaderv2", "centaurv2"];

	// Build up to pentanoughts
};
