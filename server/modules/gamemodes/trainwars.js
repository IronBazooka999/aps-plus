class Train {
    constructor () {
        this.teams = 0;
        this.train = 0;
    }
    reset () {
        this.teams = new Set(entities.filter(r => r.isPlayer || r.isBot).map(r => r.team));
    }
    check () {
        this.reset();
        for (let team of this.teams) {
            this.train = entities.filter(r => (r.isPlayer || r.isBot) && r.team === team && !r.invuln).sort((a, b) => b.skill.score - a.skill.score);

            for (let [i, player] of this.train.entries()) {
                if (i === 0) continue;

                player.velocity.x = util.clamp(this.train[i - 1].x - player.x, -90, 90) * player.damp * 2;
                player.velocity.y = util.clamp(this.train[i - 1].y - player.y, -90, 90) * player.damp * 2;
            }
        }
    }
}

module.exports = { Train };