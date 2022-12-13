/*jslint node: true */
/*jshint -W061 */
/*global goog, Map, let */
"use strict";
// General requires
require('google-closure-library');
goog.require('goog.structs.PriorityQueue');
goog.require('goog.structs.QuadTree');

const BossRush = class {
    static generateWaves() {
        let bosses = [Class.eliteDestroyer, Class.eliteGunner, Class.eliteSprayer, Class.eliteBattleship, Class.eliteSpawner, Class.roguePalisade, Class.eliteSkimmer, Class.summoner, Class.nestKeeper].sort(() => 0.5 - Math.random())
        let waves = []
        for (let i = 0; i < 10; i++) {
            let wave = []
            for (let j = 0; j < 2 + Math.random() * 4 + (i * .4); j++)
              wave.push(bosses[j])
            bosses = bosses.sort(() => 0.5 - Math.random())
            waves.push(wave)
        }
        return waves
    }
    constructor() {
        this.mothershipChoices = [Class.mothership]
        this.waves = BossRush.generateWaves()
        this.wave = -1
        this.gameActive = true
        this.timer = 0
    }
    spawnMothership() {
        return
        sockets.broadcast('A Mothership has spawned!')
        let o = new Entity(room.randomType('bas1'))
        o.define(ran.choose(this.mothershipChoices))
        o.define({
            DANGER: 10
        });
        o.color = 10
        o.team = -1
        o.name = 'Mothership'
        o.isMothership = true
        o.controllers.push(new ioTypes.nearestDifferentMaster(o))
        o.controllers.push(new ioTypes.botMovement(o))
    }
    spawn(loc, team, type = false) {
        type = type ? type : Class.destroyerDominator
        let o = new Entity(loc)
        o.define(type)
        o.team = team
        o.color = [10, 11, 12, 15][-team - 1] || 3
        o.skill.score = 111069
        o.name = 'Dominator'
        o.SIZE = c.WIDTH / c.X_GRID / 10
        o.isDominator = true
        o.controllers = [new ioTypes.nearestDifferentMaster(o), new ioTypes.spinWhenIdle(o)]
        o.onDead = () => {
            if (o.team === -100) {
                this.spawn(loc, -1, type)
                room.setType('dom1', loc)
                sockets.broadcast('A dominator has been captured by BLUE!')
            } else {
                this.spawn(loc, -100, type)
                room.setType('dom0', loc)
                sockets.broadcast('A dominator has been captured by the bosses!')
            }
        }
    }
    init() {
        for (let i = 0; i < 1; i++) 
          this.spawnMothership()
      
        for (let loc of room['bas1']) 
          this.spawn(loc, -1)
      
        console.log('Boss rush initialized.')
    }
    getCensus() {
        let census = {
            bosses: 0,
            motherships: 0,
        }
        for (let e of entities) {
            if (e.isBoss) census.bosses++
            if (e.isMothership) census.motherships++
        }
        return census
    }
    loop() {
        let census = this.getCensus()
        if (census.motherships < 1) 
          this.spawnMothership()
        if (census.bosses === 0 && this.timer <= 0) {
            this.wave++
            if (!this.waves[this.wave]) {
                if (!this.gameActive) return
                this.gameActive = false
                sockets.broadcast('BLUE has won the game!')
                setTimeout(closeArena, 1500)
                return
            }
            sockets.broadcast(`Wave ${this.wave + 1} has arrived!`)
            for (let boss of this.waves[this.wave]) {
                let spot = null
                let m = 0
                do {
                    spot = room.randomType('boss')
                    m++
                } while (dirtyCheck(spot, 500) && m < 30)
                let o = new Entity(spot)
                o.define(boss)
                o.define({
                    DANGER: 25 + o.SIZE / 5
                })
                o.team = -100
                o.FOV = 10
                o.refreshBodyAttributes()
                o.isBoss = true
                o.controllers.push(new ioTypes.bossRushAI(o))
                for (let i = 0; i < 2; i++) {
                    let n = new Entity(room.randomType('boss'))
                    n.define(ran.choose([Class.sentryGun, Class.sentrySwarm, Class.sentryTrap, Class.shinySentryGun]))
                    n.team = -100
                    n.FOV = 10
                    n.refreshBodyAttributes()
                    n.controllers.push(new ioTypes.bossRushAI(n))
                }
                for (let i = 0; i < 4; i++) {
                    let n = new Entity(room.randomType('boss'))
                    n.define(Class.crasher)
                    n.team = -100
                    n.FOV = 10
                    n.refreshBodyAttributes()
                    n.controllers.push(new ioTypes.bossRushAI(n))
                }
            }
        } else if (census.bosses > 0) {
          this.timer = 5
        }
        this.timer--
    }
}

module.exports = {
    BossRush
};
