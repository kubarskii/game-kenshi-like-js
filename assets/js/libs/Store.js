import {Observable} from './Observable.js';

class Store {
    constructor(reducer, observable) {
        if (!!Store.instance) {
            return Store.instance;
        }
        Store.instance = this;
        this.reducer = reducer;
        this.state = observable;
        this.initialState = observable.getValue();
        return this;
    }

    dispatch(action) {
        const state = this.reducer(this.state.value, action);
        this.state.next(state);
    }

    getState() {
        return this.state.value;
    }

    getInitialState() {
        return this.initialState;
    }

    static combineReducers(reducersObj) {
        return (state, action) => {

        }
    }

}

export const initStore = (reducer, initialState) => new Store(reducer, new Observable(initialState))
