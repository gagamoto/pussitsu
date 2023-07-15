'use strict';

import { GameObject } from './game_object.js';
import {MyCanvas} from './my_canvas.js';
import {ZZFX, zzfx} from './ZzFX.js'

export class Game {
    constructor() {
        this.step = 0;
        this.previousTimestamp;
        this.myCanvas = new MyCanvas();

        this.player = new GameObject(100, 200, 0, 90, 90) // FIXME
    }

    draw() {
        this.myCanvas.clearRect();
        this.myCanvas.fillBackground();
        // TODO loop through all objects
        this.player.draw(this.myCanvas.context, this.step)
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

        // TODO Menu etc. : initialize
        // Control
        // Move
        this.player.x++; // FIXME
        // -- Collision?
        this.draw();

        if (this.step % 60 == 0) // FIXME remove (DEBUG)
            // TODO sound bank
            zzfx(...[,,9,,.21,.13,3,2.21,,,-226,.35,,.1,365,,,,.14,.02]); // Random 386
        if (this.step < 600 && true)
            requestAnimationFrame((timestamp) => this.run(timestamp));
    }
}