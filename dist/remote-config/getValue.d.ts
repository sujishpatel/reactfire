import { Observable } from 'rxjs';
declare type RemoteConfig = import('firebase/app').default.remoteConfig.RemoteConfig;
declare type RemoteConfigValue = import('firebase/app').default.remoteConfig.Value;
export declare type AllParameters = {
    [key: string]: RemoteConfigValue;
};
export declare function getValue(remoteConfig: RemoteConfig, key: string): Observable<import("firebase/app").default.remoteConfig.Value>;
export declare function getString(remoteConfig: RemoteConfig, key: string): Observable<string>;
export declare function getNumber(remoteConfig: RemoteConfig, key: string): Observable<number>;
export declare function getBoolean(remoteConfig: RemoteConfig, key: string): Observable<boolean>;
export declare function getAll(remoteConfig: RemoteConfig): Observable<AllParameters>;
export declare function getParsed<T>(remoteConfig: RemoteConfig, key: string): Observable<T>;
export {};
