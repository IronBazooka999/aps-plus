let fs = require('fs'),
    path = require('path'),
    publicRoot = path.join(__dirname, "../../../public"),
    mimeSet = {
        "js": "application/javascript",
        "json": "application/json",
        "css": "text/css",
        "html": "text/html",
        "md": "text/markdown",
        "png": "image/png",
        "ico": "image/x-icon"
    },
wsServer = new (require('ws').WebSocketServer)({ noServer: true });
server = require('http').createServer((req, res) => {
    let resStr = "";
    switch (req.url) {
        case "/lib/json/mockups.json":
            resStr = mockupJsonData;
            break;
        case "/lib/json/gamemodeData.json":
            resStr = JSON.stringify({
                gameMode: c.gameModeName,
                players: views.length,
                //TODO: figure out what 'code' does on the client, if it does nothing, get rid of this and secondaryGameMode props in gamemode configs
                code: [c.MODE, c.MODE === "ffa" ? "f" : c.TEAMS, c.secondaryGameMode].join("-"),
                ip: c.host
            });
            break;
        case "/serverData.json":
            resStr = JSON.stringify({ ok: true, ip: c.host });
            break;
        default:
            let fileToGet = path.join(publicRoot, req.url);

            //if this FILE does not exist, return the default;
            if (!fs.lstatSync(fileToGet).isFile()) {
                fileToGet = path.join(publicRoot, c.DEFAULT_FILE);
            }

            //return the file
            res.writeHead(200, { 'Content-Type': mimeSet[ fileToGet.split('.').pop() ] || 'text/html' });
            return fs.createReadStream(fileToGet).pipe(res);
    }
    res.writeHead(200);
    res.end(resStr);
});
server.on('upgrade', (req, socket, head) => wsServer.handleUpgrade(req, socket, head, ws => sockets.connect(ws, req)));
server.listen(c.port, () => console.log("Server listening on port", c.port));
module.exports = { server };