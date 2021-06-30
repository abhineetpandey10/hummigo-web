import firebase from '@firebase/app';
import "@firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDsJFj_UI9yHbhByo7ZUrWoQNZxzQLIPVI",
    authDomain: "hummigo-393f5.firebaseapp.com",
    databaseURL: "https://hummigo-393f5-default-rtdb.firebaseio.com",
    projectId: "hummigo-393f5",
    storageBucket: "hummigo-393f5.appspot.com",
    messagingSenderId: "1042772051232",
    appId: "1:1042772051232:web:8efee2f993a64c7a4a0345",
    //measurementId: "G-Q7PC5W5GTQ"
};

firebase.initializeApp(firebaseConfig);

export default firebase;