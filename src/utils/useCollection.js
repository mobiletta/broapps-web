import _ from "lodash";
import { map, filter } from "lodash/fp";
import { useEffect } from "react";
import { Query } from "@google-cloud/firestore";

export const useCollection = (query, handlers, deps) => {
    useEffect(() => {
        handlers.subscribe();
        const unsubscribeFromQuery = query().onSnapshot(snapshot => {
            const docs = _.flow(() => snapshot.docs, map(dataFromSnapshot), filter(d => !!d))();
            handlers.data(docs);
        }, error => {
            handlers.error(error);
        });
        return () => {
            handlers.unsubscribe();
            unsubscribeFromQuery();
        };
    }, deps); // eslint-disable-line react-hooks/exhaustive-deps
};
