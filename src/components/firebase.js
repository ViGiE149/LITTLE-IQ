import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";
//import { getAuth } from 'firebase/auth';
import { doc,getFirestore, deleteDoc, query, where,collection ,getDocs} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA5-g-ssL5hVEANOI_S3fwsRT13F62_qQo",
  authDomain: "littleiqs.firebaseapp.com",
  projectId: "littleiqs",
  storageBucket: "littleiqs.appspot.com",
  messagingSenderId: "474647715572",
  appId: "1:474647715572:web:03fc91849045287ce588a1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);


export  { storage, db };

//npm install firebase
//npm install react-firebase-hooks
//npm install @firebase/storage

