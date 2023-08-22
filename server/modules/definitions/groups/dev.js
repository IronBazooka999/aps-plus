const { combineStats, skillSet } = require('../facilitators.js');
const { base, gunCalcNames, basePolygonDamage, basePolygonHealth, dfltskl, statnames } = require('../constants.js');
const g = require('../gunvals.js');

// TESTBED TANKS
exports.menu = {
    PARENT: ["genericTank"],
    LABEL: "",
    RESET_UPGRADES: true,
    SKILL_CAP: [
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
    ],
    IGNORED_BY_AI: true,
    TURRETS: [],
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [18, 10, -1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.developer = {
    PARENT: ["menu"],
    LABEL: "Developer",
    BODY: {
        SHIELD: 1000,
        REGEN: 10,
        HEALTH: 100,
        DAMAGE: 10,
        DENSITY: 20,
        FOV: 2,
    },
    SHAPE: [
        [-1, -0.8],
        [-0.8, -1],
        [0.8, -1],
        [1, -0.8],
        [0.2, 0],
        [1, 0.8],
        [0.8, 1],
        [-0.8, 1],
        [-1, 0.8],
    ],
    GUNS: [
        {
            /*** LENGTH WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [18, 10, -1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op]),
                TYPE: exports.developerBullet,
            },
        },
    ],
};
exports.spectator = {
    PARENT: ["menu"],
    LABEL: "Spectator",
    ALPHA: 0,
    CAN_BE_ON_LEADERBOARD: false,
    ACCEPTS_SCORE: false,
    DRAW_HEALTH: false,
    HITS_OWN_TYPE: "never",
    ARENA_CLOSER: true,
    SKILL_CAP: [0, 0, 0, 0, 0, 0, 0, 0, 0, 255],
    BODY: {
        DAMAGE: 0,
        SPEED: 5,
        FOV: 2.5,
        HEALTH: 1e100,
        SHIELD: 1e100,
        REGEN: 1e100,
    },
};
exports.gameAdmin = {
    PARENT: ["menu"],
    LABEL: "Game Admin",
};
exports.gameMod = {
    PARENT: ["menu"],
    LABEL: "Game Mod",
};
exports.betaTester = {
    PARENT: ["menu"],
    LABEL: "Beta Tester",
};
exports.tankChanges = {
    PARENT: ["menu"],
    LABEL: "Tank Changes",
};
exports.btTanks = {
    PARENT: ["menu"],
    LABEL: "BT Tanks",
};
exports.healers = {
    PARENT: ["menu"],
    LABEL: "Healers",
};
exports.bosses = {
    PARENT: ["menu"],
    LABEL: "Bosses",
};
exports.fun = {
    PARENT: ["menu"],
    LABEL: "Fun",
};
exports.bosses = {
    PARENT: ["menu"],
    LABEL: "Bosses",
};
exports.terrestrials = {
    PARENT: ["menu"],
    LABEL: "Terrestrials",
};
exports.celestials = {
    PARENT: ["menu"],
    LABEL: "Celestials",
};
exports.eternals = {
    PARENT: ["menu"],
    LABEL: "Eternals",
};
exports.elites = {
    PARENT: ["menu"],
    LABEL: "Elites",
};
exports.mysticals = {
    PARENT: ["menu"],
    LABEL: "Mysticals",
};
exports.nesters = {
    PARENT: ["menu"],
    LABEL: "Nesters",
};
exports.rogues = {
    PARENT: ["menu"],
    LABEL: "Rogues",
};
exports.otherTanks = {
    PARENT: ["menu"],
    LABEL: "Tanks",
};
exports.oldTanks = {
    PARENT: ["menu"],
    LABEL: "Old Tanks",
};
exports.scrappedTanks = {
    PARENT: ["menu"],
    LABEL: "Scrapped Tanks",
};
exports.miscEntities = {
    PARENT: ["menu"],
    LABEL: "Misc Entities",
};
exports.dominators = {
    PARENT: ["menu"],
    LABEL: "Dominators",
};
exports.sentries = {
    PARENT: ["menu"],
    LABEL: "Sentries",
};

// GENERATOR-SPECIFIC POLYGONS
exports.spawnedEgg = {
    PARENT: ["genericEntity"],
    LABEL: "Egg",
    VALUE: 10,
    SHAPE: 0,
    SIZE: 5,
    COLOR: 6,
    BODY: {
        DAMAGE: 0,
        DENSITY: 2,
        HEALTH: 0.0011,
        PUSHABILITY: 0,
    },
    DRAW_HEALTH: false,
    INTANGIBLE: true,
    MOTION_TYPE: "drift",
    FACING_TYPE: "turnWithSpeed",
};
exports.spawnedSquare = {
    PARENT: ["genericEntity"],
    LABEL: "Square",
    VALUE: 30,
    SHAPE: 4,
    SIZE: 10,
    COLOR: 13,
    BODY: {
        DAMAGE: basePolygonDamage,
        DENSITY: 4,
        HEALTH: basePolygonHealth,
        PENETRATION: 2,
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
    MOTION_TYPE: "drift",
    FACING_TYPE: "turnWithSpeed",
};
exports.spawnedAlphaPentagon = {
    PARENT: ["genericEntity"],
    LABEL: "Alpha Pentagon",
    VALUE: 15e3,
    SHAPE: 5,
    SIZE: 58,
    COLOR: 14,
    BODY: {
        DAMAGE: 2 * basePolygonDamage,
        DENSITY: 80,
        HEALTH: 300 * basePolygonHealth,
        RESIST: Math.pow(1.25, 3),
        SHIELD: 40 * basePolygonHealth,
        REGEN: 0.6,
    },
    DRAW_HEALTH: true,
    MOTION_TYPE: "drift",
    FACING_TYPE: "turnWithSpeed",
};

// GENERATORS
exports.generatorBase = {
    PARENT: ["genericTank"],
    SKILL_CAP: [15, 0, 0, 0, 0, 0, 0, 0, 0, 15],
    INVISIBLE: [0.01, 0.1],
};
exports.eggGenerator = {
    PARENT: ["generatorBase"],
    LABEL: "Egg Generator",
    COLOR: 6,
    TURRETS: [
        {
            /*    SIZE         X             Y         ANGLE        ARC */
            POSITION: [5, 0, 0, 0, 0, 1],
            TYPE: ["egg", { COLOR: 6 }],
        },
    ],
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [14, 12, 1, 4, 0, 0, 0],
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [12, 12, 1.4, 4, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.micro]),
                TYPE: "spawnedEgg",
                LABEL: "Spawned",
            },
        },
    ],
};
exports.squareGenerator = {
    PARENT: ["generatorBase"],
    LABEL: "Square Generator",
    COLOR: 13,
    SHAPE: 4,
    TURRETS: [
        {
            /*    SIZE         X             Y         ANGLE        ARC */
            POSITION: [8, 0, 0, 0, 0, 1],
            TYPE: ["square", { COLOR: 13 }],
        },
    ],
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [14, 12, 1, 4, 0, 0, 0],
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [12, 12, 1.4, 4, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.small]),
                TYPE: "spawnedSquare",
                LABEL: "Spawned",
            },
        },
    ],
};
exports.alphaPentagonGenerator = {
    PARENT: ["generatorBase"],
    LABEL: "Alpha Pentagon Generator",
    COLOR: 14,
    SHAPE: 5,
    TURRETS: [
        {
            /*    SIZE         X             Y         ANGLE        ARC */
            POSITION: [14, 0, 0, 0, 0, 1],
            TYPE: ["alphaPentagon", { COLOR: 14 }],
        },
    ],
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [14, 12, 1, 4, 0, 0, 0],
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [12, 12, 1.4, 4, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.small]),
                TYPE: "spawnedAlphaPentagon",
                LABEL: "Spawned",
            },
        },
    ],
};
exports.crasherGenerator = {
    PARENT: ["generatorBase"],
    LABEL: "Crasher Generator",
    COLOR: 5,
    SHAPE: 3,
    TURRETS: [
        {
            /*    SIZE         X             Y         ANGLE        ARC */
            POSITION: [5, 0, 0, 0, 0, 1],
            TYPE: ["crasher", { COLOR: 5 }],
        },
    ],
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [14, 12, 1, 4, 0, 0, 0],
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [12, 12, 1.4, 4, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.micro]),
                TYPE: "crasher",
                LABEL: "Spawned",
            },
        },
    ],
};

