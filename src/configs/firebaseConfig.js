import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB8PI5wwByWDK3FUA1sBi7pnhKORL057nw',
  authDomain: 'booklibrary-15d75.firebaseapp.com',
  databaseURL: 'https://booklibrary-15d75.firebaseio.com',
  projectId: 'booklibrary-15d75',
  storageBucket: 'booklibrary-15d75.appspot.com',
  messagingSenderId: '90701882431',
  appId: '1:90701882431:web:54f8506a2eeb1d1f04848a',
  measurementId: 'G-4LS4FC8JLD',
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

//Using firestore
export const db = firebase.firestore();
//Update firestore settings
//db.settings({ timestampsInSnapshots: true }); No longer required

export default firebase;
