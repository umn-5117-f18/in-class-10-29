import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBF5GiSgF0XhBgg_K58SWQ-wWOJ752hURM",
  authDomain: "test01-5117.firebaseapp.com",
  databaseURL: "https://test01-5117.firebaseio.com",
  projectId: "test01-5117",
  storageBucket: "test01-5117.appspot.com",
  messagingSenderId: "231246872795"
};
firebase.initializeApp(config);

const db = firebase.firestore();

const settings = { timestampsInSnapshots: true };
db.settings(settings);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
