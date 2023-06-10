## File Directory

### Public (Client)

- changelog.md
  - A markdown changelog. Cool.

- app.js
  - Handles client-side stuff like colors and shapes.

- index.html
  - Handles the main menu.

### Server

- lib/definitions.js
  - Definitions for tanks, polygons, ammunition, bosses, and other entities.
  - This is where you can modify existing tanks or create new ones.
  - You'll likely be spending 99.9% of your time here.

- lib/random.js
  - Handles random stuff, like bot and boss names.

- modules/
  - The files needed for the server to operate.

- config.json
  - The configuration of the server.
  - Please use `modules/setup/config.js` to change the gamemode.

- permissions.js
  - Manages server tokens.
  - It's highly recommended to make your glitch project private if you can afford a Glitch Pro membership so nobody else can see the tokens.

## Some additional information

- Tanks are limited to 30 upgrades by default. This can be increased in app.js.