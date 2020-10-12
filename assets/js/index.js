import Context from './context.js';
import SpriteSheet from "./spriteSheet.js";
import Keyboard from "./keyboard.js";

function init(e) {

    const map = [
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [16, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 18],
        [16, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 18],
        [16, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 18],
        [16, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 18],
        [16, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 18],
        [16, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 18],
        [16, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 18],
        [16, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 18],
        [16, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 18],
        [16, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 18],
        [16, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 18],
        [16, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 18],
        [16, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 18],
        [16, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 18],
        [64, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 66],
    ];

    const constructions = [
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, 23, 9, null, null, null, null, null],
        [null, null, null, null, null, null, null, 10, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, 23, null, 23, null, 23, 24, 24, null, null, null],
        [null, null, null, null, null, 9, null, null, 44, 10, 9, 10, 40, null, null, null],
        [null, null, null, null, null, null, null, 10, 61, 45, 45, 45, 61, 45, null, null],
        [null, null, null, null, null, null, 10, 23, 44, 10, 10, 10, null, null, null, null],
        [null, null, null, null, null, null, null, 23, 23, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, 9, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, 10, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    ]

    const context = new Context('canvas', 640, 480);
    const mapTiles = new SpriteSheet(context, './assets/img/tiles/MasterSimple.png');
    const player = new SpriteSheet(context, './assets/img/tiles/00-guide.png');
    const player3 = new SpriteSheet(context, './assets/img/tiles/00-guide.png');
    const player4 = new SpriteSheet(context, './assets/img/tiles/01-colorful.png');
    const player2 = new SpriteSheet(context, './assets/img/tiles/01-colorful.png');

    function renderMap(map) {
        for (let y = 0; y < map.length; y += 1) {
            for (let x = 0; x < map[0].length; x += 1) {
                if (map[y][x] !== null) {
                    mapTiles.drawSheetSprite(x * 16, y * 16, map[y][x], 16, 16);
                }
            }
        }
    }

    const keyboard = new Keyboard();
    keyboard.initKeyboard();

    setInterval(() => {
        renderMap(map);
        renderMap(constructions);
        player.animate(16, 16, [6, 7, 8], 3);
        player3.animate(48, 16, [12, 13, 14], 10);
        player4.animate(48, 32, [12, 13, 14], 10);
        player2.animate(32, 16, [0, 2], 1);
        for (const a of keyboard.getKeysState()) {
            if (a.pressed) {
                // Keyboard Events here
            }
        }
    }, 24)
}

init();
