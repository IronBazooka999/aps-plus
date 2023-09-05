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
    o.color = color ?? getTeamColor(team);
    o.skill.score = 111069;
    o.name = "Dominator";
    o.SIZE = c.WIDTH / c.X_GRID / 10;
    o.isDominator = true;
    o.controllers = [new ioTypes.nearestDifferentMaster(o), new ioTypes.spin(o, { onlyWhenIdle: true })];
    o.on('dead', () => {
        if (o.team === TEAM_ENEMIES) {
            let killers = [];
            for (let instance of o.collisionArray) {
                if (isPlayerTeam(instance.team) && o.team !== instance.team) {
                    killers.push(instance);
                }
            }
            let killer = ran.choose(killers) ?? { team: TEAM_ENEMIES, color: 3 };
            spawn(loc, killer.team, killer.color, type);
            room.setType("dom" + ((killer.team < 0 && killer.team > -9) ? -killer.team : 0), loc);
            sockets.broadcast(`A dominator is now controlled by ${getTeamName(killer.team)}!`);
            for (let player of sockets.players) {
                if (player.body && player.body.team === killer.team) {
                    player.body.sendMessage("Press H to take control of the dominator.");
                }
            }
        } else {
            spawn(loc, TEAM_ENEMIES, 3, type);
            room.setType("dom0", loc);
            sockets.broadcast("A dominator is being contested!");
        }
        tally();
    });
};

function tally() {
    if (gameWon) return;
    let dominators = {};
    for (let i = 0; i < c.TEAMS; i++) {
        dominators[-(i + 1)] = 0;
    }
    for (let o of entities) {
        if (o.isDominator && o.team !== TEAM_ENEMIES && dominators[o.team] != null) dominators[o.team]++;
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
};

module.exports = { dominatorLoop: { spawn } };
