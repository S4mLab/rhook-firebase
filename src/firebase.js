import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyCMSYeceXQwFEAWdA8e_CCtRXo6yttgFxU",
  authDomain: "rhook-base.firebaseapp.com",
  databaseURL: "https://rhook-base.firebaseio.com",
  projectId: "rhook-base",
  storageBucket: "rhook-base.appspot.com",
  messagingSenderId: "1089471330550",
  appId: "1:1089471330550:web:11b4944c87f3085598d4d7",
  measurementId: "G-N001TWL8Q0"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase