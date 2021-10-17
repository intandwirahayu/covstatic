import React from 'react';
import { LogBox } from 'react-native';
import Routers from './routers';
import {Provider} from 'react-redux';
import {store} from './redux';
import firebase from '@react-native-firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyD_JghnBBNdnGJ8myMxDE5B94OP-empPUk",
  authDomain: "covstatic-48e9b.firebaseapp.com",
  projectId: "covstatic-48e9b",
  storageBucket: "covstatic-48e9b.appspot.com",
  messagingSenderId: "720986405905",
  appId: "1:720986405905:web:deaa01b1021303636c85b0",
  measurementId: "G-CCZMN94R44"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

LogBox.ignoreAllLogs();

const App = () => {
  return(
    <Provider store={store}>
      <Routers/>
    </Provider>
  )
}

export default App;