exports.diamondShape = {
    PARENT: ["basic"],
    LABEL: "Diamond Test Shape",
    SHAPE: 4.5
};

exports.rotatedTrap = {
    PARENT: ["basic"],
    LABEL: "Rotated Trap Test Shape",
    SHAPE: -3.5
};

exports.mummyHat = {
    SHAPE: 4.5,
    COLOR: 10
};
exports.mummy = {
    PARENT: ["drone"],
    SHAPE: 4,
    TURRETS: [{
        POSITION: [20 * Math.SQRT1_2, 0, 0, 180, 360, 1],
        TYPE: ["mummyHat"]
    }]
};
exports.mummifier = {
    PARENT: ["genericTank"],
    LABEL: "Mummifier",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.8 * base.SPEED,
    },
    SHAPE: 4,
    MAX_CHILDREN: 10,
    GUNS: [{
        POSITION: [5.5, 13, 1.1, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: "mummy",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    },{
        POSITION: [5.5, 13, 1.1, 8, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: "mummy",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }],
    TURRETS: [{
        POSITION: [20 * Math.SQRT1_2, 0, 0, 180, 360, 1],
        TYPE: ["mummyHat"]
    }]
};

exports.colorMan = {
    PARENT: ["genericTank"],
    LABEL: "Testing Animated Colors",
    SHAPE: 4,
    COLOR: 36,
    TURRETS: [{
        POSITION: [20, -20, -20, 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: 20 }
    },{
        POSITION: [20,  0 , -20, 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: 21 }
    },{
        POSITION: [20,  20, -20, 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: 22 }
    },{
        POSITION: [20, -20,  0 , 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: 23 }
    },{
        POSITION: [20,  20,  0 , 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: 29 }
    },{
        POSITION: [20,  20,  20, 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: 24 }
    },{
        POSITION: [20,  0 ,  20, 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: 37 }
    },{
        POSITION: [20,  20,  20, 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: 38 }
    }]
};

exports.seventeenagon = {
    PARENT: ["genericTank"],
    LABEL: "Seventeenagon",
    SHAPE: 17
};

// FUN
exports.armyOfOneBullet = {
    PARENT: ["bullet"],
    LABEL: "Unstoppable",
    TURRETS: [
        {
            /** SIZE         X             Y         ANGLE        ARC */
            POSITION: [18.5, 0, 0, 0, 360, 0],
            TYPE: ["spikeBody", { COLOR: null }],
        },
        {
            POSITION: [18.5, 0, 0, 180, 360, 0],
            TYPE: ["spikeBody", { COLOR: null }],
        },
    ],
};
exports.armyOfOne = {
    PARENT: ["genericTank"],
    LABEL: "Army Of One",
    DANGER: 9,
    SKILL_CAP: [31, 31, 31, 31, 31, 31, 31, 31, 31, 31],
    BODY: {
        SPEED: 0.5 * base.SPEED,
        FOV: 1.8 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [21, 19, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.destroy, g.destroy, g.destroy, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.doublereload, g.doublereload, g.doublereload, g.doublereload]),
                TYPE: "armyOfOneBullet",
            },
        },{
            POSITION: [21, 11, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.destroy, g.destroy, g.destroy, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.doublereload, g.doublereload, g.doublereload, g.doublereload, g.fake]),
                TYPE: "bullet",
            },
        }
    ],
};
exports.godbasic = {
    PARENT: ["genericTank"],
    LABEL: "God Basic",
    SKILL_CAP: [31, 31, 31, 31, 31, 31, 31, 31, 31, 31],
    SKILL: [ 31, 31, 31, 31, 31, 31, 31, 31, 31, 31 ],
    BODY: {
        ACCELERATION: base.ACCEL * 1,
        SPEED: base.SPEED * 1,
        HEALTH: base.HEALTH * 1,
        DAMAGE: base.DAMAGE * 1,
        PENETRATION: base.PENETRATION * 1,
        SHIELD: base.SHIELD * 1,
        REGEN: base.REGEN * 1,
        FOV: base.FOV * 1,
        DENSITY: base.DENSITY * 1,
        PUSHABILITY: 1,
        HETERO: 3,
    },
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
                COLOR: 16,
                LABEL: "",
                STAT_CALCULATOR: 0,
                WAIT_TO_CYCLE: false,
                AUTOFIRE: false,
                SYNCS_SKILLS: false,
                MAX_CHILDREN: 0,
                ALT_FIRE: false,
                NEGATIVE_RECOIL: false,
            },
        },
    ],
};

