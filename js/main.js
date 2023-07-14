'use strict';
import {Game} from './game.js';

function main() {
    console.debug('Hello!');

    let game = new Game();
    // game.run();
    requestAnimationFrame((timestamp) => game.run(timestamp));

    console.debug('Done!');
}

main();