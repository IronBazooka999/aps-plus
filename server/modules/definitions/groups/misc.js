const { combineStats, skillSet } = require('../facilitators.js');
const { base, gunCalcNames } = require('../constants.js');
const g = require('../gunvals.js');

// OBSTACLES
exports.rock = {
    TYPE: "wall",
    DAMAGE_CLASS: 1,
    LABEL: "Rock",
    FACING_TYPE: "turnWithSpeed",
    SHAPE: -9,
    BODY: {
        PUSHABILITY: 0,
        HEALTH: 10000,
        SHIELD: 10000,
        REGEN: 1000,
        DAMAGE: 1,
        RESIST: 100,
        STEALTH: 1,
    },
    VALUE: 0,
    SIZE: 60,
    COLOR: 16,
    VARIES_IN_SIZE: true,
    ACCEPTS_SCORE: false,
};
exports.stone = {
    PARENT: ["rock"],
    LABEL: "Stone",
    SIZE: 32,
    SHAPE: -7,
};
exports.moon = {
    PARENT: ["rock"],
    LABEL: "Moon",
    SIZE: 60,
    SHAPE: 0,
};
exports.gravel = {
    PARENT: ["rock"],
    LABEL: "Gravel",
    SIZE: 16,
    SHAPE: -7,
};
exports.wall = {
    PARENT: ["rock"],
    LABEL: "Wall",
    SIZE: 25,
    SHAPE: 4,
};

// DOMINATORS
exports.dominationBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { startAngle: Math.PI / 2, speed: 0, independent: true }]],
    COLOR: 9,
    SHAPE: 6,
    INDEPENDENT: true,
};
exports.dominator = {
    PARENT: ["genericTank"],
    LABEL: "Dominator",
    DANGER: 10,
    SKILL: skillSet({
        rld: 1,
        dam: 1,
        pen: 1,
        str: 1,
        spd: 1,
    }),
    LEVEL: -1,
    BODY: {
        RESIST: 100,
        SPEED: 1.32,
        ACCELERATION: 0.8,
        HEALTH: 590,
        DAMAGE: 6,
        PENETRATION: 0.25,
        FOV: 1,
        PUSHABILITY: 0,
        HETERO: 0,
        SHIELD: base.SHIELD * 1.4,
    },
    CONTROLLERS: ["nearestDifferentMaster"],
    DISPLAY_NAME: true,
    TURRETS: [
        {
            POSITION: [22, 0, 0, 0, 360, 0],
            TYPE: "dominationBody",
        },
    ],
    CAN_BE_ON_LEADERBOARD: false,
    GIVE_KILL_MESSAGE: false,
    ACCEPTS_SCORE: false,
    HITS_OWN_TYPE: "pushOnlyTeam",
};
exports.destroyerDominator = {
    PARENT: ["dominator"],
    GUNS: [
        {
            POSITION: [15.25, 6.75, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.destroyerDominator]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5, 6.75, -1.6, 6.75, 0, 0, 0],
        },
    ],
};
exports.gunnerDominator = {
    PARENT: ["dominator"],
    GUNS: [
        {
            POSITION: [14.25, 3, 1, 0, -2, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14.25, 3, 1, 0, 2, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [15.85, 3, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5, 8.5, -1.6, 6.25, 0, 0, 0],
        },
    ],
};
exports.trapperDominator = {
    PARENT: ["dominator"],
    FACING_TYPE: "autospin",
    CONTROLLERS: ["alwaysFire"],
    GUNS: [
        {
            POSITION: [4, 3.75, 1, 8, 0, 0, 0],
        },
        {
            POSITION: [1.25, 3.75, 1.7, 12, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
                TYPE: "trap",
            },
        },
        {
            POSITION: [4, 3.75, 1, 8, 0, 45, 0],
        },
        {
            POSITION: [1.25, 3.75, 1.7, 12, 0, 45, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
                TYPE: "trap",
            },
        },
        {
            POSITION: [4, 3.75, 1, 8, 0, 90, 0],
        },
        {
            POSITION: [1.25, 3.75, 1.7, 12, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
                TYPE: "trap",
            },
        },
        {
            POSITION: [4, 3.75, 1, 8, 0, 135, 0],
        },
        {
            POSITION: [1.25, 3.75, 1.7, 12, 0, 135, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
                TYPE: "trap",
            },
        },
        {
            POSITION: [4, 3.75, 1, 8, 0, 180, 0],
        },
        {
            POSITION: [1.25, 3.75, 1.7, 12, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
                TYPE: "trap",
            },
        },
        {
            POSITION: [4, 3.75, 1, 8, 0, 225, 0],
        },
        {
            POSITION: [1.25, 3.75, 1.7, 12, 0, 225, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
                TYPE: "trap",
            },
        },
        {
            POSITION: [4, 3.75, 1, 8, 0, 270, 0],
        },
        {
            POSITION: [1.25, 3.75, 1.7, 12, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
                TYPE: "trap",
            },
        },
        {
            POSITION: [4, 3.75, 1, 8, 0, 315, 0],
        },
        {
            POSITION: [1.25, 3.75, 1.7, 12, 0, 315, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
                TYPE: "trap",
            },
        },
    ],
};

// MISCELLANEOUS TANKS
exports.baseProtector = {
    PARENT: ["genericTank"],
    LABEL: "Base",
    SIZE: 64,
    DAMAGE_CLASS: 0,
    ACCEPTS_SCORE: false,
    CAN_BE_ON_LEADERBOARD: false,
    IGNORED_BY_AI: true,
    SKILL: skillSet({
        rld: 1,
        dam: 1,
        pen: 1,
        spd: 1,
        str: 1,
    }),
    BODY: {
        SPEED: 0,
        HEALTH: 1e4,
        DAMAGE: 10,
        PENETRATION: 0.25,
        SHIELD: 1e3,
        REGEN: 100,
        FOV: 1,
        PUSHABILITY: 0,
        HETERO: 0,
    },
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            POSITION: [25, 0, 0, 0, 360, 0],
            TYPE: "dominationBody",
        },
        {
            POSITION: [12, 7, 0, 45, 100, 0],
            TYPE: "baseSwarmTurret",
        },
        {
            POSITION: [12, 7, 0, 135, 100, 0],
            TYPE: "baseSwarmTurret",
        },
        {
            POSITION: [12, 7, 0, 225, 100, 0],
            TYPE: "baseSwarmTurret",
        },
        {
            POSITION: [12, 7, 0, 315, 100, 0],
            TYPE: "baseSwarmTurret",
        },
    ],
    GUNS: [
        {
            POSITION: [4.5, 11.5, -1.3, 6, 0, 45, 0],
        },
        {
            POSITION: [4.5, 11.5, -1.3, 6, 0, 135, 0],
        },
        {
            POSITION: [4.5, 11.5, -1.3, 6, 0, 225, 0],
        },
        {
            POSITION: [4.5, 11.5, -1.3, 6, 0, 315, 0],
        },
        {
            POSITION: [4.5, 8.5, -1.5, 7, 0, 45, 0],
        },
        {
            POSITION: [4.5, 8.5, -1.5, 7, 0, 135, 0],
        },
        {
            POSITION: [4.5, 8.5, -1.5, 7, 0, 225, 0],
        },
        {
            POSITION: [4.5, 8.5, -1.5, 7, 0, 315, 0],
        },
    ],
};
exports.mothership = {
    PARENT: ["genericTank"],
    LABEL: "Mothership",
    DANGER: 10,
    SIZE: "genericTank".SIZE * (7 / 3),
    SHAPE: 16,
    STAT_NAMES: statnames.drone,
    VALUE: 5e5,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    BODY: {
        REGEN: 0,
        FOV: 1,
        SHIELD: 0,
        ACCEL: 0.2,
        SPEED: 0.3,
        HEALTH: 2000,
        PUSHABILITY: 0.15,
        DENSITY: 0.2,
        DAMAGE: 1.5,
    },
    HITS_OWN_TYPE: "pushOnlyTeam",
    GUNS: (() => {
        let e = [],
            T = [1];
        for (let e = 1; e < 8.5; e += 0.5) {
            let t = e / 16;
            T.push(t);
        }
        for (let t = 0; t < 16; t++) {
            let S = 22.5 * (t + 1),
                E = {
                    MAX_CHILDREN: 2,
                    SHOOT_SETTINGS: combineStats([g.drone, g.over, g.mothership]),
                    TYPE: "drone",
                    AUTOFIRE: true,
                    SYNCS_SKILLS: true,
                    STAT_CALCULATOR: gunCalcNames.drone,
                    WAIT_TO_CYCLE: true,
                };
            t % 2 == 0 &&
                (E.TYPE = [
                    "drone",
                    {
                        AI: {
                            skynet: true,
                        },
                        INDEPENDENT: true,
                        LAYER: 10,
                        BODY: {
                            FOV: 2,
                        },
                    },
                ]);
            let O = {
                POSITION: [4.3, 3.1, 1.2, 8, 0, S, T[t]],
                PROPERTIES: E,
            };
            e.push(O);
        }
        return e;
    })(),
};
exports.arenaCloser = {
    PARENT: ["genericTank"],
    LABEL: "Arena Closer",
    NAME: "Arena Closer",
    DANGER: 10,
    SIZE: 34,
    COLOR: 3,
    LAYER: 13,
    BODY: {
        REGEN: 1e5,
        HEALTH: 1e6,
        DENSITY: 30,
        DAMAGE: 1e5,
        FOV: 1.15,
        SPEED: 8,
    },
    SKILL: skillSet({
        rld: 1,
        dam: 1,
        pen: 1,
        str: 1,
        spd: 1,
        atk: 1,
        hlt: 1,
        shi: 1,
        rgn: 1,
        mob: 1,
    }),
    DRAW_HEALTH: false,
    HITS_OWN_TYPE: "never",
    ARENA_CLOSER: true,
    GUNS: [
        {
            POSITION: [14, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.closer]),
                TYPE: [
                    "bullet",
                    {
                        LAYER: 12,
                    },
                ],
            },
        },
    ],
};