exports.levels = {
    PARENT: ["main"],
    LABEL: "Levels",
    UPGRADES_TIER_0: ["developer"]
};
for (let i = 0; i < 186; i += c.TIER_MULTIPLIER) { //c.MAX_UPGRADE_TIER is irrelevant
    let LEVEL = i;
    exports["level" + LEVEL] = {
        PARENT: ["levels"],
        LEVEL,
        LABEL: "Level " + LEVEL
    };
    exports.levels.UPGRADES_TIER_0.push(exports["level" + LEVEL]);
}

exports.teams = {
    PARENT: ["menu"],
    LABEL: "Teams",
    UPGRADES_TIER_0: ["developer"]
};
for (let i = 1; i <= c.TEAMS; i++) {
    let TEAM = i;
    exports["Team" + TEAM] = {
        PARENT: ["teams"],
        TEAM: -TEAM,
        COLOR: [10, 11, 12, 15, 25, 26, 27, 28][TEAM - 1],
        LABEL: "Team " + TEAM
    };
    exports.teams.UPGRADES_TIER_0.push(exports["Team" + TEAM]);
}
exports.Team100 = {
    PARENT: ["teams"],
    TEAM: -100,
    COLOR: 3,
    LABEL: "Boss Team"
};
exports.teams.UPGRADES_TIER_0.push("Team100");

