'use strict';

export class GameObject {
    constructor(x, y, z, width, height) {
        this.x = x;
        this.y = y;
        this.z = z;
        // TODO dx, dy, dz
        this.width = width;
        this.height = height;

        this.spriteSheet = new Image();
        this.spriteSheet.src = "https://www.pngkit.com/png/full/219-2198087_stardew-valley-png.png"; //FIXME path argument
    }

    // TODO class Drawing.drawRect
    draw(context, step) {
        // Draw box
        context.beginPath();
        context.fillStyle = null;
        context.strokeStyle = 'green';
        context.lineWidth = 1;
        context.rect(
            this.x, this.y, this.width, this.height);
        // context.fill();
        context.stroke();
        context.closePath();

        // Character

        // TODO Move to own class e.g. Wolf
        let hbWidth = 90; // hb = hit box
        let hbHeight = 90;

        // -- Draw sprite
        let sx = 96 * (Math.floor(step / 10) % 4);
        console.log(sx)
        context.drawImage(
            this.spriteSheet,
            sx,
            88*1, // -> state
            90, 90,
            this.x, this.y,
            hbWidth, hbHeight);
    }
}