let calculatePoints = wave => 5 + wave * 3;

class BossRush {
    constructor() {
        this.bossChoices = [
            [2, "eliteDestroyer"],
            [2, "eliteGunner"],
            [2, "eliteSprayer"],
            [2, "eliteBattleship"],
            [2, "eliteSpawner"],
            [2, "eliteSkimmer"],
            [1, "sorcerer"],
            [2, "summoner"],
            [2, "enchantress"],
            [2, "exorcistor"],
            [3, "nestKeeper"]
        ];
        this.friendlyBossChoices = [Class.roguePalisade, Class.rogueArmada];
        this.bigFodderChoices = [Class.sentryGun, Class.sentrySwarm, Class.sentryTrap, Class.shinySentryGun];
        this.smallFodderChoices = [Class.crasher];
        this.waves = this.generateWaves();
        this.waveId = -1;
        this.gameActive = true;
        this.timer = 0;
        this.remainingEnemies = 0;;
    }

    generateWaves() {
        let waves = [];
        for (let i = 0; i < 10; i++) {
            let wave = [],
                points = Math.ceil(calculatePoints(i)),
                choices = this.bossChoices;

            while (points) {
                choices = choices.filter(x => x[0] >= points);
                let choice = ran.choose(choices);
                points -= choice[0];
                wave.push(choice[1]);
            }

            waves.push(wave);
        }
        return waves;
    }

    spawnFriendlyBoss() {
        let o = new Entity(room.randomType('bas1'));
        o.define(ran.choose(this.friendlyBossChoices));
        o.define({
            DANGER: 10
        });
        o.color = 10;
        o.team = -1;
        o.controllers.push(new ioTypes.nearestDifferentMaster(o));
        o.controllers.push(new ioTypes.wanderAroundMap(0, { immitatePlayerMovement: false, lookAtGoal: true }));
        sockets.broadcast(o.name + ' has arrived and joined your team!');
    }

    spawnDominator(loc, team, type = false) {
        type = type ? type : Class.destroyerDominator;
        let o = new Entity(loc);
        o.define(type)
        o.team = team
        o.color = getTeamColor(team)
        o.skill.score = 111069
        o.name = 'Dominator'
        o.SIZE = c.WIDTH / c.X_GRID / 10
        o.isDominator = true
        o.controllers = [new ioTypes.nearestDifferentMaster(o), new ioTypes.spin(o, { onlyWhenIdle: true })]
        o.on('dead', () => {
            if (o.team === TEAM_ENEMIES) {
                this.spawnDominator(loc, -1, type)
                room.setType('dom1', loc)
                sockets.broadcast('A dominator has been captured by BLUE!')
            } else {
                this.spawnDominator(loc, TEAM_ENEMIES, type)
                room.setType('dom0', loc)
                sockets.broadcast('A dominator has been captured by the bosses!')
            }
        });
    }

    playerWin() {
        if (this.gameActive) {
            this.gameActive = false;
            sockets.broadcast(getTeamName(-1) + ' has won the game!');
            setTimeout(closeArena, 1500);
        }
    }

    spawnEnemyWrapper(loc, type) {
        let thisWave = this, n = new Entity(loc);
        n.define(type);
        n.team = TEAM_ENEMIES;
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
        for (let i = 0; i < this.waveId / 5; i++) {
            this.spawnEnemyWrapper(room.randomType('boss'), ran.choose(this.bigFodderChoices));
        }
        for (let i = 0; i < this.waveId / 2; i++) {
            this.spawnEnemyWrapper(room.randomType('boss'), ran.choose(this.smallFodderChoices));
        }

        //spawn a friendly boss every 20 waves
        if (waveId % 20 == 19) {
            setTimeout(() => this.spawnFriendlyBoss(), 5000);
        }
    }

    //runs once when the server starts
    init() {
        for (let loc of room.bas1) {
            this.spawnDominator(loc, -1);
        }
        console.log('Boss rush initialized.');
    }

    //runs every second
    loop() {
        //the timer has ran out? reset timer and spawn the next wave
        if (this.timer <= 0) {
            this.timer = 150;
            this.waveId++;
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
