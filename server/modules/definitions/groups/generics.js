const { base, dfltskl, smshskl } = require('../constants.js');

exports.genericEntity = {
    NAME: "",
    LABEL: "Unknown Entity",
    TYPE: "unknown",
    DAMAGE_CLASS: 0,
    DANGER: 0,
    VALUE: 0,
    SHAPE: 0,
    COLOR: {
        BASE: 16, // ID
        HUE_SHIFT: 0, // Additive, degrees
        SATURATION_SHIFT: 1, // Multiplicative
        BRIGHTNESS_SHIFT: 0, // Additive, ranges from -100 to 100
        ALLOW_BRIGHTNESS_INVERT: true, // Toggles offset invert if exceeding normal color bounds
    },
    INDEPENDENT: false,
    CONTROLLERS: ["doNothing"],
    HAS_NO_MASTER: false,
    MOTION_TYPE: "glide",
    FACING_TYPE: "toTarget",
    DRAW_HEALTH: false,
    DRAW_SELF: true,
    DAMAGE_EFFECTS: true,
    RATEFFECTS: true,
    MOTION_EFFECTS: true,
    INTANGIBLE: false,
    ACCEPTS_SCORE: true,
    GIVE_KILL_MESSAGE: false,
    CAN_GO_OUTSIDE_ROOM: false,
    HITS_OWN_TYPE: "normal",
    DIE_AT_LOW_SPEED: false,
    DIE_AT_RANGE: false,
    CLEAR_ON_MASTER_UPGRADE: false,
    PERSISTS_AFTER_DEATH: false,
    VARIES_IN_SIZE: false,
    HEALTH_WITH_LEVEL: true,
    CAN_BE_ON_LEADERBOARD: true,
    HAS_NO_RECOIL: false,
    BUFF_VS_FOOD: false,
    OBSTACLE: false,
    CRAVES_ATTENTION: false,
    NECRO: false,
    UPGRADES_TIER_0: [],
    UPGRADES_TIER_1: [],
    UPGRADES_TIER_2: [],
    UPGRADES_TIER_3: [],
    UPGRADES_TIER_4: [],
    UPGRADES_TIER_5: [],
    UPGRADES_TIER_6: [],
    UPGRADES_TIER_7: [],
    UPGRADES_TIER_8: [],
    UPGRADES_TIER_9: [],
    SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    LEVEL: 0,
    BORDERLESS: false,
    DRAW_FILL: true,
    SKILL_CAP: Array(10).fill(dfltskl),
    GUNS: [],
    MAX_CHILDREN: 0,
    BORDERLESS: false,
    DRAW_FILL: true,
    BODY: {
        ACCELERATION: 1,
        SPEED: 0,
        HEALTH: 1,
        RESIST: 1,
        SHIELD: 0,
        REGEN: 0,
        DAMAGE: 1,
        PENETRATION: 1,
        RANGE: 0,
        FOV: 1,
        DENSITY: 1,
        STEALTH: 1,
        PUSHABILITY: 1,
        HETERO: 2,
    },
    FOOD: {
        LEVEL: -1,
    },
};
exports.genericTank = {
    LABEL: "Unknown Class",
    TYPE: "tank",
    DAMAGE_CLASS: 2,
    DANGER: 5,
    MOTION_TYPE: "motor",
    FACING_TYPE: "toTarget",
    SIZE: 12,
    MAX_CHILDREN: 0,
    DAMAGE_EFFECTS: false,
    IGNORED_BY_AI: false,
    BODY: {
        ACCELERATION: base.ACCEL,
        SPEED: base.SPEED,
        HEALTH: base.HEALTH,
        DAMAGE: base.DAMAGE,
        PENETRATION: base.PENETRATION,
        SHIELD: base.SHIELD,
        REGEN: base.REGEN,
        FOV: base.FOV,
        DENSITY: base.DENSITY,
        PUSHABILITY: 1,
        HETERO: 3,
    },
    GUNS: [],
    TURRETS: [],
    GIVE_KILL_MESSAGE: true,
    DRAW_HEALTH: true,
    HITS_OWN_TYPE: "hardOnlyTanks",
};

