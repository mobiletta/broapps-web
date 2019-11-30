/* import { useEffect } from "react";
import { DocumentReference } from "@google-cloud/firestore";

export const useDoc = (getDocReference, handlers, deps) => {
    useEffect(() => {
        handlers.subscribe();
        const unsubscribeFromDoc = getDocReference().onSnapshot(snapshot => handlers.data(dataFromSnapshot(snapshot)), error => handlers.error(error));
        return () => {
            handlers.unsubscribe();
            unsubscribeFromDoc();
        };
    }, deps); // eslint-disable-line react-hooks/exhaustive-deps
}; */
