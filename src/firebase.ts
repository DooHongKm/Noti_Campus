import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlygIy60-V2ndw7hv9KcpoVMA04PkjAb0",
  authDomain: "noti-campus.firebaseapp.com",
  projectId: "noti-campus",
  storageBucket: "noti-campus.appspot.com",
  messagingSenderId: "991690089330",
  appId: "1:991690089330:web:c214f1c032452a2f09b3eb",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
