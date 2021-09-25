import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBzZE0ASeOQIRV0CUcmXl9aLqS_cN8Jxd0',
  authDomain: 'channels-chat-app.firebaseapp.com',
  projectId: 'channels-chat-app',
  storageBucket: 'channels-chat-app.appspot.com',
  messagingSenderId: '552947771232',
  appId: '1:552947771232:web:ebeef317beba63ad78e005',
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
