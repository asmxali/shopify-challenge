import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDRz_2Y3Rjv7SF1sNJk_Abkl-8YWOCP7kU",
  authDomain: "shopify-challenge-eaf9e.firebaseapp.com",
  projectId: "shopify-challenge-eaf9e",
  storageBucket: "shopify-challenge-eaf9e.appspot.com",
  messagingSenderId: "994388633827",
  appId: "1:994388633827:web:151867a18094c71f887dd6",
  measurementId: "G-BXGXED9V6E",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