exports.food = {
    TYPE: "food",
    DAMAGE_CLASS: 1,
    CONTROLLERS: ["moveInCircles"],
    HITS_OWN_TYPE: "repel",
    MOTION_TYPE: "drift",
    FACING_TYPE: "turnWithSpeed",
    VARIES_IN_SIZE: true,
    BODY: {
        STEALTH: 30,
        PUSHABILITY: 1,
    },
    DAMAGE_EFFECTS: false,
    RATEFFECTS: false,
    HEALTH_WITH_LEVEL: false,
};

exports.bullet = {
    LABEL: "Bullet",
    TYPE: "bullet",
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.165,
        DAMAGE: 6,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: true,
};
exports.speedBullet = {
    PARENT: ["bullet"],
    MOTION_TYPE: "accel",
};
exports.growBullet = {
    PARENT: ["bullet"],
    MOTION_TYPE: "grow",
};
exports.flare = {
    PARENT: ["growBullet"],
    LABEL: "Flare",
    SHAPE: 4,
};
exports.developerBullet = {
    PARENT: ["bullet"],
    SHAPE: [[-1, -1], [1, -1], [2, 0], [1, 1], [-1, 1]],
};
exports.casing = {
    PARENT: ["bullet"],
    LABEL: "Shell",
    TYPE: "swarm",
};

exports.drone = {
    LABEL: "Drone",
    TYPE: "drone",
    ACCEPTS_SCORE: false,
    DANGER: 2,
    CONTROL_RANGE: 0,
    SHAPE: 3,
    MOTION_TYPE: "chase",
    FACING_TYPE: "smoothToTarget",
    CONTROLLERS: [
        "nearestDifferentMaster",
        "canRepel",
        "mapTargetToGoal",
        "hangOutNearMaster",
    ],
    AI: {
        BLIND: true,
    },
    BODY: {
        PENETRATION: 1.2,
        PUSHABILITY: 0.6,
        ACCELERATION: 0.05,
        HEALTH: 0.3,
        DAMAGE: 3.375,
        SPEED: 3.8,
        RANGE: 200,
        DENSITY: 0.03,
        RESIST: 1.5,
        FOV: 0.5,
    },
    HITS_OWN_TYPE: "hard",
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    BUFF_VS_FOOD: true,
};

exports.trap = {
    LABEL: "Thrown Trap",
    TYPE: "trap",
    ACCEPTS_SCORE: false,
    SHAPE: -3,
    MOTION_TYPE: "glide",
    FACING_TYPE: "turnWithSpeed",
    HITS_OWN_TYPE: "push",
    DIE_AT_RANGE: true,
    BODY: {
        HEALTH: 0.5,
        DAMAGE: 3,
        RANGE: 450,
        DENSITY: 2.5,
        RESIST: 2.5,
        SPEED: 0,
    },
};

exports.mendersymbol = {
    PARENT: ["genericTank"],
    COLOR: 16,
    LABEL: "",
    SHAPE: 3,
};
exports.healerBullet = {
    PARENT: ["bullet"],
    HEALER: true,
    HITS_OWN_TYPE: "normal",
};
exports.healerSymbol = {
    PARENT: ["genericEntity"],
    SHAPE: [[0.3, -0.3],[1,-0.3],[1,0.3],[0.3,0.3],[0.3,1],[-0.3,1],[-0.3,0.3],[-1,0.3],[-1,-0.3],[-0.3,-0.3],[-0.3,-1],[0.3,-1]],
    SIZE: 13,
    COLOR: 12,
};

