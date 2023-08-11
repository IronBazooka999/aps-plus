const bossRush = new BossRush()
const train = new Train()
const moon = new Moon()
const hunt = new ManHunt()

if (c.MOTHERSHIP_LOOP) mothershipLoop.spawn();
if (c.SPECIAL_BOSS_SPAWNS) bossRush.init();
if (c.MAZE && typeof c.MAZE === "number") generateMaze(c.MAZE);
if (c.DOMINATOR_LOOP) for (let loc of room.dom0) dominatorLoop.spawn(loc, -100, 3);

let logger = new LagLogger();
const gamemodeLoop = function() {
    logger.set();
    // Thnaks to Damocles (Her discord - _damocles)
    if (c.TRAIN) train.check();
    if (c.SPACE_MODE) moon.check();
    if (c.MOTHERSHIP_LOOP) mothershipLoop.loop();
    if (c.SPECIAL_BOSS_SPAWNS) bossRush.loop();
    if (c.HUNT) hunt.check();
    logger.mark();
    if (logger.totalTime > 100) {
        console.log("Gamemode loop is taking a long time!");
        console.log(`Gamemode loop took ${logger.totalTime}ms to complete!`);
        console.log(`Gamemode loop log history: (Last ${logger.sum.length} entries)`);
        console.log(logger.sum.map(entry => `Run at: ${entry.at}. Time: ${entry.time}.`).join("\n"));
    }
};

module.exports = { gamemodeLoop };