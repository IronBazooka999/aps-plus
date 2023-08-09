let r = Array(15).fill(() => Array(15).fill()).map(x => x());
r[2][2] = r[2][12] = r[12][2] = r[12][12] = r[7][7] = "port";

module.exports = {
    X_GRID: 15,
    Y_GRID: 15,
    WIDTH: 5000,
    HEIGHT: 5000,
    ROOM_SETUP: r
};