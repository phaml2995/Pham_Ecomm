import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	
    apiKey: "AIzaSyBqS3Krwm7v8xskNzwbrlyHiXE8zSsLiFw",
    authDomain: "e-comme-db.firebaseapp.com",
    databaseURL: "https://e-comme-db.firebaseio.com",
    projectId: "e-comme-db",
    storageBucket: "e-comme-db.appspot.com",
    messagingSenderId: "71321464623",
    appId: "1:71321464623:web:dbf7bb0c568a598bc0fbda",
    measurementId: "G-9WDDE9KQ2R"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle =  () => auth.signInWithPopup(provider);

  export default firebase;
