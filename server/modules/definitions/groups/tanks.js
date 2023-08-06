// BASIC TANK AND STARTING UPGRADES
exports.basic = {
  PARENT: [exports.genericTank],
  LABEL: "Basic",
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
        TYPE: exports.bullet,
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
exports.twin = {
  PARENT: [exports.genericTank],
  LABEL: "Twin",
  GUNS: [
    {
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.sniper = {
  PARENT: [exports.genericTank],
  LABEL: "Sniper",
  BODY: {
    FOV: 1.2 * base.FOV,
  },
  GUNS: [
    {
      POSITION: [24, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.machineGun = {
  PARENT: [exports.genericTank],
  LABEL: "Machine Gun",
  GUNS: [
    {
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.flankGuard = {
  PARENT: [exports.genericTank],
  LABEL: "Flank Guard",
  BODY: {
    SPEED: 1.1 * base.SPEED,
  },
  GUNS: [
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.director = {
  PARENT: [exports.genericTank],
  LABEL: "Director",
  STAT_NAMES: statnames.drone,
  BODY: {
    FOV: base.FOV * 1.1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 11, 1.3, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 6,
      },
    },
  ],
};
exports.pounder = {
  PARENT: [exports.genericTank],
  LABEL: "Pounder",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20.5, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.trapper = {
  PARENT: [exports.genericTank],
  LABEL: "Trapper",
  STAT_NAMES: statnames.trap,
  GUNS: [
    {
      POSITION: [15, 7, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.weirdTrapper = {
  // For use with -trapper combos only.
  PARENT: [exports.genericTank],
  LABEL: "Trapper",
  DANGER: 6,
  STAT_NAMES: statnames.generic,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [4, 8, 1.5, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.smasher = {
  PARENT: [exports.genericTank],
  LABEL: "Smasher",
  DANGER: 6,
  BODY: {
    FOV: 1.05 * base.FOV,
    DENSITY: 2 * base.DENSITY,
  },
  TURRETS: [
    {
      POSITION: [21.5, 0, 0, 0, 360, 0],
      TYPE: exports.smasherBody,
    },
  ],
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
};
exports.healer = {
  PARENT: [exports.genericTank],
  LABEL: "Healer",
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [13, 0, 0, 0, 360, 1],
      TYPE: exports.healerSymbol,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 9, -0.5, 12.5, 0, 0, 0],
    },
    {
      POSITION: [18, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.healer]),
        TYPE: exports.healerBullet,
      },
    },
  ],
};
exports.single = {
  PARENT: [exports.genericTank],
  LABEL: "Single",
  GUNS: [
    {
      POSITION: [19, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
    },
  ],
};

// TWIN UPGRADES
exports.doubleTwin = {
  PARENT: [exports.genericTank],
  LABEL: "Double Twin",
  DANGER: 6,
  GUNS: [
    {
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.tripleShot = {
  PARENT: [exports.genericTank],
  LABEL: "Triple Shot",
  DANGER: 6,
  BODY: {
    SPEED: base.SPEED * 0.9,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, -2, -17.5, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 2, 17.5, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
  ],
};

// DOUBLE TWIN UPGRADES
exports.tripleTwin = {
  PARENT: [exports.genericTank],
  LABEL: "Triple Twin",
  DANGER: 7,
  GUNS: [
    {
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 120, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 240, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.autoDouble = makeAuto(exports.doubleTwin, "Auto-Double");
exports.hewnDouble = {
  PARENT: [exports.genericTank],
  LABEL: "Hewn Double",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, 5.5, 205, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.twin,
          g.double,
          g.hewn,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, -5.5, -205, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.twin,
          g.double,
          g.hewn,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.double,
          g.hewn,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.double,
          g.hewn,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
        TYPE: exports.bullet,
      },
    },
  ],
};

// TRIPLE SHOT UPGRADES
exports.pentaShot = {
  PARENT: [exports.genericTank],
  LABEL: "Penta Shot",
  DANGER: 7,
  BODY: {
    SPEED: 0.85 * base.SPEED,
  },
  GUNS: [
    {
      POSITION: [16, 8, 1, 0, -3, -30, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 3, 30, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, -2, -15, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 2, 15, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.spreadshot = {
  PARENT: [exports.genericTank],
  LABEL: "Spreadshot",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 4, 1, 0, -0.5, -75, 5 / 6],
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
      POSITION: [13, 4, 1, 0, 0.5, 75, 5 / 6],
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
      POSITION: [14.5, 4, 1, 0, -0.5, -60, 4 / 6],
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
      POSITION: [14.5, 4, 1, 0, 0.5, 60, 4 / 6],
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
      POSITION: [16, 4, 1, 0, -0.5, -45, 3 / 6],
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
      POSITION: [16, 4, 1, 0, 0.5, 45, 3 / 6],
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
      POSITION: [17.5, 4, 1, 0, -0.5, -30, 2 / 6],
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
      POSITION: [17.5, 4, 1, 0, 0.5, 30, 2 / 6],
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
      POSITION: [19, 4, 1, 0, -1, -15, 1 / 6],
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
      POSITION: [19, 4, 1, 0, 1, 15, 1 / 6],
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
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 8, 1, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.spreadmain,
          g.spread,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.bentHybrid = makeHybrid(exports.tripleShot, "Bent Hybrid");
exports.bentDouble = {
  PARENT: [exports.genericTank],
  LABEL: "Bent Double",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, -2, -17.5, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 2, 17.5, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, -2, -197.5, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 2, 197.5, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [22, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.triplet = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    FOV: 1.05 * base.FOV,
  },
  LABEL: "Triplet",
  GUNS: [
    {
      POSITION: [18, 10, 1, 0, 5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 10, 1, 0, -5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet,
      },
    },
  ],
};

// SNIPER UPGRADES
exports.assassin = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Assassin",
  BODY: {
    SPEED: 0.85 * base.SPEED,
    FOV: 1.4 * base.FOV,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 8, -1.4, 8, 0, 0, 0],
    },
  ],
};
exports.hunter = {
  PARENT: [exports.genericTank],
  LABEL: "Hunter",
  DANGER: 6,
  BODY: {
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.25,
  },
  CONTROLLERS: ["zoom"],
  TOOLTIP: "Hold right click to zoom.",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 12, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.rifle = {
  PARENT: [exports.genericTank],
  LABEL: "Rifle",
  BODY: {
    FOV: base.FOV * 1.225,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 12, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [24, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle]),
        TYPE: exports.bullet,
      },
    },
  ],
};

// ASSASSIN UPGRADES
exports.ranger = {
  PARENT: [exports.genericTank],
  LABEL: "Ranger",
  DANGER: 7,
  BODY: {
    SPEED: 0.8 * base.SPEED,
    FOV: 1.5 * base.FOV,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [32, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 8, -1.4, 8, 0, 0, 0],
    },
  ],
};
exports.falcon = {
  PARENT: [exports.genericTank],
  LABEL: "Falcon",
  DANGER: 7,
  BODY: {
    FOV: 1.2 * base.FOV,
  },
  TOOLTIP: "Right click to fire your main barrel.",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
        LABEL: "Assassin",
        ALT_FIRE: true,
      },
    },
    {
      POSITION: [5, 8, -1.4, 8, 0, 0, 0],
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.stalker = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Stalker",
  BODY: {
    SPEED: 0.85 * base.SPEED,
    FOV: 1.35 * base.FOV,
  },
  INVISIBLE: [0.08, 0.03],
  TOOLTIP: "Stay still to turn invisible.",
  GUNS: [
    {
      POSITION: [27, 8, -1.8, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.autoAssassin = makeAuto(exports.assassin);

// HUNTER UPGRADES
exports.predator = {
  PARENT: [exports.genericTank],
  LABEL: "Predator",
  DANGER: 7,
  BODY: {
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.25,
  },
  CONTROLLERS: ["zoom"],
  TOOLTIP: "Hold right click to zoom.",
  GUNS: [
    {
      POSITION: [24, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.hunter2,
          g.preda,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 12, 1, 0, 0, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.preda,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 16, 1, 0, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.xHunter = {
  PARENT: [exports.genericTank],
  LABEL: "X-Hunter",
  DANGER: 7,
  BODY: {
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.25,
  },
  CONTROLLERS: ["longZoom"],
  TOOLTIP: "Hold right click to zoom.",
  GUNS: [
    {
      POSITION: [24, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 12, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 11.5, -1.25, 7, 0, 0, 0],
    },
  ],
};
exports.poacher = makeHybrid(exports.hunter, "Poacher");
exports.dual = {
  PARENT: [exports.genericTank],
  LABEL: "Dual",
  DANGER: 7,
  BODY: {
    FOV: 1.1 * base.FOV,
  },
  CONTROLLERS: ["zoom"],
  TOOLTIP: "Hold right click to zoom.",
  GUNS: [
    {
      POSITION: [18, 7, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
        TYPE: exports.bullet,
        LABEL: "Small",
      },
    },
    {
      POSITION: [18, 7, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
        TYPE: exports.bullet,
        LABEL: "Small",
      },
    },
    {
      POSITION: [16, 8.5, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 8.5, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
        TYPE: exports.bullet,
      },
    },
  ],
};

// RIFLE UPGRADES
exports.musket = {
  PARENT: [exports.genericTank],
  LABEL: "Musket",
  BODY: {
    FOV: base.FOV * 1.225,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 19, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [18, 7, 1, 0, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 7, 1, 0, -4, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.twin]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.crossbow = {
  PARENT: [exports.genericTank],
  LABEL: "Crossbow",
  BODY: {
    FOV: base.FOV * 1.225,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12.5, 3.5, 1, 0, 4, 25, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.rifle,
          g.halfspeed,
          g.halfreload,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12.5, 3.5, 1, 0, -4, -25, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.rifle,
          g.halfspeed,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 3.5, 1, 0, 4, 12.5, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.rifle,
          g.halfspeed,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 3.5, 1, 0, -4, -12.5, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.rifle,
          g.halfspeed,
          g.halfreload,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 3.5, 1, 0, 4, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.rifle,
          g.halfspeed,
          g.halfreload,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 3.5, 1, 0, -4, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.rifle,
          g.halfspeed,
          g.halfreload,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.rifle,
          g.slow,
          g.halfreload,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.armsman = makeHybrid(exports.rifle, "Armsman");

// MACHINE GUN UPGRADES
exports.minigun = {
  PARENT: [exports.genericTank],
  LABEL: "Minigun",
  DANGER: 6,
  BODY: {
    FOV: 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 0, 0, 1 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [17, 8, 1, 0, 0, 0, 2 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.gunner = {
  PARENT: [exports.genericTank],
  LABEL: "Gunner",
  DANGER: 6,
  GUNS: [
    {
      POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.weirdGunner = {
  // For use with -gunner combos only.
  PARENT: [exports.genericTank],
  LABEL: "Gunner",
  DANGER: 6,
  GUNS: [
    {
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.slow,
          g.flank,
          g.lotsmorrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.slow,
          g.flank,
          g.lotsmorrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 11, 1, 0, 0, 0, 0],
    },
  ],
};
exports.sprayer = {
  PARENT: [exports.genericTank],
  LABEL: "Sprayer",
  GUNS: [
    {
      POSITION: [23, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
  ],
};

// MINIGUN UPGRADES
exports.streamliner = {
  PARENT: [exports.genericTank],
  LABEL: "Streamliner",
  DANGER: 7,
  BODY: {
    FOV: 1.3,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [23, 8, 1, 0, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 8, 1, 0, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [17, 8, 1, 0, 0, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.cropDuster = makeHybrid(exports.minigun, "Crop Duster");
exports.barricade = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Barricade",
  STAT_NAMES: statnames.trap,
  BODY: {
    FOV: 1.15,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [4, 8, 1.3, 22, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [4, 8, 1.3, 18, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [4, 8, 1.3, 14, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};

// GUNNER UPGRADES
exports.autoGunner = makeAuto(exports.gunner);
exports.nailgun = {
  PARENT: [exports.genericTank],
  LABEL: "Nailgun",
  DANGER: 7,
  BODY: {
    FOV: base.FOV * 1.1,
    SPEED: base.SPEED * 0.9,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 2, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5.5, 7, -1.8, 6.5, 0, 0, 0],
    },
  ],
};
exports.machineGunner = {
  PARENT: [exports.genericTank],
  LABEL: "Machine Gunner",
  DANGER: 6,
  BODY: {
    SPEED: 0.9 * base.SPEED,
  },
  GUNS: [
    {
      POSITION: [14, 3, 4, -3, 5, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 3, 4, -3, -5, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 3, 4, 0, 2.5, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 3, 4, 0, -2.5, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 3, 4, 3, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.overgunner = makeOver(exports.weirdGunner);

// SPRAYER UPGRADES
exports.redistributor = {
  PARENT: [exports.genericTank],
  LABEL: "Redistributor",
  GUNS: [
    {
      POSITION: [26, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [23, 10, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.phoenix = {
  PARENT: [exports.genericTank],
  LABEL: "Phoenix",
  DANGER: 7,
  TOOLTIP: "Right click to fire your main barrel.",
  GUNS: [
    {
      POSITION: [23, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Sprayer",
        ALT_FIRE: !0,
      },
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
        LABEL: "Sprayer",
        ALT_FIRE: !0,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.atomizer = {
  PARENT: [exports.genericTank],
  LABEL: "Atomizer",
  GUNS: [
    {
      POSITION: [5, 7.5, 1.3, 18.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.atomizer,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.focal = {
  PARENT: [exports.genericTank],
  LABEL: "Focal",
  GUNS: [
    {
      POSITION: [25, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 10, 1.3, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain]),
        TYPE: exports.bullet,
      },
    },
  ],
};

// FLANK GUARD UPGRADES
exports.hexaTank = {
  PARENT: [exports.genericTank],
  LABEL: "Hexa Tank",
  DANGER: 6,
  GUNS: [
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 60, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 300, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.triAngle = {
  PARENT: [exports.genericTank],
  LABEL: "Tri-Angle",
  BODY: {
    HEALTH: 0.8 * base.HEALTH,
    SHIELD: 0.8 * base.SHIELD,
    DENSITY: 0.6 * base.DENSITY,
  },
  DANGER: 6,
  GUNS: [
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.auto3 = {
  PARENT: [exports.genericTank],
  LABEL: "Auto-3",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.autoTankGun,
    },
    {
      POSITION: [11, 8, 0, 120, 190, 0],
      TYPE: exports.autoTankGun,
    },
    {
      POSITION: [11, 8, 0, 240, 190, 0],
      TYPE: exports.autoTankGun,
    },
  ],
};

// HEXA TANK UPGRADES
exports.octoTank = {
  PARENT: [exports.genericTank],
  LABEL: "Octo Tank",
  DANGER: 7,
  GUNS: [
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 45, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 135, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 225, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 315, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.cyclone = {
  PARENT: [exports.genericTank],
  LABEL: "Cyclone",
  DANGER: 7,
  GUNS: [
    {
      POSITION: [15, 3.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 30, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 60, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 90, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 150, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 180, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 210, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 300, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 330, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};

// TRI-ANGLE UPGRADES
exports.fighter = {
  PARENT: [exports.genericTank],
  LABEL: "Fighter",
  BODY: {
    DENSITY: 0.6 * base.DENSITY,
  },
  DANGER: 7,
  GUNS: [
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [16, 8, 1, 0, -1, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Side",
      },
    },
    {
      POSITION: [16, 8, 1, 0, 1, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Side",
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.booster = {
  PARENT: [exports.genericTank],
  LABEL: "Booster",
  BODY: {
    HEALTH: base.HEALTH * 0.4,
    SHIELD: base.SHIELD * 0.4,
    DENSITY: base.DENSITY * 0.3,
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [13, 8, 1, 0, -1, 140, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [13, 8, 1, 0, 1, 220, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.autoTriAngle = makeAuto(exports.triAngle), exports.autoTriAngle.BODY = { SPEED: base.SPEED };
exports.surfer = {
  PARENT: [exports.genericTank],
  LABEL: "Surfer",
  BODY: {
    DENSITY: 0.6 * base.DENSITY,
  },
  DANGER: 7,
  GUNS: [
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -1, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 1, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};

// AUTO-3 UPGRADES
exports.auto5 = {
  PARENT: [exports.genericTank],
  LABEL: "Auto-5",
  DANGER: 7,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.autoTankGun,
    },
    {
      POSITION: [11, 8, 0, 72, 190, 0],
      TYPE: exports.autoTankGun,
    },
    {
      POSITION: [11, 8, 0, 144, 190, 0],
      TYPE: exports.autoTankGun,
    },
    {
      POSITION: [11, 8, 0, 216, 190, 0],
      TYPE: exports.autoTankGun,
    },
    {
      POSITION: [11, 8, 0, 288, 190, 0],
      TYPE: exports.autoTankGun,
    },
  ],
};
exports.mega3 = {
  PARENT: [exports.genericTank],
  LABEL: "Mega-3",
  BODY: {
    SPEED: 0.95 * base.SPEED,
  },
  DANGER: 7,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      POSITION: [14, 8, 0, 0, 190, 0],
      TYPE: exports.megaAutoTankgun,
    },
    {
      POSITION: [14, 8, 0, 120, 190, 0],
      TYPE: exports.megaAutoTankgun,
    },
    {
      POSITION: [14, 8, 0, 240, 190, 0],
      TYPE: exports.megaAutoTankgun,
    },
  ],
};
exports.auto4 = {
  PARENT: [exports.genericTank],
  LABEL: "Auto-4",
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      POSITION: [13, 6, 0, 45, 160, 0],
      TYPE: exports.auto4gun,
    },
    {
      POSITION: [13, 6, 0, 135, 160, 0],
      TYPE: exports.auto4gun,
    },
    {
      POSITION: [13, 6, 0, 225, 160, 0],
      TYPE: exports.auto4gun,
    },
    {
      POSITION: [13, 6, 0, 315, 160, 0],
      TYPE: exports.auto4gun,
    },
  ],
};
exports.banshee = {
  PARENT: [exports.genericTank],
  LABEL: "Banshee",
  DANGER: 7,
  BODY: {
    SPEED: 0.8 * base.SPEED,
    FOV: 1.1 * base.FOV,
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      POSITION: [10, 8, 0, 0, 80, 0],
      TYPE: exports.bansheegun,
    },
    {
      POSITION: [10, 8, 0, 120, 80, 0],
      TYPE: exports.bansheegun,
    },
    {
      POSITION: [10, 8, 0, 240, 80, 0],
      TYPE: exports.bansheegun,
    },
  ],
  GUNS: [
    {
      POSITION: [6, 11, 1.2, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2,
      },
    },
    {
      POSITION: [6, 11, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2,
      },
    },
    {
      POSITION: [6, 11, 1.2, 8, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2,
      },
    },
  ],
};

// DIRECTOR UPGRADES
exports.overseer = {
  PARENT: [exports.genericTank],
  LABEL: "Overseer",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: 0.9 * base.SPEED,
    FOV: 1.1 * base.FOV,
  },
  MAX_CHILDREN: 8,
  GUNS: [
    {
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
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
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
  ],
};
exports.cruiser = {
  PARENT: [exports.genericTank],
  LABEL: "Cruiser",
  DANGER: 6,
  FACING_TYPE: "locksFacing",
  STAT_NAMES: statnames.swarm,
  BODY: {
    FOV: 1.2 * base.FOV,
  },
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
exports.underseer = {
  PARENT: [exports.genericTank],
  LABEL: "Underseer",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: 0.9 * base.SPEED,
  },
  SHAPE: 4,
  MAX_CHILDREN: 14,
  GUNS: [
    {
      POSITION: [5.25, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
    {
      POSITION: [5.25, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
  ],
};
exports.spawner = {
  PARENT: [exports.genericTank],
  LABEL: "Spawner",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: 1.1,
  },
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 10, 1, 10.5, 0, 0, 0],
    },
    {
      POSITION: [1, 12, 1, 15, 0, 0, 0],
      PROPERTIES: {
        MAX_CHILDREN: 4,
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [11.5, 12, 1, 0, 0, 0, 0],
    },
  ],
};
exports.manager = {
  PARENT: [exports.genericTank],
  LABEL: "Manager",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: 0.85 * base.SPEED,
    FOV: 1.1 * base.FOV,
  },
  INVISIBLE: [0.08, 0.03],
  TOOLTIP: "Stay still to turn invisible.",
  MAX_CHILDREN: 8,
  GUNS: [
    {
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.doublereload]),
        TYPE: exports.drone,
        AUTOFIRE: !0,
        SYNCS_SKILLS: !0,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
  ],
};
exports.bigCheese = {
  PARENT: [exports.genericTank],
  LABEL: "Big Cheese",
  STAT_NAMES: statnames.drone,
  DANGER: 7,
  BODY: {
    FOV: base.FOV * 1.1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 16, 1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.bigdrone]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 1,
      },
    },
  ],
};

// OVERSEER UPGRADES
exports.overlord = {
  PARENT: [exports.genericTank],
  LABEL: "Overlord",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: 0.8 * base.SPEED,
    FOV: 1.1 * base.FOV,
  },
  MAX_CHILDREN: 8,
  GUNS: [
    {
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
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
      POSITION: [6, 12, 1.2, 8, 0, 180, 0],
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
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
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
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
  ],
};
exports.autoOverseer = makeAuto(exports.overseer);
exports.turretedDrone = makeAuto(exports.drone);
exports.overdrive = {
  PARENT: [exports.genericTank],
  LABEL: "Overdrive",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: 0.9 * base.SPEED,
    FOV: 1.1 * base.FOV,
  },
  TURRETS: [
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: makeDeco(4),
    },
  ],
  GUNS: [
    {
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.turretedDrone,
        AUTOFIRE: !0,
        SYNCS_SKILLS: !0,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: !0,
        MAX_CHILDREN: 4,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.turretedDrone,
        AUTOFIRE: !0,
        SYNCS_SKILLS: !0,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: !0,
        MAX_CHILDREN: 4,
      },
    },
  ],
};
exports.commander = {
  PARENT: [exports.genericTank],
  LABEL: "Commander",
  STAT_NAMES: statnames.drone,
  DANGER: 7,
  BODY: {
    FOV: base.FOV * 1.15,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 11, 1.3, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.commander]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 2,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 11, 1.3, 6, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.commander]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 2,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 11, 1.3, 6, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.commander]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 2,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};

// CRUISER UPGRADES
exports.carrier = {
  PARENT: [exports.genericTank],
  LABEL: "Carrier",
  DANGER: 7,
  STAT_NAMES: statnames.swarm,
  FACING_TYPE: "locksFacing",
  BODY: {
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 8, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 8, 0.6, 7, 2, 30, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 8, 0.6, 7, -2, -30, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.battleship = {
  PARENT: [exports.genericTank],
  LABEL: "Battleship",
  DANGER: 7,
  STAT_NAMES: statnames.swarm,
  FACING_TYPE: "locksFacing",
  BODY: {
    FOV: 1.2 * base.FOV,
  },
  GUNS: [
    {
      POSITION: [7, 7.5, 0.6, 7, 4, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 4, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided",
      },
    },
  ],
};
exports.fortress = {
  PARENT: [exports.genericTank],
  LABEL: "Fortress",
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    SPEED: 0.8 * base.SPEED,
    FOV: 1.2 * base.FOV,
  },
  GUNS: [
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [
          exports.swarm,
          {
            CONTROLLERS: ["canRepel"],
          },
        ],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 180, 1 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [
          exports.swarm,
          {
            CONTROLLERS: ["canRepel"],
          },
        ],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 300, 2 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [
          exports.swarm,
          {
            CONTROLLERS: ["canRepel"],
          },
        ],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
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
exports.autoCruiser = makeAuto(exports.cruiser);

// UNDERSEER UPGRADES
exports.necromancer = {
  PARENT: [exports.genericTank],
  LABEL: "Necromancer",
  DANGER: 7,
  STAT_NAMES: statnames.necro,
  BODY: {
    SPEED: 0.8 * base.SPEED,
  },
  SHAPE: 4,
  MAX_CHILDREN: 14,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5.25, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
    {
      POSITION: [5.25, 12, 1.2, 8, 0, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
    {
      POSITION: [5.25, 12, 1.2, 8, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
    {
      POSITION: [5.25, 12, 1.2, 8, 0, 180, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
  ],
};
exports.maleficitor = {
  PARENT: [exports.genericTank],
  LABEL: "Maleficitor",
  DANGER: 7,
  TOOLTIP: "Press R and wait to turn your drones invisible.",
  STAT_NAMES: statnames.necro,
  BODY: {
    SPEED: base.SPEED * 0.85,
  },
  SHAPE: 4,
  MAX_CHILDREN: 20,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5.25, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.maleficitor]),
        TYPE: [
          exports.sunchip,
          {
            INVISIBLE: [0.06, 0.03],
          },
        ],
        AUTOFIRE: !0,
        SYNCS_SKILLS: !0,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
  ],
};
exports.infestor = {
  PARENT: [exports.genericTank],
  LABEL: "Infestor",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.9,
  },
  MAX_CHILDREN: 20,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7.25, 6, 1.2, 6, -5, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.eggchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
    {
      POSITION: [7.25, 6, 1.2, 6, 5, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.eggchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
    {
      POSITION: [7.25, 6, 1.2, 6, -5, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.eggchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
    {
      POSITION: [7.25, 6, 1.2, 6, 5, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.eggchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
  ],
};

// SPAWNER UPGRADES
exports.factory = {
  PARENT: [exports.genericTank],
  LABEL: "Factory",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: 1.1,
  },
  MAX_CHILDREN: 6,
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 11, 1, 10.5, 0, 0, 0],
    },
    {
      POSITION: [2, 14, 1, 15.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [12, 14, 1, 0, 0, 0, 0],
    },
  ],
};
exports.autoSpawner = makeAuto(exports.spawner);

// POUNDER UPGRADES
exports.destroyer = {
  PARENT: [exports.genericTank],
  LABEL: "Destroyer",
  DANGER: 6,
  GUNS: [
    {
      POSITION: [21, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.artillery = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Artillery",
  GUNS: [
    {
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
  ],
};
exports.launcher = {
  PARENT: [exports.genericTank],
  LABEL: "Launcher",
  BODY: {
    FOV: base.FOV * 1.1,
  },
  DANGER: 6,
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
exports.shotgun = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Shotgun",
  GUNS: [
    {
      POSITION: [4, 3, 1, 11, -3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [4, 3, 1, 11, 3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [4, 4, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [1, 4, 1, 12, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [1, 4, 1, 11, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [1, 3, 1, 13, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [1, 3, 1, 13, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [1, 2, 1, 13, 2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [1, 2, 1, 13, -2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [15, 14, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [8, 14, -1.3, 4, 0, 0, 0],
    },
  ],
};
exports.eagle = {
  PARENT: [exports.genericTank],
  LABEL: "Eagle",
  DANGER: 7,
  TOOLTIP: "Right click to fire your main barrel.",
  GUNS: [
    {
      POSITION: [20, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet,
        LABEL: "Pounder",
        ALT_FIRE: !0,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};

// DESTROYER UPGRADES
exports.annihilator = {
  PARENT: [exports.genericTank],
  LABEL: "Annihilator",
  DANGER: 7,
  GUNS: [
    {
      POSITION: [20.5, 19.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.hybrid = makeHybrid(exports.destroyer, "Hybrid");

// ARTILLERY UPGRADES
exports.mortar = {
  PARENT: [exports.genericTank],
  LABEL: "Mortar",
  DANGER: 7,
  GUNS: [
    {
      POSITION: [13, 3, 1, 0, -8, -7, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [13, 3, 1, 0, 8, 7, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [17, 3, 1, 0, -6, -7, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [17, 3, 1, 0, 6, 7, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
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
  ],
};
exports.ordnance = {
  PARENT: [exports.genericTank],
  LABEL: "Ordnance",
  DANGER: 7,
  BODY: {
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.25,
  },
  CONTROLLERS: ["zoom"],
  TOOLTIP: "Hold right click to zoom.",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 3, 1, 0, -5.75, -6, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [17, 3, 1, 0, 5.75, 6, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [24, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 11, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.beekeeper = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Beekeeper",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 3, 1, 0, -6, -7, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bees]),
        TYPE: [exports.bee, { INDEPENDENT: true }],
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [14, 3, 1, 0, 6, 7, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bees]),
        TYPE: [exports.bee, { INDEPENDENT: true }],
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
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
  ],
};
exports.fieldGun = {
  PARENT: [exports.genericTank],
  LABEL: "Field Gun",
  BODY: {
    FOV: base.FOV * 1.1,
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 3, 1, 0, -6, -7, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [15, 3, 1, 0, 6, 7, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
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

// LAUNCHER UPGRADES
exports.skimmer = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: 1.15 * base.FOV,
  },
  LABEL: "Skimmer",
  DANGER: 7,
  GUNS: [
    {
      POSITION: [10, 14, -0.5, 9, 0, 0, 0],
    },
    {
      POSITION: [17, 15, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
        ]),
        TYPE: exports.missile,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
  ],
};
exports.twister = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: 1.1 * base.FOV,
  },
  LABEL: "Twister",
  DANGER: 7,
  GUNS: [
    {
      POSITION: [10, 13, -0.5, 9, 0, 0, 0],
    },
    {
      POSITION: [17, 14, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
          g.morespeed,
          g.one_third_reload,
        ]),
        TYPE: exports.spinmissile,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
  ],
};
exports.swarmer = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Swarmer",
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
exports.sidewinder = {
  PARENT: [exports.genericTank],
  LABEL: "Sidewinder",
  DANGER: 7,
  BODY: {
    SPEED: 0.8 * base.SPEED,
    FOV: 1.3 * base.FOV,
  },
  GUNS: [
    {
      POSITION: [10, 11, -0.5, 14, 0, 0, 0],
    },
    {
      POSITION: [21, 12, -1.1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind]),
        TYPE: exports.snake,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
  ],
};

// TRAPPER UPGRADES
exports.builder = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Builder",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: 0.8 * base.SPEED,
    FOV: 1.15 * base.FOV,
  },
  GUNS: [
    {
      POSITION: [18, 12, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [2, 12, 1.1, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.setTrap,
      },
    },
  ],
};
exports.triTrapper = {
  PARENT: [exports.genericTank],
  LABEL: "Tri-Trapper",
  DANGER: 6,
  STAT_NAMES: statnames.trap,
  GUNS: [
    {
      POSITION: [15, 7, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [15, 7, 1, 0, 0, 120, 0],
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [15, 7, 1, 0, 0, 240, 0],
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.trapGuard = {
  PARENT: [exports.genericTank],
  LABEL: "Trap Guard",
  STAT_NAMES: statnames.generic,
  DANGER: 6,
  GUNS: [
    {
      POSITION: [20, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [13, 8, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 8, 1.7, 13, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.overtrapper = makeOver(exports.weirdTrapper);

// BUILDER UPGRADES
exports.constructor = {
  PARENT: [exports.genericTank],
  LABEL: "Constructor",
  STAT_NAMES: statnames.trap,
  DANGER: 7,
  BODY: {
    SPEED: 0.7 * base.SPEED,
    FOV: 1.15 * base.FOV,
  },
  GUNS: [
    {
      POSITION: [18, 18, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [2, 18, 1.2, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct]),
        TYPE: exports.setTrap,
      },
    },
  ],
};
exports.autoBuilder = makeAuto(exports.builder);
exports.engineer = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Engineer",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: 0.75 * base.SPEED,
    FOV: 1.15 * base.FOV,
  },
  GUNS: [
    {
      POSITION: [5, 11, 1, 10.5, 0, 0, 0],
    },
    {
      POSITION: [3, 14, 1, 15.5, 0, 0, 0],
    },
    {
      POSITION: [2, 14, 1.3, 18, 0, 0, 0],
      PROPERTIES: {
        MAX_CHILDREN: 6,
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.pillbox,
        SYNCS_SKILLS: true,
        DESTROY_OLDEST_CHILD: true,
      },
    },
    {
      POSITION: [4, 14, 1, 8, 0, 0, 0],
    },
  ],
};
exports.boomer = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Boomer",
  STAT_NAMES: statnames.trap,
  FACING_TYPE: "locksFacing",
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 10, 1, 14, 0, 0, 0],
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

// TRI-TRAPPER UPGRADES
exports.hexaTrapper = makeAuto({
    PARENT: [exports.genericTank],
    DANGER: 7,
    BODY: {
      SPEED: 0.8 * base.SPEED,
    },
    STAT_NAMES: statnames.trap,
    HAS_NO_RECOIL: true,
    GUNS: [
      {
        POSITION: [15, 7, 1, 0, 0, 0, 0],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 60, 0.5],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 60, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 120, 0],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 120, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 180, 0.5],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 180, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 240, 0],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 240, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 300, 0.5],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 300, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
    ],
  }, "Hexa-Trapper");
exports.septaTrapper = (() => {
  let a = 360 / 7,
    d = 1 / 7;
  return {
    PARENT: [exports.genericTank],
    LABEL: "Septa-Trapper",
    DANGER: 7,
    BODY: {
      SPEED: base.SPEED * 0.8,
    },
    STAT_NAMES: statnames.trap,
    HAS_NO_RECOIL: true,
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 7, 1, 0, 0, 0, 0],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, a, 4 * d],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, a, 4 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 2 * a, 1 * d],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 2 * a, 1 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 3 * a, 5 * d],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 3 * a, 5 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 4 * a, 2 * d],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 4 * a, 2 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 5 * a, 6 * d],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 5 * a, 6 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 6 * a, 3 * d],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 6 * a, 3 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
    ],
  };
})();
exports.architect = {
  LABEL: "Architect",
  BODY: {
    SPEED: 1.1 * base.SPEED,
  },
  PARENT: [exports.genericTank],
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      POSITION: [12, 8, 0, 0, 190, 0],
      TYPE: exports.architectGun,
    },
    {
      POSITION: [12, 8, 0, 120, 190, 0],
      TYPE: exports.architectGun,
    },
    {
      POSITION: [12, 8, 0, 240, 190, 0],
      TYPE: exports.architectGun,
    },
  ],
};

// TRAP GUARD UPGRADES
exports.bushwhacker = makeGuard(exports.sniper, "Bushwhacker");
exports.gunnerTrapper = {
  PARENT: [exports.genericTank],
  LABEL: "Gunner Trapper",
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    FOV: 1.25 * base.FOV,
  },
  GUNS: [
    {
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 11, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [13, 11, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 11, 1.7, 13, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.fast, g.halfrecoil]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.bomber = {
  PARENT: [exports.genericTank],
  LABEL: "Bomber",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 130, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
        TYPE: exports.bullet,
        LABEL: "Wing",
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 230, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
        TYPE: exports.bullet,
        LABEL: "Wing",
      },
    },
    {
      POSITION: [13, 8, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 8, 1.7, 13, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.conqueror = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Conqueror",
  STAT_NAMES: statnames.generic,
  BODY: {
    SPEED: 0.8 * base.SPEED,
  },
  GUNS: [
    {
      POSITION: [21, 14, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 14, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [2, 14, 1.1, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.setTrap,
      },
    },
  ],
};
exports.bulwark = {
  PARENT: [exports.genericTank],
  LABEL: "Bulwark",
  STAT_NAMES: statnames.generic,
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 8, 1, 0, 5.5, 185, 0],
    },
    {
      POSITION: [3, 9, 1.5, 13, 5.5, 185, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.twin]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 8, 1, 0, -5.5, 175, 0],
    },
    {
      POSITION: [3, 9, 1.5, 13, -5.5, 175, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.twin]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};

// SMASHER UPGRADES
exports.megaSmasher = {
  PARENT: [exports.genericTank],
  LABEL: "Mega-Smasher",
  DANGER: 7,
  BODY: {
    SPEED: 1.05 * base.speed,
    FOV: 1.1 * base.FOV,
    DENSITY: 4 * base.DENSITY,
  },
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
  TURRETS: [
    {
      POSITION: [25, 0, 0, 0, 360, 0],
      TYPE: exports.smasherBody,
    },
  ],
};
exports.spike = {
  PARENT: [exports.genericTank],
  LABEL: "Spike",
  DANGER: 7,
  BODY: {
    SPEED: base.speed * 0.9,
    DAMAGE: base.DAMAGE * 1.1,
    FOV: base.FOV * 1.05,
    DENSITY: base.DENSITY * 2,
  },
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [18.5, 0, 0, 0, 360, 0],
      TYPE: exports.spikeBody,
    },
    {
      POSITION: [18.5, 0, 0, 90, 360, 0],
      TYPE: exports.spikeBody,
    },
    {
      POSITION: [18.5, 0, 0, 180, 360, 0],
      TYPE: exports.spikeBody,
    },
    {
      POSITION: [18.5, 0, 0, 270, 360, 0],
      TYPE: exports.spikeBody,
    },
  ],
};
exports.autoSmasher = makeAuto(exports.smasher, "Auto-Smasher", {
  type: exports.autoSmasherTurret,
  size: 11,
});
exports.autoSmasher.SKILL_CAP = [
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
];
exports.landmine = {
  PARENT: [exports.genericTank],
  LABEL: "Landmine",
  INVISIBLE: [0.06, 0.01],
  TOOLTIP: "Stay still to turn invisible.",
  DANGER: 7,
  BODY: {
    SPEED: 1.1 * base.SPEED,
    FOV: 1.05 * base.FOV,
    DENSITY: 2 * base.DENSITY,
  },
  TURRETS: [
    {
      POSITION: [21.5, 0, 0, 0, 360, 0],
      TYPE: exports.smasherBody,
    },
    {
      POSITION: [21.5, 0, 0, 30, 360, 0],
      TYPE: exports.landmineBody,
    },
  ],
  IS_SMASHER: !0,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
};

// HEALER UPGRADES
exports.medic = {
  PARENT: [exports.genericTank],
  LABEL: "Medic",
  BODY: {
    FOV: base.FOV * 1.2,
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [13, 0, 0, 0, 360, 1],
      TYPE: exports.healerSymbol,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 9, -0.5, 16.5, 0, 0, 0],
    },
    {
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.healer]),
        TYPE: exports.healerBullet,
      },
    },
  ],
};
exports.ambulance = {
  PARENT: [exports.genericTank],
  LABEL: "Ambulance",
  BODY: {
    HEALTH: base.HEALTH * 0.8,
    SHIELD: base.SHIELD * 0.8,
    DENSITY: base.DENSITY * 0.6,
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [13, 0, 0, 0, 360, 1],
      TYPE: exports.healerSymbol,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 9, -0.5, 12.5, 0, 0, 0],
    },
    {
      POSITION: [18, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil,
          g.healer,
        ]),
        TYPE: exports.healerBullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.surgeon = {
  PARENT: [exports.genericTank],
  LABEL: "Surgeon",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.75,
    FOV: base.FOV * 1.15,
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [13, 0, 0, 0, 360, 1],
      TYPE: exports.healerSymbol,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 11, 1, 10.5, 0, 0, 0],
    },
    {
      POSITION: [3, 14, 1, 15.5, 0, 0, 0],
    },
    {
      POSITION: [2, 14, 1.3, 18, 0, 0, 0],
      PROPERTIES: {
        MAX_CHILDREN: 2,
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.slow]),
        TYPE: exports.surgeonPillbox,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [4, 14, 1, 8, 0, 0, 0],
    },
  ],
};
exports.paramedic = {
  PARENT: [exports.genericTank],
  LABEL: "Paramedic",
  BODY: {
    SPEED: base.SPEED * 0.9,
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [13, 0, 0, 0, 360, 1],
      TYPE: exports.healerSymbol,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 9, -0.5, 10, 0, -17.5, 0.5],
    },
    {
      POSITION: [15.5, 10, 1, 0, 0, -17.5, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.healer]),
        TYPE: exports.healerBullet,
      },
    },
    {
      POSITION: [8, 9, -0.5, 10, 0, 17.5, 0.5],
    },
    {
      POSITION: [15.5, 10, 1, 0, 0, 17.5, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.healer]),
        TYPE: exports.healerBullet,
      },
    },
    {
      POSITION: [8, 9, -0.5, 12.5, 0, 0, 0],
    },
    {
      POSITION: [18, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.healer]),
        TYPE: exports.healerBullet,
      },
    },
  ],
};
