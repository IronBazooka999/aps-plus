const { combineStats, addAura, makeAuto } = require('../facilitators.js');
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
	    SKILL_CAP: Array(10).fill(smshskl),
	}
	Class.genericSquarenought = {
		PARENT: ["genericTank"],
		BODY: squarenoughtBody,
	    SHAPE: 4,
	    COLOR: 13,
	    SIZE: 15,
	    SKILL_CAP: Array(10).fill(smshskl),
	}
	Class.genericTrinought = {
		PARENT: ["genericTank"],
		BODY: trinoughtBody,
	    SHAPE: 3.5,
	    COLOR: 2,
	    SIZE: 20,
	    SKILL_CAP: Array(10).fill(smshskl),
	}
	Class.genericPentanought = {
		PARENT: ["genericTank"],
		BODY: pentanoughtBody,
	    SHAPE: 5.5,
	    COLOR: 14,
	    SIZE: 25,
	    SKILL_CAP: Array(10).fill(smshskl),
	}
	Class.genericHexnought = {
		PARENT: ["genericTank"],
		BODY: hexnoughtBody,
	    SHAPE: 6,
	    COLOR: 0,
	    SIZE: 30,
	    SKILL_CAP: Array(10).fill(smshskl),
	}

	Class.spamAutoTurret = {
		PARENT: ["autoTankGun"],
		INDEPENDENT: true,
		GUNS: [
			{
				POSITION: [22, 10, 1, 0, 0, 0, 0],
				PROPERTIES: {
					SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.auto]),
					TYPE: "bullet",
				},
			},
		],
	}

	// T0
	Class.dread_APSofficialdreadv2 = {
		PARENT: ["genericEggnought"],
	    LABEL: "Dreadnought",
		LEVEL: 90,
		EXTRA_SKILL: 18,
		REROOT_UPGRADE_TREE: true,
	}

	// T1 Weapons
	Class.sword_APSofficialdreadv2 = {
	    PARENT: ["genericEggnought"],
	    LABEL: "Sword",
	    GUNS: [],
	}
	for (let i = 0; i < 2; i++) {
		Class.sword_APSofficialdreadv2.GUNS.push(
			{
				POSITION: [21, 7.5, 1, 0, 0, 180*i, 0],
				PROPERTIES: {
					SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, {reload: 0.85}]),
					TYPE: "bullet",
				},
			},
		)
	}
	Class.pacifier_APSofficialdreadv2 = {
	    PARENT: ["genericEggnought"],
	    LABEL: "Pacifier",
	    GUNS: [],
	}
	for (let i = 0; i < 2; i++) {
		Class.pacifier_APSofficialdreadv2.GUNS.push(
			{
				POSITION: [15, 8.5, 1, 0, 0, 180*i, 0],
				PROPERTIES: {
					SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.8}]),
					TYPE: "bullet",
				},
			},
		)
	}
	Class.peacekeeper_APSofficialdreadv2 = {
	    PARENT: ["genericEggnought"],
	    LABEL: "Peacekeeper",
	    GUNS: [],
	}
	for (let i = 0; i < 2; i++) {
		Class.peacekeeper_APSofficialdreadv2.GUNS.push(
			{
				POSITION: [17, 9, 1, 0, 0, 180*i, 0],
				PROPERTIES: {
					SHOOT_SETTINGS: combineStats([g.basic, {reload: 1.2, damage: 1.5}]),
					TYPE: "bullet",
				},
			},
		)
	}
	Class.invader_APSofficialdreadv2 = {
	    PARENT: ["genericEggnought"],
	    LABEL: "Invader",
	    GUNS: [],
	}
	for (let i = 0; i < 2; i++) {
		Class.invader_APSofficialdreadv2.GUNS.push(
			{
				POSITION: [5, 9.5, 1.2, 8, 0, 180*i, 0],
				PROPERTIES: {
					SHOOT_SETTINGS: combineStats([g.drone, g.over, {reload: 0.85}]),
					TYPE: "drone",
					MAX_CHILDREN: 4,
					AUTOFIRE: true,
					SYNCS_SKILLS: true,
					STAT_CALCULATOR: gunCalcNames.drone,
					WAIT_TO_CYCLE: true,
				},
			},
		)
	}
	Class.centaur_APSofficialdreadv2 = {
	    PARENT: ["genericEggnought"],
	    LABEL: "Centaur",
	    GUNS: [],
	}
	for (let i = 0; i < 2; i++) {
		Class.centaur_APSofficialdreadv2.GUNS.push(
			{
				POSITION: [13, 8, 1, 0, 0, 180*i, 0],
			},
			{
				POSITION: [4, 8, 1.5, 13, 0, 180*i, 0],
				PROPERTIES: {
					SHOOT_SETTINGS: combineStats([g.trap, {health: 2}]),
					TYPE: "trap",
					STAT_CALCULATOR: gunCalcNames.trap,
				},
			},
		)
	}

	// T1 Bodies
	Class.byte_APSofficialdreadv2 = makeAuto({
	    PARENT: ["genericEggnought"],
	    TURRETS: [
			{
				POSITION: [15.5, 0, 0, 0, 0, 1],
				TYPE: 'egg',
			},
		],
	}, "Byte", {angle: 0});
	Class.atmosphereAura_APSofficialdreadv2 = addAura();
	Class.atmosphere_APSofficialdreadv2 = {
	    PARENT: ["genericEggnought"],
	    LABEL: "Atmosphere",
	    TURRETS: [
			{
				POSITION: [14, 0, 0, 0, 0, 1],
				TYPE: 'egg',
			},
			{
				POSITION: [11, 0, 0, 0, 360, 1],
				TYPE: 'atmosphereAura_APSofficialdreadv2',
			},
		],
	}
	Class.juggernaut_APSofficialdreadv2 = {
	    PARENT: ["genericEggnought"],
	    LABEL: "Juggernaut",
		BODY: {
			HEALTH: 1.6,
			SHIELD: 1.6,
			REGEN: 1.5,
			SPEED: 0.8,
		},
	    TURRETS: [
			{
				POSITION: [15, 0, 0, 0, 0, 1],
				TYPE: 'egg',
			},
			{
				POSITION: [24, 0, 0, 0, 0, 0],
				TYPE: ['egg', {COLOR: 9}]
			},
		],
	}

	// T2 Weapons
	Class.sabre_APSofficialdreadv2 = {
	    PARENT: ["genericSquarenought"],
	    LABEL: "Sabre",
	    GUNS: [],
	}
	for (let i = 0; i < 4; i++) {
		Class.sabre_APSofficialdreadv2.GUNS.push(
			{
				POSITION: [25, 6, 1, 0, 0, 90*i, 0],
				PROPERTIES: {
					SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.assass, {reload: 0.85}]),
					TYPE: "bullet",
				},
			},
			{
				POSITION: [5, 6, -1.7, 7, 0, 90*i, 0],
			},
		)
	}
	Class.gladius_APSofficialdreadv2 = {
	    PARENT: ["genericSquarenought"],
	    LABEL: "Gladius",
	    GUNS: [],
	}
	for (let i = 0; i < 4; i++) {
		Class.gladius_APSofficialdreadv2.GUNS.push(
			{
				POSITION: [18, 8.5, 1, 0, 0, 90*i, 0],
			},
			{
				POSITION: [21, 5.5, 1, 0, 0, 90*i, 0],
				PROPERTIES: {
					SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, {health: 1.3}]),
					TYPE: "bullet",
				},
			},
		)
	}
	Class.mediator_APSofficialdreadv2 = {
	    PARENT: ["genericSquarenought"],
	    LABEL: "Mediator",
	    GUNS: [],
	}
	for (let i = 0; i < 4; i++) {
		Class.mediator_APSofficialdreadv2.GUNS.push(
			{
				POSITION: [15, 7, 1, 0, 4.25, 90*i, 0],
				PROPERTIES: {
					SHOOT_SETTINGS: combineStats([g.basic, g.twin, {reload: 0.85}]),
					TYPE: "bullet",
				},
			},
			{
				POSITION: [15, 7, 1, 0, -4.25, 90*i, 0.5],
				PROPERTIES: {
					SHOOT_SETTINGS: combineStats([g.basic, g.twin, {reload: 0.85}]),
					TYPE: "bullet",
				},
			},
		)
	}
	Class.negotiator_APSofficialdreadv2 = {
	    PARENT: ["genericSquarenought"],
	    LABEL: "Negotiator",
	    GUNS: [],
	}
	for (let i = 0; i < 4; i++) {
		Class.negotiator_APSofficialdreadv2.GUNS.push(
			{
				POSITION: [9, 8, 1.4, 6, 0, 90*i, 0],
				PROPERTIES: {
					SHOOT_SETTINGS: combineStats([g.basic, g.mach, {size: 0.8, health: 1.3}]),
					TYPE: "bullet",
				},
			},
		)
	}
	Class.enforcer_APSofficialdreadv2 = {
	    PARENT: ["genericSquarenought"],
	    LABEL: "Enforcer",
	    GUNS: [],
	}
	for (let i = 0; i < 4; i++) {
		Class.enforcer_APSofficialdreadv2.GUNS.push(
			{
				POSITION: [17, 9, 1, 0, 0, 90*i, 0],
				PROPERTIES: {
					SHOOT_SETTINGS: combineStats([g.basic, g.pound, {reload: 0.9}]),
					TYPE: "bullet",
				},
			},
		)
	}
	Class.executor_APSofficialdreadv2 = {
	    PARENT: ["genericSquarenought"],
	    LABEL: "Executor",
	    GUNS: [],
	}
	for (let i = 0; i < 4; i++) {
		Class.executor_APSofficialdreadv2.GUNS.push(
			{
				POSITION: [11, 6, 1, 8, 0, 90*i, 0],
			},
			{
				POSITION: [17, 9, 1, 0, 0, 90*i, 0],
				PROPERTIES: {
					SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.halfspeed, {reload: 0.8}]),
					TYPE: "missile",
					STAT_CALCULATOR: gunCalcNames.sustained,
				},
			},
		)
	}
	Class.inquisitor_APSofficialdreadv2 = {
	    PARENT: ["genericSquarenought"],
	    LABEL: "Inquisitor",
	    GUNS: [],
	}
	for (let i = 0; i < 4; i++) {
		Class.inquisitor_APSofficialdreadv2.GUNS.push(
			{
				POSITION: [5, 11, 1.1, 8, 0, 90*i, 0],
				PROPERTIES: {
					SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over, {size: 1.5, reload: 0.6}]),
					TYPE: "drone",
					MAX_CHILDREN: 3,
					AUTOFIRE: true,
					SYNCS_SKILLS: true,
					STAT_CALCULATOR: gunCalcNames.drone,
					WAIT_TO_CYCLE: true,
				},
			},
		)
	}
	Class.assailantMinion_APSofficialdreadv2 = {
		PARENT: ["minion"],
		BODY: {
			SPEED: 0.5,
		},
		SHAPE: 4,
	    COLOR: 13,
		GUNS: []
	}
	for (let i = 0; i < 4; i++) {
		Class.assailantMinion_APSofficialdreadv2.GUNS.push(
			{
				POSITION: [15, 7.5, 1, 0, 0, 90*i, 0],
				PROPERTIES: {
					SHOOT_SETTINGS: combineStats([g.basic, g.assass, g.minion]),
					WAIT_TO_CYCLE: true,
					TYPE: "bullet",
				},
			},
		)
	}
	Class.assailant_APSofficialdreadv2 = {
	    PARENT: ["genericSquarenought"],
	    LABEL: "Assailant",
	    GUNS: [],
	}
	for (let i = 0; i < 4; i++) {
		Class.assailant_APSofficialdreadv2.GUNS.push(
			{
				POSITION: [5, 11, 1, 10.5, 0, 90*i, 0],
			},
			{
				POSITION: [1.5, 12, 1, 15.5, 0, 90*i, 0],
				PROPERTIES: {
					MAX_CHILDREN: 4,
					SHOOT_SETTINGS: combineStats([g.factory, {size: 0.9, reload: 0.5}]),
					TYPE: "assailantMinion_APSofficialdreadv2",
					STAT_CALCULATOR: gunCalcNames.drone,
					AUTOFIRE: true,
					SYNCS_SKILLS: true,
					MAX_CHILDREN: 2,
				},
			},
			{
				POSITION: [12.2, 12, 1, 0, 0, 90*i, 0],
			},
		)
	}
	Class.daemon_APSofficialdreadv2 = {
	    PARENT: ["genericSquarenought"],
	    LABEL: "Daemon",
	    GUNS: [],
	}
	for (let i = 0; i < 4; i++) {
		Class.daemon_APSofficialdreadv2.GUNS.push(
			{
				POSITION: [11.5, 4.5, 1, 0, 4.5, 90*i, 0],
			},
			{
				POSITION: [2, 4.5, 1.6, 11.5, 4.5, 90*i, 0],
				PROPERTIES: {
					SHOOT_SETTINGS: combineStats([g.trap, g.twin, {health: 2}]),
					TYPE: "trap",
					STAT_CALCULATOR: gunCalcNames.trap,
				},
			},
			{
				POSITION: [11.5, 4.5, 1, 0, -4.5, 90*i, 0],
			},
			{
				POSITION: [2, 4.5, 1.6, 11.5, -4.5, 90*i, 0],
				PROPERTIES: {
					SHOOT_SETTINGS: combineStats([g.trap, g.twin, {health: 2}]),
					TYPE: "trap",
					STAT_CALCULATOR: gunCalcNames.trap,
				},
			},
		)
	}
	Class.minotaur_APSofficialdreadv2 = {
	    PARENT: ["genericSquarenought"],
	    LABEL: "Minotaur",
	    GUNS: [],
	}
	for (let i = 0; i < 4; i++) {
		Class.minotaur_APSofficialdreadv2.GUNS.push(
			{
				POSITION: [13, 8, 1, 0, 0, 90*i, 0],
			},
			{
				POSITION: [6, 8, 1.6, 13, 0, 90*i, 0],
				PROPERTIES: {
					SHOOT_SETTINGS: combineStats([g.trap, g.block, {health: 2}]),
					TYPE: "unsetTrap",
				},
			},
		)
	}

	// T2 Bodies
	Class.automation_APSofficialdreadv2 = {
	    PARENT: ["genericSquarenought"],
	    LABEL: "Automation",
	    TURRETS: [
			{
				POSITION: [11, 0, 0, 0, 0, 1],
				TYPE: ["square", {TURRET_FACES_CLIENT: true}],
			},
		],
	}
	for (let i = 0; i < 4; i++) {
		Class.automation_APSofficialdreadv2.TURRETS.push(
			{
				POSITION: [4, 9, 0, 90*i+45, 180, 1],
				TYPE: "spamAutoTurret",
			},
		)
	}
	Class.kilobyteTurret_APSofficialdreadv2 = {
		PARENT: ["autoTankGun"],
		INDEPENDENT: true,
		GUNS: [
			{
				POSITION: [26, 10, 1, 0, 0, 0, 0],
				PROPERTIES: {
					SHOOT_SETTINGS: combineStats([g.basic, g.assass, g.auto, {health: 1.2, speed: 0.8}]),
					TYPE: "bullet",
				},
			},
		],
	}
	Class.kilobyte_APSofficialdreadv2 = {
	    PARENT: ["genericSquarenought"],
	    LABEL: "Kilobyte",
	    TURRETS: [
			{
				POSITION: [12, 0, 0, 0, 0, 1],
				TYPE: ["square", {TURRET_FACES_CLIENT: true}],
			},
			{
				POSITION: [10, 0, 0, 0, 360, 1],
				TYPE: "kilobyteTurret_APSofficialdreadv2",
			},
		],
	}
	Class.coronaAura_APSofficialdreadv2 = addAura(1.5, 0.8);
	Class.corona_APSofficialdreadv2 = {
	    PARENT: ["genericSquarenought"],
	    LABEL: "Corona",
	    TURRETS: [
			{
				POSITION: [15, 0, 0, 0, 0, 1],
				TYPE: ["square", {TURRET_FACES_CLIENT: true}],
			},
			{
				POSITION: [12, 0, 0, 0, 360, 1],
				TYPE: "coronaAura_APSofficialdreadv2",
			},
		],
	}
	Class.thermosphereAura_APSofficialdreadv2 = addAura(-1, 1.3);
	Class.thermosphere_APSofficialdreadv2 = {
	    PARENT: ["genericSquarenought"],
	    LABEL: "Thermosphere",
	    TURRETS: [
			{
				POSITION: [15, 0, 0, 0, 0, 1],
				TYPE: ["square", {TURRET_FACES_CLIENT: true}],
			},
			{
				POSITION: [12, 0, 0, 0, 360, 1],
				TYPE: "thermosphereAura_APSofficialdreadv2",
			},
		],
	}
	Class.jumbo_APSofficialdreadv2 = {
	    PARENT: ["genericSquarenought"],
	    LABEL: "Jumbo",
	    BODY: {
			HEALTH: 2.2,
			SHIELD: 2.2,
			REGEN: 2,
			SPEED: 0.65,
		},
	    TURRETS: [
			{
				POSITION: [15, 0, 0, 0, 0, 1],
				TYPE: ['square', {TURRET_FACES_CLIENT: true}]
			},
			{
				POSITION: [24, 0, 0, 0, 0, 0],
				TYPE: ['square', {COLOR: 9, TURRET_FACES_CLIENT: true}]
			},
		],
	}
	Class.colossalTop_APSofficialdreadv2 = {
	    PARENT: ["genericSquarenought"],
	    GUNS: [],
	}
	for (let i = 0; i < 4; i++) {
		Class.colossalTop_APSofficialdreadv2.GUNS.push(
			{
				POSITION: [4, 17.5, 0.001, 9, 0, 90*i, 0],
				PROPERTIES: {COLOR: 9},
			},
		)
	}
	Class.colossal_APSofficialdreadv2 = {
	    PARENT: ["genericSquarenought"],
	    LABEL: "Colossal",
		GUNS: [],
	    TURRETS: [
			{
				POSITION: [13, 0, 0, 0, 0, 1],
				TYPE: ['colossalTop_APSofficialdreadv2', {TURRET_FACES_CLIENT: true}]
			},
		],
	}
	for (let i = 0; i < 4; i++) {
		Class.colossal_APSofficialdreadv2.GUNS.push(
			{
				POSITION: [4, 17.5, 0.001, 9, 0, 90*i, 0],
				PROPERTIES: {COLOR: 9},
			},
		)
	}

	// T3 Weapons
	Class.bayonet_APSofficialdreadv2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Bayonet",
	    GUNS: [],
	}
	Class.blade_APSofficialdreadv2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Blade",
	    GUNS: [],
	}
	Class.mitigator_APSofficialdreadv2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Mitigator",
	    GUNS: [],
	}
	Class.appeaser_APSofficialdreadv2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Appeaser",
	    GUNS: [],
	}
	Class.suppressor_APSofficialdreadv2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Suppressor",
	    GUNS: [],
	}
	Class.inhibitor_APSofficialdreadv2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Inhibitor",
	    GUNS: [],
	}
	Class.infiltrator_APSofficialdreadv2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Infiltrator",
	    GUNS: [],
	}
	Class.aggressor_APSofficialdreadv2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Aggressor",
	    GUNS: [],
	}
	Class.hydra_APSofficialdreadv2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Hydra",
	    GUNS: [],
	}
	Class.charon_APSofficialdreadv2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Charon",
	    GUNS: [],
	}

	// T3 Bodies
	Class.mechanism_APSofficialdreadv2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Mechanism",
	    TURRETS: [],
	}
	Class.fusion_APSofficialdreadv2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Fusion",
	    TURRETS: [],
	}
	Class.binary_APSofficialdreadv2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Binary",
	    TURRETS: [],
	}
	Class.exosphere_APSofficialdreadv2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Exosphere",
	    TURRETS: [],
	}
	Class.megabyte_APSofficialdreadv2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Megabyte",
	    TURRETS: [],
	}
	Class.trojan_APSofficialdreadv2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Trojan",
	    TURRETS: [],
	}
	Class.hardware_APSofficialdreadv2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Hardware",
	    TURRETS: [],
	}
	Class.chromosphere_APSofficialdreadv2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Chromosphere",
	    TURRETS: [],
	}
	Class.mesosphere_APSofficialdreadv2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Mesosphere",
	    TURRETS: [],
	}
	Class.goliath_APSofficialdreadv2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Goliath",
	    TURRETS: [],
	}
	Class.planet_APSofficialdreadv2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Planet",
	    TURRETS: [],
	}
	Class.moon_APSofficialdreadv2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Moon",
	    TURRETS: [],
	}
	Class.titan_APSofficialdreadv2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Titan",
	    TURRETS: [],
	}
	Class.siren_APSofficialdreadv2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Siren",
	    TURRETS: [],
	}
	Class.harpy_APSofficialdreadv2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "Harpy",
	    TURRETS: [],
	}

	// T4 Weapons
	Class.javelin_APSofficialdreadv2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Javelin",
	    GUNS: [],
	}
	Class.rapier_APSofficialdreadv2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Rapier",
	    GUNS: [],
	}
	Class.diplomat_APSofficialdreadv2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Diplomat",
	    GUNS: [],
	}
	Class.arbitrator_APSofficialdreadv2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Arbitrator",
	    GUNS: [],
	}
	Class.retardant_APSofficialdreadv2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Retardant",
	    GUNS: [],
	}
	Class.tyrant_APSofficialdreadv2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Tyrant",
	    GUNS: [],
	}
	Class.raider_APSofficialdreadv2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Raider",
	    GUNS: [],
	}
	Class.gladiator_APSofficialdreadv2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Gladiator",
	    GUNS: [],
	}
	Class.cerberus_APSofficialdreadv2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Cerberus",
	    GUNS: [],
	}
	Class.lucifer_APSofficialdreadv2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Lucifer",
	    GUNS: [],
	}

	// T4 Bodies
	Class.skynet_APSofficialdreadv2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Skynet",
	    TURRETS: [],
	}
	Class.supernova_APSofficialdreadv2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Supernova",
	    TURRETS: [],
	}
	Class.cipher_APSofficialdreadv2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Cipher",
	    TURRETS: [],
	}
	Class.interstellar_APSofficialdreadv2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Interstellar",
	    TURRETS: [],
	}
	Class.gigabyte_APSofficialdreadv2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Gigabyte",
	    TURRETS: [],
	}
	Class.malware_APSofficialdreadv2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Malware",
	    TURRETS: [],
	}
	Class.software_APSofficialdreadv2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Software",
	    TURRETS: [],
	}
	Class.photosphere_APSofficialdreadv2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Photosphere",
	    TURRETS: [],
	}
	Class.stratosphere_APSofficialdreadv2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Stratosphere",
	    TURRETS: [],
	}
	Class.behemoth_APSofficialdreadv2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Behemoth",
	    TURRETS: [],
	}
	Class.astronomic_APSofficialdreadv2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Astronomic",
	    TURRETS: [],
	}
	Class.grandiose_APSofficialdreadv2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Grandiose",
	    TURRETS: [],
	}
	Class.leviathan_APSofficialdreadv2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Leviathan",
	    TURRETS: [],
	}
	Class.valrayvn_APSofficialdreadv2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Valrayvn",
	    TURRETS: [],
	}
	Class.pegasus_APSofficialdreadv2 = {
	    PARENT: ["genericPentanought"],
	    LABEL: "Pegasus",
	    TURRETS: [],
	}

	const hexDreadNames = {

	};

	Class.developer.UPGRADES_TIER_0.push("dread_APSofficialdreadv2");
		Class.dread_APSofficialdreadv2.UPGRADES_TIER_1 = ["sword_APSofficialdreadv2", "pacifier_APSofficialdreadv2", "peacekeeper_APSofficialdreadv2", "invader_APSofficialdreadv2", "centaur_APSofficialdreadv2"];

			Class.sword_APSofficialdreadv2.UPGRADES_TIER_M1 = ["sabre_APSofficialdreadv2", "gladius_APSofficialdreadv2"];
				Class.sabre_APSofficialdreadv2.UPGRADES_TIER_M1 = ["bayonet_APSofficialdreadv2"];
					Class.bayonet_APSofficialdreadv2.UPGRADES_TIER_M1 = ["javelin_APSofficialdreadv2"];
				Class.gladius_APSofficialdreadv2.UPGRADES_TIER_M1 = ["blade_APSofficialdreadv2"];
					Class.blade_APSofficialdreadv2.UPGRADES_TIER_M1 = ["rapier_APSofficialdreadv2"];

			Class.pacifier_APSofficialdreadv2.UPGRADES_TIER_M1 = ["mediator_APSofficialdreadv2", "negotiator_APSofficialdreadv2"];
				Class.mediator_APSofficialdreadv2.UPGRADES_TIER_M1 = ["mitigator_APSofficialdreadv2"];
					Class.mitigator_APSofficialdreadv2.UPGRADES_TIER_M1 = ["diplomat_APSofficialdreadv2"];
				Class.negotiator_APSofficialdreadv2.UPGRADES_TIER_M1 = ["appeaser_APSofficialdreadv2"];
					Class.appeaser_APSofficialdreadv2.UPGRADES_TIER_M1 = ["arbitrator_APSofficialdreadv2"];

			Class.peacekeeper_APSofficialdreadv2.UPGRADES_TIER_M1 = ["enforcer_APSofficialdreadv2", "executor_APSofficialdreadv2"];
				Class.enforcer_APSofficialdreadv2.UPGRADES_TIER_M1 = ["suppressor_APSofficialdreadv2"];
					Class.suppressor_APSofficialdreadv2.UPGRADES_TIER_M1 = ["retardant_APSofficialdreadv2"];
				Class.executor_APSofficialdreadv2.UPGRADES_TIER_M1 = ["inhibitor_APSofficialdreadv2"];
					Class.inhibitor_APSofficialdreadv2.UPGRADES_TIER_M1 = ["tyrant_APSofficialdreadv2"];

			Class.invader_APSofficialdreadv2.UPGRADES_TIER_M1 = ["inquisitor_APSofficialdreadv2", "assailant_APSofficialdreadv2"];
				Class.inquisitor_APSofficialdreadv2.UPGRADES_TIER_M1 = ["infiltrator_APSofficialdreadv2"];
					Class.infiltrator_APSofficialdreadv2.UPGRADES_TIER_M1 = ["raider_APSofficialdreadv2"];
				Class.assailant_APSofficialdreadv2.UPGRADES_TIER_M1 = ["aggressor_APSofficialdreadv2"];
					Class.aggressor_APSofficialdreadv2.UPGRADES_TIER_M1 = ["gladiator_APSofficialdreadv2"];

			Class.centaur_APSofficialdreadv2.UPGRADES_TIER_M1 = ["daemon_APSofficialdreadv2", "minotaur_APSofficialdreadv2"];
				Class.daemon_APSofficialdreadv2.UPGRADES_TIER_M1 = ["hydra_APSofficialdreadv2"];
					Class.hydra_APSofficialdreadv2.UPGRADES_TIER_M1 = ["cerberus_APSofficialdreadv2"];
				Class.minotaur_APSofficialdreadv2.UPGRADES_TIER_M1 = ["charon_APSofficialdreadv2"];
					Class.charon_APSofficialdreadv2.UPGRADES_TIER_M1 = ["cerberus_APSofficialdreadv2"];

			Class.byte_APSofficialdreadv2.UPGRADES_TIER_M1 = ["automation_APSofficialdreadv2", "kilobyte_APSofficialdreadv2"];

				Class.automation_APSofficialdreadv2.UPGRADES_TIER_M1 = ["mechanism_APSofficialdreadv2", "fusion_APSofficialdreadv2", "binary_APSofficialdreadv2", "exosphere_APSofficialdreadv2"];
					Class.mechanism_APSofficialdreadv2.UPGRADES_TIER_M1 = ["skynet_APSofficialdreadv2"];
					Class.fusion_APSofficialdreadv2.UPGRADES_TIER_M1 = ["supernova_APSofficialdreadv2"];
					Class.binary_APSofficialdreadv2.UPGRADES_TIER_M1 = ["cipher_APSofficialdreadv2"];
					Class.exosphere_APSofficialdreadv2.UPGRADES_TIER_M1 = ["interstellar_APSofficialdreadv2"];

				Class.kilobyte_APSofficialdreadv2.UPGRADES_TIER_M1 = ["megabyte_APSofficialdreadv2", "binary_APSofficialdreadv2", "trojan_APSofficialdreadv2", "hardware_APSofficialdreadv2"];
					Class.megabyte_APSofficialdreadv2.UPGRADES_TIER_M1 = ["gigabyte_APSofficialdreadv2"];
					// Class.binary_APSofficialdreadv2.UPGRADES_TIER_M1 = ["cipher_APSofficialdreadv2"];
					Class.trojan_APSofficialdreadv2.UPGRADES_TIER_M1 = ["malware_APSofficialdreadv2"];
					Class.hardware_APSofficialdreadv2.UPGRADES_TIER_M1 = ["software_APSofficialdreadv2"];

			Class.atmosphere_APSofficialdreadv2.UPGRADES_TIER_M1 = ["corona_APSofficialdreadv2", "thermosphere_APSofficialdreadv2"];

				Class.corona_APSofficialdreadv2.UPGRADES_TIER_M1 = ["chromosphere_APSofficialdreadv2", "fusion_APSofficialdreadv2", "trojan_APSofficialdreadv2", "planet_APSofficialdreadv2"];
					Class.chromosphere_APSofficialdreadv2.UPGRADES_TIER_M1 = ["photosphere_APSofficialdreadv2"];
					// Class.fusion_APSofficialdreadv2.UPGRADES_TIER_M1 = ["supernova_APSofficialdreadv2"];
					// Class.trojan_APSofficialdreadv2.UPGRADES_TIER_M1 = ["malware_APSofficialdreadv2"];
					Class.planet_APSofficialdreadv2.UPGRADES_TIER_M1 = ["astronomic_APSofficialdreadv2"];

				Class.thermosphere_APSofficialdreadv2.UPGRADES_TIER_M1 = ["mesosphere_APSofficialdreadv2", "exosphere_APSofficialdreadv2", "hardware_APSofficialdreadv2", "moon_APSofficialdreadv2"];
					Class.mesosphere_APSofficialdreadv2.UPGRADES_TIER_M1 = ["stratosphere_APSofficialdreadv2"];
					// Class.exosphere_APSofficialdreadv2.UPGRADES_TIER_M1 = ["interstellar_APSofficialdreadv2"];
					// Class.hardware_APSofficialdreadv2.UPGRADES_TIER_M1 = ["software_APSofficialdreadv2"];
					Class.moon_APSofficialdreadv2.UPGRADES_TIER_M1 = ["grandiose_APSofficialdreadv2"];

			Class.juggernaut_APSofficialdreadv2.UPGRADES_TIER_M1 = ["jumbo_APSofficialdreadv2", "colossal_APSofficialdreadv2"];

				Class.jumbo_APSofficialdreadv2.UPGRADES_TIER_M1 = ["goliath_APSofficialdreadv2", "planet_APSofficialdreadv2", "moon_APSofficialdreadv2"];
					Class.goliath_APSofficialdreadv2.UPGRADES_TIER_M1 = ["behemoth_APSofficialdreadv2"];
					// Class.planet_APSofficialdreadv2.UPGRADES_TIER_M1 = ["astronomic_APSofficialdreadv2"];
					// Class.moon_APSofficialdreadv2.UPGRADES_TIER_M1 = ["grandiose_APSofficialdreadv2"];

				Class.colossal_APSofficialdreadv2.UPGRADES_TIER_M1 = ["titan_APSofficialdreadv2", "siren_APSofficialdreadv2", "harpy_APSofficialdreadv2"];
					Class.titan_APSofficialdreadv2.UPGRADES_TIER_M1 = ["leviathan_APSofficialdreadv2"];
					Class.siren_APSofficialdreadv2.UPGRADES_TIER_M1 = ["valrayvn_APSofficialdreadv2"];
					Class.harpy_APSofficialdreadv2.UPGRADES_TIER_M1 = ["pegasus_APSofficialdreadv2"];

	// Merge function
	let mergedDreads = [];

	function mergeDreadv2(weapon, body) {
		let className = weapon.split("_")[0] + body;

		weapon = ensureIsClass(Class, weapon);
		body = ensureIsClass(Class, body);

		let PARENT = ensureIsClass(Class, weapon.PARENT[0]),
			BODY = JSON.parse(JSON.stringify(PARENT.BODY)),
			GUNS = [],
			TURRETS = [],
			LABEL = weapon.LABEL + "-" + body.LABEL,
			UPGRADES_TIER_0 = [];
		
		// Guns
		if (body.GUNS) GUNS.push(...body.GUNS);
		if (weapon.GUNS) GUNS.push(...weapon.GUNS);
		
		// Turrets
		if (body.TURRETS) TURRETS.push(...body.TURRETS);
		if (weapon.TURRETS) TURRETS.push(...weapon.TURRETS);
		
		// Body stat modification
		if (weapon.BODY) for (let m in weapon.BODY) BODY[m] *= weapon.BODY[m];
		if (body.BODY) for (let m in body.BODY) BODY[m] *= body.BODY[m];

		// Upgrades
		for (let w in weapon.UPGRADES_TIER_M1) {
			for (let b in body.UPGRADES_TIER_M1) {
				let weaponName = weapon.UPGRADES_TIER_M1[w],
					bodyName = body.UPGRADES_TIER_M1[b];

				if (!mergedDreads.includes(weaponName + bodyName))
					mergeDreadv2(weaponName, bodyName);
				
				UPGRADES_TIER_0.push(weaponName.split("_")[0] + bodyName);
			}
		}

		// Can he build it? Yes he can!
		Class[className] = {
			PARENT, BODY, LABEL, GUNS, TURRETS, UPGRADES_TIER_0,
		};
	}

	// Initiate build for all dread paths and do upgrades for all eggnoughts
	const eggnoughtWeapons = Class.dread_APSofficialdreadv2.UPGRADES_TIER_1;
	const eggnoughtBodies = ["byte_APSofficialdreadv2", "atmosphere_APSofficialdreadv2", "juggernaut_APSofficialdreadv2"];
	for (let w in eggnoughtWeapons) {
		let weaponName = eggnoughtWeapons[w];
		Class[weaponName].UPGRADES_TIER_1 = [];
		for (let b in eggnoughtBodies) {
			let bodyName = eggnoughtBodies[b];
			mergeDreadv2(weaponName, bodyName);
			Class[weaponName].UPGRADES_TIER_1.push(weaponName.split("_")[0] + bodyName);
		}
	}
};
