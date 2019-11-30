/* import _ from "lodash";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Firestore } from "@google-cloud/firestore";
const firestore = new Firestore();
export const PeopleComponent = ({ hairColor }) => {
    const dispatch = useDispatch();
    const people = useSelector(state => state.people);
    useCollection(() => firestore.collection("people").where("hairColor", "==", hairColor), {
        subscribe: () => dispatch({ type: "people/subscribe" }),
        unsubscribe: () => dispatch({ type: "people/unsubscribe" }),
        data: person => dispatch({ type: "people/data", person }),
        error: error => dispatch({ type: "people/error", error })
    }, [hairColor] // Ensure that we unsubscribe and re-subscribe when the hairColor changes
    );
    return (React.createElement("div", null,
        React.createElement("h1", null,
            "People with ",
            hairColor,
            " hair."),
        React.createElement("ul", null, _.map(people, person => (React.createElement("li", { key: person.id }, person.name))))));
};
 */
