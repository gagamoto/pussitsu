'use strict';

export class MyCanvas {
    /**
     * MyCanvas contructor
     * @param {Int16Array} width
     * @param {Int16Array} height
     * @return {null}
     */
    constructor(width = window.innerWidth, height = window.innerHeight) {
        this.canvas = document.createElement("canvas");
        this.canvas.height = height;
        this.canvas.width = width;
        document.body.appendChild(this.canvas);
        this.context = this.canvas.getContext('2d');
        // this.scaleFactor = this.canvas.height / Game.REFERENCE_HEIGHT;
        this.scaleFactor = 1; // TODO
        this.context.scale(this.scaleFactor, this.scaleFactor);
    }

    clearRect() {
        this.context.clearRect(
            0, 0,
            this.context.canvas.clientWidth,
            this.context.canvas.clientHeight);
    }

    fillBackground() {
        let context = this.context; // FIXME remove
        context.beginPath();
        context.fillStyle = 'black';
        context.strokeStyle = 'white';
        context.lineWidth = 10;
        context.rect(
            0, 0,
            this.context.canvas.clientWidth, 
            this.context.canvas.clientHeight);
        context.fill();
        context.stroke();
        context.closePath();
    }
}