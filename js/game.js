'use strict';

export class Game {
    constructor() {
        this.step = 0;
        this.previousTimestamp;
    }

    run(timestamp) {
        console.debug('Game.run!');
        console.debug(' --- timestamp = ' + timestamp); // DEBUG
        console.debug(' --- this.previousTimestamp = ' + this.previousTimestamp); // DEBUG
        if (this.previousTimestamp) {
            let timeElapsed = timestamp - this.previousTimestamp;
            console.debug(' --- timeElapsed = ' + timeElapsed); // DEBUG
        }
        this.step++;
        this.previousTimestamp = timestamp;
        console.debug(' --- this.step = ' + this.step); // DEBUG
        if (this.step < 600)
            requestAnimationFrame((timestamp) => this.run(timestamp));
    }
}