/* Local Storage API */

class SStorage <V> {
    [key: string]: V
}

abstract class LocalStorageAPI <V> {
    constructor (
        protected storage : SStorage <V> = {}        
    ) {}

    abstract setItem(key: string, value: V) : void
    abstract getItem(key: string) : V
    abstract clearItem(key: string) : void
    abstract clear() : void
}

class LocalStorage <V> extends LocalStorageAPI <V> {
    setItem(key:string, value:V) {
        this.storage[key] = value
    }
    getItem(key: string) {
        return this.storage[key]
    }
    clearItem(key: string) {
        delete this.storage[key]
    }
    clear() {
        this.storage = {}
    }
}


const localstorage = new LocalStorage <string>()
localstorage.setItem("kimchi", "hot")
console.log(localstorage.getItem("kimchi"))
localstorage.clearItem("kimchi")
localstorage.clear()



/* Geolocattion API */

interface GeolocationAPI {
    getCurrentPosition(successFn: Function) : void,
    getCurrentPosition(successFn: Function, errorFn: Function) : void,
    getCurrentPosition(successFn: Function, errorFn: Function, optionsObj: Object) : void,
    watchPosition(successFn:Function) : number,
    watchPosition(successFn:Function, errorFn:Function) : number,
    watchPosition(successFn:Function, errorFn:Function, optionsObj:Object) : number,
    clearWatch(id: number) : void
}

class GGeolocation implements GeolocationAPI {
    getCurrentPosition(successFn: Function, errorFn?: Function, optionsObj?: Object) {}
    watchPosition(successFn: Function, errorFn?:Function, optionsObj?:Object) { return 123 }
    clearWatch(id: number) {}
}


function successFn() {}
function errorFn() {}
const optionsObj : object = {}
const id : number = 123

const geolocation = new GGeolocation()
geolocation.getCurrentPosition(successFn);
geolocation.getCurrentPosition(successFn, errorFn);
geolocation.getCurrentPosition(successFn, errorFn, optionsObj);
geolocation.watchPosition(successFn);
geolocation.watchPosition(successFn, errorFn);
geolocation.watchPosition(successFn, errorFn, optionsObj);
geolocation.clearWatch(id);