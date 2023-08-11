class ManHunt {
    constructor () {
        this.checked = false;
    }
    reset () {
        return entities.filter(entity => entity.team == -1 && (entity.isPlayer || entity.isBot));
    }
    checkTeam (team) {
        if (entities.filter(entity => entity.team == -team).length) return true;
        return false;
    }
    checkMan (instance = null, check = true) {
        let condition = this.reset();
        if (!condition.length || (this.checkTeam(2) && check)) return false;
        let entity = instance == null
            ? condition[0]
            : instance;
        entity.define({ LEVEL: 100, TEAM: -2 });
        entity.color = [10, 11, 12, 15, 25, 26, 27, 28][-entity.team - 1];
        entity.on('dead', () => {
            let killers = [];
            for (let instance of entity.collisionArray) {
                if (instance.team == -1) killers.push(instance);
            }
            let killer = ran.choose(killers);
            this.checkMan(killer.type == "tank" ? killer : killer.master, false);
        });
        return true;
    };
    check() {
        if (!this.checked) if (this.checkMan()) this.checked = true;
    }
}

module.exports = { ManHunt };