class BossRush {
    constructor() {
        this.bossChoices = [Class.eliteDestroyer, Class.eliteGunner, Class.eliteSprayer, Class.eliteBattleship, Class.eliteSpawner, Class.roguePalisade, Class.eliteSkimmer, Class.summoner, Class.nestKeeper]
        this.friendlyBossChoices = [Class.roguePalisade, Class.rogueArmada];
        this.bigFodderChoices = [Class.sentryGun, Class.sentrySwarm, Class.sentryTrap, Class.shinySentryGun];
        this.smallFodderChoices = [Class.crasher];
        this.waves = this.generateWaves()
        this.waveId = -1
        this.gameActive = true
        this.timer = 0
        this.remainingEnemies = 0;
    }

    generateWaves() {
        let bosses = this.bossChoices.sort(() => 0.5 - Math.random())
        let waves = []
        for (let i = 0; i < 10; i++) {
            let wave = []
            for (let j = 0; j < 2 + Math.random() * 4 + (i * .4); j++) {
                wave.push(bosses[j])
            }
            bosses = bosses.sort(() => 0.5 - Math.random())
            waves.push(wave)
        }
        return waves
    }

    spawnFriendlyBoss() {
        sockets.broadcast('A Rogue Boss has spawned to help!')
        let o = new Entity(room.randomType('bas1'))
        o.define(ran.choose(this.friendlyBossChoices))
        o.define({ DANGER: 10 });
        o.color = 10
        o.team = -1
        o.controllers.push(new ioTypes.nearestDifferentMaster(o))
        o.controllers.push(new ioTypes.botMovement(o))
    }

    spawnDominator(loc, team, type = false) {
        type = type ? type : Class.destroyerDominator
        let bossRush = this,
            o = new Entity(loc)
        o.define(type)
        o.team = team
        o.color = [10, 11, 12, 15][-team - 1] || 3
        o.skill.score = 111069
        o.name = 'Dominator'
        o.SIZE = c.WIDTH / c.X_GRID / 10
        o.isDominator = true
        o.controllers = [new ioTypes.nearestDifferentMaster(o), new ioTypes.spinWhenIdle(o)]
        o.on('dead', () => {
            if (o.team === -100) {
                bossRush.spawnDominator(loc, -1, type)
                room.setType('dom1', loc)
                sockets.broadcast('A dominator has been captured by BLUE!')
            } else {
                bossRush.spawnDominator(loc, -100, type)
                room.setType('dom0', loc)
                sockets.broadcast('A dominator has been captured by the bosses!')
            }
        });
    }

    playerWin() {
        if (this.gameActive) {
            this.gameActive = false;
            sockets.broadcast('BLUE has won the game!');
            setTimeout(closeArena, 1500);
        }
    }

    spawnEnemyWrapper(loc, type) {
        let thisWave = this, n = new Entity(loc);
        n.define(ran.choose(type));
        n.team = -100;
        n.FOV = 10;
        n.refreshBodyAttributes();
        n.controllers.push(new ioTypes.bossRushAI(n));
        n.on('dead', () => {
            //this enemy has been killed, decrease the remainingEnemies counter
            //if afterwards the counter happens to be 0, announce that the wave has been defeated
            if (!--thisWave.remainingEnemies) {
                sockets.broadcast(`Wave ${thisWave.waveId + 1} is defeated!`);
            }
        });
        thisWave.remainingEnemies++;
        return n;
    }

        //yell at everyone
    spawnWave(waveId) {
        sockets.broadcast(`Wave ${waveId + 1} has arrived!`);

        //spawn bosses
        for (let boss of this.waves[waveId]) {
            let spot = null, m = 0;
            do { spot = room.randomType('boss'); } while (dirtyCheck(spot, 500) && ++m < 30);
            let o = this.spawnEnemyWrapper(spot, boss);
            o.define({ DANGER: 25 + o.SIZE / 5 });
            o.isBoss = true;
        }

        //spawn fodder enemies
        for (let i = 0; i < this.waveId / 5; i++) this.spawnEnemyWrapper(room.randomType('boss'), ran.choose(this.bigFodderChoices));
        for (let i = 0; i < this.waveId / 2; i++) this.spawnEnemyWrapper(room.randomType('boss'), ran.choose(this.smallFodderChoices));

        //spawn a friendly boss every 20 waves
        if (waveId % 20 == 19) setTimeout(this.spawnFriendlyBoss, 5000);
    }

    //runs once when the server starts
    init() {
        for (let loc of room.bas1) this.spawnDominator(loc, -1);
        console.log('Boss rush initialized.');
    }

    //runs every second
    loop() {
        //the timer has ran out? reset timer and spawn the next wave
        if (this.timer <= 0) {
            this.timer = 5;
            this.waveId++
            if (this.waves[this.waveId]) {
                this.spawnWave(this.waveId);

            //if there is no next wave then simply let the players win
            } else {
                this.playerWin();
            }

        //if the timer has not ran out and there arent any remaining enemies left, decrease the timer
        } else if (!this.remainingEnemies) {
            this.timer--;
        }
    }
}

module.exports = { BossRush };
