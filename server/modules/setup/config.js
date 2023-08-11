let output = require("../../config.js");

const gamemodes = ["tdm", "domination"];

for (let gamemode of gamemodes) {
    let mode = require(`./gamemodeconfigs/${gamemode}.js`);
    for (let key in mode) {
        if (key === "ROOM_SETUP") {
            for (let y = 0; y < mode.Y_GRID; y++) {
                for (let x = 0; x < mode.X_GRID; x++) {
                    if (mode[key][y][x]) {
                        output[key][y][x] = mode[key][y][x];
                    }
                }
            }
        } else {
            output[key] = mode[key];
        }
    }
}

const nameMap = {
    tdm: "TDM",
    ffa: "FFA",
    //clanwars: "Clan Wars",
    trainwars: "Train Wars"
};
output.gameModeName = gamemodes.map(x => nameMap[x] || (x[0].toUpperCase() + x.slice(1))).join(' ');
/*
if (["Tag", "Domination", "Mothership"].includes(gamemode)) {
    output.gameModeName = `${output.TEAMS} TDM ${gamemode}`;
}
if (gamemodes.includes("tdm")) {
    output.gameModeName = "Open" + output.gameModeName;
}*/

module.exports = { output };
