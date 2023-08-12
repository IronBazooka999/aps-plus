class Moon {
    constructor () {
        this.players = 0;
    }
    reset () {
        this.players = entities.filter(r => r.isPlayer || r.isBot);
    }
    loop () {
        this.reset();
        for (let entity of this.players) {
            for (let hole of room.blackHoles) {
                if (entity.id != hole.id && !entity.ac && entity.alpha) {
                    entity.velocity.x += util.clamp(hole.x - entity.x, -90, 90) * entity.damp * 0.02;
                    entity.velocity.y += util.clamp(hole.y - entity.y, -90, 90) * entity.damp * 0.02;
                }
            }
        }
    }
}

module.exports = { Moon };