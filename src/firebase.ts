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
  const res = await signInWithPopup(auth, provider)
    .then((result) => {
      uId = result.user.uid;
      console.log(uId);
      return uId;
    }).catch((error) => {
      console.log('Authorisation fail', error);
      return false;
    });
  return res;
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
  await setDoc(colectionUsrerDoc, noteData, { merge: true })
    .then((result) => {
      console.log('was save into data base');
    }).catch((error) => {
      console.log(`I got an save error ${error}`);
    })
}

export async function getUserNotes() {
  const userCollectionSnapshot = await getDocs(collection(db, `${uId}`))
    .then((result) => {
      return result;
    }).catch((error) => {
      console.log('I dont get notes');
    })
  const docData: NoteModel[] = [];
  userCollectionSnapshot!.forEach((doc: any) => {
    docData.push(doc.data())
  });
  console.log('I get notes');
  return docData;
}

export async function deleteNote(noteId: number) {
  await deleteDoc(doc(db, `${uId}`, `${noteId}`))
    .then((result) => {
      console.log('delete sucses');
    }).catch((error) => {
      console.log(`delete error ${error}`);
    })
}

