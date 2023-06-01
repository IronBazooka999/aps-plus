import { util } from "./lib/util.js";
import { global } from "./lib/global.js";
import { config } from "./lib/config.js";
import { Canvas } from "./lib/canvas.js";
import { color } from "./lib/color.js";
/** https://gist.github.com/jedfoster/7939513 **/
function d2h(d) {
    return d.toString(16);
} // convert a decimal value to hex
function h2d(h) {
    return parseInt(h, 16);
} // convert a hex value to decimal
let mixColors = (color_2, color_1, weight = 0.5) => {
    if (weight === 1) return color_1;
    if (weight === 0) return color_2;
    var col = "#";
    for (var i = 1; i <= 6; i += 2) {
        // loop through each of the 3 hex pairs—red, green, and blue, skip the '#'
        var v1 = h2d(color_1.substr(i, 2)), // extract the current pairs
            v2 = h2d(color_2.substr(i, 2)),
            // combine the current pairs from each source color, according to the specified weight
            val = d2h(Math.floor(v2 + (v1 - v2) * weight));
        while (val.length < 2) {
            val = "0" + val;
        } // prepend a '0' if val results in a single digit
        col += val; // concatenate val to our new color string
    }
    return col; // PROFIT!
};
function getRainbow(a, b, c = 0.5) {
    if (0 >= c) return a;
    if (1 <= c) return b;
    let f = 1 - c;
    a = parseInt(a.slice(1, 7), 16);
    b = parseInt(b.slice(1, 7), 16);
    return "#" + (
        (((a & 0xff0000) * f + (b & 0xff0000) * c) & 0xff0000) |
        (((a & 0x00ff00) * f + (b & 0x00ff00) * c) & 0x00ff00) |
        (((a & 0x0000ff) * f + (b & 0x0000ff) * c) & 0x0000ff)).toString(16).padStart(6, "0");
}
function getColor(colorNumber) {
    // 0-24, 30-37 and 39-41 are kept the same as standard Arras for consistency.
    // For Woomy-Arras color IDs between 20 and 44, increment the number by 30 so they'll work as intended.

    // The following Woomy-Arras color IDs are not included as they are duplicates of another color.
    /*
    Original Color ID -> Replacement Color ID
    68 -> 108
    226 -> 13
    */
    // Other Woomy-Arras color IDs will work fine with no changes.

    // The following Raxor.io color IDs are not included as they are duplicates of another color.
    /*
    Original Color ID -> Replacement Color ID
    43 -> 190
    */
    switch (colorNumber) {
        case 0:
            return color.teal;
        case 1:
            return color.lgreen;
        case 2:
            return color.orange;
        case 3:
            return color.yellow;
        case 4:
            return color.lavender;
        case 5:
            return color.pink;
        case 6:
            return color.vlgrey;
        case 7:
            return color.lgrey;
        case 8:
            return color.guiwhite;
        case 9:
            return color.black;
        case 10:
            return color.blue;
        case 11:
            return color.green;
        case 12:
        case "FFA_RED":
            return color.red;
        case 13:
            return color.gold;
        case 14:
            return color.purple;
        case 15:
            return color.magenta;
        case 16:
            return color.grey;
        case 17:
            return color.dgrey;
        case 18:
            return color.white;
        case 19:
            return color.guiblack;
        case 20:
            return 150 > Date.now() % 300 ? color.blue : color.red;
        case 21:
            return 150 > Date.now() % 300 ? color.blue : color.grey;
        case 22:
            return 150 > Date.now() % 300 ? color.grey : color.blue;
        case 23:
            return 150 > Date.now() % 300 ? color.red : color.grey;
        case 24:
            return 150 > Date.now() % 300 ? color.grey : color.red;
        case 28:
            return "#55CDFC";
        case 29:
            return "#F7A8B8";
        case 30:
            return "#a913cf";
        case 31:
            return "#226ef6";
        case 32:
            return "#ff1000";
        case 33:
            return "#ff9000";
        case 34:
            return "#00e00b";
        case 35:
            return "#ffd300";
        case 36:
            return getRainbow(
                "#ff1000 #ff9000 #ffd300 #00e00b #226ef6 #a913cf".split(" ")[ Math.floor((Date.now() / 200) % 6) ],
                "#ff9000 #ffd300 #00e00b #226ef6 #a913cf #ff1000".split(" ")[ Math.floor((Date.now() / 200) % 6) ],
                (Date.now() / 200) % 1
            );
        case 37:
            return getRainbow("#ffffff",
                2e3 > Date.now() % 4e3 ? "#55cdfc" : "#f7a8b8",
                5 * Math.sin(((Date.now() % 2e3) / 2e3) * Math.PI) - 2
            );
        case 38:
            return getRainbow(
                "#ce0063 #9c319c #00319c".split(" ")[ Math.floor((Date.now() / 200) % 3) ],
                "#ce0063 #9c319c #00319c".split(" ")[ Math.floor((Date.now() / 200) % 3) ],
                (Date.now() / 200) % 1
            );
        case 39:
            return "#654321";
        case 40:
            return "#e58100";
        case 41:
            return "#267524";
        case 42:
            return "#123456";
        case 50:
            return "#307A76";
        case 51:
            return "#47F51E";
        case 52:
            return "#9264EF";
        case 53:
            return "#1D00FF";
        case 54:
            return "#B35ED8";
        case 55:
            return "#0531CB";
        case 56:
            return "#FDA54D";
        case 57:
            return "#3761D1";
        case 58:
            return "#AB1515";
        case 59:
            return "#44AA34";
        case 60:
            return "#EEF5A7";
        case 61:
            return "#8BFE6A";
        case 62:
            return "#FAC577";
        case 63:
            return "#8AFF8A";
        case 64:
            return "#666666";
        case 65:
            return "#F37C20";
        case 66:
            return "#E85DDF";
        case 67:
            return "#FFFF00";
        case 69:
            return "#FFBF00";
        case 70:
            return "#57C8C2";
        case 71:
            return "#A6E1DE";
        case 72:
            return "#BF0731";
        case 73:
            return "#F80A41";
        case 74:
            return "#00EEA4";
        case 100:
            return "#FF0000";
        case 101:
            return "#FF1A00";
        case 102:
            return "#FF2A00";
        case 103:
            return "#FF4300";
        case 104:
            return "#FF5D00";
        case 105:
            return "#FF7200";
        case 106:
            return "#FF7700";
        case 107:
            return "#FF9400";
        case 108:
            return "#FF9900";
        case 109:
            return "#FFA500";
        case 110:
            return "#FFBB00";
        case 111:
            return "#FFCC00";
        case 112:
            return "#FFDD00";
        case 113:
            return "#FFE900";
        case 114:
            return "#FFFA00";
        case 115:
            return "#EEFF00";
        case 116:
            return "#DDFF00";
        case 117:
            return "#D0FF00";
        case 118:
            return "#B6FF00";
        case 119:
            return "#AAFF00";
        case 120:
            return "#88FF00";
        case 121:
            return "#6EFF00";
        case 122:
            return "#54FF00";
        case 123:
            return "#32FF00";
        case 124:
            return "#19FF00";
        case 125:
            return "#04FF00";
        case 126:
            return "#00FF15";
        case 127:
            return "#00FF26";
        case 128:
            return "#00FF3F";
        case 129:
            return "#00FF55";
        case 130:
            return "#00FF6E";
        case 131:
            return "#00FF7F";
        case 132:
            return "#00FF99";
        case 133:
            return "#00FFA5";
        case 134:
            return "#00FFBB";
        case 135:
            return "#00FFCB";
        case 136:
            return "#00FFD8";
        case 137:
            return "#00FFED";
        case 138:
            return "#00FFFA";
        case 139:
            return "#00E9FF";
        case 140:
            return "#00D8FF";
        case 141:
            return "#00C3FF";
        case 142:
            return "#00BBFF";
        case 143:
            return "#00AEFF";
        case 144:
            return "#00A1FF";
        case 145:
            return "#0090FF";
        case 146:
            return "#007FFF";
        case 147:
            return "#0077FF";
        case 148:
            return "#006EFF";
        case 149:
            return "#005DFF";
        case 150:
            return "#0048FF";
        case 151:
            return "#0037FF";
        case 152:
            return "#0026FF";
        case 153:
            return "#0019FF";
        case 154:
            return "#0004FF";
        case 155:
            return "#0C00FF";
        case 156:
            return "#2200FF";
        case 157:
            return "#2E00FF";
        case 158:
            return "#3B00FF";
        case 159:
            return "#5400FF";
        case 160:
            return "#6A00FF";
        case 161:
            return "#7F00FF";
        case 162:
            return "#9000FF";
        case 163:
            return "#A100FF";
        case 164:
            return "#B600FF";
        case 165:
            return "#BF00FF";
        case 166:
            return "#D000FF";
        case 167:
            return "#DC00FF";
        case 168:
            return "#E900FF";
        case 169:
            return "#FA00FF";
        case 170:
            return "#FF00F6";
        case 171:
            return "#FF00E1";
        case 172:
            return "#FF00CB";
        case 173:
            return "#FF00B6";
        case 174:
            return "#FF00AA";
        case 175:
            return "#FF00A5";
        case 176:
            return "#FF0090";
        case 177:
            return "#FF007B";
        case 178:
            return "#FF006E";
        case 179:
            return "#FF005D";
        case 180:
            return "#FF0059";
        case 181:
            return "#FF0043";
        case 182:
            return "#FF003B";
        case 183:
            return "#FF0026";
        case 184:
            return "#FF001D";
        case 185:
            return "#FF000C";
        case 186:
            return "#AA8A8B";
        case 187:
            return "#BC7B7D";
        case 188:
            return "#CD6D70";
        case 189:
            return "#DF5E62";
        case 190:
            return "#CB6F3C";
        case 191:
            return "#00D2FF";
        case 192:
            return "#003399";
        case 193:
            return "#BDBDBD";
        case 194:
            return "#B7410E";
        case 195:
            return "#65F0EC";
        case 196:
            return "#EAB57A";
        case 197:
            return "#E6E600";
        case 198:
            return "#E69138";
        case 199:
            return "#EA9999";
        case 200:
            return "#CCFF00";
        case 201:
            return "#800000";
        case 202:
            return "#F7EB73";
        case 203:
            return "#9A5BAB";
        case 204:
            return "#ED7332";
        case 205:
            return "#FDA2A2";
        case 206:
            return "#00428B";
        case 207:
            return "#FF8000";
        case 208:
            return "#FFB66C";
        case 209:
            return "#C0C0C0";
        case 210:
            return "#FFFF80";
        case 211:
            return "#9B59D0";
        case 212:
            return "#996B6D";
        case 213:
            return "#FE9774";
        case 214:
            return "#77E2FB";
        case 215:
            return "#EFA900";
        case 216:
            return "#FC8208";
        case 217:
            return "#6CF1EE";
        case 218:
            return "#FFD900";
        case 219:
            return "#FFAE40";
        case 220:
            return "#FFA600";
        case 221:
            return "#FF0080";
        case 222:
            return "#00FFFF";
        case 223:
            return "#00BFFF";
        case 224:
            return "#99D9EA";
        case 225:
            return "#6DB5C9";
        case 227:
            return "#D5095B";
        case 228:
            return "#FF7F00";
        case 229:
            return "#A277FB";
        case 230:
            return "#BA8939";
        case 231:
            return "#5AE3E3";
        case 232:
            return "#FF6600";
        case 233:
            return "#FF9955";
        case 234:
            return "#D4AF37";
        default:
            return "#00000000";
    }
}
function getColorDark(givenColor) {
    let dark = config.graphical.neon ? color.white : color.black;
    if (config.graphical.darkBorders) return dark;
    return mixColors(givenColor, dark, color.border);
}
function getZoneColor(cell, real) {
    switch (cell) {
        case "bas1":
        case "bap1":
        case "dom1":
            return color.blue;
        case "bas2":
        case "bap2":
        case "dom2":
            return color.green;
        case "bas3":
        case "bap3":
        case "dom3":
        case "boss":
            return color.red;
        case "bas4":
        case "bap4":
        case "dom4":
            return color.pink;
        case "nest":
            return real ? color.purple : color.lavender;
        case "dom0":
            return color.gold;
        default:
            return real ? color.white : color.lgrey;
    }
}

function setColor(context, givenColor) {
    if (config.graphical.neon) {
        context.fillStyle = getColorDark(givenColor);
        context.strokeStyle = givenColor;
    } else {
        context.fillStyle = givenColor;
        context.strokeStyle = getColorDark(givenColor);
    }
}
const drawingFunctions = { mixColors, getColor, getColorDark, getZoneColor, setColor };