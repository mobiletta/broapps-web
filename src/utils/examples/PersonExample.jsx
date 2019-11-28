import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Firestore } from "@google-cloud/firestore";
const firestore = new Firestore();
export const PersonComponent = ({ personId }) => {
    const name = useSelector(state => state.people[personId].name);
    const hairColor = useSelector(state => state.people[personId].hairColor);
    const dispatch = useDispatch();
    useDoc(() => firestore.doc(personId), {
        subscribe: () => dispatch({ type: "person/subscribe", personId }),
        unsubscribe: () => dispatch({ type: "person/unsubscribe", personId }),
        data: person => dispatch({ type: "person/data", person }),
        error: error => dispatch({ type: "person/error", error })
    }, [personId] // Ensure that we unsubscribe and re-subscribe when the personId changes
    );
    return (React.createElement("div", null,
        React.createElement("h1", null,
            "Name: ",
            name),
        React.createElement("h3", null,
            "Hair Color: ",
            hairColor)));
};
