import Sprite from "./sprite.js";

export default class SpriteSheet extends Sprite {
    constructor(context, filename, isPattern = false, spriteSize = 16, dx, dy, onload) {
        super();
        this.context = context;
        this.image = null;
        this.pattern = null;
        this.spriteSize = spriteSize;
        this.load(filename, isPattern, onload);
        this.animationDelay = 0;
        this.animationIndexCounter = 0;
        this.animationCurrentFrame = null;
    }

    drawSheetSprite(dx, dy, spriteIndex, w = 16, h = 16) {
        const spriteXCount = (this.image.width / this.spriteSize);
        const spriteYCount = (this.image.height / this.spriteSize);
        const xIndex = (spriteIndex >= spriteXCount) ? spriteIndex - spriteXCount * (Math.trunc(spriteIndex / spriteXCount)) : spriteIndex;
        const sx = xIndex * this.spriteSize;
        const sy = this.spriteSize * Math.trunc(spriteIndex / spriteXCount);
        this.context.context.drawImage(this.image,
            sx,
            sy,
            this.spriteSize,
            this.spriteSize,
            dx,
            dy,
            w,
            h);
    }

    animate(dx, dy, spriteIndexes, delay = 3, w = 16, h = 16) {
        if (this.animationDelay++ >= delay) {
            this.animationDelay = 0;
            this.animationIndexCounter++;
            if (this.animationIndexCounter >= spriteIndexes.length) {
                this.animationIndexCounter = 0;
            }
            this.animationCurrentFrame = spriteIndexes[this.animationIndexCounter];
        }
        if (this.animationCurrentFrame !== null) {
            this.drawSheetSprite(dx, dy, this.animationCurrentFrame, w, h);
        } else {
            this.drawSheetSprite(dx, dy, spriteIndexes[0], w, h);
        }
    }

}
