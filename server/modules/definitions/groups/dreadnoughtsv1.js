const { combineStats, makeAuto } = require('../facilitators.js');
const { dreadnought1, statnames, gunCalcNames, dfltskl, smshskl } = require('../constants.js');
const generics = require('./generics.js');
const g = require('../gunvals.js');

// Misc
exports.mechanismMainTurret = {
    PARENT: ["genericTank"],
    LABEL: "Turret",
    CONTROLLERS: ["nearestDifferentMaster"],
    INDEPEDENT: true,
    BODY: {
        FOV: 0.8,
    },
    COLOR: 16,
    GUNS: [
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.pound, g.destroy, g.morespeed, g.morereload, g.doublereload]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.automationMainTurret = {
    PARENT: ["genericTank"],
    LABEL: "Turret",
    CONTROLLERS: ["onlyAcceptInArc", "nearestDifferentMaster"],
    INDEPEDENT: true,
    BODY: {
        FOV: 0.8,
    },
    COLOR: 16,
    GUNS: [
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.destroy, g.morespeed, g.morereload]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.automationSecondaryTurret = {
    PARENT: ["genericTank"],
    LABEL: "Turret",
    CONTROLLERS: ["onlyAcceptInArc", "nearestDifferentMaster"],
    INDEPEDENT: true,
    BODY: {
        FOV: 0.8,
    },
    COLOR: 16,
    GUNS: [
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.pound, g.morereload]),
                TYPE: "bullet",
            },
        },
    ],
};

exports.turretedTrap = makeAuto(generics.trap);

// T0
exports.dreadv1 = {
    PARENT: ["genericDreadnought1"],
    LABEL: "Dreadnoughts V1",
}

// T1
exports.swordv1 = {
    PARENT: ["genericDreadnought1"],
    LABEL: "Sword",
    GUNS: [],
}
for (let i = 0; i < 3; i++) {
    exports.swordv1.GUNS.push(
        {
            POSITION: [18, 7, 1, 0, 0, 120*i, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.sniper, g.morereload]),
                TYPE: "bullet",
            },
        },
    )
}

exports.pacifierv1 = {
    PARENT: ["genericDreadnought1"],
    LABEL: "Pacifier",
    GUNS: [],
}
for (let i = 0; i < 3; i++) {
    exports.pacifierv1.GUNS.push(
        {
            POSITION: [15, 7, 1, 0, 0, 120*i, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.morereload]),
                TYPE: "bullet",
            },
        },
    )
}

exports.invaderv1 = {
    PARENT: ["genericDreadnought1"],
    LABEL: "Invader",
    GUNS: [],
}
for (let i = 0; i < 3; i++) {
    exports.invaderv1.GUNS.push(
        {
            POSITION: [5.5, 7.5, 1.3, 7.5, 0, 120*i, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over, g.morespeed]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                MAX_CHILDREN: 4,
            },
        },
    )
}

exports.centaurv1 = {
    PARENT: ["genericDreadnought1"],
    LABEL: "Centaur",
    GUNS: [],
}
for (let i = 0; i < 3; i++) {
    exports.centaurv1.GUNS.push(
        {
            POSITION: [12, 7, 1, 0, 0, 120*i, 0],
        },
        {
            POSITION: [2.5, 7, 1.6, 12, 0, 120*i, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.pound, g.morereload]),
                TYPE: ["trap", {HITS_OWN_TYPE: "never"} ],
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    )
}

exports.automationv1 = {
    PARENT: ["genericDreadnought1"],
    LABEL: "Automation",
    TURRETS: [],
}
for (let i = 0; i < 6; i++) {
    exports.automationv1.TURRETS.push(
        {
            POSITION: [4, 8.5, 0, 60*i+30, 180, 1],
            TYPE: "automationSecondaryTurret",
        }
    )
}
exports.automationv1.TURRETS.push(
    {
        POSITION: [7, 0, 0, 0, 360, 1],
        TYPE: "automationMainTurret",
    }
)

exports.juggernautv1 = {
    PARENT: ["genericDreadnought1"],
    LABEL: "Juggernaut",
    BODY: {
        HEALTH: 2,
        SHIELD: 3,
        REGEN: 1.5,
        SPEED: 0.85
    },
    TURRETS: [
        {
            POSITION: [22, 0, 0, 0, 0, 0],
            TYPE: ["smasherBody", {INDEPEDENT: false} ]
        }
    ]
}

