// BOSSES
exports.miniboss = {
  PARENT: [exports.genericTank],
  TYPE: "miniboss",
  DANGER: 6,
  SKILL: skillSet({
    rld: 0.7,
    dam: 0.5,
    pen: 0.8,
    str: 0.8,
    spd: 0.2,
    atk: 0.3,
    hlt: 1,
    shi: 0.7,
    rgn: 0.7,
    mob: 0,
  }),
  LEVEL: 45,
  CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
  AI: {
    NO_LEAD: true,
  },
  FACING_TYPE: "autospin",
  HITS_OWN_TYPE: "hardOnlyBosses",
  BROADCAST_MESSAGE: "A visitor has left!",
};

// ELITES
exports.elite = {
  PARENT: [exports.miniboss],
  LABEL: "Elite Crasher",
  COLOR: 5,
  SHAPE: 3,
  SIZE: 27,
  VARIES_IN_SIZE: true,
  VALUE: 15e4,
  BODY: {
    FOV: 1.25,
    SPEED: 0.1 * base.SPEED,
    HEALTH: 7 * base.HEALTH,
    DAMAGE: 2.5 * base.DAMAGE,
  },
};
exports.eliteDestroyer = {
  PARENT: [exports.elite],
  GUNS: [
    {
      POSITION: [5, 16, 1, 6, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
    {
      POSITION: [5, 16, 1, 6, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
    {
      POSITION: [5, 16, 1, 6, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [11, 0, 0, 180, 360, 0],
      TYPE: [exports.crasherSpawner],
    },
    {
      POSITION: [11, 0, 0, 60, 360, 0],
      TYPE: [exports.crasherSpawner],
    },
    {
      POSITION: [11, 0, 0, -60, 360, 0],
      TYPE: [exports.crasherSpawner],
    },
    {
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: [
        exports.bigauto4gun,
        {
          INDEPENDENT: true,
          COLOR: 5,
        },
      ],
    },
  ],
};
exports.eliteGunner = {
  PARENT: [exports.elite],
  FACING_TYPE: "toTarget",
  GUNS: [
    {
      POSITION: [14, 16, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 16, 1.5, 14, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
        TYPE: [
          exports.pillbox,
          {
            INDEPENDENT: true,
          },
        ],
      },
    },
    {
      POSITION: [6, 14, -2, 2, 0, 60, 0],
    },
    {
      POSITION: [6, 14, -2, 2, 0, 300, 0],
    },
  ],
  AI: {
    NO_LEAD: false,
  },
  TURRETS: [
    {
      POSITION: [14, 8, 0, 60, 180, 0],
      TYPE: [exports.auto4gun],
    },
    {
      POSITION: [14, 8, 0, 300, 180, 0],
      TYPE: [exports.auto4gun],
    },
  ],
};
exports.machineTripleTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Machine Gun",
  BODY: {
    FOV: 2,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 5,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flank]),
        TYPE: exports.bullet,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flank]),
        TYPE: exports.bullet,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flank]),
        TYPE: exports.bullet,
        AUTOFIRE: true,
      },
    },
  ],
};
exports.eliteSprayer = {
  PARENT: [exports.elite],
  SKILL: [0, 9, 3, 9, 2, 9, 9, 9, 9, 0],
  AI: { NO_LEAD: false },
  HAS_NO_RECOIL: true,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [6, 0, 0, 0, 360, 1],
      TYPE: [exports.machineTripleTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [9, 6, -5, 180, 130, 0],
      TYPE: [exports.sprayer, { COLOR: 16 }],
    },
    {
      POSITION: [9, 6, 5, 180, 130, 0],
      TYPE: [exports.sprayer, { COLOR: 16 }],
    },
    {
      POSITION: [9, 6, 5, 60, 130, 0],
      TYPE: [exports.sprayer, { COLOR: 16 }],
    },
    {
      POSITION: [9, 6, -5, 60, 130, 0],
      TYPE: [exports.sprayer, { COLOR: 16 }],
    },
    {
      POSITION: [9, 6, 5, -60, 130, 0],
      TYPE: [exports.sprayer, { COLOR: 16 }],
    },
    {
      POSITION: [9, 6, -5, -60, 130, 0],
      TYPE: [exports.sprayer, { COLOR: 16 }],
    },
  ],
};
exports.oldEliteSprayer = {
  PARENT: [exports.elite],
  AI: {
    NO_LEAD: false,
  },
  TURRETS: [
    {
      POSITION: [14, 6, 0, 180, 190, 0],
      TYPE: [
        exports.sprayer,
        {
          COLOR: 5,
        },
      ],
    },
    {
      POSITION: [14, 6, 0, 60, 190, 0],
      TYPE: [
        exports.sprayer,
        {
          COLOR: 5,
        },
      ],
    },
    {
      POSITION: [14, 6, 0, -60, 190, 0],
      TYPE: [
        exports.sprayer,
        {
          COLOR: 5,
        },
      ],
    },
  ],
};
exports.eliteBattleship = {
  PARENT: [exports.elite],
  GUNS: [
    {
      POSITION: [4, 6, 0.6, 7, -8, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [4, 6, 0.6, 7, 0, 60, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [4, 6, 0.6, 7, 8, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [4, 6, 0.6, 7, -8, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [4, 6, 0.6, 7, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [4, 6, 0.6, 7, 8, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [4, 6, 0.6, 7, -8, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [4, 6, 0.6, 7, 0, -60, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [4, 6, 0.6, 7, 8, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [5, 7, 0, 0, 360, 1],
      TYPE: [
        exports.autoTankGun,
        {
          INDEPENDENT: true,
          COLOR: 5,
        },
      ],
    },
    {
      POSITION: [5, 7, 0, 120, 360, 1],
      TYPE: [
        exports.autoTankGun,
        {
          INDEPENDENT: true,
          COLOR: 5,
        },
      ],
    },
    {
      POSITION: [5, 7, 0, 240, 360, 1],
      TYPE: [
        exports.autoTankGun,
        {
          INDEPENDENT: true,
          COLOR: 5,
        },
      ],
    },
  ],
};
exports.eliteSpawner = {
  PARENT: [exports.elite],
  MAX_CHILDREN: 9,
  AI: { STRAFE: false },
  GUNS: [
    {
      POSITION: [11, 16, 1, 0, 0, 60, 0],
    },
    {
      POSITION: [11, 16, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [11, 16, 1, 0, 0, 300, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [2, 18, 1, 11, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.weak, g.celeslower]),
        TYPE: exports.sentrySwarm,
        SYNCS_SKILLS: true,
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [2, 18, 1, 11, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.weak, g.celeslower]),
        TYPE: exports.sentryTrap,
        SYNCS_SKILLS: true,
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [2, 18, 1, 11, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.weak, g.celeslower]),
        TYPE: exports.sentryGun,
        SYNCS_SKILLS: true,
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: [exports.auto4gun, { INDEPENDENT: false, COLOR: 5 }],
    },
  ],
};
// elite trap guard goes here
// elite spinner goes here
exports.eliteSkimmer = {
  PARENT: [exports.elite],
  LABEL: "Elite Skimmer",
  COLOR: 2,
  TURRETS: [
    {
      POSITION: [15, 5, 0, 60, 170, 0],
      TYPE: exports.skimmerTurret,
    },
    {
      POSITION: [15, 5, 0, 180, 170, 0],
      TYPE: exports.skimmerTurret,
    },
    {
      POSITION: [15, 5, 0, 300, 170, 0],
      TYPE: exports.skimmerTurret,
    },
  ],
};

// MYSTICALS
// sorcerer goes here
exports.summoner = {
  PARENT: [exports.miniboss],
  LABEL: "Summoner",
  DANGER: 8,
  SHAPE: 4,
  COLOR: 13,
  SIZE: 26,
  MAX_CHILDREN: 28,
  FACING_TYPE: "autospin",
  VALUE: 3e5,
  BODY: {
    FOV: 0.5,
    SPEED: 0.1 * base.SPEED,
    HEALTH: 7 * base.HEALTH,
    DAMAGE: 2.6 * base.DAMAGE,
  },
  GUNS: [
    {
      POSITION: [3.5, 8.65, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.summoner]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [3.5, 8.65, 1.2, 8, 0, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.summoner]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [3.5, 8.65, 1.2, 8, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.summoner]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [3.5, 8.65, 1.2, 8, 0, 180, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.summoner]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
        WAIT_TO_CYCLE: true,
      },
    },
  ],
};
// enchantress goes here
// exorcistor goes here

// NESTERS
exports.boomerTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Boomer",
  BODY: {
    FOV: 2,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 14,
  GUNS: [
    {
      POSITION: [7.75, 10, 1, 12, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang, g.fake]),
        TYPE: exports.boomerang,
      },
    },
    {
      POSITION: [6, 10, -1.5, 7, 0, 0, 0],
    },
    {
      POSITION: [2, 10, 1.3, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang]),
        TYPE: exports.boomerang,
      },
    },
  ],
};
exports.nestKeeper = {
  PARENT: [exports.miniboss],
  LABEL: "Nest Keeper",
  COLOR: 14,
  SHAPE: 5,
  SIZE: 50,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.25,
    HEALTH: base.HEALTH * 9,
    SHIELD: base.SHIELD * 1.5,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5,
  },
  MAX_CHILDREN: 15,
  GUNS: [
    {
      POSITION: [3.5, 6.65, 1.2, 8, 0, 35, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.nest_keeper]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        LABEL: "Mega Crasher",
      },
    },
    {
      POSITION: [3.5, 6.65, 1.2, 8, 0, -35, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.nest_keeper]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        LABEL: "Mega Crasher",
      },
    },
    {
      POSITION: [3.5, 6.65, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.nest_keeper]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        LABEL: "Mega Crasher",
      },
    },
    {
      POSITION: [3.5, 6.65, 1.2, 8, 0, 108, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.nest_keeper]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        LABEL: "Mega Crasher",
      },
    },
    {
      POSITION: [3.5, 6.65, 1.2, 8, 0, -108, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.nest_keeper]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        LABEL: "Mega Crasher",
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [8, 9, 0, 72, 120, 0],
      TYPE: [
        exports.auto4gun,
        {
          INDEPENDENT: true,
          COLOR: 14,
        },
      ],
    },
    {
      POSITION: [8, 9, 0, 0, 120, 0],
      TYPE: [
        exports.auto4gun,
        {
          INDEPENDENT: true,
          COLOR: 14,
        },
      ],
    },
    {
      POSITION: [8, 9, 0, 144, 120, 0],
      TYPE: [
        exports.auto4gun,
        {
          INDEPENDENT: true,
          COLOR: 14,
        },
      ],
    },
    {
      POSITION: [8, 9, 0, 216, 120, 0],
      TYPE: [
        exports.auto4gun,
        {
          INDEPENDENT: true,
          COLOR: 14,
        },
      ],
    },
    {
      POSITION: [8, 9, 0, -72, 120, 0],
      TYPE: [
        exports.auto4gun,
        {
          INDEPENDENT: true,
          COLOR: 14,
        },
      ],
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: [
        exports.boomerTurret,
        {
          INDEPENDENT: true,
          COLOR: 14,
        },
      ],
    },
  ],
};
// nest warden goes here
// nest guardian goes here

