import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyBphjJy2mHJv9FipB-gTjkCiIkU41EfFoc",
  authDomain: "chatapp-beta1.firebaseapp.com",
  projectId: "chatapp-beta1",
  storageBucket: "chatapp-beta1.appspot.com",
  messagingSenderId: "35057971230",
  appId: "1:35057971230:web:1a518a488bf5ff69fdfe0f",
  measurementId: "G-J75HEBP1GC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
