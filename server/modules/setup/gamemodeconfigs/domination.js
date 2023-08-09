let r = Array(15).fill(() => Array(15).fill()).map(x => x());
r[7][2] = r[2][7] = r[12][7] = r[7][12] = r[7][7] = "dom0";

module.exports = {
    X_GRID: 15,
    Y_GRID: 15,
    WIDTH: 5000,
    HEIGHT: 5000,
    ROOM_SETUP: r
};