// DEV "UPGRADE PATHS"
exports.developer.UPGRADES_TIER_0 = ["basic", "gameAdmin", "spectator", "eggGenerator", "healers", "miscEntities", "bosses", "fun", "levels", "teams"];
    exports.gameAdmin.UPGRADES_TIER_0 = ["basic", "gameMod", "spectator"/*, "guillotine", "banHammer"*/];
        exports.gameMod.UPGRADES_TIER_0 = ["basic", "betaTester", "spectator"/*, "guillotine"*/];
            exports.betaTester.UPGRADES_TIER_0 = ["basic", "tankChanges"];
    exports.eggGenerator.UPGRADES_TIER_0 = ["basic", "squareGenerator", "crasherGenerator"];
        exports.crasherGenerator.UPGRADES_TIER_0 = ["basic", "gameAdmin", "alphaPentagonGenerator", "eggGenerator"];
    exports.healers.UPGRADES_TIER_0 = ["healer", "medic", "ambulance", "surgeon", "paramedic", "physician", "doctor"];
    exports.miscEntities.UPGRADES_TIER_0 = ["baseProtector", "dominators", "mothership", "arenaCloser"];
        exports.dominators.UPGRADES_TIER_0 = ["dominator", "destroyerDominator", "gunnerDominator", "trapperDominator"];
    exports.bosses.UPGRADES_TIER_0 = ["sentries", "elites", "mysticals", "nesters", "rogues", "terrestrials", "celestials", "eternals"];
        exports.sentries.UPGRADES_TIER_0 = ["sentrySwarm", "sentryGun", "sentryTrap", "shinySentrySwarm", "shinySentryGun", "shinySentryTrap"];
        exports.elites.UPGRADES_TIER_0 = ["eliteDestroyer", "eliteGunner", "eliteSprayer", "eliteBattleship", "eliteSpawner", "eliteSkimmer"];
        exports.mysticals.UPGRADES_TIER_0 = [/*"sorcerer", */"summoner"/*, "enchantress", "exorcistor"*/];
        exports.nesters.UPGRADES_TIER_0 = ["nestKeeper"/*, "nestWarden", "nestGuardian"*/];
        exports.rogues.UPGRADES_TIER_0 = ["roguePalisade", "rogueArmada", "alviss", "tyr"/*, "fiolnir"*/];
        exports.terrestrials.UPGRADES_TIER_0 = [/*"ares", "gersemi", "ezekiel", "eris", "selene"*/];
        exports.celestials.UPGRADES_TIER_0 = ["paladin", "freyja", "zaphkiel", "nyx", "theia"];
        exports.eternals.UPGRADES_TIER_0 = [/*"ragnarok", "kronos"*/];
    exports.oldTanks.UPGRADES_TIER_0 = ["oldSpreadshot", "oldBentBoomer", "quadBuilder", "weirdSpike", "master", "oldCommander", "blunderbuss", "oldRimfire"];
    exports.scrappedTanks.UPGRADES_TIER_0 = ["autoTrapper", "badDreadnought", "mender", "prodigy"];
    exports.fun.UPGRADES_TIER_0 = ["vanquisher", "armyOfOne", "godbasic", "diamondShape", "rotatedTrap", "mummifier", "colorMan", "seventeenagon", "tracker3", "tetraGunner", "worstTank"];