exports.auraBase = {
    TYPE: "aura",
    ACCEPTS_SCORE: false,
    FACING_TYPE: "smoothWithMotion",
    MOTION_TYPE: "withMaster",
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: "never",
    DAMAGE_EFFECTS: false,
    DIE_AT_RANGE: false,
    ALPHA: 0.3,
    CLEAR_ON_MASTER_UPGRADE: true,
    CAN_GO_OUTSIDE_ROOM: true,
    BODY: {
        SHIELD: 1000000,
        REGEN: 100000,
        HEALTH: 1000000,
        DENSITY: 0,
        SPEED: 0,
        PUSHABILITY: 0,
    }
};
exports.aura = {
    PARENT: ["auraBase"],
    LABEL: "Aura",
    COLOR: 0,
    BODY: {
        DAMAGE: 0.25,
    },
};
exports.healAura = {
    PARENT: ["auraBase"],
    LABEL: "Heal Aura",
    HEALER: true,
    COLOR: 12,
    BODY: {
        DAMAGE: 0.25/3,
    },
};
exports.auraSymbol = {
    PARENT: ["genericTank"],
    CONTROLLERS: [["spin", {speed: -0.04}]],
    INDEPENDENT: true,
    COLOR: 0,
    SHAPE: [[-0.598,-0.7796],[-0.3817,-0.9053],[0.9688,-0.1275],[0.97,0.125],[-0.3732,0.9116],[-0.593,0.785]]
};
exports.auraBase = {
    TYPE: "aura",
    ACCEPTS_SCORE: false,
    FACING_TYPE: "smoothWithMotion",
    MOTION_TYPE: "withMaster",
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: "never",
    DAMAGE_EFFECTS: false,
    DIE_AT_RANGE: false,
    ALPHA: 0.3,
    CLEAR_ON_MASTER_UPGRADE: true,
    CAN_GO_OUTSIDE_ROOM: true,
    BODY: {
        SHIELD: 1000000,
        REGEN: 100000,
        HEALTH: 1000000,
        DENSITY: 0,
        SPEED: 0,
        PUSHABILITY: 0,
    }
};
exports.aura = {
    PARENT: ["auraBase"],
    LABEL: "Aura",
    COLOR: 0,
    BODY: {
        DAMAGE: 0.25,
    },
};
exports.healAura = {
    PARENT: ["auraBase"],
    LABEL: "Heal Aura",
    HEALER: true,
    COLOR: 12,
    BODY: {
        DAMAGE: 0.25/3,
    },
};
exports.auraSymbol = {
    PARENT: ["genericTank"],
    CONTROLLERS: [["spin", {speed: -0.04}]],
    INDEPENDENT: true,
    COLOR: 0,
    SHAPE: [[-0.598,-0.7796],[-0.3817,-0.9053],[0.9688,-0.1275],[0.97,0.125],[-0.3732,0.9116],[-0.593,0.785]]
};
exports.aegisBase = {
    TYPE: "aegis",
    ACCEPTS_SCORE: false,
    FACING_TYPE: "smoothWithMotion",
    MOTION_TYPE: "withMaster",
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: "never",
    //CONTROLLERS: ['dontTurn'],
    DAMAGE_EFFECTS: false,
    DIE_AT_RANGE: false,
    ALPHA: 0.3,
    SHAPE: 'M -0.0034 -0.0046 L -0.0023 -0.5163 L -0.4887 -0.1656 L -0.0046 -0.0046 M 0.0046 -0.0034 L 0.4945 -0.1587 L 0.0034 -0.5163 L 0.0023 -0.0057 M 0.0057 0.0023 L 0.299 0.4151 L 0.4933 -0.153 L 0.0057 0.0011 M 0 0.0046 L -0.299 0.4163 L 0.2941 0.417 L 0 0.0034 M -0.0057 0 L -0.4933 -0.1598 L -0.307 0.4163 L -0.0057 0.0023 M -0.4887 -0.6808 L -0.4933 -0.1702 L -0.0057 -0.5232 L -0.4887 -0.6808 M 0.4965 -0.6752 L 0.008 -0.521 L 0.4979 -0.1621 L 0.4965 -0.6752 M 0.7956 0.2635 L 0.4979 -0.1552 L 0.3036 0.4174 L 0.7956 0.2635 M -0.0047 0.838 L 0.299 0.4232 L -0.307 0.422 L -0.0047 0.838 M -0.7986 0.2545 L -0.314 0.414 L -0.5002 -0.1587 L -0.7986 0.2545 M -0.3151 0.4209 L -0.5037 0.6796 L -0.7992 0.2633 L -0.3151 0.4197 M -0.3128 0.4278 L -0.4968 0.6842 L -0.0161 0.836 L -0.3116 0.4278 M -0.4977 -0.1696 L -0.802 -0.269 L -0.4968 -0.6773 L -0.4999 -0.1689 M -0.5035 -0.1653 L -0.8043 -0.2611 L -0.8001 0.243 L -0.5037 -0.1644 M 0.008 -0.5278 L 0.008 -0.8459 L 0.4945 -0.6808 L 0.008 -0.5278 M 0.0011 -0.5278 L -0.0002 -0.8456 L -0.4784 -0.6859 L 0.0011 -0.5267 M 0.5023 -0.1552 L 0.807 -0.2538 L 0.7992 0.2565 L 0.5037 -0.1572 M 0.5025 -0.1598 L 0.805 -0.2599 L 0.5025 -0.6762 L 0.5025 -0.161 M 0.3024 0.4266 L 0.4907 0.6891 L 0.0011 0.8418 L 0.3024 0.4266 M 0.3059 0.4232 L 0.4973 0.6839 L 0.7902 0.2737 L 0.3059 0.4232 M -0.8073 -0.2725 L -0.5014 -0.6808 L -0.805 -0.5899 L -0.8073 -0.2725 M -0.805 -0.5991 L -0.3047 -0.9545 L -0.4922 -0.69 L -0.8038 -0.5991 M -1 -0.013 L -0.8107 -0.5922 L -0.8119 -0.268 L -1 -0.013 M -0.3013 -0.9522 L -0.0023 -0.8498 L -0.483 -0.6911 L -0.3013 -0.9522 M 0.0098 -0.852 L 0.4925 -0.6872 L 0.3123 -0.9479 L 0.0098 -0.852 M 0.3211 -0.9507 L 0.8136 -0.5848 L 0.5042 -0.6814 L 0.3214 -0.9497 M -0.299 -0.9568 L 0.3127 -0.954 L 0.0039 -0.8549 L -0.299 -0.9568 M 0.8143 -0.5789 L 0.8075 -0.2648 L 0.5081 -0.673 L 0.8143 -0.5789 M 0.8133 -0.254 L 0.8058 0.2561 L 0.998 0.0041 L 0.8133 -0.254 M 1.0034 0.0115 L 0.8061 0.5934 L 0.8037 0.2689 L 1.0025 0.0122 M 0.8188 -0.5784 L 1.0041 0.0026 L 0.8143 -0.2605 L 0.8188 -0.5784 M 0.8022 0.5956 L 0.5014 0.6862 L 0.7969 0.2752 L 0.8022 0.5956 M 0.4929 0.6951 L 0.0055 0.8455 L 0.3045 0.9505 L 0.4929 0.6951 M 0.2991 0.9578 L -0.3162 0.951 L -0.0074 0.8475 L 0.2982 0.9573 M 0.8038 0.598 L 0.3077 0.9556 L 0.4993 0.694 L 0.8038 0.598 M -0.3184 0.947 L -0.4977 0.6888 L -0.0155 0.8431 L -0.3184 0.947 M -0.5086 0.6836 L -0.8025 0.2665 L -0.8098 0.5833 L -0.5086 0.6836 M -0.8186 0.5804 L -1.001 -0.007 L -0.8083 0.2548 L -0.8182 0.5794 M -0.322 0.9476 L -0.8139 0.5881 L -0.5058 0.6893 L -0.322 0.9476 M -0.9991 -0.0102 L -0.8089 -0.2605 L -0.8066 0.2458 L -0.9991 -0.0102',
    CLEAR_ON_MASTER_UPGRADE: true,
    CAN_GO_OUTSIDE_ROOM: true,
    DRAW_HEALTH: true,
    BODY: {
        SHIELD: 0,
        REGEN: 0,
        HEALTH: 100,
        DENSITY: 0,
        SPEED: 0,
        PUSHABILITY: 0,
        DAMAGE: 0,
    }
  };
  exports.aegis = {
    PARENT: ['aegisBase'],
    LABEL: "Aegis Shield",
    COLOR: 1,
   };
  exports.forcefield = {
    PARENT: ['aegisBase'],
    LABEL: "Forcefield",
    COLOR: 3,
  };
  exports.absorber = {
    PARENT: ['aegisBase'],
    LABEL: "Absorber Shield",
    COLOR: 30,
  };
  exports.aegisSymbol = {
    PARENT: ['genericTank'],
    CONTROLLERS: [["spin", {speed: -0.04}]],
    INDEPENDENT: true,
    COLOR: 1,
    SHAPE: 5
  };
  exports.forcefieldSymbol = {
    PARENT: ['genericTank'],
    CONTROLLERS: [["spin", {speed: -0.04}]],
    INDEPENDENT: true,
    COLOR: 0,
    SHAPE: 6
  };
  exports.absorberSymbol = {
    PARENT: ['genericTank'],
    CONTROLLERS: [["spin", {speed: -0.08}]],
    INDEPENDENT: true,
    COLOR: 0,
    SHAPE: -6
  };
