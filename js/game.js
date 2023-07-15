'use strict';
import {MyCanvas} from './my_canvas.js';

export class Game {
    constructor() {
        this.step = 0;
        this.previousTimestamp;
        this.myCanvas = new MyCanvas();
    }

    run(timestamp) {
        console.debug('Game.run!');
        console.debug(' --- timestamp = ' + timestamp); // DEBUG
        console.debug(' --- this.previousTimestamp = ' + this.previousTimestamp); // DEBUG
        if (this.previousTimestamp) {
            let timeElapsed = timestamp - this.previousTimestamp;
            console.debug(' --- timeElapsed = ' + timeElapsed); // DEBUG
        }
        this.previousTimestamp = timestamp;
        this.step++;
        console.debug(' --- this.step = ' + this.step); // DEBUG

        // Control
        // Move
        // Collision
        // Draw (TODO method)
        this.myCanvas.clearRect();
        this.myCanvas.fillBackground();

        if (this.step < 600 && false)
            requestAnimationFrame((timestamp) => this.run(timestamp));
    }
}