import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDjy0IeEzgAw1mzwsbpZbYy878ZxITPmKg",
  authDomain: "linkedin-1a6c7.firebaseapp.com",
  projectId: "linkedin-1a6c7",
  storageBucket: "linkedin-1a6c7.appspot.com",
  messagingSenderId: "104859284819",
  appId: "1:104859284819:web:cc9cad87a86578c4769da6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };