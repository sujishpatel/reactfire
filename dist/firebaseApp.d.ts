import firebase from 'firebase/app';
export * from './sdk';
declare type Props = {
    firebaseApp?: firebase.app.App;
    firebaseConfig?: Object;
    appName?: string;
    suspense?: boolean;
};
export declare const version: any;
export declare function FirebaseAppProvider(props: Props & {
    [key: string]: unknown;
}): JSX.Element;
export declare function useIsSuspenseEnabled(): boolean;
export declare function useSuspenseEnabledFromConfigAndContext(suspenseFromConfig?: boolean): boolean;
export declare function useFirebaseApp(): firebase.app.App;
