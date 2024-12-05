// other imports
import withFirebaseAuth from 'react-with-firebase-auth';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAajkhFYTBiGyxAgGCdm2Gl50ZW2xaNtL0",
  authDomain: "trackaholics-b393f.firebaseapp.com",
  projectId: "trackaholics-b393f",
  storageBucket: "trackaholics-b393f.firebasestorage.app",
  messagingSenderId: "98064442097",
  appId: "1:98064442097:web:a9cdd494de61791e23bf50",
  measurementId: "G-8TB9TKYH1Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// other Firebase setup stuff

const auth = getAuth(app);
const db = getFirestore(app);

const providers = {
  googleProvider: new GoogleAuthProvider(),
};

const createComponentWithAuth = withFirebaseAuth({
  providers,
  firebaseAppAuth: auth,
});

const signInWithGoogle = () => {
  signInWithPopup(auth, providers.googleProvider);
};

const signOutFirebase = () => {
  signOut(auth);
};

export {
  db,
  auth,
  createComponentWithAuth,
  signInWithGoogle,
  signOutFirebase as signOut,
};