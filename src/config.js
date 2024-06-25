import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCBoXv9DNPMpPjIK9ScvfDECoLToB5i48s",
    authDomain: "nail-app-65f9b.firebaseapp.com",
    projectId: "nail-app-65f9b",
    storageBucket: "nail-app-65f9b.appspot.com",
    messagingSenderId: "25802082293",
    appId: "1:25802082293:web:11a977a4bee75909d282bc",
    measurementId: "G-N587Z6N9EY",
};
 
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;