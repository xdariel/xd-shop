import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDWFgIwNMsOQqZG3vdxUoQp-NwbYHZiBFQ",
  authDomain: "xdariel-87.firebaseapp.com",
  databaseURL: "https://xdariel-87.firebaseio.com",
  projectId: "xdariel-87",
  storageBucket: "xdariel-87.appspot.com",
  messagingSenderId: "619214838529",
  appId: "1:619214838529:web:f33ea92f73663f46495900",
  measurementId: "G-JC0BDTY8H9"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
