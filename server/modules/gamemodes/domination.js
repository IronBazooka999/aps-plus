let config = {
    types: [Class.destroyerDominator, Class.gunnerDominator, Class.trapperDominator],
    neededToWin: 4
};
let gameWon = false;
let spawn = (loc, team, color, type = false) => {
    type = type ? type : ran.choose(config.types);
    let o = new Entity(loc);
    o.define(type);
    o.team = team;
    o.color = getTeamColor(team);
    o.skill.score = 111069;
    o.name = "Dominator";
    o.SIZE = c.WIDTH / c.X_GRID / 10;
    o.isDominator = true;
    o.controllers = [new ioTypes.nearestDifferentMaster(o), new ioTypes.spin(o, { onlyWhenIdle: true })];
    o.on('dead', () => {
        if (o.team === -101) {
            let killers = [];
            for (let instance of o.collisionArray) {
                if (isPlayerTeam(instance.team) && o.team !== instance.team) {
                    killers.push(instance);
                }
            }
            let killer = ran.choose(killers),
                newTeam = killer.team;
            spawn(loc, newTeam, killer.color, type);
            room.setType("dom" + ((killer.team < 0 && killer.team > 5) ? -killer.team : 0), loc);
            sockets.broadcast(`A dominator is now controlled by ${getTeamName(newTeam)}!`);
            for (let player of sockets.players) {
                if (player.body) {
                    if (player.body.team === newTeam) {
                        player.body.sendMessage("Press H to take control of the dominator.");
                    }
                }
            }
        } else {
            spawn(loc, -101, 3, type);
            room.setType("dom0", loc);
            sockets.broadcast("A dominator is being contested!");
        }
        tally();
    });
};

function tally() {
    if (gameWon) return;
    let dominators = {};
    for (let i = 0; i < 4; i++) {
        dominators[-(i + 1)] = 0;
    }
    for (let o of entities) {
        if (o.isDominator && o.team !== -101 && dominators[o.team] != null) dominators[o.team]++;
    }
    for (let key in dominators) {
        if (dominators[key] >= config.neededToWin) {
            gameWon = true;
            setTimeout(function() {
                sockets.broadcast(getTeamName(key) + " has won the game!");
                setTimeout(closeArena, 3000);
            }, 1500);
        }
    }
    if (dominators["-1"] === config.neededToWin) winner(0);
    if (dominators["-2"] === config.neededToWin) winner(1);
    if (dominators["-3"] === config.neededToWin) winner(2);
    if (dominators["-4"] === config.neededToWin) winner(3);
};
const dominatorLoop = { spawn, tally };

module.exports = { dominatorLoop };
