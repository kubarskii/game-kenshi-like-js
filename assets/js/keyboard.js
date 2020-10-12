const keys = {
    shift: {
        code: 16,
        pressed: false,
    },
    left: {
        code: 37,
        pressed: false,
    },
    right: {
        code: 39,
        pressed: false,
    },
    up: {
        code: 38,
        pressed: false,
    },
    down: {
        code: 40,
        pressed: false,
    },
    [Symbol.iterator]() {
        let step = 0;
        const keys = Object.keys(this);
        self = this;
        return {
            next() {
                step += 1;
                if (step <= keys.length) {
                    return {
                        done: false,
                        value: self[keys[step - 1]],
                    };
                } else {
                    return {
                        done: true
                    };
                }
            }

        }
    }
};

export default class Keyboard {

    initKeyboard() {
        document.addEventListener('keydown', function (e) {
            for (let key in keys) {
                if (e.keyCode === keys[key].code) {
                    keys[key].pressed = true;
                }
            }
        });
        document.addEventListener('keyup', function (e) {
            for (let key in keys) {
                if (e.keyCode === keys[key].code) {
                    keys[key].pressed = false;
                }
            }
        });
    }

    getKeysState() {
        return keys;
    }

}
