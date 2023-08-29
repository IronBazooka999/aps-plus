let output = require("../../config.js");

const gamemodes = ['tdm'];//["tdm", "domination"];

for (let gamemode of gamemodes) {
    let mode = require(`./gamemodeconfigs/${gamemode}.js`);
    for (let key in mode) {
        if (key === "ROOM_SETUP") {
            for (let y = 0; y < output.Y_GRID; y++) {
                for (let x = 0; x < output.X_GRID; x++) {
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

module.exports = { output };

//everything past this handles the display name in the main menu
const nameMap = {
    tdm: "TDM",
    ffa: "FFA",
    opentdm: "Open TDM",
    //clanwars: "Clan Wars",
    trainwars: "Train Wars"
};

output.gameModeName = gamemodes.map(x => nameMap[x] || (x[0].toUpperCase() + x.slice(1))).join(' ');