// T2
exports.sabrev1 = {
    PARENT: ["genericDreadnought1"],
    LABEL: "Sabre",
    GUNS: [],
    BRANCH_FROM: "swordv1",
}
for (let i = 0; i < 3; i++) {
    exports.sabrev1.GUNS.push(
        {
            POSITION: [25, 7, 1, 0, 0, 120*i, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.sniper, g.assass, g.morespeed, g.morereload]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5, 7, -1.4, 9, 0, 120*i, 0],
        },
    )
}
exports.gladiusv1 = {
    PARENT: ["genericDreadnought1"],
    LABEL: "Gladius",
    GUNS: [],
    BRANCH_FROM: "swordv1",
}
for (let i = 0; i < 3; i++) {
    exports.gladiusv1.GUNS.push(
        {
            POSITION: [16, 8, 1, 0, 0, 120*i, 0],
        },
        {
            POSITION: [20, 6, 1, 0, 0, 120*i, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.sniper, g.rifle, g.morespeed, g.morereload]),
                TYPE: "bullet",
            },
        },
    )
}

exports.appeaserv1 = {
    PARENT: ["genericDreadnought1"],
    LABEL: "Appeaser",
    GUNS: [],
    BRANCH_FROM: "pacifierv1",
}
for (let i = 0; i < 3; i++) {
    exports.appeaserv1.GUNS.push(
        {
            POSITION: [6, 8, 1.3, 7, 0, 120*i, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.pound, g.morereload, {size: 0.55}]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [6, 7.5, 1.2, 9, 0, 120*i, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.pound, g.morereload, {size: 0.55 * 8 / 7.5}]),
                TYPE: "bullet",
            },
        },
    )
}
exports.peacekeeperv1 = {
    PARENT: ["genericDreadnought1"],
    LABEL: "Peacekeeper",
    GUNS: [],
    BRANCH_FROM: "pacifierv1",
}
for (let i = 0; i < 3; i++) {
    exports.peacekeeperv1.GUNS.push(
        {
            POSITION: [15, 10, 1, 0, 0, 120*i, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.destroy, g.morereload]),
                TYPE: "bullet",
            },
        },
    )
}
exports.diplomatv1 = {
    PARENT: ["genericDreadnought1"],
    LABEL: "Diplomat",
    GUNS: [],
    BRANCH_FROM: "pacifierv1",
}
for (let i = 0; i < 3; i++) {
    exports.diplomatv1.GUNS.push(
        {
            POSITION: [13.5, 6, 1, 0, 2.2, 120*i, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.pound, g.morereload]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [13.5, 6, 1, 0, -2.2, 120*i, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.pound, g.morereload]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [15.5, 6, 1, 0, 0, 120*i, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.pound, g.morereload]),
                TYPE: "bullet",
            },
        },
    )
}

exports.inquisitorv1 = {
    PARENT: ["genericDreadnought1"],
    LABEL: "Inquisitor",
    GUNS: [],
    BRANCH_FROM: "invaderv1",
}
for (let i = 0; i < 3; i++) {
    exports.inquisitorv1.GUNS.push(
        {
            POSITION: [7, 8.5, 1.3, 7.5, 0, 120*i, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over, g.morespeed, g.battle, {SIZE: 1.25}]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                MAX_CHILDREN: 4,
            },
        },
    )
}
exports.assailantv1 = {
    PARENT: ["genericDreadnought1"],
    LABEL: "Assailant",
    GUNS: [],
    BRANCH_FROM: "invaderv1",
}
for (let i = 0; i < 3; i++) {
    exports.assailantv1.GUNS.push(
        {
            POSITION: [13.5, 8, 1, 0, 0, 120*i, 0],
        },
        {
            POSITION: [1.5, 10, 1, 13.5, 0, 120*i, 0],
            PROPERTIES: {
                MAX_CHILDREN: 4,
                SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
                TYPE: "minion",
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [12, 10, 1, 0, 0, 120*i, 0],
        },
    )
}
exports.infiltratorv1 = {
    PARENT: ["genericDreadnought1"],
    LABEL: "Infiltrator",
    GUNS: [],
    BRANCH_FROM: "invaderv1",
}
for (let i = 0; i < 3; i++) {
    exports.infiltratorv1.GUNS.push(
        {
            POSITION: [7, 6, 0.6, 5.5, 2.8, 120*i, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.pound]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 6, 0.6, 5.5, -2.8, 120*i, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.pound]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 6, 0.6, 8, 0, 120*i, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.pound]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    )
}

