import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDdtcsWHkY02kjCf8Uz7-V1q9lE53A1Xog",
  authDomain: "blog-react-training.firebaseapp.com",
  projectId: "blog-react-training",
  storageBucket: "blog-react-training.appspot.com",
  messagingSenderId: "948290092944",
  appId: "1:948290092944:web:8f71e9270d94cf45f1bd15"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)

export { auth, provider, db }