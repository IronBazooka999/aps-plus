class Train {
    constructor () {
    }
    loop () {
        let teams = new Set(entities.filter(r => r.isPlayer || r.isBot).map(r => r.team));
        for (let team of this.teams) {
            let train = entities.filter(r => (r.isPlayer || r.isBot) && r.team === team && !r.invuln).sort((a, b) => b.skill.score - a.skill.score);

            for (let [i, player] of train.entries()) {
                if (i === 0) continue;

                player.velocity.x = util.clamp(train[i - 1].x - player.x, -90, 90) * player.damp * 2;
                player.velocity.y = util.clamp(train[i - 1].y - player.y, -90, 90) * player.damp * 2;
            }
        }
    }
}

module.exports = { Train };