import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore' 
import { createStore, applyMiddleware, compose } from 'redux'
//import { compose, applyMiddleware, createStore } from 'react-redux-firebase';
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore';
import { default as config } from '../config';
import rootReducer from './reducers/rootReducer';
import reduxThunk from 'redux-thunk';
import reduxLogger from 'redux-logger';

// Initialize firebase instance
firebase.initializeApp(config.firebaseWithConfig)
// Initialize Cloud Firestore through Firebase
firebase.firestore();
 
const store = createStore(rootReducer,
  compose(
      applyMiddleware(reduxThunk.withExtraArgument({ getFirestore }), reduxLogger),
      reduxFirestore(firebase),
  )
);

const firestoreProps = {
  firebase,
  config: config.firestoreWithConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

export {
    firebase,
    store,
    firestoreProps
}



// import { createStore, compose, applyMiddleware } from 'redux'
// import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore'
// import firebase from 'firebase/app'
// import 'firebase/auth'
// import 'firebase/database'
// import 'firebase/firestore'
// //import { compose, applyMiddleware, createStore } from 'react-redux-firebase';
// import { default as config } from '../config';
// import rootReducer from './reducers/rootReducer';
// import reduxThunk from 'redux-thunk'
// import reduxLogger from 'redux-logger'

// // Initialize firebase instance
// firebase.initializeApp(config.firebaseWithConfig)
// // Initialize Cloud Firestore through Firebase
// firebase.firestore();

// // Add reduxFirestore store enhancer to store creator
// const createStoreWithFirebase = compose(
//   applyMiddleware(reduxThunk.withExtraArgument({ getFirestore }), reduxLogger),
//   reduxFirestore(firebase, config.firestoreWithConfig), // firebase instance as first argument, rfConfig as optional second
// )(createStore)

// // Create store with reducers and initial state
// const initialState = {
//    firebase,
//    config: config.firestoreWithConfig,
//    dispatch: store.dispatch,
//    createFirestoreInstance
// }
// const store = createStoreWithFirebase(rootReducer, initialState)

// export { store }







