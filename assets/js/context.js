export default class Context {
    constructor(canvasId, width, height) {
        this.id = canvasId;
        this.canvas = null;
        this.context = null;
        this.canvas = document.querySelector(`#${canvasId}`);
        this.context = this.canvas.getContext('2d');
        this.updateRatio(width, height);
    }

    updateRatio(width, height) {
        this.width = width;
        this.height = height;
        this.canvas.setAttribute('width', `${this.width}px`);
        this.canvas.setAttribute('height', `${this.height}px`);
    }

}

(function(){
    var a = 1;
    console.log(a);
})();
