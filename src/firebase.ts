// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, deleteDoc, getDocs, setDoc, doc } from "firebase/firestore";
import { NoteColor, NoteModel } from "./NoteService";

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

let uId: string;

export async function googleLogin() {
  try {
    const result = await signInWithPopup(auth, provider);
    uId = result.user.uid;
    console.log(uId);
    return uId;
  } catch (error) {
    console.log('Authorisation fail', error);
    return false;
  }

}

export async function saveNote(noteId: number, date: string, color: NoteColor, title: string, text: string) {
  if (uId === undefined) throw console.error("UID is undefined you aren't login");
  const colectionUsrerDoc = doc(db, `${uId}`, `${noteId}`);
  const noteData = {
    date: date,
    id: noteId,
    title: title,
    text: text,
    color: color
  }
  try {
    await setDoc(colectionUsrerDoc, noteData, { merge: true });
    console.log('was save into data base');
  } catch (error) {
    console.log(`I got an save error ${error}`);
  }
  
}

export async function getUserNotes() {
  try {
    const userCollectionSnapshot = await getDocs(collection(db, `${uId}`));
    const docData: NoteModel[] = [];
    userCollectionSnapshot!.forEach((doc: any) => {
      docData.push(doc.data());
      console.log('I get notes');
    });
    return docData;
  } catch (error) {
    console.log('I dont get notes');
  }
};


export async function deleteNote(noteId: number) {
  try {
    await deleteDoc(doc(db, `${uId}`, `${noteId}`));
    console.log('delete sucses');
  } catch (error) {
    console.log(`delete error ${error}`);
  }
}
