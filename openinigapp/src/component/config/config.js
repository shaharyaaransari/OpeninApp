import { initializeApp } from "firebase/app";

import {getAuth,GoogleAuthProvider} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCPflff8CnVqOtNbGTv8YLOCTljYteEQ3s",
  authDomain: "fir-16988.firebaseapp.com",
  projectId: "fir-16988",
  storageBucket: "fir-16988.appspot.com",
  messagingSenderId: "883154703788",
  appId: "1:883154703788:web:eadfc13a14bc4998a49609",
  measurementId: "G-LFND2M4QRH"
};




  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)
  const provider = new GoogleAuthProvider();
  export {auth,provider};