export class Observable {
    constructor(value) {
        this.value = value;
        this.subscriptions = [];
    }

    next(value) {
        this.value = value;
        this.subscriptions.forEach(fn => {
            fn(value);
        })
    }

    subscribe(fn) {
        this.subscriptions.push(fn);
    }

    getValue() {
        return this.value;
    }

}
