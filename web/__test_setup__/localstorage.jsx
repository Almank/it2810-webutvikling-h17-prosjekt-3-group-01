export class localStorageMock {
    constructor() {
        this.store = {}
    }

    getItem(key) {
        return this.store[key] || null;
    }

    getAll() {
        return this.store || null;
    }

    setItem(key, value) {
        this.store[key] = value.toString();
    }


    clear() {
        this.store = {};
    }


    removeItem(key) {
        delete this.store[key];
    }
}

global.localStorage = new localStorageMock;
//Object.defineProperty(window, 'localStorage', { value: localStorageMock });