interface SStorage <T> {
    [key:string]: T
}

class LocalStorage <T> {
    private storage : SStorage <T> = {}
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

const stringStorage = new LocalStorage<string>()
stringStorage.get("cat")
stringStorage.set("hello", "haha")
// stringStorage.set("hi", true)

const bolleanStorage = new LocalStorage<boolean>();
bolleanStorage.get("hahaha")
