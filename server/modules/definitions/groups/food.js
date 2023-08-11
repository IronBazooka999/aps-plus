const { basePolygonDamage, basePolygonHealth } = require('../constants.js');

// EGGS
exports.egg = {
    PARENT: ["food"],
    LABEL: "Egg",
    FOOD: {
        LEVEL: 0,
    },
    VALUE: 10,
    SHAPE: 0,
    SIZE: 5,
    COLOR: 6,
    INTANGIBLE: true,
    BODY: {
        DAMAGE: 0,
        DENSITY: 2,
        HEALTH: 0.0011,
        PUSHABILITY: 0,
    },
    DRAW_HEALTH: false,
};
exports.gem = {
    PARENT: ["food"],
    LABEL: "Gem",
    FOOD: {
        LEVEL: 0,
    },
    VALUE: 2e3,
    SHAPE: 6,
    SIZE: 5,
    COLOR: 0,
    BODY: {
        DAMAGE: basePolygonDamage / 4,
        DENSITY: 4,
        HEALTH: 10,
        PENETRATION: 2,
        RESIST: 2,
        PUSHABILITY: 0.25,
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
};
exports.jewel = {
    PARENT: ["food"],
    LABEL: "Jewel",
    FOOD: {
        LEVEL: 0,
    },
    VALUE: 1e5,
    SHAPE: 6,
    SIZE: 12,
    COLOR: 3,
    BODY: {
        DAMAGE: basePolygonDamage / 4,
        DENSITY: 4,
        HEALTH: 50,
        PENETRATION: 2,
        RESIST: 2,
        PUSHABILITY: 0.25,
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
    GIVE_KILL_MESSAGE: true,
};

// SQUARES
exports.square = {
    PARENT: ["food"],
    LABEL: "Square",
    FOOD: {
        LEVEL: 1,
    },
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
};
exports.shinySquare = {
    PARENT: ["food"],
    LABEL: "Shiny Square",
    FOOD: {
        LEVEL: 1,
    },
    VALUE: 2e3,
    SHAPE: 4,
    SIZE: 10,
    COLOR: 1,
    BODY: {
        DAMAGE: 0.5,
        DENSITY: 4,
        HEALTH: 20,
        PENETRATION: 2,
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
    GIVE_KILL_MESSAGE: true,
};
exports.legendarySquare = {
    PARENT: ["food"],
    LABEL: "Legendary Square",
    FOOD: {
        LEVEL: 1,
    },
    VALUE: 3e4,
    SHAPE: 4,
    SIZE: 10,
    COLOR: 0,
    BODY: {
        DAMAGE: 2,
        DENSITY: 6,
        HEALTH: 60,
        PENETRATION: 6,
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
    GIVE_KILL_MESSAGE: true,
};
exports.shadowSquare = {
    PARENT: ["food"],
    LABEL: "Shadow Square",
    FOOD: {
        LEVEL: 1,
    },
    VALUE: 75e3,
    SHAPE: 4,
    SIZE: 10,
    COLOR: 19,
    ALPHA: 0.25,
    BODY: {
        DAMAGE: 4,
        DENSITY: 10,
        HEALTH: 100,
        PENETRATION: 8,
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
    GIVE_KILL_MESSAGE: true,
};
exports.rainbowSquare = {
    PARENT: ["food"],
    LABEL: "Rainbow Square",
    FOOD: {
        LEVEL: 1,
    },
    VALUE: 5e7,
    SHAPE: 4,
    SIZE: 10,
    COLOR: 36,
    BODY: {
        DAMAGE: 8,
        DENSITY: 15,
        HEALTH: 200,
        PENETRATION: 12.5,
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
    GIVE_KILL_MESSAGE: true,
};

// TRIANGLES
exports.triangle = {
    PARENT: ["food"],
    LABEL: "Triangle",
    FOOD: {
        LEVEL: 2,
    },
    VALUE: 120,
    SHAPE: 3,
    SIZE: 9,
    COLOR: 2,
    BODY: {
        DAMAGE: basePolygonDamage,
        DENSITY: 6,
        HEALTH: 3 * basePolygonHealth,
        RESIST: 1.15,
        PENETRATION: 1.5,
    },
    DRAW_HEALTH: true,
};
exports.shinyTriangle = {
    PARENT: ["food"],
    LABEL: "Shiny Triangle",
    FOOD: {
        LEVEL: 2,
    },
    VALUE: 7e3,
    SHAPE: 3,
    SIZE: 9,
    COLOR: 1,
    BODY: {
        DAMAGE: 1,
        DENSITY: 6,
        HEALTH: 60,
        RESIST: 1.15,
        PENETRATION: 1.5,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.legendaryTriangle = {
    PARENT: ["food"],
    LABEL: "Legendary Triangle",
    FOOD: {
        LEVEL: 2,
    },
    VALUE: 6e4,
    SHAPE: 3,
    SIZE: 9,
    COLOR: 0,
    BODY: {
        DAMAGE: 4,
        DENSITY: 8,
        HEALTH: 90,
        RESIST: 1.25,
        PENETRATION: 10,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.shadowTriangle = {
    PARENT: ["food"],
    LABEL: "Shadow Triangle",
    FOOD: {
        LEVEL: 2,
    },
    VALUE: 25e4,
    SHAPE: 3,
    SIZE: 9,
    COLOR: 19,
    ALPHA: 0.25,
    BODY: {
        DAMAGE: 8,
        DENSITY: 15,
        HEALTH: 200,
        RESIST: 3.25,
        PENETRATION: 14,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.rainbowTriangle = {
    PARENT: ["food"],
    LABEL: "Rainbow Triangle",
    FOOD: {
        LEVEL: 2,
    },
    VALUE: 75e6,
    SHAPE: 3,
    SIZE: 9,
    COLOR: 36,
    BODY: {
        DAMAGE: 12,
        DENSITY: 20,
        HEALTH: 300,
        RESIST: 4.25,
        PENETRATION: 17.5,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};

// PENTAGONS
exports.pentagon = {
    PARENT: ["food"],
    LABEL: "Pentagon",
    FOOD: {
        LEVEL: 3,
    },
    VALUE: 400,
    SHAPE: 5,
    SIZE: 16,
    COLOR: 14,
    BODY: {
        DAMAGE: 1.5 * basePolygonDamage,
        DENSITY: 8,
        HEALTH: 10 * basePolygonHealth,
        RESIST: 1.25,
        PENETRATION: 1.1,
    },
    DRAW_HEALTH: true,
};
exports.shinyPentagon = {
    PARENT: ["food"],
    LABEL: "Shiny Pentagon",
    FOOD: {
        LEVEL: 3,
    },
    VALUE: 3e4,
    SHAPE: 5,
    SIZE: 16,
    COLOR: 1,
    BODY: {
        DAMAGE: 3,
        DENSITY: 8,
        HEALTH: 200,
        RESIST: 1.25,
        PENETRATION: 1.1,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.legendaryPentagon = {
    PARENT: ["food"],
    LABEL: "Legendary Pentagon",
    FOOD: {
        LEVEL: 3,
    },
    VALUE: 12e4,
    SHAPE: 5,
    SIZE: 16,
    COLOR: 0,
    BODY: {
        DAMAGE: 6,
        DENSITY: 12,
        HEALTH: 240,
        RESIST: 1.75,
        PENETRATION: 15,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.shadowPentagon = {
    PARENT: ["food"],
    LABEL: "Shadow Pentagon",
    FOOD: {
        LEVEL: 3,
    },
    VALUE: 1e6,
    SHAPE: 5,
    SIZE: 16,
    COLOR: 19,
    ALPHA: 0.25,
    BODY: {
        DAMAGE: 14,
        DENSITY: 20,
        HEALTH: 300,
        RESIST: 4.75,
        PENETRATION: 20,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.rainbowPentagon = {
    PARENT: ["food"],
    LABEL: "Rainbow Pentagon",
    FOOD: {
        LEVEL: 3,
    },
    VALUE: 1e9,
    SHAPE: 5,
    SIZE: 16,
    COLOR: 36,
    BODY: {
        DAMAGE: 17.5,
        DENSITY: 25,
        HEALTH: 500,
        RESIST: 5.5,
        PENETRATION: 25,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};

// BETA PENTAGONS
exports.betaPentagon = {
    PARENT: ["food"],
    LABEL: "Beta Pentagon",
    FOOD: {
        LEVEL: 4,
    },
    VALUE: 2500,
    SHAPE: 5,
    SIZE: 30,
    COLOR: 14,
    BODY: {
        DAMAGE: 2 * basePolygonDamage,
        DENSITY: 30,
        HEALTH: 50 * basePolygonHealth,
        RESIST: Math.pow(1.25, 2),
        SHIELD: 20 * basePolygonHealth,
        REGEN: 0.2,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.shinyBetaPentagon = {
    PARENT: ["food"],
    LABEL: "Shiny Beta Pentagon",
    FOOD: {
        LEVEL: 4,
    },
    VALUE: 6e4,
    SHAPE: 5,
    SIZE: 30,
    COLOR: 1,
    BODY: {
        DAMAGE: 4 * basePolygonDamage,
        DENSITY: 30,
        HEALTH: 1000 * basePolygonHealth,
        RESIST: Math.pow(1.25, 2),
        SHIELD: 20 * basePolygonHealth,
        REGEN: 0.2,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.legendaryBetaPentagon = {
    PARENT: ["food"],
    LABEL: "Legendary Beta Pentagon",
    FOOD: {
        LEVEL: 4,
    },
    VALUE: 5e5,
    SHAPE: 5,
    SIZE: 30,
    COLOR: 0,
    BODY: {
        DAMAGE: 11,
        DENSITY: 17,
        HEALTH: 480,
        RESIST: 2.5,
        PENETRATION: 25,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.shadowBetaPentagon = {
    PARENT: ["food"],
    LABEL: "Shadow Beta Pentagon",
    FOOD: {
        LEVEL: 4,
    },
    VALUE: 1e7,
    SHAPE: 5,
    SIZE: 30,
    COLOR: 19,
    ALPHA: 0.25,
    BODY: {
        DAMAGE: 20,
        DENSITY: 25,
        HEALTH: 600,
        RESIST: 6,
        PENETRATION: 30,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.rainbowBetaPentagon = {
    PARENT: ["food"],
    LABEL: "Rainbow Beta Pentagon",
    FOOD: {
        LEVEL: 4,
    },
    VALUE: 5e9,
    SHAPE: 5,
    SIZE: 30,
    COLOR: 36,
    BODY: {
        DAMAGE: 27.5,
        DENSITY: 30,
        HEALTH: 750,
        RESIST: 8.75,
        PENETRATION: 35,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};

// ALPHA PENTAGONS
exports.alphaPentagon = {
    PARENT: ["food"],
    LABEL: "Alpha Pentagon",
    FOOD: {
        LEVEL: 5,
    },
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
    GIVE_KILL_MESSAGE: true,
};
exports.shinyAlphaPentagon = {
    PARENT: ["food"],
    LABEL: "Shiny Alpha Pentagon",
    FOOD: {
        LEVEL: 5,
    },
    VALUE: 2e5,
    SHAPE: 5,
    SIZE: 58,
    COLOR: 1,
    BODY: {
        DAMAGE: 4 * basePolygonDamage,
        DENSITY: 80,
        HEALTH: 6000 * basePolygonHealth,
        RESIST: Math.pow(1.25, 3),
        SHIELD: 40 * basePolygonHealth,
        REGEN: 0.6,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.legendaryAlphaPentagon = {
    PARENT: ["food"],
    LABEL: "Legendary Alpha Pentagon",
    FOOD: {
        LEVEL: 5,
    },
    VALUE: 2e5,
    SHAPE: 5,
    SIZE: 58,
    COLOR: 0,
    BODY: {
        DAMAGE: 15,
        DENSITY: 28,
        HEALTH: 550,
        RESIST: 3.75,
        PENETRATION: 35,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.shadowAlphaPentagon = {
    PARENT: ["food"],
    LABEL: "Shadow Alpha Pentagon",
    FOOD: {
        LEVEL: 5,
    },
    VALUE: 25e5,
    SHAPE: 5,
    SIZE: 58,
    COLOR: 19,
    ALPHA: 0.25,
    BODY: {
        DAMAGE: 15,
        DENSITY: 30,
        HEALTH: 750,
        RESIST: 8,
        PENETRATION: 45,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.rainbowAlphaPentagon = {
    PARENT: ["food"],
    LABEL: "Rainbow Alpha Pentagon",
    FOOD: {
        LEVEL: 5,
    },
    VALUE: 1e9,
    SHAPE: 5,
    SIZE: 58,
    COLOR: 36,
    BODY: {
        DAMAGE: 35,
        DENSITY: 35,
        HEALTH: 1250,
        RESIST: 12.5,
        PENETRATION: 42.5,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};

// 3D POLYGONS
exports.cube = {
    PARENT: ["food"],
    LABEL: "The Cube",
    FOOD: {
        LEVEL: 0,
    },
    VALUE: 2e7,
    SHAPE: 4,
    SIZE: 7,
    COLOR: 18,
    SHAPE:
        "M -0.355 -0.39 V 2 L 1.735 0.802 V -1.585 L -0.355 -0.39 Z M -0.647 -0.39 V 2 L -2.735 0.8 V -1.585 L -0.647 -0.39 Z M -0.5 -0.64 L 1.589 -1.827 L -0.5 -3.02 L -2.58 -1.828 L -0.5 -0.64",
    BODY: {
        DAMAGE: 12,
        DENSITY: 20,
        HEALTH: 500,
        PENETRATION: 17.5,
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
    GIVE_KILL_MESSAGE: true,
};
exports.dodecahedron = {
    PARENT: ["food"],
    LABEL: "The Dodecahedron",
    FOOD: {
        LEVEL: 0,
    },
    VALUE: 5e7,
    SIZE: 10,
    COLOR: 18,
    SHAPE:
        "M -1.22 -1.45 H 0.17 L 0.615 -0.12 L -0.52 0.7 L -1.65 -0.12 L -1.22 -1.45 Z M -1.835 0.09 L -0.67 0.94 V 1.61 L -1.81 1.255 L -2.51 0.28 L -1.835 0.09 Z M 0.8 0.09 L -0.385 0.95 V 1.62 L 0.77 1.25 L 1.47 0.28 L 0.8 0.09 Z M -1.93 -0.18 L -1.485 -1.56 L -1.89 -2.151 L -2.6 -1.2 V 0.01 L -1.93 -0.18 Z M 0.44 -1.565 L 0.89 -0.18 L 1.555 0.015 V -1.19 L 0.852 -2.17 L 0.44 -1.565 Z M -0.52 -2.7 L -1.67 -2.335 L -1.26 -1.734 H 0.21 L 0.635 -2.329 L -0.52 -2.7",
    BODY: {
        DAMAGE: 22.5,
        DENSITY: 30,
        HEALTH: 1000,
        RESIST: 10,
        PENETRATION: 35,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.icosahedron = {
    PARENT: ["food"],
    LABEL: "The Icosahedron",
    FOOD: {
        LEVEL: 0,
    },
    VALUE: 1e8,
    SIZE: 18,
    COLOR: 18,
    SHAPE:
        "M -0.39 -0.245 L 0.392 -0.245 L 0 0.47 L -0.39 -0.245 Z M -0.465 -0.2 L -0.893 0.475 L -0.073 0.51 L -0.465 -0.2 Z M 0.4636 -0.2 L 0.073 0.509 L 0.891 0.4736 L 0.4636 -0.2 Z M 0 -1 L -0.39 -0.33 L 0.389 -0.328 L 0 -1 Z M -0.142 -0.925 L -0.875 -0.506 L -0.48 -0.339 L -0.142 -0.925 Z M -0.925 0.366 L -0.925 -0.431 L -0.525 -0.266 L -0.925 0.366 Z M -0.042 0.595 L -0.808 0.562 L -0.042 1 L -0.042 0.595 Z M 0.042 0.595 L 0.808 0.562 L 0.042 1 L 0.042 0.595 Z M 0.142 -0.925 L 0.858 -0.516 L 0.48 -0.339 L 0.142 -0.925 Z M 0.925 0.366 L 0.925 -0.452 L 0.523 -0.269 L 0.925 0.366 Z",
    BODY: {
        DAMAGE: 17.5,
        DENSITY: 25,
        HEALTH: 750,
        RESIST: 7.5,
        PENETRATION: 22.5,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};