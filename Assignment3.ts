abstract class LocalStorageAPI<T> {
    protected storage: SStorage<T> = {};
    
    abstract length(): number;
    abstract key(num: number): T;
    abstract getItem(key:string): T;
    abstract setItem(key:string, value:T): void;
    abstract removeItem(key:string): void;
    abstract clear(): void
}
interface SStorage<T> {
    [key:string]: T
}
class LocalStorage extends LocalStorageAPI<string> {
    public length() {
        return Object.keys(this.storage).length;
    }
    public key(num: number) {
        return Object.keys(this.storage)[num];
    }
    public getItem(key: string) {
        return this.storage[key]
    }
    public setItem(key:string, value:T) {
        this.storage[key] = value;
    }
    public removeItem(key:string) {
        delete this.storage[key]
    }
    public clear() {
        this.storage = {}
    }
}

///

interface GeolocationAPI {
    getCurrentPosition: GetCurrentPosition;
    watchCurrentPosition: WatchCurrentPosition;
    clearWatch: ClearWatch;
}
class GGeolocation implements GeolocationAPI {
    getCurrentPosition: GetCurrentPosition = (        
        success: FunctionSuccess,
        error?: FunctionError,
        options?: ObjectOptions
    ) => { return; }
    watchCurrentPosition: WatchCurrentPosition = (
        success: FunctionSuccess,
        error?: FunctionError,
        options?: ObjectOptions
    ) => { return; }
    clearWatch: ClearWatch = (
        id: number
    ) => {}
}

interface GGeolocationCoordinates {
    readonly latitude:  number;
    readonly longitude: number;
    readonly altitude: number;
    readonly  accuracy: number;
    readonly altitudeAccuracy: number;
    readonly heading: number;
    readonly spped: number;
}
interface GGeolocationPosition {
    coords: GGeolocationCoordinates
    timestamp: DOMHighResTimeStamp
}
type UnsignedShort = "PERMISSION_DENIED" | "POSITION_UNAVAILABLE" | "TIMEOUT";
interface GGeolocationPositionError {
    code: UnsignedShort;
    message: string;
}
type FunctionSuccess = (geolocationPosition: GGeolocationPosition) => void
type FunctionError = (geolocationPositionError: GGeolocationPositionError) => void;
type ObjectOptions = {
    maximumAge: number;
    timeout: number;
    enableHighAccuracy: boolean;
}
type GetCurrentPosition = {
    (success: FunctionSuccess): void
    (success: FunctionSuccess, error: FunctionError): void
    (success: FunctionSuccess, error: FunctionError, options: ObjectOptions): void
}
type WatchCurrentPosition = {
    (success: FunctionSuccess): void
    (success: FunctionSuccess, error: FunctionError): void
    (success: FunctionSuccess, error: FunctionError, options: ObjectOptions): void
}
type ClearWatch = (id: number) => void