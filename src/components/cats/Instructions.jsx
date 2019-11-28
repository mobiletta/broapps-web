import React from "react";
class Instructions extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          flexFlow: "row wrap"
        }}
      >
        {" "}
        <div style={{ maxWidth: "500px" }}>
          {" "}
          <img
            src="https://res.cloudinary.com/ajonp/image/upload/q_auto/ajonp-ajonp-com/17-rxfire-react-cats/RxFire_3.webp"
            alt="rxfire for cats"
            width="100%"
          />{" "}
        </div>{" "}
        <div>
          {" "}
          <p>
            {" "}
            In this example we will use RxFire to Observe the Cat Facts that we
            add to our Firestore Database.{" "}
          </p>{" "}
          <a
            href="https://github.com/AJONPLLC/rxfire-react-cats"
            target="no_index"
          >
            {" "}
            https://github.com/AJONPLLC/rxfire-react-cats{" "}
          </a>{" "}
          <ol>
            {" "}
            <li>
              {" "}
              Sign In{" "}
              <ul>
                {" "}
                <li>Uses Google Auth for Firebase</li> <li>Found in App.js</li>{" "}
              </ul>{" "}
            </li>{" "}
            <li>
              {" "}
              Add Cat Fact{" "}
              <ul>
                {" "}
                <li>
                  {" "}
                  This will use an API and Insert the facts into Firestore{" "}
                </li>{" "}
                <li>Found in components/AddCat.js</li>{" "}
              </ul>{" "}
            </li>{" "}
            <li>
              {" "}
              Firestore collection{" "}
              <ul>
                {" "}
                <li>
                  {" "}
                  Observing catfacts for changes, heart eyes are your facts{" "}
                </li>{" "}
                <li>Found in components/ListCatFacts.js</li>{" "}
              </ul>{" "}
            </li>{" "}
            <li>
              {" "}
              Sign Out{" "}
              <ul>
                {" "}
                <li>Observe that user is removed</li>{" "}
              </ul>{" "}
            </li>{" "}
          </ol>{" "}
        </div>{" "}
      </div>
    );
  }
}
export default Instructions;
