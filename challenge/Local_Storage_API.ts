interface SSStorage <T> {
    [key:string]: T
}

class LLocalStorage <T> {
    private storage : SSStorage <T> = {}
    set(key: string, value: T) {
        this.storage[key] = value
    }
    remove(key: string) {
        delete this.storage[key]
    }
    get(key: string): T {
        return this.storage[key]
    }
    clear() {
        this.storage = {}
    }
}



/* Test */

const stringStorage = new LLocalStorage<string>()
stringStorage.get("cat")
stringStorage.set("hello", "haha")
// stringStorage.set("hi", true)

const bolleanStorage = new LLocalStorage<boolean>();
bolleanStorage.get("hahaha")
