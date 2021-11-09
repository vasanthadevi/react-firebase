import "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB0idrXVI1ilZemWjWuE8yb8tSrMHq_zbo",
  authDomain: "todo-react-c0a87.firebaseapp.com",
  projectId: "todo-react-c0a87",
  storageBucket: "todo-react-c0a87.appspot.com",
  messagingSenderId: "55796476853",
  appId: "1:55796476853:web:bbe236e3e0a34e92e287fc"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();



export { db };