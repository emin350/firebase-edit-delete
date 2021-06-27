import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAu40kl6w9X92Lfdj0524tHiEsot74BCE4",
    authDomain: "kisiler-d4e40.firebaseapp.com",
    projectId: "kisiler-d4e40",
    storageBucket: "kisiler-d4e40.appspot.com",
    messagingSenderId: "166472059649",
    appId: "1:166472059649:web:92bc3401db01f1f9642900"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export default db;
  
  export{auth,provider};