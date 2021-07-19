import firebase from "firebase/app";
import 'firebase/firestore';

export const firebaseConfig = {
    apiKey: "AIzaSyDpK4V7GxxCl4TP16a201mmiyRfdz45ct0",
    authDomain: "react-backend-36309.firebaseapp.com",
    databaseURL: "https://react-backend-36309-default-rtdb.firebaseio.com",
    projectId: "react-backend-36309",
    storageBucket: "react-backend-36309.appspot.com",
    messagingSenderId: "740431498694",
    appId: "1:740431498694:web:a6439361ec123aa100f6c7"
    }

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();