// OLD TANKS
exports.oldSpreadshot = {
  PARENT: ["genericTank"],
  LABEL: "Old Spreadshot",
  DANGER: 7,
  GUNS: [
    {
      POSITION: [13, 4, 1, 0, -0.8, -75, 5 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [14.5, 4, 1, 0, -1.0, -60, 4 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [16, 4, 1, 0, -1.6, -45, 3 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [17.5, 4, 1, 0, -2.4, -30, 2 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [19, 4, 1, 0, -3.0, -15, 1 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [13, 4, 1, 0, 0.8, 75, 5 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [14.5, 4, 1, 0, 1.0, 60, 4 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [16, 4, 1, 0, 1.6, 45, 3 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [17.5, 4, 1, 0, 2.4, 30, 2 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [19, 4, 1, 0, 3.0, 15, 1 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [13, 10, 1.3, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.spreadmain,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Pounder",
      },
    },
  ],
};
exports.oldBentBoomer = {
  PARENT: ["genericTank"],
  DANGER: 7,
  LABEL: "Old Bent Boomer",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: 0.8 * base.SPEED,
    FOV: 1.15 * base.FOV,
  },
  GUNS: [
    {
      POSITION: [8, 10, 1, 8, -2, -35, 0],
    },
    {
      POSITION: [8, 10, 1, 8, 2, 35, 0],
    },
    {
      POSITION: [2, 10, 1.3, 16, -2, -35, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
        TYPE: exports.boomerang,
      },
    },
    {
      POSITION: [2, 10, 1.3, 16, 2, 35, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
        TYPE: exports.boomerang,
      },
    },
  ],
};
exports.quadBuilder = {
  PARENT: ["genericTank"],
  DANGER: 7,
  LABEL: "Quad Builder",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: 0.8 * base.SPEED,
    FOV: 1.15 * base.FOV,
  },
  GUNS: [
    {
      POSITION: [14, 6, 1, 0, 0, 45, 0],
    },
    {
      POSITION: [2, 6, 1.1, 14, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak]),
        TYPE: exports.setTrap,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 0, 135, 0],
    },
    {
      POSITION: [2, 6, 1.1, 14, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak]),
        TYPE: exports.setTrap,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 0, 225, 0],
    },
    {
      POSITION: [2, 6, 1.1, 14, 0, 225, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak]),
        TYPE: exports.setTrap,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 0, 315, 0],
    },
    {
      POSITION: [2, 6, 1.1, 14, 0, 315, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak]),
        TYPE: exports.setTrap,
      },
    },
  ],
};
exports.weirdSpike = {
  PARENT: ["genericTank"],
  LABEL: "Weird Spike",
  DANGER: 7,
  BODY: {
    DAMAGE: 1.15 * base.DAMAGE,
    FOV: 1.05 * base.FOV,
    DENSITY: 1.5 * base.DENSITY,
  },
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
  TURRETS: [
    {
      POSITION: [20.5, 0, 0, 0, 360, 0],
      TYPE: exports.weirdSpikeBody1,
    },
    {
      POSITION: [20.5, 0, 0, 180, 360, 0],
      TYPE: exports.weirdSpikeBody2,
    },
  ],
};
exports.oldCommanderGun = {
  PARENT: ["genericTank"],
  LABEL: "",
  BODY: {
    FOV: 3,
  },
  CONTROLLERS: ["nearestDifferentMaster"],
  COLOR: 16,
  MAX_CHILDREN: 6,
  AI: {
    NO_LEAD: true,
    SKYNET: true,
    FULL_VIEW: true,
  },
  GUNS: [
    {
      POSITION: [8, 14, 1.3, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.commander]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
  ],
};
exports.oldCommander = {
  PARENT: ["genericTank"],
  LABEL: "Old Commander",
  STAT_NAMES: statnames.drone,
  DANGER: 7,
  BODY: {
    FOV: 1.15 * base.FOV,
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      POSITION: [16, 1, 0, 0, 0, 0],
      TYPE: exports.oldCommanderGun,
    },
    {
      POSITION: [16, 1, 0, 120, 0, 0],
      TYPE: [
        exports.oldCommanderGun,
        {
          INDEPENDENT: true,
        },
      ],
    },
    {
      POSITION: [16, 1, 0, 240, 0, 0],
      TYPE: [
        exports.oldCommanderGun,
        {
          INDEPENDENT: true,
        },
      ],
    },
  ],
};
exports.blunderbuss = {
  PARENT: ["genericTank"],
  LABEL: "Blunderbuss",
  DANGER: 7,
  BODY: exports.rifle.BODY,
  GUNS: [
    {
      POSITION: [13, 4, 1, 0, -3, -9, 0.3],
      PROPERTIES: {
        TYPE: exports.bullet,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.rifle,
          g.blunderbuss,
        ]),
      },
    },
    {
      POSITION: [15, 4, 1, 0, -2.5, -6, 0.2],
      PROPERTIES: {
        TYPE: exports.bullet,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.rifle,
          g.blunderbuss,
        ]),
      },
    },
    {
      POSITION: [16, 4, 1, 0, -2, -3, 0.1],
      PROPERTIES: {
        TYPE: exports.bullet,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.rifle,
          g.blunderbuss,
        ]),
      },
    },
    {
      POSITION: [13, 4, 1, 0, 3, 9, 0.3],
      PROPERTIES: {
        TYPE: exports.bullet,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.rifle,
          g.blunderbuss,
        ]),
      },
    },
    {
      POSITION: [15, 4, 1, 0, 2.5, 6, 0.2],
      PROPERTIES: {
        TYPE: exports.bullet,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.rifle,
          g.blunderbuss,
        ]),
      },
    },
    {
      POSITION: [16, 4, 1, 0, 2, 3, 0.1],
      PROPERTIES: {
        TYPE: exports.bullet,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.rifle,
          g.blunderbuss,
        ]),
      },
    },
    {
      POSITION: [25, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        TYPE: exports.bullet,
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle]),
      },
    },
    {
      POSITION: [14, 10.5, 1, 0, 0, 0, 0],
    },
  ],
};
exports.oldRimfire = {
  PARENT: ["genericTank"],
  LABEL: "Old Rimfire",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 5, 1, 0, 7.25, 15, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 5, 1, 0, -7.25, -15, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 5, 1, 0, 3.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 5, 1, 0, -3.75, -0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
  ],
};