exports.cerberusv1 = {
    PARENT: ["genericDreadnought1"],
    LABEL: "Cerberus",
    GUNS: [],
    BRANCH_FROM: "centaurv1",
}
for (let i = 0; i < 3; i++) {
    exports.cerberusv1.GUNS.push(
        {
            POSITION: [11.5, 2.5, 1, 0, 3.3, 120*i, 0],
        },
        {
            POSITION: [1.75, 2.5, 1.6, 11.5, 3.3, 120*i, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.fast, g.pound, g.morereload]),
                TYPE: ["trap", {HITS_OWN_TYPE: "never"} ],
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [11.5, 2.5, 1, 0, -3.3, 120*i, 0],
        },
        {
            POSITION: [1.75, 2.5, 1.6, 11.5, -3.3, 120*i, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.fast, g.pound, g.morereload]),
                TYPE: ["trap", {HITS_OWN_TYPE: "never"} ],
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [13, 3.2, 1, 0, 0, 120*i, 0.5],
        },
        {
            POSITION: [1.75, 3.2, 1.6, 13, 0, 120*i, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.fast, g.pound, g.morereload]),
                TYPE: ["trap", {HITS_OWN_TYPE: "never"} ],
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    )
}
exports.minotaurv1 = {
    PARENT: ["genericDreadnought1"],
    LABEL: "Minotaur",
    GUNS: [],
    BRANCH_FROM: "centaurv1",
}
for (let i = 0; i < 3; i++) {
    exports.minotaurv1.GUNS.push(
        {
            POSITION: [13, 9, 1, 0, 0, 120*i, 0],
        },
        {
            POSITION: [3, 9, 1.6, 13, 0, 120*i, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.veryfast, g.pound, g.morereload]),
                TYPE: ["unsetTrap", {HITS_OWN_TYPE: "never"} ],
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    )
}
exports.sirenv1 = {
    PARENT: ["genericDreadnought1"],
    LABEL: "Siren",
    GUNS: [],
    BRANCH_FROM: "centaurv1",
}
for (let i = 0; i < 3; i++) {
    exports.sirenv1.GUNS.push(
        {
            POSITION: [13, 7, -1.4, 0, 0, 120*i, 0],
        },
        {
            POSITION: [2.5, 7, 1.6, 13, 0, 120*i, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.fast, g.pound, g.morereload]),
                TYPE: ["turretedTrap", {HITS_OWN_TYPE: "never"} ],
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    )
}

exports.mechanismv1 = {
    PARENT: ["genericDreadnought1"],
    LABEL: "Mechanism",
    TURRETS: [],
    BRANCH_FROM: "automationv1",
}
for (let i = 0; i < 6; i++) {
    exports.mechanismv1.TURRETS.push(
        {
            POSITION: [4, 8.5, 0, 60*i+30, 180, 1],
            TYPE: "automationMainTurret",
        }
    )
}
exports.mechanismv1.TURRETS.push(
    {
        POSITION: [9, 0, 0, 0, 360, 1],
        TYPE: "mechanismMainTurret",
    }
)

exports.behemothv1 = {
    PARENT: ["genericDreadnought1"],
    LABEL: "Behemoth",
    BODY: {
        HEALTH: 4,
        SHIELD: 5,
        REGEN: 2.25,
        SPEED: 0.7,
    },
    TURRETS: [
        {
            POSITION: [23.5, 0, 0, 0, 0, 0],
            TYPE: ["smasherBody", {INDEPEDENT: false} ]
        }
    ],
    BRANCH_FROM: "juggernautv1",
}

exports.dreadv1.UPGRADES_TIER_0 = ["swordv1", "pacifierv1", "invaderv1", "centaurv1"];

