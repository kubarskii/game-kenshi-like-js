export default class Sprite {
    constructor(context, filename, isPattern = false, onload) {
        this.context = context;
        this.image = null;
        this.pattern = null;
        this.load(filename, isPattern, onload);
    }

    load(filename, isPattern, onload) {
        if (filename && filename) {
            this.image = new Image();
            this.image.src = filename;
            if (onload && onload instanceof Function) {
                this.image.onload = onload
            }
        }
        if (isPattern && this.image) {
            this.pattern = this.context.context.createPattern(this.image, 'repeat');
        }
    }

    draw(x, y, width, height) {
        if (this.pattern) {
            this.context.context.fillStyle = this.pattern;
            this.context.context.fillRect(x, y, width, height);
        } else if (x && y && width && height) {
            this.context.context.drawImage(this.image, x, y, width, height);
        } else {
            this.context.context.drawImage(this.image, x, y, this.image.width, this.image.height);
        }
    }

    rotate(x, y, angle) {
        this.context.context.save();

        this.context.context.translate(x, y);
        this.context.context.rotate(angle * this.toRadians());

        this.context.context.drawImage(this.image,
            -(this.image.width / 2),
            -(this.image.height / 2));

        this.context.context.restore();
    }

    toRadians() {
        return Math.PI / 180;
    }

}