// ROGUES
exports.roguePalisade = (() => {
  let T = {
    SHOOT_SETTINGS: combineStats([
      g.factory,
      g.pound,
      g.halfreload,
      g.halfreload,
    ]),
    TYPE: exports.minion,
    STAT_CALCULATOR: gunCalcNames.drone,
    AUTOFIRE: true,
    MAX_CHILDREN: 1,
    SYNCS_SKILLS: true,
    WAIT_TO_CYCLE: true,
  };
  return {
    PARENT: [exports.miniboss],
    LABEL: "Rogue Palisade",
    COLOR: 17,
    SHAPE: 6,
    SIZE: 30,
    VALUE: 5e5,
    BODY: {
      FOV: 1.4,
      SPEED: 0.05 * base.SPEED,
      HEALTH: 16 * base.HEALTH,
      SHIELD: 3 * base.SHIELD,
      DAMAGE: 3 * base.DAMAGE,
    },
    GUNS: [
      {
        POSITION: [4, 6, -1.6, 8, 0, 0, 0],
        PROPERTIES: T,
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 60, 0],
        PROPERTIES: T,
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 120, 0],
        PROPERTIES: T,
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
          TYPE: exports.minion,
          STAT_CALCULATOR: gunCalcNames.drone,
          AUTOFIRE: true,
          MAX_CHILDREN: 1,
          SYNCS_SKILLS: true,
          WAIT_TO_CYCLE: true,
        },
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 240, 0],
        PROPERTIES: T,
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 300, 0],
        PROPERTIES: T,
      },
    ],
    TURRETS: [
      {
        POSITION: [5, 10, 0, 30, 110, 0],
        TYPE: exports.trapTurret,
      },
      {
        POSITION: [5, 10, 0, 90, 110, 0],
        TYPE: exports.trapTurret,
      },
      {
        POSITION: [5, 10, 0, 150, 110, 0],
        TYPE: exports.trapTurret,
      },
      {
        POSITION: [5, 10, 0, 210, 110, 0],
        TYPE: exports.trapTurret,
      },
      {
        POSITION: [5, 10, 0, 270, 110, 0],
        TYPE: exports.trapTurret,
      },
      {
        POSITION: [5, 10, 0, 330, 110, 0],
        TYPE: exports.trapTurret,
      },
    ],
  };
})();
exports.rogueArmada = (() => { // wip shit, pls make this better
        let props = {
            SHOOT_SETTINGS: combineStats([g.factory, g.pound, g.halfreload, g.halfreload]),
            TYPE: exports.minion,
            STAT_CALCULATOR: gunCalcNames.drone,                        
            AUTOFIRE: true,
            MAX_CHILDREN: 1,
            SYNCS_SKILLS: true,   
            WAIT_TO_CYCLE: true,
        };
        return {
            PARENT: [exports.miniboss],
            LABEL: 'Rogue Armada [WIP!]',
            COLOR: 17,
            SHAPE: 7,
            SIZE: 28,
            VALUE: 500000,
            BODY: {
                FOV: 1.3,
                SPEED: base.SPEED * 0.1,
                HEALTH: base.HEALTH * 2,
                SHIELD: base.SHIELD * 2,
                REGEN: base.REGEN,
                DAMAGE: base.DAMAGE * 3,
            },
            FACING_TYPE: 'autospin',
            GUNS: [ /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
                POSITION: [  4,      0.9,      1,     0,     -3,      360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [  4,      0.9,      1,     0,      3,      360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [  4,      1.5,      1,     0,      0,      360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      1.2,      1,     0,      1,      360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      1.2,      1,     0,     -1,      360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      1.2,      1,     0,      1,      360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {                
                POSITION: [  1,      0.9,      1,     0,     -1,      360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [  1,      0.9,      1,     0,      1,      360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [  1,      0.6,      1,     0,      2,      360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      0.6,      1,     0,     -2,      360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      0.6,      1,     0,     -2,      360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      0.3,      1,     0,      2,      360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      0.3,      1,     0,     -2,      360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [ 9,     6,      1,     4,       0,      360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  8,     6,    -1.1,    4,       0,      360/14,      0,   ], }, {
                POSITION: [  4,      0.9,      1,     0,     -3,      360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [  4,      0.9,      1,     0,      3,      360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [  4,      1.5,      1,     0,      0,      360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      1.2,      1,     0,      1,      360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      1.2,      1,     0,     -1,      360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      1.2,      1,     0,      1,      360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {                
                POSITION: [  1,      0.9,      1,     0,     -1,      360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [  1,      0.9,      1,     0,      1,      360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [  1,      0.6,      1,     0,      2,      360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      0.6,      1,     0,     -2,      360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      0.6,      1,     0,     -2,      360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      0.3,      1,     0,      2,      360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      0.3,      1,     0,     -2,      360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [ 9,     6,      1,     4,       0,      360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  8,     6,    -1.1,    4,       0,      360/7+360/14,      0,   ], }, {
                POSITION: [  4,      0.9,      1,     0,     -3,      2*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [  4,      0.9,      1,     0,      3,      2*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [  4,      1.5,      1,     0,      0,      2*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      1.2,      1,     0,      1,      2*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      1.2,      1,     0,     -1,      2*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      1.2,      1,     0,      1,      2*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {                
                POSITION: [  1,      0.9,      1,     0,     -1,      2*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [  1,      0.9,      1,     0,      1,      2*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [  1,      0.6,      1,     0,      2,      2*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      0.6,      1,     0,     -2,      2*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      0.6,      1,     0,     -2,      2*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      0.3,      1,     0,      2,      2*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      0.3,      1,     0,     -2,      2*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [ 9,     6,      1,     4,       0,      2*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  8,     6,    -1.1,    4,       0,      2*360/7+360/14,      0,   ], }, {
                POSITION: [  4,      0.9,      1,     0,     -3,      3*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [  4,      0.9,      1,     0,      3,      3*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [  4,      1.5,      1,     0,      0,      3*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      1.2,      1,     0,      1,      3*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      1.2,      1,     0,     -1,      3*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      1.2,      1,     0,      1,      3*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {                
                POSITION: [  1,      0.9,      1,     0,     -1,      3*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [  1,      0.9,      1,     0,      1,      3*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [  1,      0.6,      1,     0,      2,      3*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      0.6,      1,     0,     -2,      3*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      0.6,      1,     0,     -2,      3*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      0.3,      1,     0,      2,      3*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      0.3,      1,     0,     -2,      3*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [ 9,     6,      1,     4,       0,      3*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  8,     6,    -1.1,    4,       0,      3*360/7+360/14,      0,   ], }, {
                POSITION: [  4,      0.9,      1,     0,     -3,      4*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [  4,      0.9,      1,     0,      3,      4*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [  4,      1.5,      1,     0,      0,      4*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      1.2,      1,     0,      1,      4*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      1.2,      1,     0,     -1,      4*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      1.2,      1,     0,      1,      4*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {                
                POSITION: [  1,      0.9,      1,     0,     -1,      4*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [  1,      0.9,      1,     0,      1,      4*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [  1,      0.6,      1,     0,      2,      4*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      0.6,      1,     0,     -2,      4*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      0.6,      1,     0,     -2,      4*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      0.3,      1,     0,      2,      4*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      0.3,      1,     0,     -2,      4*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [ 9,     6,      1,     4,       0,      4*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  8,     6,    -1.1,    4,       0,      4*360/7+360/14,      0,   ], }, {
                POSITION: [  4,      0.9,      1,     0,     -3,      5*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [  4,      0.9,      1,     0,      3,      5*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [  4,      1.5,      1,     0,      0,      5*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      1.2,      1,     0,      1,      5*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      1.2,      1,     0,     -1,      5*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      1.2,      1,     0,      1,      5*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {                
                POSITION: [  1,      0.9,      1,     0,     -1,      5*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [  1,      0.9,      1,     0,      1,      5*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [  1,      0.6,      1,     0,      2,      5*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      0.6,      1,     0,     -2,      5*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      0.6,      1,     0,     -2,      5*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      0.3,      1,     0,      2,      5*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      0.3,      1,     0,     -2,      5*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [ 9,     6,      1,     4,       0,      5*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  8,     6,    -1.1,    4,       0,      5*360/7+360/14,      0,   ], }, {
                POSITION: [  4,      0.9,      1,     0,     -3,      6*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [  4,      0.9,      1,     0,      3,      6*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [  4,      1.5,      1,     0,      0,      6*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      1.2,      1,     0,      1,      6*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      1.2,      1,     0,     -1,      6*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      1.2,      1,     0,      1,      6*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {                
                POSITION: [  1,      0.9,      1,     0,     -1,      6*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [  1,      0.9,      1,     0,      1,      6*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [  1,      0.6,      1,     0,      2,      6*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      0.6,      1,     0,     -2,      6*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      0.6,      1,     0,     -2,      6*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      0.3,      1,     0,      2,      6*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  1,      0.3,      1,     0,     -2,      6*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [ 9,     6,      1,     4,       0,      6*360/7+360/14,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
                        TYPE: exports.casing,
                    }, }, {
                POSITION: [  8,     6,    -1.1,    4,       0,      6*360/7+360/14,      0,   ], }
            ],
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [   5,    10,      0,      0,    110, 0], 
                    TYPE: exports.shottrapTurret,
                        }, {
                POSITION: [   5,    10,      0,      360/7,    110, 0], 
                    TYPE: exports.shottrapTurret,
                        }, {
                POSITION: [   5,    10,      0,     2*360/7,    110, 0], 
                    TYPE: exports.shottrapTurret,
                        }, {
                POSITION: [   5,    10,      0,     3*360/7,    110, 0],
                    TYPE: exports.shottrapTurret,
                        }, {
                POSITION: [   5,    10,      0,     4*360/7,    110, 0], 
                    TYPE: exports.shottrapTurret,
                        }, {
                POSITION: [   5,    10,      0,     5*360/7,    110, 0], 
                    TYPE: exports.shottrapTurret,
                        }, {
                POSITION: [   5,    10,      0,     6*360/7,    110, 0], 
                    TYPE: exports.shottrapTurret,
                        },
            ],
        };
    })();

// CELESTIALS
exports.celestial = {
  PARENT: [exports.miniboss],
  LABEL: "Celestial",
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  VALUE: 1e6,
  SHAPE: 9,
  LEVEL: 200,
  SIZE: 45,
  BODY: {
    FOV: 1,
    HEALTH: 1000,
    SHIELD: 2,
    REGEN: base.REGEN * 0.1,
    SPEED: 0.75,
    DAMAGE: 5,
  },
};
exports.rogueCelestial = {
  PARENT: [exports.celestial],
  LABEL: "Rogue Celestial",
  COLOR: 17,
};

// PALADIN
exports.swarmerTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Swarmer",
  BODY: {
    FOV: 2,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      POSITION: [14, 14, -1.2, 5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.hive]),
        TYPE: exports.hive,
      },
    },
    {
      POSITION: [15, 12, 1, 5, 0, 0, 0],
    },
  ],
};
exports.paladinDrone = {
  PARENT: [exports.drone],
  SHAPE: 5,
};
exports.paladinLowerBody = {
  LABEL: "",
  CONTROLLERS: ["reverseceles"],
  COLOR: 14,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  SHAPE: 7,
  FOV: 1,
  MAX_CHILDREN: 16,
  FACING_TYPE: "autospin",
  GUNS: [
    {
      POSITION: [3.6, 6, 1.4, 8, 0, 26, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.paladinDrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [3.6, 6, 1.4, 8, 0, 77, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.paladinDrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [3.6, 6, 1.4, 8, 0, 129, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.paladinDrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [3.6, 6, 1.4, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.paladinDrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [3.6, 6, 1.4, 8, 0, 231, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.paladinDrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [3.6, 6, 1.4, 8, 0, 282, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.paladinDrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [3.6, 6, 1.4, 8, 0, 333, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.paladinDrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
  ],
};
exports.paladinUpperBody = {
  LABEL: "",
  CONTROLLERS: ["spinceles"],
  AUTOSPIN: true,
  COLOR: 14,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 5,
  INDEPENDENT: true,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 7.5, 0, 35, 160, 0],
      TYPE: [exports.swarmerTurret],
    },
    {
      POSITION: [10, 7.5, 0, 110, 160, 0],
      TYPE: [exports.swarmerTurret],
    },
    {
      POSITION: [10, 7.5, 0, 180, 160, 0],
      TYPE: [exports.swarmerTurret],
    },
    {
      POSITION: [10, 7.5, 0, 252, 160, 0],
      TYPE: [exports.swarmerTurret],
    },
    {
      POSITION: [10, 7.5, 0, 325, 160, 0],
      TYPE: [exports.swarmerTurret],
    },
  ],
};
exports.paladin = {
  PARENT: [exports.celestial],
  NAME: "Paladin",
  COLOR: 14,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [6.5, 9, 0, 260, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 219, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 180, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 300, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 339, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 380, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 420, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 459, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 500, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [14.94, 0, 0, 0, 360, 1],
      TYPE: [exports.paladinLowerBody],
    },
    {
      POSITION: [8.6, 0, 0, 0, 360, 1],
      TYPE: [exports.paladinUpperBody],
    },
  ],
};

// FREYJA
exports.cruiserTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Cruiser",
  BODY: {
    FOV: 2,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.freyjaLowerBody = {
  LABEL: "",
  CONTROLLERS: ["reverseceles"],
  COLOR: 1,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 7,
  INDEPENDENT: true,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      //*********  SIZE     X       Y     ANGLE    ARC
      POSITION: [8.5, 9, 0, 26, 180, 0],
      TYPE: [exports.cruiserTurret],
    },
    {
      POSITION: [8.5, 9, 0, 77, 180, 0],
      TYPE: [exports.cruiserTurret],
    },
    {
      POSITION: [8.5, 9, 0, 129, 180, 0],
      TYPE: [exports.cruiserTurret],
    },
    {
      POSITION: [8.5, 9, 0, 180, 180, 0],
      TYPE: [exports.cruiserTurret],
    },
    {
      POSITION: [8.5, 9, 0, 231, 180, 0],
      TYPE: [exports.cruiserTurret],
    },
    {
      POSITION: [8.5, 9, 0, 282, 180, 0],
      TYPE: [exports.cruiserTurret],
    },
    {
      POSITION: [8.5, 9, 0, 333, 180, 0],
      TYPE: [exports.cruiserTurret],
    },
  ],
};
exports.freyjaUpperBody = {
  LABEL: "",
  CONTROLLERS: ["spinceles"],
  COLOR: 1,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 5,
  INDEPENDENT: true,
  TURRETS: [
    {
      //**   SIZE     X       Y     ANGLE    ARC
      POSITION: [10.6, 7.5, 0, 35, 160, 0],
      TYPE: [exports.auto4gun],
    },
    {
      POSITION: [10.6, 7.5, 0, 110, 160, 0],
      TYPE: [exports.auto4gun],
    },
    {
      POSITION: [10.6, 7.5, 0, 180, 160, 0],
      TYPE: [exports.auto4gun],
    },
    {
      POSITION: [10.6, 7.5, 0, 252, 160, 0],
      TYPE: [exports.auto4gun],
    },
    {
      POSITION: [10.6, 7.5, 0, 325, 160, 0],
      TYPE: [exports.auto4gun],
    },
  ],
};
exports.freyja = {
  PARENT: [exports.celestial],
  NAME: "Freyja",
  COLOR: 1,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [6.5, 9, 0, 260, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 219, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 180, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 300, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 339, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 380, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 420, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 459, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 500, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [14.77, 0, 0, 0, 360, 1],
      TYPE: [exports.freyjaLowerBody],
    },
    {
      POSITION: [8.7, 0, 0, 0, 360, 1],
      TYPE: [exports.freyjaUpperBody],
    },
  ],
};

// ZAPHKIEL
exports.zaphkielSkimmerTurret = {
  PARENT: [exports.skimmerTurret],
  COLOR: 16,
};
exports.zaphkielLowerBody = {
  LABEL: "",
  CONTROLLERS: ["reverseceles"],
  COLOR: 2,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  SHAPE: 7,
  FOV: 1,
  MAX_CHILDREN: 16,
  FACING_TYPE: "autospin",
  GUNS: [
    {
      //*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY
      POSITION: [3.6, 6, 1.4, 8, 0, 26, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [3.6, 6, 1.4, 8, 0, 77, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.6, 6, 1.4, 8, 0, 129, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.6, 6, 1.4, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.6, 6, 1.4, 8, 0, 231, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.6, 6, 1.4, 8, 0, 282, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.6, 6, 1.4, 8, 0, 333, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
  ],
};
exports.zaphkielUpperBody = {
  LABEL: "",
  CONTROLLERS: ["spinceles"],
  AUTOSPIN: true,
  COLOR: 2,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 5,
  INDEPENDENT: true,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 7.5, 0, 35, 160, 0],
      TYPE: [exports.zaphkielSkimmerTurret],
    },
    {
      POSITION: [10, 7.5, 0, 110, 160, 0],
      TYPE: [exports.zaphkielSkimmerTurret],
    },
    {
      POSITION: [10, 7.5, 0, 180, 160, 0],
      TYPE: [exports.zaphkielSkimmerTurret],
    },
    {
      POSITION: [10, 7.5, 0, 252, 160, 0],
      TYPE: [exports.zaphkielSkimmerTurret],
    },
    {
      POSITION: [10, 7.5, 0, 325, 160, 0],
      TYPE: [exports.zaphkielSkimmerTurret],
    },
  ],
};
exports.zaphkiel = {
  PARENT: [exports.celestial],
  NAME: "Zaphkiel",
  COLOR: 2,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [6.5, 9, 0, 260, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 219, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 180, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 300, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 339, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 380, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 420, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 459, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 500, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [14.94, 0, 0, 0, 360, 1],
      TYPE: exports.zaphkielLowerBody,
    },
    {
      POSITION: [8.6, 0, 0, 0, 360, 1],
      TYPE: exports.zaphkielUpperBody,
    },
  ],
};

// NYX
exports.rocketeerTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Rocketeer",
  BODY: {
    FOV: 2,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      POSITION: [10, 12.5, -0.7, 10, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.launcher,
          g.rocketeer,
        ]),
        TYPE: exports.rocketeerMissile,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
    {
      POSITION: [17, 18, 0.65, 0, 0, 0, 0],
    },
  ],
};
exports.nyxLowerBody = {
  LABEL: "",
  CONTROLLERS: ["reverseceles"],
  COLOR: 5,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  SHAPE: 7,
  FOV: 1,
  FACING_TYPE: "autospin",
  MAX_CHILDREN: 16,
  GUNS: [
    {
      POSITION: [3.6, 7, -1.4, 8, 0, 26, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.celeslower]),
        TYPE: exports.minion,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.6, 7, -1.4, 8, 0, 77, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.celeslower]),
        TYPE: exports.minion,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.6, 7, -1.4, 8, 0, 129, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.celeslower]),
        TYPE: exports.minion,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.6, 7, -1.4, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.celeslower]),
        TYPE: exports.minion,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.6, 7, -1.4, 8, 0, 231, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.celeslower]),
        TYPE: exports.minion,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.6, 7, -1.4, 8, 0, 282, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.celeslower]),
        TYPE: exports.minion,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.6, 7, -1.4, 8, 0, 333, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.celeslower]),
        TYPE: exports.minion,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
  ],
};
exports.nyxUpperBody = {
  LABEL: "",
  CONTROLLERS: ["spinceles"],
  AUTOSPIN: true,
  COLOR: 5,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 5,
  INDEPENDENT: true,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 7.5, 0, 35, 160, 0],
      TYPE: [exports.rocketeerTurret],
    },
    {
      POSITION: [10, 7.5, 0, 110, 160, 0],
      TYPE: [exports.rocketeerTurret],
    },
    {
      POSITION: [10, 7.5, 0, 180, 160, 0],
      TYPE: [exports.rocketeerTurret],
    },
    {
      POSITION: [10, 7.5, 0, 252, 160, 0],
      TYPE: [exports.rocketeerTurret],
    },
    {
      POSITION: [10, 7.5, 0, 325, 160, 0],
      TYPE: [exports.rocketeerTurret],
    },
  ],
};
exports.nyx = {
  PARENT: [exports.celestial],
  NAME: "Nyx",
  COLOR: 5,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [6.5, 9, 0, 260, 180, 0],
      TYPE: [
        exports.trapTurret,
        {
          INDEPENDENT: true,
        },
      ],
    },
    {
      POSITION: [6.5, 9, 0, 219, 180, 0],
      TYPE: [
        exports.trapTurret,
        {
          INDEPENDENT: true,
        },
      ],
    },
    {
      POSITION: [6.5, 9, 0, 180, 180, 0],
      TYPE: [
        exports.trapTurret,
        {
          INDEPENDENT: true,
        },
      ],
    },
    {
      POSITION: [6.5, 9, 0, 300, 180, 0],
      TYPE: [
        exports.trapTurret,
        {
          INDEPENDENT: true,
        },
      ],
    },
    {
      POSITION: [6.5, 9, 0, 339, 180, 0],
      TYPE: [
        exports.trapTurret,
        {
          INDEPENDENT: true,
        },
      ],
    },
    {
      POSITION: [6.5, 9, 0, 380, 180, 0],
      TYPE: [
        exports.trapTurret,
        {
          INDEPENDENT: true,
        },
      ],
    },
    {
      POSITION: [6.5, 9, 0, 420, 180, 0],
      TYPE: [
        exports.trapTurret,
        {
          INDEPENDENT: true,
        },
      ],
    },
    {
      POSITION: [6.5, 9, 0, 459, 180, 0],
      TYPE: [
        exports.trapTurret,
        {
          INDEPENDENT: true,
        },
      ],
    },
    {
      POSITION: [6.5, 9, 0, 500, 180, 0],
      TYPE: [
        exports.trapTurret,
        {
          INDEPENDENT: true,
        },
      ],
    },
    {
      POSITION: [14.94, 0, 0, 0, 360, 1],
      TYPE: [exports.nyxLowerBody],
    },
    {
      POSITION: [8.6, 0, 0, 0, 360, 1],
      TYPE: [exports.nyxUpperBody],
    },
  ],
};

// THEIA
exports.theiaTwisterTurret = {
  PARENT: [exports.twisterTurret],
  COLOR: 16,
};
exports.theiaLowerBody = {
  LABEL: "",
  CONTROLLERS: ["reverseceles"],
  COLOR: 35,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  SHAPE: 7,
  FOV: 1,
  FACING_TYPE: "autospin",
  MAX_CHILDREN: 35,
  GUNS: [
    {
      POSITION: [3.6, 6, 1.4, 8, 0, 26, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.celeslower]),
        TYPE: exports.summonerDrone,
        AUTOFIRE: true,
        WAIT_TO_CYCLE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.6, 6, 1.4, 8, 0, 77, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.celeslower]),
        TYPE: exports.summonerDrone,
        AUTOFIRE: true,
        WAIT_TO_CYCLE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.6, 6, 1.4, 8, 0, 129, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.celeslower]),
        TYPE: exports.summonerDrone,
        AUTOFIRE: true,
        WAIT_TO_CYCLE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.6, 6, 1.4, 8, 0, 180, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.celeslower]),
        TYPE: exports.summonerDrone,
        AUTOFIRE: true,
        WAIT_TO_CYCLE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.6, 6, 1.4, 8, 0, 231, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.celeslower]),
        TYPE: exports.summonerDrone,
        AUTOFIRE: true,
        WAIT_TO_CYCLE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.6, 6, 1.4, 8, 0, 282, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.celeslower]),
        TYPE: exports.summonerDrone,
        AUTOFIRE: true,
        WAIT_TO_CYCLE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.6, 6, 1.4, 8, 0, 333, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.celeslower]),
        TYPE: exports.summonerDrone,
        AUTOFIRE: true,
        WAIT_TO_CYCLE: true,
        SYNCS_SKILLS: true,
      },
    },
  ],
};
exports.theiaUpperBody = {
  LABEL: "",
  CONTROLLERS: ["spinceles"],
  AUTOSPIN: true,
  COLOR: 35,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 5,
  INDEPENDENT: true,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 7.5, 0, 35, 160, 0],
      TYPE: exports.theiaTwisterTurret,
    },
    {
      POSITION: [10, 7.5, 0, 110, 160, 0],
      TYPE: exports.theiaTwisterTurret,
    },
    {
      POSITION: [10, 7.5, 0, 180, 160, 0],
      TYPE: exports.theiaTwisterTurret,
    },
    {
      POSITION: [10, 7.5, 0, 252, 160, 0],
      TYPE: exports.theiaTwisterTurret,
    },
    {
      POSITION: [10, 7.5, 0, 325, 160, 0],
      TYPE: exports.theiaTwisterTurret,
    },
  ],
};
exports.theia = {
  PARENT: [exports.celestial],
  NAME: "Theia",
  COLOR: 3,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [6.5, 9, 0, 260, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 219, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 180, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 300, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 339, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 380, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 420, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 459, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 500, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [14.94, 0, 0, 0, 360, 1],
      TYPE: [exports.theiaLowerBody],
    },
    {
      POSITION: [8.6, 0, 0, 0, 360, 1],
      TYPE: [exports.theiaUpperBody],
    },
  ],
};

// JULIUS
exports.juliusDrone = {
  PARENT: [exports.eggchip],
  NECRO: false,
};
exports.launcherTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Launcher",
  BODY: {
    FOV: 2 * base.FOV,
  },
  COLOR: 16,
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 9, 1, 9, 0, 0, 0],
    },
    {
      POSITION: [17, 13, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty]),
        TYPE: exports.minimissile,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
  ],
};
exports.juliusLowerTurret = {
  PARENT: [exports.genericTank],
  LABEL: "",
  MAX_CHILDREN: 3,
  BODY: {
    FOV: 2,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8.5, 11, 0.6, 6, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.sunchip]),
        TYPE: exports.juliusDrone,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.juliusLowerBody = {
  LABEL: "",
  CONTROLLERS: ["reverseceles"],
  COLOR: 17,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  SHAPE: 7,
  FOV: 1,
  FACING_TYPE: "autospin",
  MAX_CHILDREN: 24,
  TURRETS: [
    {
      //*********  SIZE     X       Y     ANGLE    ARC
      POSITION: [8.5, 9, 0, 26, 180, 0],
      TYPE: [exports.juliusLowerTurret],
    },
    {
      POSITION: [8.5, 9, 0, 77, 180, 0],
      TYPE: [exports.juliusLowerTurret],
    },
    {
      POSITION: [8.5, 9, 0, 129, 180, 0],
      TYPE: [exports.juliusLowerTurret],
    },
    {
      POSITION: [8.5, 9, 0, 180, 180, 0],
      TYPE: [exports.juliusLowerTurret],
    },
    {
      POSITION: [8.5, 9, 0, 231, 180, 0],
      TYPE: [exports.juliusLowerTurret],
    },
    {
      POSITION: [8.5, 9, 0, 282, 180, 0],
      TYPE: [exports.juliusLowerTurret],
    },
    {
      POSITION: [8.5, 9, 0, 333, 180, 0],
      TYPE: [exports.juliusLowerTurret],
    },
  ],
};
exports.juliusUpperBody = {
  LABEL: "",
  CONTROLLERS: ["spinceles"],
  COLOR: 17,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 5,
  INDEPENDENT: true,
  TURRETS: [
    {
      //**   SIZE     X       Y     ANGLE    ARC
      POSITION: [10.6, 7.5, 0, 35, 160, 0],
      TYPE: [exports.launcherTurret],
    },
    {
      POSITION: [10.6, 7.5, 0, 110, 160, 0],
      TYPE: [exports.launcherTurret],
    },
    {
      POSITION: [10.6, 7.5, 0, 180, 160, 0],
      TYPE: [exports.launcherTurret],
    },
    {
      POSITION: [10.6, 7.5, 0, 252, 160, 0],
      TYPE: [exports.launcherTurret],
    },
    {
      POSITION: [10.6, 7.5, 0, 325, 160, 0],
      TYPE: [exports.launcherTurret],
    },
  ],
};
exports.julius = {
  PARENT: [exports.rogueCelestial],
  NAME: "Julius",
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [6.5, 9, 0, 260, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 219, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 180, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 300, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 339, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 380, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 420, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 459, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 500, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [14.94, 0, 0, 0, 360, 1],
      TYPE: [exports.juliusLowerBody],
    },
    {
      POSITION: [8.6, 0, 0, 0, 360, 1],
      TYPE: [exports.juliusUpperBody],
    },
  ],
};

// GENGHIS
exports.genghisLowerTurret = {
  PARENT: [exports.genericTank],
  LABEL: "",
  MAX_CHILDREN: 4,
  BODY: {
    FOV: 2,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8.5, 11, 0.6, 6, 0, 0, 0.5],
    },
    {
      POSITION: [3.4, 14, 1, 14.3, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.babyfactory, g.lessreload]),
        TYPE: exports.tinyMinion,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
  ],
};
exports.genghisLowerBody = {
  LABEL: "",
  CONTROLLERS: ["reverseceles"],
  COLOR: 17,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  SHAPE: 7,
  FOV: 1,
  FACING_TYPE: "autospin",
  MAX_CHILDREN: 23,
  TURRETS: [
    {
      //*********  SIZE     X       Y     ANGLE    ARC
      POSITION: [8.5, 9, 0, 26, 180, 0],
      TYPE: [exports.genghisLowerTurret],
    },
    {
      POSITION: [8.5, 9, 0, 77, 180, 0],
      TYPE: [exports.genghisLowerTurret],
    },
    {
      POSITION: [8.5, 9, 0, 129, 180, 0],
      TYPE: [exports.genghisLowerTurret],
    },
    {
      POSITION: [8.5, 9, 0, 180, 180, 0],
      TYPE: [exports.genghisLowerTurret],
    },
    {
      POSITION: [8.5, 9, 0, 231, 180, 0],
      TYPE: [exports.genghisLowerTurret],
    },
    {
      POSITION: [8.5, 9, 0, 282, 180, 0],
      TYPE: [exports.genghisLowerTurret],
    },
    {
      POSITION: [8.5, 9, 0, 333, 180, 0],
      TYPE: [exports.genghisLowerTurret],
    },
  ],
};
exports.genghisUpperBody = {
  LABEL: "",
  CONTROLLERS: ["spinceles"],
  COLOR: 17,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 5,
  INDEPENDENT: true,
  TURRETS: [
    {
      //**   SIZE     X       Y     ANGLE    ARC
      POSITION: [10.6, 7.5, 0, 35, 160, 0],
      TYPE: [exports.auto4gun],
    },
    {
      POSITION: [10.6, 7.5, 0, 110, 160, 0],
      TYPE: [exports.auto4gun],
    },
    {
      POSITION: [10.6, 7.5, 0, 180, 160, 0],
      TYPE: [exports.auto4gun],
    },
    {
      POSITION: [10.6, 7.5, 0, 252, 160, 0],
      TYPE: [exports.auto4gun],
    },
    {
      POSITION: [10.6, 7.5, 0, 325, 160, 0],
      TYPE: [exports.auto4gun],
    },
  ],
};
exports.genghis = {
  PARENT: [exports.rogueCelestial],
  NAME: "Genghis",
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [6.5, 9, 0, 260, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 219, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 180, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 300, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 339, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 380, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 420, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 459, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [6.5, 9, 0, 500, 180, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: true }],
    },
    {
      POSITION: [14.94, 0, 0, 0, 360, 1],
      TYPE: [exports.genghisLowerBody],
    },
    {
      POSITION: [8.6, 0, 0, 0, 360, 1],
      TYPE: [exports.genghisUpperBody],
    },
  ],
};
