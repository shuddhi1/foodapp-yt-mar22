import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDBhCeo3AnoM_mHiyukda0rFqGJp637gGQ",
  authDomain: "tiffin2go-83f7f.firebaseapp.com",
  databaseURL: "https://tiffin2go-83f7f-default-rtdb.firebaseio.com",
  projectId: "tiffin2go-83f7f",
  storageBucket: "tiffin2go-83f7f.appspot.com",
  messagingSenderId: "463640088625",
  appId: "1:463640088625:web:5db9b7415fcae0b155c510"
};


const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
