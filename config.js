import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAUvXHd9sj4GHzDTlVKou2KSOZ40_90-M8",
    authDomain: "bravo-ap.firebaseapp.com",
    projectId: "bravo-ap",
    storageBucket: "bravo-ap.appspot.com",
    messagingSenderId: "287353959271",
    appId: "1:287353959271:web:38303df15f78762c76b5c2",
    measurementId: "G-BGHMQWEZZ3"

};

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export {firebase};