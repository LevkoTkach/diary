// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtayfYgjQtdpmXstyxqZk7HvNAe_7wz1c",
  authDomain: "diary-spoco.firebaseapp.com",
  projectId: "diary-spoco",
  storageBucket: "diary-spoco.appspot.com",
  messagingSenderId: "160415141628",
  appId: "1:160415141628:web:927657fde96778b5639179"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const provider = new GoogleAuthProvider();

const auth = getAuth();

export async function googleLogin() {
  const res = await signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      console.log(user, token);
      return true;
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;      
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ... 
      console.log(errorCode, errorMessage, email, credential);
      return false;
    });
  return res;
}

