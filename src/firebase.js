import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBMpw5phqvPHyr5VK2ESxRGJ_iBS-h356s",
    authDomain: "clone-f3a06.firebaseapp.com",
    projectId: "clone-f3a06",
    storageBucket: "clone-f3a06.appspot.com",
    messagingSenderId: "125134277793",
    appId: "1:125134277793:web:479a7aa1ba0c0f768234e0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };