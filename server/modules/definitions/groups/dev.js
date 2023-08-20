const { combineStats, skillSet } = require('../facilitators.js');
const { base, gunCalcNames, basePolygonDamage, basePolygonHealth, dfltskl, statnames } = require('../constants.js');
const g = require('../gunvals.js');

// TESTBED TANKS
exports.testbedBase = {
    PARENT: [exports.genericTank],
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
    PARENT: [exports.testbedBase],
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
exports.developerB = {
    PARENT: [exports.testbedBase],
    LABEL: "Developer B",
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
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [18, 10, -1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op]),
                TYPE: exports.developerBullet,
            },
        },
    ],
};
exports.gameAdminMenu = {
    PARENT: [exports.testbedBase],
    LABEL: "Game Admin Menu",
};
exports.gameModMenu = {
    PARENT: [exports.testbedBase],
    LABEL: "Game Mod Menu",
};
exports.betaTesterMenu = {
    PARENT: [exports.testbedBase],
    LABEL: "Beta Tester Menu",
};
exports.spectator = {
    PARENT: [exports.testbedBase],
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
exports.tankChangesMenu = {
    PARENT: [exports.testbedBase],
    LABEL: "Tank Changes Menu",
};
exports.btTanksMenu = {
    PARENT: [exports.testbedBase],
    LABEL: "BT Tanks Menu",
};
exports.specialTanksMenu = {
    PARENT: [exports.testbedBase],
    LABEL: "Special Tanks Menu",
};
exports.bossesMenu = {
    PARENT: [exports.testbedBase],
    LABEL: "Bosses Menu",
};
exports.memes = {
    PARENT: [exports.testbedBase],
    LABEL: "Memes",
};
exports.retrograde = {
    PARENT: [exports.testbedBase],
    LABEL: "Retrograde",
};
exports.diepTanks = {
    PARENT: [exports.testbedBase],
    LABEL: "Diep Tanks",
};
exports.diep2Tanks = {
    PARENT: [exports.testbedBase],
    LABEL: "Diep2 Tanks",
};
exports.digDig = {
    PARENT: [exports.testbedBase],
    LABEL: "DigDig",
};
exports.bosses = {
    PARENT: [exports.testbedBase],
    LABEL: "Bosses",
};
exports.celestialBosses = {
    PARENT: [exports.testbedBase],
    LABEL: "Celestial Bosses",
};
exports.eliteBosses = {
    PARENT: [exports.testbedBase],
    LABEL: "Elite Bosses",
};
exports.strangeBosses = {
    PARENT: [exports.testbedBase],
    LABEL: "Strange Bosses",
};
exports.diepBosses = {
    PARENT: [exports.testbedBase],
    LABEL: "Diep Bosses",
};
exports.taleOfDiepBosses = {
    PARENT: [exports.testbedBase],
    LABEL: "ToD Bosses",
};
exports.otherTanks = {
    PARENT: [exports.testbedBase],
    LABEL: "Tanks",
};
exports.nostalgiaMenu = {
    PARENT: [exports.testbedBase],
    LABEL: "Nostalgia Menu",
};
exports.scrappedMenu = {
    PARENT: [exports.testbedBase],
    LABEL: "Scrapped Menu",
};
exports.scrappedMenu2 = {
    PARENT: [exports.testbedBase],
    LABEL: "Scrapped Menu 2",
};
exports.miscRetrograde = {
    PARENT: [exports.testbedBase],
    LABEL: "Misc Retrograde",
};
exports.finalBosses = {
    PARENT: [exports.testbedBase],
    LABEL: "Final Bosses",
};
exports.miscEntities = {
    PARENT: [exports.testbedBase],
    LABEL: "Misc Entities",
};
exports.dominators = {
    PARENT: [exports.testbedBase],
    LABEL: "Dominators",
};
exports.nostalgiaMenu2 = {
    PARENT: [exports.testbedBase],
    LABEL: "Nostalgia Menu 2",
};
exports.sentries = {
    PARENT: [exports.testbedBase],
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

// JOKE TANKS
exports.wifeBeater = {
    PARENT: ["genericTank"],
    LABEL: "Wife Beater",
    DANGER: 8,
    COLOR: 33,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    MAX_CHILDREN: 16,
    GUNS: [
        {
            POSITION: [6, 12, 1.2, 8, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [6, 12, 1.2, 8, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [6, 12, 1.2, 8, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [6, 12, 1.2, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
    ],
};
exports.CONQ = {
    PARENT: ["genericTank"],
    LABEL: "CONQ!!!",
    DANGER: 8,
    COLOR: 25,
    BODY: {
        SPEED: 0.8 * base.SPEED,
    },
    GUNS: [
        {
            POSITION: [20.5, 19.5, 1, 0, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 18, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 18, 1.2, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct]),
                TYPE: "setTrap",
            },
        },
    ],
};
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
    PARENT: ["testbedBase"],
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
    PARENT: ["testbedBase"],
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

// TOKEN "UPGRADE PATHS"
exports.developer.UPGRADES_TIER_0 = ["healer", "basic", "lancer", "gameAdminMenu", "spectator", "eggGenerator", "specialTanksMenu", "bossesMenu", "memes", "retrograde", "miscEntities", "dominators", "levels", "teams"];
    exports.gameAdminMenu.UPGRADES_TIER_0 = ["basic", "gameModMenu", "spectator", "eggGenerator", "developer", "specialTanksMenu", "bossesMenu", "memes"];
        exports.memes.UPGRADES_TIER_0 = ["vanquisher", "armyOfOne", "godbasic", "diamondShape", "rotatedTrap", "mummifier", "colorMan", "seventeenagon"];
        exports.gameModMenu.UPGRADES_TIER_0 = ["basic", "betaTesterMenu", "spectator", "tankChangesMenu", "retrograde"];
            exports.betaTesterMenu.UPGRADES_TIER_0 = ["basic", "tankChangesMenu", "retrograde"];
                exports.tankChangesMenu.UPGRADES_TIER_0 = [];
    exports.eggGenerator.UPGRADES_TIER_0 = ["basic", "squareGenerator", "crasherGenerator"];
        exports.crasherGenerator.UPGRADES_TIER_0 = ["basic", "gameAdminMenu", "alphaPentagonGenerator", "eggGenerator"];
    exports.bossesMenu.UPGRADES_TIER_0 = ["sentries", "celestialBosses", "eliteBosses", "strangeBosses", "ironclad"];
        exports.sentries.UPGRADES_TIER_0 = ["sentrySwarm", "sentryGun", "sentryTrap", "shinySentrySwarm", "shinySentryGun", "shinySentryTrap"];
    exports.retrograde.UPGRADES_TIER_0 = ["diepTanks", "digDig", "celestialBosses", "eliteBosses", "strangeBosses", "nostalgiaMenu", "scrappedMenu", "miscRetrograde"];
        exports.diepTanks.UPGRADES_TIER_0 = ["diep2Tanks", "diepTank"];
            exports.diep2Tanks.UPGRADES_TIER_0 = ["blaster", "gatlingGun", "machineFlank", "retroRifle", "buttbuttin", "blower", "quadTwin", "tornado", "subverter", "battery", "deathStar", "bonker", "protector", "doubleTrapGuard"];
                exports.blaster.UPGRADES_TIER_3 = ["triBlaster", "splasher"];
                exports.gatlingGun.UPGRADES_TIER_3 = ["retroSprayer", "accurator", "halfNHalf"];
                exports.machineFlank.UPGRADES_TIER_3 = ["machineTriple", "halfNHalf"];
                exports.retroRifle.UPGRADES_TIER_3 = ["sniperRifle", "rifleGuard", "spreadRifle"];
        exports.celestialBosses.UPGRADES_TIER_0 = ["paladin", "freyja", "zaphkiel", "nyx", "theia", "alviss", "tyr"];
        exports.eliteBosses.UPGRADES_TIER_0 = ["eliteDestroyer", "eliteGunner", "eliteSprayer", "eliteBattleship", "eliteSpawner"];
        exports.strangeBosses.UPGRADES_TIER_0 = ["roguePalisade", "rogueArmada", "nestKeeper", "eliteSkimmer", "summoner"];
        exports.nostalgiaMenu.UPGRADES_TIER_0 = ["oldSpreadshot", "bentBoomer", "quadBuilder", "quintuplet", "vulcan", "sniper3", "weirdSpike", "master", "oldCommander", "blunderbuss", "oldRimfire", "ransacker"];
        exports.scrappedMenu.UPGRADES_TIER_0 = ["scrappedMenu2", "rocketeer", "crowbar", "peashooter", "autoTrapper", "megaTrapper", "railgun", "megaSpawner", "badDreadnought", "mender"];
            exports.scrappedMenu2.UPGRADES_TIER_0 = ["scrappedMenu", "overcheese", "prodigy", "spawnerdrive", "rimfire", "productionist", "taser"];
                exports.productionist.UPGRADES_TIER_0 = ["bismarck"];
        exports.miscRetrograde.UPGRADES_TIER_0 = ["tracker3", "tetraGunner", "worstTank"];

// MISCELLANEOUS
exports.miscEntities.UPGRADES_TIER_0 = ["dominators", "baseProtector", "mothership", "arenaCloser"];
exports.dominators.UPGRADES_TIER_0 = ["dominator", "destroyerDominator", "gunnerDominator", "trapperDominator"];