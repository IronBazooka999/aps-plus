const express = require("express");
const expressWs = require("express-ws");
const minify = require("express-minify");
const cors = require("cors");
const path = require("path");
const server = express();
server.use(express.json());
expressWs(server);
if (!/localhost(:\d*)/.test(c.host)) server.use(minify());
server.use(cors());
if (c.servesStatic) {
    server.use(express.static(path.join(__dirname, "../../../public")));
}
server.get("/lib/json/mockups.json", function(request, response) {
    response.send(mockupJsonData);
});
server.get("/lib/json/gamemodeData.json", function(request, response) {
    response.send(JSON.stringify({
        gameMode: c.gameModeName,
        players: views.length,
        code: [c.MODE, c.MODE === "ffa" ? "f" : c.TEAMS, c.secondaryGameMode].join("-"),
        ip: c.host
    }));
});
server.get("/serverData.json", function(request, response) {
    response.json({
        ok: true,
        ip: c.host
    });
});
server.ws("/", sockets.connect);
server.listen(c.port, function() {
    console.log("Express + WS server listening on port", c.port);
});

module.exports = { server };

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let http = require('http'),
// server = http.createServer((req, res) => {
//     let url = new URL(req.url);
//     switch (url.pathname) {
//         case "/lib/json/mockups.json":
//             res.writeHead(200);
//             res.end(mockupJsonData);
//             break;
//         case "/lib/json/gamemodeData.json":
//             res.writeHead(200);
//             res.end(JSON.stringify({
//                 gameMode: c.gameModeName,
//                 players: views.length,
//                 code: [c.MODE, c.MODE === "ffa" ? "f" : c.TEAMS, c.secondaryGameMode].join("-"),
//                 ip: c.host
//             }));
//             break;
//         case "/serverData.json":
//     }
// });
// server.on('upgrade', (req, socket, head) => {});
// server.listen(c.port, () => console.log("Express + WS server listening on port", c.port));
// module.exports = { server };