import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';

import 'semantic-ui-css/semantic.min.css';
import './styles/index.css';
import App from './app/App';
import configureStore from './redux/store';
import { ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import firebase from 'firebase/app';

const store = configureStore();
const rrfConfig = {
  userProfile: 'users', // Set the collection name (users) that has to be sync with the profile
  useFirestoreForProfile: true, // Set The firebase reducer to use firestore to sync to the profile object on the state.
};
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) return <div>Loading...</div>;
  return children;
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
          <App />
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
