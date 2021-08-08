import firebase from 'firebase/app';
import { ReactFireOptions } from './';
import { ObservableStatus } from './useObservable';
export declare function preloadFirestoreDoc(refProvider: (firestore: firebase.firestore.Firestore) => firebase.firestore.DocumentReference, options: {
    firebaseApp: firebase.app.App;
}): Promise<import("./SuspenseSubject").SuspenseSubject<firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>>>;
/**
 * Suscribe to Firestore Document changes
 *
 * @param ref - Reference to the document you want to listen to
 * @param options
 */
export declare function useFirestoreDoc<T = firebase.firestore.DocumentData>(ref: firebase.firestore.DocumentReference, options?: ReactFireOptions<T>): ObservableStatus<firebase.firestore.DocumentSnapshot<T>>;
/**
 * Get a firestore document and don't subscribe to changes
 *
 * @param ref - Reference to the document you want to get
 * @param options
 */
export declare function useFirestoreDocOnce<T = unknown>(ref: firebase.firestore.DocumentReference, options?: ReactFireOptions<T>): ObservableStatus<T extends {} ? T : firebase.firestore.DocumentSnapshot>;
/**
 * Suscribe to Firestore Document changes
 *
 * @param ref - Reference to the document you want to listen to
 * @param options
 */
export declare function useFirestoreDocData<T>(ref: firebase.firestore.DocumentReference, options?: ReactFireOptions<T>): ObservableStatus<T>;
/**
 * Get a firestore document and don't subscribe to changes
 *
 * @param ref - Reference to the document you want to get
 * @param options
 */
export declare function useFirestoreDocDataOnce<T = unknown>(ref: firebase.firestore.DocumentReference, options?: ReactFireOptions<T>): ObservableStatus<T>;
/**
 * Subscribe to a Firestore collection
 *
 * @param ref - Reference to the collection you want to listen to
 * @param options
 */
export declare function useFirestoreCollection<T = firebase.firestore.DocumentData>(query: firebase.firestore.Query, options?: ReactFireOptions<T[]>): ObservableStatus<firebase.firestore.QuerySnapshot<T>>;
/**
 * Subscribe to a Firestore collection and unwrap the snapshot.
 *
 * @param ref - Reference to the collection you want to listen to
 * @param options
 */
export declare function useFirestoreCollectionData<T = {
    [key: string]: unknown;
}>(query: firebase.firestore.Query, options?: ReactFireOptions<T[]>): ObservableStatus<T[]>;
