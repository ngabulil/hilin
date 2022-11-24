import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDu_q5RQuEVX8gtka7O2FObj7dRp3H1dQI",
  authDomain: "restapi-health-in.firebaseapp.com",
  databaseURL: "https://restapi-health-in-default-rtdb.firebaseio.com",
  projectId: "restapi-health-in",
  storageBucket: "restapi-health-in.appspot.com",
  messagingSenderId: "252974509969",
  appId: "1:252974509969:web:f478ea737ed7cc63957430"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