// SCRAPPED TANKS
exports.autoTrapper = makeAuto(exports.trapper);
exports.oldDreadnought = {
  PARENT: [exports.genericTank],
  LABEL: "Old Dreadnought",
  DANGER: 7,
  FACING_TYPE: "locksFacing",
  STAT_NAMES: statnames.swarm,
  BODY: {
    FOV: base.FOV * 1.2,
  },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [20, -4, 0, 0, 0, 0],
      TYPE: exports.genericEntity,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [6, 16, 1, 16, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.fake]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [1, 3, 1, 3, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
          g.thruster,
          [0.1, 3, 1, 1, 1, 1, 1, 1, 1, 0.075, 1, 2, 1],
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.mender = {
  PARENT: [exports.genericTank],
  LABEL: "Mender",
  DANGER: 7,
  TOOLTIP: "Right click to heal yourself (use sparingly, has a long cooldown once used!)",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 3, 1, 0, -6, -7, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [17, 3, 1, 0, 6, 7, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [19, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Heavy",
      },
    },
    { POSITION: [17, 10, 1, 0, 0, 180, 0] },
    {
      POSITION: [5, 18, 1, -19, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          [2, 0, 1, 1, 1, -1, 1, 1, 1, 0.1, 1, 1, 1],
        ]),
        TYPE: [exports.bullet, { HEAL_MYSELF: true }],
        ALT_FIRE: true,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [7, 0, 0, 0, 0, 1],
      TYPE: makeDeco(3),
    },
  ],
};
exports.prodigy = {
  PARENT: [exports.genericTank],
  LABEL: "Prodigy",
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  SHAPE: 6,
  MAX_CHILDREN: 14,
  BODY: {
    FOV: base.FOV * 1.15,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 11, 1.3, 6, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 11, 1.3, 6, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 11, 1.3, 6, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 9, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [4, 9, 1.5, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [14, 9, 1, 0, 0, 120, 0],
    },
    {
      POSITION: [4, 9, 1.5, 14, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [14, 9, 1, 0, 0, 240, 0],
    },
    {
      POSITION: [4, 9, 1.5, 14, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};

// BOTS
exports.bot = {
    FACING_TYPE: "looseToTarget",
    NAME: "[AI] ",
    CONTROLLERS: ["nearestDifferentMaster", "mapAltToFire", "minion", "fleeAtLowHealth", ["mapFireToAlt", { onlyIfHasAltFireGun: true }], ["wanderAroundMap", { immitatePlayerMovement: true, lookAtGoal: true }]],
};

// SCORE KEEPING
exports.tagMode = {
    PARENT: ["bullet"],
    LABEL: "Players",
};
