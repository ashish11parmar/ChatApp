
import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase import library end


// Firebase config api and keys start

const firebaseConfig = {
  apiKey: "AIzaSyAl5Qn1CPrW50A3HBTLq1DbN25w7D9BM2Q",
  authDomain: "chatapp-10dc8.firebaseapp.com",
  projectId: "chatapp-10dc8",
  storageBucket: "chatapp-10dc8.appspot.com",
  messagingSenderId: "97253407161",
  appId: "1:97253407161:web:5281c0de61547a9ba81e68",
  measurementId: "G-5XVTRB2RBS"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export {auth, provider};