import 'core-js';
import 'core-js/modules/es.promise';
import 'core-js/modules/es.array.iterator';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { store, firestoreProps } from './store/createReduxStore';
import Root from './Root';

ReactDOM.render(
  <Root>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...firestoreProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </Root>,
  document.getElementById('root'),
);
registerServiceWorker();
